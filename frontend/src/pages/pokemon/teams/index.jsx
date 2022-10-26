import SideMenu from "../../../components/Menu/SideMenu";
import { useState, useEffect } from "react";
import { colors } from "../variables/typeColors";
/* REDUX IMPORTS */
import { connect } from "react-redux";
import * as teamsActions from "../../../redux/teams/teamsActions";
import { bindActionCreators } from "redux";

/* STYLES */
const styles = {
  th: "py-1 px-1 text-center",
  stat: "py-1 px-1 border-l border-gray-400 text-center text-gray-800 whitespace-nowrap bg-opacity-75",
  type: "col-span-1 my-1 rounded-md px-2 space-x-1 font-bold bg-opacity-75",
  tablet: "tablet:py-2 tablet:px-4",
  laptop: "laptop:py-3 laptop:px-6",
};
/* HELPER COMPONENTS */
const Team = ({team}) => {
    return (
        <div className={'flex flex-row bg-purple-400'}>     
                <h1 className={'bg-slate-900'}>Team name: {team.teamName}</h1>
                {team.team.map((pokemon) => <TeamMember member={pokemon} />)}
        </div>
    )
}
const TeamMember = ({member}) => {
    return (
        <div className={'flex flex-col bg-green-300 mx-4'}>
            Pokemon
            <div className={'flex flex-row'}>
                <h4>Name:</h4><p>'{member.name}'</p>
            </div>
            <div className={'flex flex-row'}>
                <h4>Ability:</h4><p>'{member.ability}'</p>
            </div>
            <div className={'flex flex-row'}>
                <h4>Nature:</h4><p>'{member.nature}'</p>
            </div>
            <div className={'flex flex-row'}>
                <h4>Item:</h4><p>'{member.item}'</p>
            </div>
            {/* evs */}
            {/* moves */}
            <div className={'flex flex-row'}>
                <h4>Description:</h4><p>'{member.desc}'</p>
            </div>
        </div>
    )
}
/* MAIN COMPONENT */
const PokemonTeams = ({ teams, userId, loading, teamsActions }) => {
    const [error, setError] = useState(null);
    useEffect(() => {
    }, [teams]);
    
    const addTeamHandler = () => {
        return teamsActions.addPokemonTeam(userId) // input userId
    }
        
    return (
        <div className="flex">
        <div id="side-menu" className="tablet:h-screen w-1/5">
            <SideMenu />
        </div>
        {loading ? (
            <>Loading...</>
        ) : (
            <div className="w-4/5 flex flex-col bg-slate-500">
            <button className={'bg-gray-500'}
                onClick={() => addTeamHandler()}
            >Add Team</button>
            {teams.map((team) => {
                return(
                    <>
                        <Team team={team} />
                    </>
                )
            })}
            </div>
        )}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
      teams: state.user.pokemonTeams,
      userId: state.user.id,
      loading: state.apiCallsInProgress > 0,
    };
  },
  mapDispatchToProps = (dispatch) => {
    return {
      teamsActions: bindActionCreators(teamsActions, dispatch),
    };
  };
export default connect(mapStateToProps, mapDispatchToProps)(PokemonTeams);

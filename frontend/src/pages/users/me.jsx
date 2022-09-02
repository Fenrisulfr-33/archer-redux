import { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const Me = ({ user, loading }) => {
    const [error, setError] = useState(null);
    // Add State to determine what generation this person wants on screen
    // inital request to the server should be the param sword and shield but then can be changed
    // useEffect(() => {
    //     try {
    //         isReady ? loadPokemon(`${query.id}`, `${query.game}`) : null;
    //     } catch (error) {
    //         setError(error);
    //     }
    // }, [isReady, query.id, query.game]);
    return (
        <div className='text-white flex flex-col justify-center items-center space-y-2'>
            <h1>{user.username}</h1>
            <div>
                <h2>Pokemon Teams</h2>
                
            </div>
        </div >
    )
}
// Redux connections
const mapStateToProps = (state) => {
    return {
        user: state.user,
        loading: state.apiCallsInProgress > 0,
    }
}, mapDispatchToProps = (dispatch) => {
        return {
            // loadPokemon: bindActionCreators(loadPokemon, dispatch)
        };
    }
export default connect(mapStateToProps, mapDispatchToProps)(Me);
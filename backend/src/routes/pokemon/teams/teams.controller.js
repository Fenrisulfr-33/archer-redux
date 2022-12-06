const asyncHandler = require('express-async-handler'); // This lets use use try catch without always have to catch an error
const Users = require('../../../models/usersModel');
const PokemonTeam = require('../../../models/pokeTeamModel');
const PokemonTeamMember = require('../../../models/pokemonTeamMemberModel');
const National = require('../../../models/nationalModel');

/* ------- Middleware Functions -------- */

/**
 * Verifies user exsists in the database
 */
const checkUser = asyncHandler(async (request, response, next) => {
    const { userId } = request.body.data;
    const foundUser = await Users.findOne({ userId });
    if (foundUser) {
        response.locals.foundUser = foundUser;
        return next();
    } else {
        throw new Error('User does not exsist');
    }
});
/**
 * Verifies the pokemon exsists by name and store its data in local storage
 */
 const pokemonChecker = asyncHandler(async (request, response, next) => {
    const {newValues:{name}} = request.body.data;
    const pokemon = await National.find({ "name.english": name }).exec();
    if (pokemon){
        console.log(pokemon.name);
        response.status(201).json(pokemon);
        response.locals.pokemon = pokemon;
        return next();
    } else {
        throw new Error('Pokemon does not exsist');
    }
});
/**
 * Verifies the ev spread cannot be incorrect
 */
const evChecker = asyncHandler(async (request, response, next) => {
    const {newValues:{evs:{hp,atk,def,spatk,spdef,spd}}} = request.body.data;
    if (hp+atk+def+spatk+spdef+spd > 510){
        throw new Error('Ev values added up are over 510');
    } else {
        return next();
    }
});
/**
 * Verifies the moves can be learned by this pokemon by generation
 */
 const moveChecker = asyncHandler(async (request, response, next) => {
    const {newValues:{moves:{one,two,tre,four}}} = request.body.data;
    // if any moves are the same, throw error
    // if any move isnt within the pokemons move pool, throw an error
});

/* ---------- CRUDL Functions ---------- */

/**
 *  Creates a new competitive build for the Sword and Shield Competitive Database
 * 
 * @returns {JSON}
 *  The newly create competitive build
 */
 const addTeam = asyncHandler(async (request, response) => {
    const { foundUser } = response.locals;
    const newPokemonData = {
        name: '',
        ability: '',
        nature: '',
        item: '',
        evs: {
            hp: 0,
            atk: 0,
            def: 0,
            spatk: 0,
            spdef: 0,
            spd: 0
        },
        moves: {
            one: '',
            two: '',
            tre: '',
            four: ''
        },
        desc: ''
    }
    const newPokemonTeam = new PokemonTeam({
        teamName: '',
        team: [
            new PokemonTeamMember({...newPokemonData}),
            new PokemonTeamMember({...newPokemonData}),
            new PokemonTeamMember({...newPokemonData}),
            new PokemonTeamMember({...newPokemonData}),
            new PokemonTeamMember({...newPokemonData}),
            new PokemonTeamMember({...newPokemonData})
        ]
    });
    foundUser.pokemonTeams.push(newPokemonTeam);
    foundUser.save();
    response.status(201).json(newPokemonTeam);
});

const updateTeam = asyncHandler(async (request, response) => {
    const { teamId, key, newValues } = request.body.data;
    const { 
        evs: { hp, atk, def, spatk, spdef, spd },
        moves: { one, two, tre, four },
        name,
        ability,
        nature,
        item,
        desc,
    } = newValues;
    const { foundUser } = response.locals;
    foundUser.pokemonTeams.find((team) => {
        if (`${team._id}` === teamId){
            team[`${key}`] = {
                evs: { hp, atk, def, spatk, spdef, spd },
                moves: { one, two, tre, four, },
                name,
                ability,
                nature,
                item,
                desc,
            };
            foundUser.save();
            response.status(201).json(foundUser);
        }
    });
})

 const deleteTeam = asyncHandler(async (request, response) => {
    const { teamId } = request.body.data;
    const { foundUser } = response.locals;
    console.log('teams', foundUser.pokemonTeams);
    const team = await user.pokemonTeams.id(teamId);
    console.log('team', team);
    await team.remove();
    let finalResult = await user.save()
    console.log(finalResult)
});

module.exports = {
    create: [checkUser, addTeam],
    read: [],
    update: [pokemonChecker, checkUser, evChecker, updateTeam],
    delete: [checkUser, deleteTeam],
    list: []
}
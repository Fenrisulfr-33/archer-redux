const asyncHandler = require('express-async-handler'); // This lets use use try catch without always have to catch an error
const SwSh = require('../../../models/swshCompModel');
const National = require('../../../models/nationalModel');
const Users = require('../../../models/usersModel');
/* ------- Middleware Functions -------- */

/* ---------- CRUDL Functions ---------- */

/**
 *  Creates a new competitive build for the Sword and Shield Competitive Database
 * 
 * @returns {JSON}
 *  The newly create competitive build
 */
 const createComp = asyncHandler(async (request, response) => {
    if (!request.body.data) {
        response.status(400)
        throw new Error('Please enter a data field')
    }
    const { name, ability, moveOne, moveTwo, moveThree, moveFour, item, nature, hpEV, atkEV, defEV, spAtkEV, spDefEV, spdEV, briefDesc } = request.body.data;
    const newComp = await SwSh.create({
        name,
        ability,
        moveOne,
        moveTwo,
        moveThree,
        moveFour,
        item,
        nature,
        hpEV,
        atkEV,
        defEV,
        spAtkEV,
        spDefEV,
        spdEV,
        briefDesc,
        user: request.user.id
    });
    /* {
        "data": {
            "name": "Toxtricity",
            "abilitiy": "Punk Rock",
            "moveOne": "Boomburst",
            "moveTwo": "Overdrive",
            "moveThree": "Slude Bomb",
            "moveFour": "Volt Switch",
            "item": "Throat Spray",
            "nature": "Modest",
            "hpEV": 0,
            "atkEV": 0,
            "defEV": 0,
            "spAtkEV": 252,
            "spDefEV": 4,
            "spdEV": 252,
            "briefDesc": "He was my favorite"
        }
    } */
    
    // Middleware for EV checker, still a work in progress, eventuallty move into middle wear for all pokemon routes.
    if (hpEV + atkEV + defEV + spAtkEV + spDefEV + spdEV > 510){
        response.status(400);
        throw new Error(`Total Ev's must equal 510 or less`);
    } else if (hpEV < 0 || hpEV > 252){
        response.status(400);
        throw new Error('Pokemon HP EV is invalid');
    } else if (atkDef < 0 || atkDef > 252){
        response.status(400);
        throw new Error('Pokemon Attack EV is invalid');
    } else if (DefAtk < 0 || DefAtk > 252){
        response.status(400);
        throw new Error('Pokemon Defense EV is invalid');
    } else if (SpAtkEV < 0 || SpAtkEV > 252){
        response.status(400);
        throw new Error('Pokemon Special Attack EV is invalid');
    } else if (SpDefEV < 0 || SpDefEV > 252){
        response.status(400);
        throw new Error('Pokemon Special Defense EV is invalid');
    } else if (SpdEV < 0 || SpdEV > 252){
        response.status(400);
        throw new Error('Pokemon Speed EV is invalid');
    }

    response.status(200).json(newComp);
})


/**
 *  Finds a pokemon base upon its swsh Comp id 
 * 
 * @returns {JSON}
 *  all data for a specific Pokemon
 */
const readComp = asyncHandler(async (request, response) => {
    const pokemon = await SwSh.findById(Number(request.params.id));

    if (!pokemon) {
        response.status(400);
        throw new Error('Pokemon number not found.');
    }
    response.status(200).json(pokemon);
})

/**
 *  lists all pokemon in the sword & shield competitive database
 * 
 * @returns {JSON}
 *  The SwSh Competitive Pokemon
 */
const listComp = asyncHandler(async (request, response) => {
    const swsh = await SwSh.find();
    response.status(200).json(swsh);
});

/**
 *  deletes a pokemon from a users comp dashboard
 *  Still working on implmenting
 * @returns {JSON}
 *  The deleted pokemon build
 */
 const deleteComp = asyncHandler(async (request, response) => {
    const swsh = await SwSh.findById(request.params.id);
    
    if (!swsh) {
        response.status(400);
        throw new Error('Comp Pokemon not found');
    }
    await swsh.remove();

    response.status(200).json({ id: request.params.id });
})

module.exports = {
    create: [createComp],
    read: [readComp],
    list: [listComp]
}
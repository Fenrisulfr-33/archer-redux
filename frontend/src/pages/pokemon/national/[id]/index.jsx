// // import MovesListsByType from "./moves/MoveListByType";
// import Image from "next/image";
// import { useState, useEffect } from "react";
// // import GameDropDown from "./GameDropDown";
// import { useRouter } from 'next/router';
// /* REDUX IMPORTS */
// import { connect } from 'react-redux';
// import * as pokemonActions from '../../../redux/pokemon/pokemonActions';
// import { bindActionCreators } from 'redux';

// const NationalInd = ({ pokemon = {}, loadPokemon }) => {
//     const { query, isReady } = useRouter();
//     // Add State to determine what generation this person wants on screen
//     // inital request to the server should be the param sword and shield but then can be changed
//     useEffect(() => {
//         try {
//             if (isReady) {
//                 console.log(query.id)
//                 console.log(typeof(query.id));
//                 loadPokemon(`${query.id}`);
//             }
//         } catch (error) {
//             setError(error);
//         }
//     }, [isReady]);

//     /*
//     const router = useRouter();

// useEffect(() => {
//   if (router.asPath !== router.route) {
//     // router.query.lang is defined
//   }
// }, [router])

//     || 

//     const router = useRouter();
// useEffect(()=>{
//     if(!router.isReady) return;

//     // codes using router.query

// }, [router.isReady]);

//     */

// //     const router = useRouter();

// // useEffect(() => {
// //   if (router.asPath !== router.route) {
// //     // router.query.lang is defined
// //   }
// // }, [router])

//     if (!pokemon) {
//         return null
//     } else {
//         return (
//         <div className='grid grid-cols-1 tablet:grid-cols-2  w-11/12 desktop:w-4/5 m-auto font-mono text-center text-stone-200' >
//             <h1 className='col-span-1 tablet:col-span-2 text-5xl text-center pb-10 text-stone-200'>{pokemon?.name?.english}</h1>

//             < h1 > {'sword-shield'}</h1>
//             {/* <GameDropDown /> */}

//             < div className='col-span-1 grid grid-cols-1 desktop:grid-cols-2 font-mono text-stone-200 text-center' >
//                 <Image
//                     src={`/hires/${pokemon?._id}.png`}
//                     alt={`${pokemon?.name}`}
//                     height={100}
//                     width={100}
//                     layout='intrinsic'
//                     className='col-span-1'
//                 />
//                 <div className='col-span-1 text-left align-middle'>
//                     <div>
//                         <h1 className='text-2xl font-mono font-extrabold'>Pokedex Information</h1>
//                         <h4>{`National Dex Number: ${pokemon?._id}`}</h4>
//                         <span className='border-2 border-gray-400'>
//                             Pokemon Type:
//                             {/* <Image
//                                 src={`/types/${pokemon?.type[0]}.svg`}
//                                 alt={`${pokemon?.type[0]}`}
//                                 height={40}
//                                 width={40}
//                             /> */}
//                             {/* {pokemon?.type[1] &&
//                                 <Image
//                                     src={`/types/${pokemon?.type[1]}.svg`}
//                                     alt={`${pokemon?.type[1]}`}
//                                     height={40}
//                                     width={40}
//                                 />} */}
//                         </span>
//                         <h4>{`Pokemon Species: ${pokemon?.species}`}</h4>
//                         <h4>{`Pokemon Height Meters: ${pokemon?.height}`}</h4>
//                         <h4>{`Pokemon Weight: ${pokemon?.weight}`}</h4>
//                         <br />
//                         <div id='abilities' className=''>
//                             {/* <p>{`Ability 1: ${pokemon?.abilities[1]}`}</p>
//                             {pokemon?.abilities[2] && <p>{`Ability 2: ${pokemon?.abilities[2]}`}</p>}
//                             {pokemon?.abilities['h'] && <p>{`Hidden Ability: ${pokemon?.abilities['h']}`}</p>} */}
//                         </div>
//                         <br />
//                         {/* <h4>{`Pokemon Egg Groups: ${pokemon?.eggGroups[0]}, ${pokemon?.eggGroups[1]}`}</h4>
//                         <h4>{`Gender Ratio: Male ${pokemon?.genderRatio.split(':')[0]}% Female ${pokemon?.genderRatio.split(':')[1]}%`}</h4> */}
//                         <div>
//                             <h4>Base Stats:</h4>
//                             <p>{`HP: ${pokemon?.baseStats?.hp}`}</p>
//                             <p>{`Atk: ${pokemon?.baseStats?.atk}`}</p>
//                             <p>{`Def: ${pokemon?.baseStats?.def}`}</p>
//                             <p>{`SpAtk: ${pokemon?.baseStats?.spatk}`}</p>
//                             <p>{`SpDef: ${pokemon?.baseStats?.spdef}`}</p>
//                             <p>{`Spd: ${pokemon?.baseStats?.spd}`}</p>
//                         </div>
//                     </div>
//                 </div>
//             </div >
//             {/* <MovesListsByType moves={pokemon.moves}/>                     */}
//         </div >
//     )
//     }
// }

// // export const getServerSideProps = async (context) => {
// //     console.log(context);
// //     const response = await fetch(`${API_BASE_URL}/pokemon/national/${context.params.id}`);
// //     const pokemon = await response.json();
// //     return { props: { pokemon } }
// // }

// const mapStateToProps = (state) => {
//     const { pokemon } = state;
//     return {
//         pokemon: pokemon.pokemon,
//     }
// },
// mapDispatchToProps = (dispatch) => {
//     return {
//         loadPokemon: bindActionCreators(pokemonActions.loadPokemon, dispatch)
//     };
// }
// export default connect(mapStateToProps, mapDispatchToProps)(NationalInd);
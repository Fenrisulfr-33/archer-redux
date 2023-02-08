import Image from "next/image"

const InfoRow = ({ title, info }) => (
    <div className='flex flex-row justify-between text-gray-400'>
        <h4 className='font-bold bg-gray-700 rounded-md px-1 text-purp-100 border border-gray-100'>{title}</h4>
        <p classNam={''}>{info}</p>
    </div>
);

export default function PokemonBuild({ 
    id,
    name,
    ability,
    type,
    nature,
    heldItem,
    terraType,
    role,
    notes,
    moves = [],
    otherMoves = [],
    evs,
}){
    return (
        <div className={'flex flex-col w-full text-xs text-gray-200 bg-gray-700 rounded-xl border-2 border-purp-100'}>
            <div className={'m-2 bg-gray-600 rounded-lg border border-purp-100'}>
                <div className={'flex flex-col space-y-1 p-2 text-purp-100'}>
                    <h1 className={' text-lg font-extrabold'}>
                        {name}
                    </h1>
                    <h3 className={'text-md italic'}>
                        {role}
                    </h3>
                </div>

            </div>
            <div className={'flex flex-row'}>
                <div className={'flex w-1/2 m-2 justify-center items-center'}>
                    <Image
                        src={`/hires/${id}.png`}
                        alt={name}
                        height={150}
                        width={150}
                        className='p-2 bg-gray-600 rounded-lg border border-purp-100'
                    />
                </div>
                <div className={'flex flex-col m-2 w-1/2 bg-gray-600 rounded-lg border border-purp-100'}>
                    <div className={'p-2 space-y-1'}>
                        <InfoRow title={'Type'} info={type} />
                        <InfoRow title={'Ability'} info={ability} />
                        <InfoRow title={'Nature'} info={nature} />
                        <InfoRow title={'Terra'} info={terraType} />
                        <InfoRow title={'Item'} info={heldItem} />
                    </div>
                </div>
            </div>
            <div className={'flex flex-row'}>
                <div className={'w-1/2 m-2 bg-gray-600 rounded-lg border border-purp-100'}>
                    <div className={'flex flex-col p-2 space-y-1 justify-center'}>
                        <h2 className={'underline text-purp-100'}>Recommended Moves</h2>
                        {moves.map((move, index) => <button key={index} className={`${move.type} text-black border font-bold border-gray-800 w-full rounded-lg px-1`}>{move.name}</button>)}
                    </div>
                </div>
                <div className={'w-1/2 m-2 bg-gray-600 rounded-lg border border-purp-100'}>
                    <div className={'flex flex-col p-2 space-y-1 justify-center'}>
                        <h2 className={'underline text-purp-100'}>Other Moves</h2>
                        {otherMoves.map((move, index) => <button key={index} className={`${move.type} text-black border font-bold border-gray-80 w-full rounded-lg px-1`}>{move.name}</button>)}
                    </div>
                </div>
            </div>
            <div className={'flex flex-col m-2 bg-gray-600 rounded-lg border border-purp-100'}>
                <div className={'p-2 space-y-1'}>
                    <h2 className={'underline text-purp-100'}>Ev Spread</h2>
                    <div className={'justify-center space-x-2 flex flex-row'}>
                        {evs.map((ev) => <span>{ev.name}:{ev.value}</span>)}
                    </div>
                </div>
            </div>
            <div className={'flex flex-col m-2 bg-gray-600 rounded-lg border border-purp-100'}>
                <div className={'p-2 space-y-1'}>
                    <h2 className={'underline text-purp-100'}>Notes</h2>
                    <p>{notes}</p>
                </div>
            </div>
        </div>
    )
}
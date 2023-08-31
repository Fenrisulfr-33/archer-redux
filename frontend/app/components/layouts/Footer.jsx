import Image from 'next/image';

export default function Header() {
    return (
        <div className="flex flex-col phone:flex-row justify-between items-center flex-nowrap">
            <Image 
                src={`/sprites/gen_9/94.png`}
                alt='Archer'
                height={100}
                width={100}
                className={`items-center`}
            />
            <div className="p-5 text-purple-200 font-mono font-extrabold text-[min(5vw,60px)]">Gengar's Haunted Mansion</div>
        </div>
    )
}
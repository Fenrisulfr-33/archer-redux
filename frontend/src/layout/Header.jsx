import NavBar from '@/components/navigation/NavBar'

export default function Header() {

    return (
        <div className="flex flex-row justify-between">
            <div className="p-5 text-purple-200 font-mono font-extrabold text-[min(5vw,60px)]">
                Gengar's Haunted Mansion
            </div>
            <NavBar />
        </div>
    )
}
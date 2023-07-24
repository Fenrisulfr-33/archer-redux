import NavBar from '../components/Navbar/NavBar'

export default function Header() {

    return (
        <div className={`flex flex-col phone:flex-row justify-between items-center h-28 bg-gray-900`}>
            <div className={`p-5 text-purple-200 font-mono font-extrabold text-[min(5vw,60px)]`}>
                Gengar's Haunted Mansion
            </div>
            <NavBar />
        </div>
    )
}
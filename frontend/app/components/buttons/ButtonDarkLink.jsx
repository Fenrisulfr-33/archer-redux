import Link from "next/link"

export default function ButtonDarkLink({ text, route }){
    return (
        <div className="flex justify-center">
            <Link href={route} passHref>
                <button className="py-2 px-4 font-mono font-bold text-purple-100 bg-gray-900 rounded lg transition-all duration-200 ease-linear cursor-pointer hover:bg-purple-600 hover:text-gray-100 hover:rounded-xl">
                    {text}
                </button>
            </Link>
        </div>
    )
}
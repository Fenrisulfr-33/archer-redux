import Link from "next/link";

export const NavBarIcon = ({ icon, text, route }) => {
  return (
    <Link href={route} passHref>
      <button className="relative flex items-center justify-center h-12 w-12 m-0 text-purple-200 bg-gray-800 rounded-3xl transition-all duration-200 ease-linear cursor-pointer group hover:bg-purple-600 hover:text-white hover:rounded-2xl">
        {icon}
        <span className="absolute  w-auto p-2 m-2 min-w-max -bottom-12 rounded-md shadow-md text-gray-200 bg-gray-900 text-xs font-bold transition-all duration-100 scale-0 origin-bottom group-hover:scale-100">
          {text}
        </span>
      </button>
    </Link>
  );
};

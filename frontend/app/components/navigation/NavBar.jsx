import { NavBarIcon } from "./NavBarIcon";
import Link from "next/link";
import { SiHomeadvisor } from "react-icons/si";
import { MdArticle, MdCatchingPokemon } from "react-icons/md";
import { AiTwotoneHome } from "react-icons/ai";
import { BsNewspaper, BsInfoCircleFill } from "react-icons/bs";

export default function NavBar() {
  const tabBarTitle = "text-sm";
  const tabBarButton =
    "flex flex-col rounded border border-gray-900 p-1 items-center text-purple-100 bg-gray-800";

  return (
    <div>
      <div className="mx-2 tablet:hidden">
        <div className="font-mono">
          <div
            className={
              "flex flex-row justify-stretch space-x-1 bg-gray-600 rounded border-2 p-1 border-purple-100"
            }
          >
            <button className="w-1/3">
              <Link href={"/"} passHref>
                <div className={tabBarButton}>
                  <AiTwotoneHome size="25" />
                  <div className={tabBarTitle}>Home</div>
                </div>
              </Link>
            </button>
            <button className="w-1/3">
              <Link href={"/pokemon"} passHref>
                <div className={tabBarButton}>
                  <MdCatchingPokemon size="25" />
                  <div className={tabBarTitle}>Pokemon</div>
                </div>
              </Link>
            </button>
            <button className="w-1/3">
              <Link href={"/articles"} passHref>
                <div className={tabBarButton}>
                  <BsNewspaper size="25" />
                  <div className={tabBarTitle}>Articles</div>
                </div>
              </Link>
            </button>
          </div>
        </div>
      </div>
      <div className="hidden tablet:flex items-center justify-end space-x-4 p-5">
        <NavBarIcon
          icon={<SiHomeadvisor size="28" />}
          text={"Home"}
          route={"/"}
        />
        <NavBarIcon
          icon={<MdCatchingPokemon size="28" />}
          text={"Pokemon"}
          route={"/pokemon"}
        />
        <NavBarIcon
          icon={<MdArticle size="28" />}
          text={"Articles"}
          route={"/articles"}
        />
        <NavBarIcon
          icon={<BsInfoCircleFill size="28" />}
          text={"About"}
          route={"/about"}
        />
      </div>
    </div>
  );
}

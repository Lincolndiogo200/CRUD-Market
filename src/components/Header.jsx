import { useContext } from "react";
import { MdOutlineLocalMall } from "react-icons/md";
import { Link } from "react-router-dom";
import { DataContext } from "../contexts/data-context";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

const navigationAdmin = [
  {
    title: "Home",
    href: "/home/admin",
  },
  {
    title: "Products",
    href: "/products/admin",
  },
  {
    title: "Users",
    href: "/users/admin",
  },
];

const Header = () => {
  const { userAuthenticated } = useContext(DataContext);

  return (
    <div className="flex justify-between items-center p-4 border-b border-solid">
      <div className="flex items-center gap-2">
        <MdOutlineLocalMall size={70} />
        <h1 className="text-2xl font-semibold">SuperMarket</h1>
      </div>
      <nav className="flex items-center gap-3">
        {userAuthenticated?.isAdmin &&
          navigationAdmin.map((item, index) => (
            <Link key={index} to={item.href}>
              <button className="text-base font-medium p-2 hover:bg-zinc-200 rounded-md">
                {item.title}
              </button>
            </Link>
          ))}

        <div className="flex gap-2 items-center">
          <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
              <div className="flex items-center gap-2">
                <div className="h-12 w-12 rounded-full bg-red-300 flex items-center justify-center">
                  {userAuthenticated?.name.slice(0, 2).toUpperCase()}
                </div>
              </div>
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
              <DropdownMenu.Content className="shadow-xl p-4 w-28 z-10 bg-white rounded-md flex">
                <Link
                  to="/"
                  className="text-sm cursor-pointer hover:bg-zinc-100 w-full p-2 rounded-md"
                >
                  Sair
                </Link>
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>
        </div>
      </nav>
    </div>
  );
};

export default Header;

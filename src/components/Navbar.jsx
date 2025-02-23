import React from "react";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import Breadcrumbs from "./Breadcrumbs";
import {
  LuBell,
  LuChevronDown,
  LuCircleHelp,
  LuSettings,
} from "react-icons/lu";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = ({ toggleSidebar }) => {
  return (
    <header className="flex flex-col justify-between bg-white">
      <div className="flex items-center justify-between w-full px-4 py-2 border-b">
        <div className="flex items-center">
          <button
            className="p-1 mr-3 border-none rounded-md outline-none text-primary hover:bg-gray-100 md:hidden"
            onClick={toggleSidebar}
          >
            <HiOutlineMenuAlt2 className="text-xl" />
          </button>
          <h2 className="hidden text-primary md:block">Crew Profile</h2>
        </div>

        <div className="flex items-center space-x-2">
          <button className="p-1.5 bg-transparent transition duration-300 ease-out border-none rounded-full hover:bg-primary hover:text-white">
            <LuCircleHelp className="text-md " />
          </button>
          <button className="p-1.5 bg-transparent transition duration-300 ease-out border-none rounded-full hover:bg-primary hover:text-white">
            <LuBell className="text-md " />
          </button>
          <button className="p-1.5 bg-transparent transition duration-300 ease-out border-none rounded-full hover:bg-primary hover:text-white">
            <LuSettings className="text-md " />
          </button>
          <ProfileDropdown />
        </div>
      </div>
      <div className="flex items-center px-4 py-2 border-b">
        <Breadcrumbs />
      </div>
    </header>
  );
};

const ProfileDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex items-center">
          <div className="flex items-center justify-center size-8 text-white bg-[#aa47bc] rounded-full">
            A
          </div>
          <LuChevronDown className="text-base ml-1.5 text-gray-500" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            Profile
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Billing
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Settings
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>Email</DropdownMenuItem>
                <DropdownMenuItem>Message</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>More...</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuItem>
            New Team
            <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          Log out
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Navbar;

import React from "react";
import { RiHome6Line } from "react-icons/ri";
import {
  LuChevronsRight,
  LuCompass,
  LuLayoutDashboard,
  LuPower,
  LuStar,
} from "react-icons/lu";
import { Link, useLocation } from "react-router-dom";

const Sidebar = ({ isOpen, toggleSidebar, isMobile }) => {
  const location = useLocation();

  const collapsed = !isOpen;
  const sidebarClasses = isMobile
    ? `fixed z-30 h-full transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`
    : `relative transition-width duration-300 ease-in-out ${
        isOpen ? "w-64" : "w-14"
      }`;

  return (
    <aside
      className={`${sidebarClasses} bg-[#0c121d] text-white flex flex-col`}
    >
      {/* Logo */}
      <div className="flex items-center px-2.5 py-2.5">
        {(isOpen || !isMobile) && (
          <>
            <div className="size-10">
              <img src="logo.png" alt="logo" />
            </div>
            {isOpen && <span className="text-xl font-bold">Logo Name</span>}
            {/* {!isMobile && (
              <button onClick={toggleSidebar} className="p-1 text-white rounded-full hover:bg-slate-700">
                <ChevronRight className={`h-5 w-5 transition-transform ${isOpen ? '' : 'rotate-180'}`} />
              </button>
            )} */}
          </>
        )}
        {/* {isMobile && isOpen && (
          <button onClick={toggleSidebar} className="p-1 ml-auto text-white rounded-full hover:bg-slate-700">
            <X className="w-5 h-5" />
          </button>
        )} */}
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 overflow-y-auto">
        <SidebarItem
          icon={<RiHome6Line className="w-5 h-5" />}
          label="Home"
          collapsed={!isOpen}
          to="/"
          active={location.pathname === "/"}
        />
        <SidebarItem
          icon={<LuStar className="w-5 h-5" />}
          label="Crew Management"
          collapsed={!isOpen}
          to="/crewProfile"
          active={location.pathname === "/crewProfile"}
        />
        <SidebarItem
          icon={<LuLayoutDashboard className="w-5 h-5" />}
          label="Dashboard"
          collapsed={!isOpen}
          to="/dashboard"
          active={location.pathname === "/dashboard"}
        />
        <SidebarItem
          icon={<LuCompass className="w-5 h-5" />}
          label="Documents"
          collapsed={!isOpen}
          to="/documents"
          active={location.pathname === "/documents"}
        />
      </nav>

      {/* Bottom Actions */}
      <div className="">
        <SidebarItem
          icon={<LuChevronsRight className="w-5 h-5" />}
          label="Link name"
          collapsed={!isOpen}
        />
        <SidebarItem
          icon={<LuPower className="w-5 h-5" />}
          label="Logout"
          collapsed={!isOpen}
        />
      </div>
    </aside>
  );
};

const SidebarItem = ({ icon, label, collapsed, active, to }) => {
  return (
    <Link
      to={to}
      className={`flex group ${
        collapsed && "justify-center"
      } items-center px-2.5 py-1.5 cursor-pointer`}
    >
      <div
        className={` rounded-md p-2 w-full flex ${
          active ? "bg-primary" : "hover:bg-slate-800"
        }`}
      >
        <div className="text-slate-300">{icon}</div>
        {!collapsed && <span className="ml-3 text-sm">{label}</span>}
      </div>
    </Link>
  );
};

export default Sidebar;

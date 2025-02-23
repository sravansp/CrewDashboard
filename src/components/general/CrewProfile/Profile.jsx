import React, { useState } from "react";

// data
import { profileData } from "./data";

// Panals
import EmploymentDetailsPanel from "./Panels/EmploymentDetailsPanel";
import DocumentsPanel from "./Panels/DocumentsPanel";
import SeaServicePanel from "./Panels/SeaServicePanel";
import AppraisalsPanel from "./Panels/AppraisalsPanel";
import CommunicationsPanel from "./Panels/CommunicationsPanel";
import OverviewPanel from "./Panels/OverviewPanel";
import CrewDetailsPanel from "./Panels/CrewDetailsPanel";
import BankDetailsPanel from "./Panels/BankDetailsPanel";
import PayrollDetailsPanel from "./Panels/PayrollDetailsPanel";
import AuditLogPanel from "./Panels/AuditLogPanel";

// Icons
import { GrOverview } from "react-icons/gr";
import { RiUser6Line } from "react-icons/ri";
import { HiOutlineChatBubbleLeft } from "react-icons/hi2";
import { LuChevronRight } from "react-icons/lu";
import { LuChevronsLeft } from "react-icons/lu";
import { GrUserPolice } from "react-icons/gr";
import { MdOutlineDirectionsBoat } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { BiUser } from "react-icons/bi";
import { GrUserWorker } from "react-icons/gr";
import { IoDocumentTextOutline } from "react-icons/io5";
import { IoBoatOutline } from "react-icons/io5";
import { RiTrophyLine } from "react-icons/ri";
import { RiBankLine } from "react-icons/ri";
import { PiMoney } from "react-icons/pi";
import { AiOutlineAudit } from "react-icons/ai";


import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Profile = () => {
  const [activeSection, setActiveSection] = useState("communications");
  const [isCollapsed, setIsCollapsed] = useState(false);

  const renderContent = () => {
    switch (activeSection) {
      case "overview":
        return <OverviewPanel />;
      case "crew-details":
        return <CrewDetailsPanel />;
      case "employment-details":
        return <EmploymentDetailsPanel />;
      case "documents":
        return <DocumentsPanel />;
      case "sea-service":
        return <SeaServicePanel />;
      case "communications":
        return <CommunicationsPanel />;
      case "appraisals":
        return <AppraisalsPanel />;
      case "bank-details":
        return <BankDetailsPanel />;
      case "payroll-details":
        return <PayrollDetailsPanel />;
      case "audit-log":
        return <AuditLogPanel />;
      default:
        return <OverviewPanel />;
    }
  };

  const handleSetSection = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="flex flex-col">
      {/* Top row  */}
      <div className="relative flex flex-col w-full p-3 bg-white min-h-40">
        <div className="w-full h-full bg-primary md:px-7">
          <div className="items-center justify-between w-full px-3 py-3 lg:flex md:pl-40 md:pr-3">
            <div className="grid grid-cols-2 gap-4 pb-6 divide-gray-500 lg:space-x-3 md:pb-0 lg:items-center lg:divide-x lg:flex">
              <h2 className="text-lg font-semibold text-white whitespace-nowrap">
                Kenneth Nichols
              </h2>
              <div className="lg:pl-3">
                <div className="bg-[#06497d] w-fit text-white flex items-center gap-1 justify-center px-1.5 py-0.5 rounded">
                  <GrUserPolice className="text-sm" />
                  <p className="text-xs">Chief Enigineer</p>
                </div>
              </div>
              <div className="lg:pl-3">
                <div className="bg-[#ff681d] w-fit text-white flex items-center justify-center px-1.5 py-0.5 rounded">
                  <p className="text-xs">Onboarding</p>
                </div>
              </div>
              <div className="lg:pl-3">
                <div className="border gap-1 w-fit border-white text-white flex items-center justify-center px-1.5 py-0.5 rounded">
                  <MdOutlineDirectionsBoat className="text-sm" />
                  <p className="text-xs">Queen Mary 2</p>
                </div>
              </div>
            </div>
            <div>
            <RxHamburgerMenu className="hidden text-2xl text-white lg:block"/>
            </div>
          </div>
        </div>
        <div className="relative flex-1 w-full h-full md:px-7">
          <div className="relative flex justify-center md:absolute -top-5">
            <Avatar className="border-[6px] border-white size-[105px]">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <div className="grid items-center justify-between h-full grid-cols-2 gap-4 p-3 md:pl-40 md:grid-cols-3 xl:flex">
            {profileData.map((data, i) => (
              <div className="flex flex-col justify-center" key={i}>
                <p className="text-xs text-gray-500 ">{data.label}</p>
                <p className="text-xs font-medium md:text-sm text-primary">
                  {data.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="grid flex-1 h-full grid-cols-12 gap-4 p-4">
        {/* left Column  */}
        <div
          className={`transition-all duration-300 ease-in-out col-span-12 ${
            isCollapsed ? "md:col-span-1" : "md:col-span-3"
          }`}
        >
          <div className="sticky flex flex-col w-full h-auto p-4 overflow-hidden bg-white top-4 rounded-xl">
            <LeftColumnMenu
              activeSection={activeSection}
              onSectionChange={handleSetSection}
            />
            <div className="flex items-center justify-end mt-4">
              <button
                className="bg-[#f0f4f7] border-none rounded outline-none p-1"
                onClick={() => setIsCollapsed(!isCollapsed)}
              >
                <LuChevronsLeft className="text-lg text-primary" />
              </button>
            </div>
          </div>
        </div>
        {/* Right Column */}
        <div
          className={`transition-all duration-300 ease-in-out col-span-12 ${
            isCollapsed ? "md:col-span-11" : "md:col-span-9"
          }`}
        >
          <div className="flex items-center justify-center w-full h-full overflow-hidden bg-white rounded-xl">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

const LeftColumnMenu = ({ activeSection, onSectionChange }) => {
  return (
    <nav className="space-y-2">
      <ListItems
        icon={<GrOverview className="text-xl" />}
        label="Overview"
        id="overview"
        active={activeSection === "overview"}
        onClick={() => onSectionChange("overview")}
      />
      <ListItems
        icon={<BiUser className="text-xl" />}
        label="Crew Details"
        id="crew-details"
        active={activeSection === "crew-details"}
        onClick={() => onSectionChange("crew-details")}
      />

      <ListItems
        icon={<GrUserWorker className="text-xl" />}
        label="Employment Details"
        id="employment-details"
        active={activeSection === "employment-details"}
        onClick={() => onSectionChange("employment-details")}
      />

      <ListItems
        icon={<IoDocumentTextOutline className="text-xl" />}
        label="Documents"
        id="documents"
        active={activeSection === "documents"}
        onClick={() => onSectionChange("documents")}
      />

      <ListItems
        icon={<IoBoatOutline className="text-xl" />}
        label="Sea Service"
        id="sea-service"
        active={activeSection === "sea-service"}
        onClick={() => onSectionChange("sea-service")}
      />

      <ListItems
        icon={<HiOutlineChatBubbleLeft className="text-xl" />}
        label="Communications"
        id="communications"
        active={activeSection === "communications"}
        onClick={() => onSectionChange("communications")}
      />

      <ListItems
        icon={<RiTrophyLine className="text-xl" />}
        label="Appraisals"
        id="appraisals"
        active={activeSection === "appraisals"}
        onClick={() => onSectionChange("appraisals")}
      />

      <ListItems
        icon={<RiBankLine className="text-xl" />}
        label="Bank Details"
        id="bank-details"
        active={activeSection === "bank-details"}
        onClick={() => onSectionChange("bank-details")}
      />

      <ListItems
        icon={<PiMoney className="text-xl" />}
        label="Payroll Details"
        id="payroll-details"
        active={activeSection === "payroll-details"}
        onClick={() => onSectionChange("payroll-details")}
      />

      <ListItems
        icon={<AiOutlineAudit className="text-xl" />}
        label="Audit Log"
        id="audit-log"
        active={activeSection === "audit-log"}
        onClick={() => onSectionChange("audit-log")}
      />
    </nav>
  );
};

const ListItems = ({ icon, label, id, active, onClick }) => {
  return (
    <div
      className={`flex items-center px-3 py-2 overflow-hidden rounded-md cursor-pointer ${
        active ? "bg-blue-50 text-primary" : "hover:bg-gray-50"
      }`}
      onClick={onClick}
    >
      <div className={active ? "text-primary" : "text-[#475467]"}>{icon}</div>
      <span
        className={`ml-3 whitespace-nowrap truncate text-sm ${
          active ? "font-medium" : " text-[#475467]"
        }`}
      >
        {label}
      </span>
      {active && <LuChevronRight className="w-4 h-4 ml-auto text-primary" />}
    </div>
  );
};

export default Profile;

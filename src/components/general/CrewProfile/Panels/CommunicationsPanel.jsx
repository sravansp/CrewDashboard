import React from "react";

import { RiSearch2Line, RiArrowUpDownFill } from "react-icons/ri";
import { LuChevronRight, LuFilter } from "react-icons/lu";
import { RxDotsVertical } from "react-icons/rx";
import { LuPlus } from "react-icons/lu";
import { IoMdLock } from "react-icons/io";
import { PiWarningCircleFill, PiFilePdf, PiFileDoc } from "react-icons/pi";

// data
import { messages } from "../data";

// shadecn components
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const CommunicationsPanel = () => {
  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex flex-col justify-between gap-3 p-4 border-b xl:items-center xl:flex-row">
        <div className="flex flex-col gap-3 xs:items-center xs:flex-row">
          <h1 className="text-lg font-semibold">Communications</h1>
          {/* Search Bar */}
          <div className="flex items-center gap-3">
            <Input type="text" placeholder="Search here" />
            <Button className="bg-[#ff681d] hover:bg-[#ee7234] px-3">
              <RiSearch2Line className="text-xl" />
            </Button>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          {/* Action Buttons */}
          <Button variant="outline" className="px-3">
            <LuFilter className="text-xl" />
          </Button>
          <Select>
            <SelectTrigger className="w-[150px]">
              <div className="flex items-center gap-2">
                <RiArrowUpDownFill className="" />
                <SelectValue placeholder="Sort by" />
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {/* <SelectLabel>Name</SelectLabel> */}
                <SelectItem value="Name A-Z">Name A-Z</SelectItem>
                <SelectItem value="Name Z-A">Name Z-A</SelectItem>
                <SelectItem value="Newest">Newest</SelectItem>
                <SelectItem value="Oldest">Oldest</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Button>
            <LuPlus className="" />
            New
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button variant="outline" className="px-3">
                <RxDotsVertical />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Edit</DropdownMenuItem>
              <DropdownMenuItem>Update</DropdownMenuItem>
              <DropdownMenuItem>Delete</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Messages List */}
      <div className="divide-y">
        {messages.map((message) => (
          <div key={message.id} className="flex flex-col">
            <div className="flex items-start p-4 space-x-2 hover:bg-gray-50">
              <Checkbox className="mt-2" />
              <LuChevronRight className="mt-2 text-xl text-gray-500" />
              <div
                className={`w-10 h-10 rounded-full shrink-0 flex items-center justify-center ${message.backgroundColor}`}
              >
                <span className="text-sm font-medium text-white">
                  {message.initials}
                </span>
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:gap-2 sm:items-center sm:flex-row">
                  <span className="font-medium">{message.author}</span>
                  <span className="text-sm text-gray-500">
                    on {message.timestamp}
                  </span>
                  {message.important && (
                    <div className="bg-[#f5d469] text-xs px-1 w-fit py-0.5 rounded-full flex items-center gap-0.5">
                      <PiWarningCircleFill className="text-sm" />
                      Important
                    </div>
                  )}
                  {message.isPrivate && (
                    <div className="bg-[#f1f9ff] text-xs w-fit leading-none px-1 py-0.5 text-blue-500 rounded-full flex items-center gap-0.5">
                      <IoMdLock className="text-sm" />
                      Private
                    </div>
                  )}
                </div>
                <div className="flex-col hidden sm:flex">
                  {message.title && (
                    <h3 className="my-1 font-medium">{message.title}</h3>
                  )}
                  <p className="mt-1 text-gray-600">{message.content}</p>
                  {message.attachments && (
                    <div className="flex items-center mt-3 space-x-2">
                      {message.attachments.map((attachment, index) => (
                        <div
                          key={index}
                          className="flex items-center px-4 py-1 text-sm text-gray-600 border rounded-full"
                        >
                          {attachment.type === "pdf" ? (
                            <PiFilePdf className="mr-2 text-lg text-red-500" />
                          ) : (
                            <PiFileDoc className="mr-2 text-lg text-blue-500" />
                          )}
                          {attachment.name}
                        </div>
                      ))}
                      {message.plusCount && (
                        <span className="px-1.5 py-1 text-sm text-gray-500 border rounded-full">
                          +{message.plusCount}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="flex flex-col px-3 pb-4 sm:hidden">
              {message.title && (
                <h3 className="my-1 font-medium">{message.title}</h3>
              )}
              <p className="mt-1 text-gray-600">{message.content}</p>
              {message.attachments && (
                <div className="flex items-center mt-3 space-x-2">
                  {message.attachments.map((attachment, index) => (
                    <div
                      key={index}
                      className="flex items-center px-4 py-1 text-sm text-gray-600 border rounded-full"
                    >
                      {attachment.type === "pdf" ? (
                        <PiFilePdf className="mr-2 text-lg text-red-500" />
                      ) : (
                        <PiFileDoc className="mr-2 text-lg text-blue-500" />
                      )}
                      {attachment.name}
                    </div>
                  ))}
                  {message.plusCount && (
                    <span className="px-1.5 py-1 text-sm text-gray-500 border rounded-full">
                      +{message.plusCount}
                    </span>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommunicationsPanel;

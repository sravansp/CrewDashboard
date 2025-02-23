import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { RiHome6Line } from "react-icons/ri";
import { useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();
  
  // Get pathname from current location
  const getPathName = (path) => {
    switch (path) {
      case "/":
        return "Home";
      case "/crewProfile":
        return "Crew Profile";
      default:
        // Convert path to readable format
        return path.slice(1) // Remove leading slash
          .split("-")
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ");
    }
  };

  // Get current pathname
  const currentPathName = getPathName(location.pathname);
  
  // Generate breadcrumb items based on path segments
  const pathSegments = location.pathname.split("/").filter(Boolean);
  
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">
            <RiHome6Line />
          </BreadcrumbLink>
        </BreadcrumbItem>
        
        {pathSegments.length > 0 && (
          <>
            <BreadcrumbSeparator className="text-[#ff691f]" />
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Crewing</BreadcrumbLink>
            </BreadcrumbItem>
          </>
        )}
        
        {location.pathname !== "/" && (
          <>
            <BreadcrumbSeparator className="text-[#ff691f]" />
            <BreadcrumbItem>
              <BreadcrumbPage>{currentPathName}</BreadcrumbPage>
            </BreadcrumbItem>
          </>
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default Breadcrumbs;
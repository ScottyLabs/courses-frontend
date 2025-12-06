import { useState } from "react";
import Sidebar from "@/components/ProfileSidebar";
import ScheduleSidebar from "@/components/ScheduleSidebar";
import SearchSidebar from "@/components/SearchSidebar";

interface ProfileLayoutProps {
  children: React.ReactNode;
}

export default function ProfileLayout({ children }: ProfileLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="md:flex flex-1 min-h-0">
      {children}
    </div>
  ); 
}

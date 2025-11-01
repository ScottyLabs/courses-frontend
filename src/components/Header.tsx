import { Link } from "@tanstack/react-router";
import { useLocation } from "@tanstack/react-router";
import { Clock, SearchMd, Star01, UserSquare, Sun, LogOut01, User02 } from "@scottylabs/corgi";
import { useState } from "react";
import type { ReactElement } from "react";

const HEADER_LINKS = [
  {
    text: "Courses",
    icon: <SearchMd />,
    link: "/course/search" // Should this link to a search page?
  },
  {
    text: "Instructors",
    icon: <UserSquare />,
    link: "/instructors"
  },
  {
    text: "Schedules",
    icon: <Clock />,
    link: "/schedules"
  },
  {
    text: "Profile",
    icon: <User02 />,
    link: "/profile"
  }
];

export default function Header() {
  return (
    <div className="sticky w-full z-99 flex flex-row items-center justify-between px-6 py-6 bg-bg-brandNeutral-secondary-enabled shadow-lg h-[85px]">
      <div className="flex flex-initial cursor-pointer flex-row justify-start font-semibold text-fg-brandNeutral-secondary">
        <Link to="/">
          <div className="flex items-center">
            <img src="/favicon.png" className="h-9 rounded" />
            <span className="ml-4 text-fg-brandNeutral-primary">CMU Courses</span>
          </div>
        </Link>
      </div>
      <div className="flex flex-row items-center">
        {HEADER_LINKS.map((headerLink) => (
          <HeaderLink 
            key={headerLink.text}
            text={headerLink.text} 
            icon={headerLink.icon} 
            link={headerLink.link} 
          />
        ))}
      </div>
      <div className="flex flex-row items-center justify-between gap-x-2 text-fg-brandNeutral-secondary">
        <NavbarButtons />
      </div>
    </div>
  );
}

type HeaderLinkProps = {
  text: string;
  icon: ReactElement;
  link: string;
};

function HeaderLink({ text, icon, link }: HeaderLinkProps) {
  const location = useLocation(); // returns ParsedLocation
  const pathname = location.pathname; // get the actual path string
  const isActive = pathname.startsWith(link); // check if this link is active

  return (
    <Link to={link}>
      <div
        className={`flex flex-row items-center justify-center gap-2 px-3 py-2 rounded-md hover:bg-gray-200 transition ${
          isActive ? "text-blue-500" : "text-fg-brandNeutral-secondary"
        }`}
      >
        <span className="flex items-center">{icon}</span>
        <span className="mb-[-2px]">{text}</span>
      </div>
    </Link>
  );
}

function NavbarButtons() {
  const [darkMode, setDarkMode] = useState(false);

  return (
      <div className="flex items-center space-x-4">
      <button
        onClick={() => setDarkMode(!darkMode)}
           className="w-13 h-7 flex items-center rounded-full border-[1.5px] border-fg-brandNeutral-secondary transition-all relative"
      >
        <div
          className={`absolute w-5 h-5 rounded-full bg-fg-brandNeutral-secondary shadow-md flex items-center justify-center transform transition-transform ${
            darkMode ? "translate-x-[27px]" : "translate-x-[2.1px]"
          }`}
        >
          <Sun className="w-4 h-4 text-fg-neutral-onInverse" />
        </div>
      </button>

        <button className="flex items-center space-x-2 border border-stroke-brandNeutral-1 px-4 py-1.5 rounded-full hover:bg-gray-300 cursor-pointer transition border-[1.5px]">
  <LogOut01 className="w-5 h-5 text-fg-brandNeutral-primary stroke-2" />
        <span className="text-fg-brandNeutral-primary font-semibold">Sign out</span>
      </button>
    </div>
  );
}
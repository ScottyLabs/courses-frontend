import { Link } from "@tanstack/react-router";
import { Clock, SearchMd, Star01, UserSquare, Sun, LogOut01, User02 } from "@scottylabs/corgi";
import { useState } from "react";
import type { ReactElement } from "react";

const HEADER_LINKS = [
  {
    text: "Courses",
    icon: <SearchMd />,
    link: "/search"
  },
  {
    text: "Instructors",
    icon: <UserSquare />,
    link: "/instructors"
  },
  {
    text: "Saved",
    icon: <Star01 />,
    link: "/profile"
  },
  {
    text: "Schedules",
    icon: <Clock />,
    link: "/schedules"
  }
];

export default function Header() {
  return (
    <div className="sticky w-full z-99 flex flex-row items-center justify-between px-6 py-6 bg-bg-brandNeutral-secondary-enabled shadow-lg h-[85px]">
      <div className="flex flex-initial cursor-pointer flex-row justify-start font-semibold text-fg-brandNeutral-primary">
        <Link to="/">
          <div className="flex items-center">
            <img src="/favicon.png" className="h-9 rounded" />
            <span className="ml-2">CMU Courses</span>
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
      <div className="flex flex-row items-center justify-between gap-x-2 text-fg-brandNeutral-primary">
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
  return (
    <Link to={link} className="[&.active]:text-fg-brand-secondary">
      <div className="flex flex-row items-center justify-center gap-2 px-3 py-2 rounded-md hover:bg-gray-200 transition" >
        {icon}
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
        className="w-16 h-8 flex items-center rounded-full border border-fg-brandNeutral-secondary transition-all relative"
      >
        <div
          className={`absolute w-7 h-7 rounded-full bg-fg-brandNeutral-secondary shadow-md flex items-center justify-center transform transition-transform ${darkMode ? "translate-x-8" : "translate-x-0.5"
            }`}
        >
          <Sun className="w-4 h-4 text-fg-neutral-onInverse" />
        </div>
      </button>

      <button className="flex items-center space-x-2 border border-stroke-brandNeutral-1 px-4 py-1.5 rounded-full hover:bg-gray-300 cursor-pointer transition text-fg-brandNeutral-primary">
        <LogOut01 className="w-4 h-4" />
        <span className="">Sign out</span>
      </button>
    </div>
  );
}
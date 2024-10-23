"use client";

import {
  BellIcon,
  CalenderIcon,
  CloseIcon,
  DocumentIcon,
  DoubleChatIcon,
  DoubleChevronIcon,
  HomeIcon,
  Logo,
  SettingsIcon,
  UserSpeakIcon,
} from "@/assets/icons";
import { cn } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import avatar from "@/assets/images/avatar.svg";

const sidebarMenuItems = [
  { id: 1, name: "Home", url: "/", icon: HomeIcon },
  { id: 2, name: "Events", url: "#", icon: CalenderIcon },
  { id: 3, name: "Speakers", url: "#", icon: UserSpeakIcon },
  { id: 4, name: "Reports", url: "#", icon: DocumentIcon },
  { id: 5, name: "Notifications", url: "#", icon: BellIcon },
  { id: 6, name: "Messages", url: "#", icon: DoubleChatIcon },
  { id: 7, name: "Settings", url: "#", icon: SettingsIcon },
];

interface SidebarProps {
  isCollapsed: boolean;
  setIsCollapsed(state: boolean): void;
  isSidebarOpen: boolean;
  setIsSidebarOpen(state: boolean): void;
}

export default function Sidebar({
  isCollapsed,
  setIsCollapsed,
  isSidebarOpen,
  setIsSidebarOpen,
}: SidebarProps) {
  const pathname = usePathname();
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark" || (
    window.matchMedia('(prefers-color-scheme: dark)').matches) ) {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setDarkMode(!darkMode);
  };

  const activeMenuClass = useCallback(
    (link: { url: string }) => {
      const isActive = pathname === link.url;
      return isActive ? "bg-primary-100 text-primary-200" : "";
    },
    [pathname],
  );

  return (
    <aside
      className={cn(
        "absolute inset-0 z-30 hidden h-screen xl:static xl:z-0 xl:block",
        {
          "pointer-events-auto fixed inset-0 block size-full bg-gray-400/20":
            isSidebarOpen,
        },
      )}
    >
      <nav
        className={cn(
          "h-full flex-col gap-6 overflow-y-auto border border-sidebar-border bg-sidebar p-2 py-4 xs:w-[24rem] xl:flex xl:w-full",
        )}
      >
        <div
          role="group"
          className="flex items-center justify-between pb-2 xl:pb-0"
        >
          <Link
            href="/"
            className={cn("relative", { "flex justify-center": isCollapsed })}
          >
            <Logo size={isCollapsed ? "small" : "large"} />
          </Link>

          <button className="xl:hidden" onClick={() => setIsSidebarOpen(false)}>
            <span className="sr-only">Close Sidebar</span>
            <CloseIcon />
          </button>
        </div>

        <ul className="grid gap-2 border-t border-grey-100 pt-2 xl:border-t-0">
          {sidebarMenuItems.map((link) => (
            <li key={link.id}>
              <Link
                href={link.url}
                className={cn(
                  "flex items-center gap-6 px-2 pb-1.5 pt-3 text-sm text-grey-300 transition-colors duration-300 hover:bg-primary-100 hover:text-primary-200",
                  activeMenuClass(link),
                  { "justify-center": isCollapsed },
                )}
              >
                <i
                  className={cn(
                    "block text-primary-400",
                    { "text-grey-200": isCollapsed },
                    activeMenuClass(link),
                  )}
                >
                  <link.icon />
                </i>
                {!isCollapsed && (
                  <span className="inline-flex flex-1 items-center justify-between">
                    {link.name}
                    {link.name === "Notifications" && (
                      <small className="inline-flex size-9 items-center justify-center rounded-full bg-red-100 text-white">
                        3
                      </small>
                    )}
                  </span>
                )}
              </Link>
            </li>
          ))}
          <li className="hidden w-full xl:block">
            <button
              className={cn(
                "flex w-full items-center gap-6 px-2 pb-1.5 pt-3 text-sm text-grey-300 transition-colors duration-300 hover:bg-primary-100 hover:text-primary-200",
                { "justify-center": isCollapsed },
              )}
              onClick={() => setIsCollapsed(!isCollapsed)}
            >
              {!isCollapsed ? (
                <>
                  <i
                    className={cn("block text-primary-400", {
                      "text-grey-200": isCollapsed,
                    })}
                  >
                    <DoubleChevronIcon />
                  </i>
                  <span>Collapse</span>
                </>
              ) : (
                <i
                  className={cn("block rotate-180 text-primary-400", {
                    "text-grey-200": isCollapsed,
                  })}
                >
                  <DoubleChevronIcon />
                </i>
              )}
            </button>
          </li>
          <li className="w-full">
            <label
              className={cn(
                "inline-flex w-full shrink-0 cursor-pointer items-center gap-2 px-2 pb-1.5 pt-3 text-sm text-grey-300 transition-colors duration-300 hover:bg-primary-100 hover:text-primary-200",
                { "justify-center": isCollapsed },
              )}
            >
              <input
                type="checkbox"
                className="peer sr-only"
                checked={darkMode}
                onChange={toggleTheme}
              />
              <span className="peer relative h-6 w-9 rounded-full bg-grey-600 after:absolute after:start-[1px] after:top-[1.8px] after:size-4 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-purple-200 peer-checked:after:translate-x-[80%] peer-checked:after:border-white peer-focus:outline-none rtl:peer-checked:after:-translate-x-full" />
              {!isCollapsed && (
                <span>{darkMode ? "Light mode" : "Dark mode"}</span>
              )}
            </label>
          </li>
          <li className="w-full">
            <button
              className={cn(
                "flex w-full items-center gap-2 px-2 pb-1.5 pt-3 text-sm text-grey-300 transition-colors duration-300 hover:bg-primary-100 hover:text-primary-200",
                { "justify-center": isCollapsed },
              )}
            >
              <figure className="relative size-13 shrink-0">
                <Image
                  src={avatar}
                  alt="avatar"
                  fill
                  className="size-full object-cover object-center"
                />
              </figure>
              {!isCollapsed && (
                <span className="flex flex-col items-start text-left text-sm leading-2">
                  <small>Rudra Devi</small>
                  <small className="text-grey-200">rudra.devi@gmail.com</small>
                </span>
              )}
            </button>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

import {
  CalenderIcon,
  DocumentIcon,
  HomeIcon,
  UserSpeakIcon,
} from "@/assets/icons";
import { cn } from "@/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback } from "react";

const sidebarMenuItems = [
  { id: 1, name: "Home", url: "/", icon: HomeIcon },
  { id: 2, name: "Events", url: "#", icon: CalenderIcon },
  { id: 3, name: "Speakers", url: "#", icon: UserSpeakIcon },
  { id: 4, name: "Reports", url: "#", icon: DocumentIcon },
];

export default function Footer() {
  const pathname = usePathname();

  const activeMenuClass = useCallback(
    (link: { url: string }) => {
      const isActive = pathname === link.url;
      return isActive
        ? "bg-transparent text-primary-200 border-t-2 border-t-primary-200"
        : "";
    },
    [pathname],
  );

  return (
    <footer className="grid border-t border-primary-700 sm:hidden">
      <ul className="flex items-center justify-center gap-2">
        {sidebarMenuItems.map((link) => (
          <li key={link.id}>
            <Link
              href={link.url}
              className={cn(
                "flex flex-col items-center gap-2 px-2 pb-1.5 pt-3 text-sm text-grey-300 transition-colors duration-300 hover:bg-primary-100 hover:text-primary-200",
                activeMenuClass(link),
              )}
            >
              <link.icon />
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </footer>
  );
}

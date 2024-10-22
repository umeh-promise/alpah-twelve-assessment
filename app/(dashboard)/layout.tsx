"use client";

import { ReactNode, useState } from "react";
import Sidebar from "./_components/sidebar";
import { cn } from "@/utils";
import { BarIcon, Logo } from "@/assets/icons";
import Footer from "./_components/footer";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <section
      className={cn(
        "isolate grid h-screen items-start gap-5 overflow-hidden transition-none duration-300 xl:grid-cols-[24rem_1fr]",
        { "xl:grid-cols-[6.4rem_1fr]": isCollapsed },
      )}
    >
      <header className="flex items-center justify-between p-6 xl:hidden">
        <Logo size="large" />
        <button
          onClick={() => {
            setIsSidebarOpen(true);
            setIsCollapsed(false);
          }}
        >
          <span className="sr-only">Open Sidebar</span>
          <BarIcon />
        </button>
      </header>
      <Sidebar
        isCollapsed={isCollapsed}
        setIsCollapsed={setIsCollapsed}
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <section className="h-[95vh] overflow-y-auto px-8 py-17 xl:pr-24">
        {children}
        <Footer />
      </section>
    </section>
  );
}

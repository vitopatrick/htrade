"use client";

import DashboardHeader from "@/components/headers/DashboardHeader";
import MobileSideBar from "@/components/sidebar-links/MobileSideBar";
import SideBarLinks from "@/components/sidebar-links/SideBarLinks";
import ChartProvider from "@/context/ChartContext";
import UserProvider from "@/context/UserAuthContext";
import { useState } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // state to toggle the side bar
  const [active, setActive] = useState(false);

  return (
    <ChartProvider>
      <>
        {/* parent div container */}
        <section className="flex h-screen w-screen bg-bg">
          {/* sidebar */}
          <MobileSideBar isOpen={active} toggle={setActive} />
          {/* end of sidebar */}
          <aside className="w-[300px] hidden md:block bg-sideBar h-screen">
            <SideBarLinks />
          </aside>
          <UserProvider>
            <main className="w-full overflow-auto min-h-0">
              {/* the header for the pages */}
              <DashboardHeader toggle={setActive} />
              {children}
            </main>
          </UserProvider>
        </section>
        {/* end of parent div container */}
      </>
    </ChartProvider>
  );
}

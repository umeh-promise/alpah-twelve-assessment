import { Metadata } from "next";
import DashboardOverview from "./_components/dashboard-overview";

export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  return <DashboardOverview />;
}

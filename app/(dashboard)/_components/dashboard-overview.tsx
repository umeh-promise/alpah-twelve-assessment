import DashboardOverviewCard from "./dashboard-overview-card";
import EventHistory from "./event-history";
import EventRegistration from "./event-registration";

const dashboardOverviewCardItems = [
  { id: 1, title: "Total Events", value: "100,000", percentage: 5 },
  { id: 2, title: "Active Speakers", value: "25", percentage: -5 },
  { id: 3, title: "Total Registrations", value: "300", percentage: 5 },
  { id: 4, title: "Total Revenue", value: "$500,000", percentage: 5 },
];

export default function DashboardOverview() {
  return (
    <section className="grid gap-9">
      <h1>Welcome! here&apos;s your summary</h1>
      <ul className="grid grid-cols-[repeat(auto-fit,minmax(26rem,1fr))] gap-4">
        {dashboardOverviewCardItems.map((item) => (
          <DashboardOverviewCard key={item.id} {...item} />
        ))}
      </ul>
      <EventRegistration />
      <EventHistory />
    </section>
  );
}

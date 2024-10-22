import EventFilters from "@/app/_components/event-filter";
import EventTable from "./event-table";

const tableHeadings = [
  { id: 1, title: "Event Name" },
  { id: 2, title: "Date" },
  { id: 3, title: "Speaker" },
  { id: 4, title: "Status" },
];

const eventHistory = [
  {
    id: 1,
    name: "Cloud Innovation Summit",
    speaker: "Jane Doe",
    status: "completed",
    date: "2024-10-15",
    description:
      "Turpis interdum nunc varius ornare dignissim pretium. Massa ornare quis aliquet sed vitae.",
    attendees: 1000,
  },
  {
    id: 2,
    name: "Blockchain Revolution Conference",
    speaker: "Dr. Peter Smith",
    status: "in-progress",
    date: "2024-11-05",
    description:
      "Turpis interdum nunc varius ornare dignissim pretium. Massa ornare quis aliquet sed vitae.",
    attendees: 1000,
  },
  {
    id: 3,
    name: "AI in Healthcare Symposium",
    speaker: "Dr. Aisha Malik",
    status: "completed",
    date: "2024-12-01",
    description:
      "Turpis interdum nunc varius ornare dignissim pretium. Massa ornare quis aliquet sed vitae.",
    attendees: 1000,
  },
  {
    id: 4,
    name: "Future of Fintech Forum",
    speaker: "John Lee",
    status: "completed",
    date: "2024-10-25",
    description:
      "Turpis interdum nunc varius ornare dignissim pretium. Massa ornare quis aliquet sed vitae.",
    attendees: 1000,
  },
  {
    id: 5,
    name: "Data Analytics in Business",
    speaker: "Rachel Moore",
    status: "completed",
    date: "2024-11-12",
    description:
      "Turpis interdum nunc varius ornare dignissim pretium. Massa ornare quis aliquet sed vitae.",
    attendees: 1000,
  },
  {
    id: 6,
    name: "Sustainable Energy Expo",
    speaker: "Prof. Alan Green",
    status: "completed",
    date: "2024-09-28",
    description:
      "Turpis interdum nunc varius ornare dignissim pretium. Massa ornare quis aliquet sed vitae.",
    attendees: 1000,
  },
  {
    id: 7,
    name: "Web3 Interfaces Workshop",
    speaker: "Kevin Adams",
    status: "in-progress",
    date: "2024-10-10",
    description:
      "Turpis interdum nunc varius ornare dignissim pretium. Massa ornare quis aliquet sed vitae.",
    attendees: 1000,
  },
  {
    id: 8,
    name: "Cybersecurity for Startups",
    speaker: "Emily Zhang",
    status: "completed",
    date: "2024-11-19",
    description:
      "Turpis interdum nunc varius ornare dignissim pretium. Massa ornare quis aliquet sed vitae.",
    attendees: 1000,
  },
  {
    id: 9,
    name: "Smart Cities Forum",
    speaker: "Dr. Maria Hernandez",
    status: "in-progress",
    date: "2024-10-18",
    description:
      "Turpis interdum nunc varius ornare dignissim pretium. Massa ornare quis aliquet sed vitae.",
    attendees: 1000,
  },
  {
    id: 10,
    name: "Tech Safari Mixer",
    speaker: "Guest Panel",
    status: "in-progress",
    date: "2024-09-30",
    description:
      "Turpis interdum nunc varius ornare dignissim pretium. Massa ornare quis aliquet sed vitae.",
    attendees: 1000,
  },
  {
    id: 11,
    name: "Cloud Innovation Summit",
    speaker: "Jane Doe",
    status: "completed",
    date: "2024-10-15",
    description:
      "Turpis interdum nunc varius ornare dignissim pretium. Massa ornare quis aliquet sed vitae.",
    attendees: 1000,
  },
  {
    id: 12,
    name: "Blockchain Revolution Conference",
    speaker: "Dr. Peter Smith",
    status: "in-progress",
    date: "2024-11-05",
    description:
      "Turpis interdum nunc varius ornare dignissim pretium. Massa ornare quis aliquet sed vitae.",
    attendees: 1000,
  },
  {
    id: 13,
    name: "AI in Healthcare Symposium",
    speaker: "Dr. Aisha Malik",
    status: "completed",
    date: "2024-12-01",
    description:
      "Turpis interdum nunc varius ornare dignissim pretium. Massa ornare quis aliquet sed vitae.",
    attendees: 1000,
  },
  {
    id: 14,
    name: "Future of Fintech Forum",
    speaker: "John Lee",
    status: "completed",
    date: "2024-10-25",
    description:
      "Turpis interdum nunc varius ornare dignissim pretium. Massa ornare quis aliquet sed vitae.",
    attendees: 1000,
  },
  {
    id: 15,
    name: "Data Analytics in Business",
    speaker: "Rachel Moore",
    status: "completed",
    date: "2024-11-12",
    description:
      "Turpis interdum nunc varius ornare dignissim pretium. Massa ornare quis aliquet sed vitae.",
    attendees: 1000,
  },
  {
    id: 16,
    name: "Sustainable Energy Expo",
    speaker: "Prof. Alan Green",
    status: "completed",
    date: "2024-09-28",
    description:
      "Turpis interdum nunc varius ornare dignissim pretium. Massa ornare quis aliquet sed vitae.",
    attendees: 1000,
  },
  {
    id: 17,
    name: "Web3 Interfaces Workshop",
    speaker: "Kevin Adams",
    status: "in-progress",
    date: "2024-10-10",
    description:
      "Turpis interdum nunc varius ornare dignissim pretium. Massa ornare quis aliquet sed vitae.",
    attendees: 1000,
  },
  {
    id: 18,
    name: "Cybersecurity for Startups",
    speaker: "Emily Zhang",
    status: "completed",
    date: "2024-11-19",
    description:
      "Turpis interdum nunc varius ornare dignissim pretium. Massa ornare quis aliquet sed vitae.",
    attendees: 1000,
  },
  {
    id: 19,
    name: "Smart Cities Forum",
    speaker: "Dr. Maria Hernandez",
    status: "in-progress",
    date: "2024-10-18",
    description:
      "Turpis interdum nunc varius ornare dignissim pretium. Massa ornare quis aliquet sed vitae.",
    attendees: 1000,
  },
  {
    id: 20,
    name: "Tech Safari Mixer",
    speaker: "Guest Panel",
    status: "in-progress",
    date: "2024-09-30",
    description:
      "Turpis interdum nunc varius ornare dignissim pretium. Massa ornare quis aliquet sed vitae.",
    attendees: 1000,
  },
  {
    id: 21,
    name: "Cloud Innovation Summit",
    speaker: "Jane Doe",
    status: "completed",
    date: "2024-10-15",
    description:
      "Turpis interdum nunc varius ornare dignissim pretium. Massa ornare quis aliquet sed vitae.",
    attendees: 1000,
  },
  {
    id: 22,
    name: "Blockchain Revolution Conference",
    speaker: "Dr. Peter Smith",
    status: "in-progress",
    date: "2024-11-05",
    description:
      "Turpis interdum nunc varius ornare dignissim pretium. Massa ornare quis aliquet sed vitae.",
    attendees: 1000,
  },
  {
    id: 23,
    name: "AI in Healthcare Symposium",
    speaker: "Dr. Aisha Malik",
    status: "completed",
    date: "2024-12-01",
    description:
      "Turpis interdum nunc varius ornare dignissim pretium. Massa ornare quis aliquet sed vitae.",
    attendees: 1000,
  },
  {
    id: 24,
    name: "Future of Fintech Forum",
    speaker: "John Lee",
    status: "completed",
    date: "2024-10-25",
    description:
      "Turpis interdum nunc varius ornare dignissim pretium. Massa ornare quis aliquet sed vitae.",
    attendees: 1000,
  },
  {
    id: 25,
    name: "Data Analytics in Business",
    speaker: "Rachel Moore",
    status: "completed",
    date: "2024-11-12",
    description:
      "Turpis interdum nunc varius ornare dignissim pretium. Massa ornare quis aliquet sed vitae.",
    attendees: 1000,
  },
  {
    id: 26,
    name: "Sustainable Energy Expo",
    speaker: "Prof. Alan Green",
    status: "completed",
    date: "2024-09-28",
    description:
      "Turpis interdum nunc varius ornare dignissim pretium. Massa ornare quis aliquet sed vitae.",
    attendees: 1000,
  },
  {
    id: 27,
    name: "Web3 Interfaces Workshop",
    speaker: "Kevin Adams",
    status: "in-progress",
    date: "2024-10-10",
    description:
      "Turpis interdum nunc varius ornare dignissim pretium. Massa ornare quis aliquet sed vitae.",
    attendees: 1000,
  },
  {
    id: 28,
    name: "Cybersecurity for Startups",
    speaker: "Emily Zhang",
    status: "completed",
    date: "2024-11-19",
    description:
      "Turpis interdum nunc varius ornare dignissim pretium. Massa ornare quis aliquet sed vitae.",
    attendees: 1000,
  },
  {
    id: 29,
    name: "Smart Cities Forum",
    speaker: "Dr. Maria Hernandez",
    status: "in-progress",
    date: "2024-10-18",
    description:
      "Turpis interdum nunc varius ornare dignissim pretium. Massa ornare quis aliquet sed vitae.",
    attendees: 1000,
  },
  {
    id: 30,
    name: "Tech Safari Mixer",
    speaker: "Guest Panel",
    status: "in-progress",
    date: "2024-09-30",
    description:
      "Turpis interdum nunc varius ornare dignissim pretium. Massa ornare quis aliquet sed vitae.",
    attendees: 1000,
  },
];

export default function EventHistory() {
  return (
    <section className="grid gap-1.5">
      <h3 className="font-medium text-grey-900">Events History</h3>
      <EventFilters />
      <EventTable events={eventHistory} eventHeadings={tableHeadings} />
    </section>
  );
}

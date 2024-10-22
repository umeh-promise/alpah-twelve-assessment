import Image from "next/image";
import avatar_group from "@/assets/images/avatar-group.png";
import { CloseIcon } from "@/assets/icons";
import { Event } from "./event-table";

export default function EventDetailsModal({
  selectedEvent,
  setIsDetailsModalOpen,
}: {
  selectedEvent: Event;
  setIsDetailsModalOpen(state: boolean): void;
}) {
  return (
    <article className="grid gap-9 p-9">
      <header className="flex items-center justify-between">
        <hgroup>
          <h3 className="font-semibold leading-5 text-grey-300">
            {selectedEvent.name}
          </h3>
          <small className="text-sm leading-3 text-grey-200">
            {selectedEvent.date}
          </small>
        </hgroup>
        <button onClick={() => setIsDetailsModalOpen(false)}>
          <span className="sr-only">Close Details</span>
          <CloseIcon />
        </button>
      </header>

      <p className="text-sm leading-3 text-grey-300">
        {selectedEvent.description}
      </p>

      <figure className="grid gap-6 py-9">
        <div className="relative h-13 w-20">
          <Image src={avatar_group} alt="avatar_group" fill />
        </div>

        <figcaption>
          <p className="text-sm leading-3 text-grey-300">
            {selectedEvent.speaker}
          </p>
          <p className="text-sm leading-3 text-grey-300">
            {selectedEvent.attendees} Attendees
          </p>
        </figcaption>
      </figure>

      <div
        role="group "
        className="flex flex-col items-center gap-3 md:flex-row md:justify-between"
      >
        <button className="w-full rounded-[2px] border border-[#334155] text-[#334155] bg-white px-6 py-2  md:w-auto">
          Edit
        </button>

        <div
          role="group"
          className="flex w-full flex-col items-center gap-2 md:w-auto md:flex-row"
        >
          <button className="w-full justify-start rounded-[2px] border-transparent border bg-red-100 px-6 py-2 text-white md:w-auto">
            Delete
          </button>
          <button className="w-full justify-start rounded-[2px] border-transparent border bg-primary-200 px-6 py-2 text-white md:w-auto">
            Mark as Completed
          </button>
        </div>
      </div>
    </article>
  );
}

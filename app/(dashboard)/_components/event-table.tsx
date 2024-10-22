"use client";

import React, { useState } from "react";
import { ChevronIcon } from "@/assets/icons";
import { cn } from "@/utils";
import Table, { TableHeadersProps } from "@/app/_components/table";
import Modal from "@/app/_components/modal";
import EventDetailsModal from "./event-details-modal";

export interface Event {
  id: number;
  name: string;
  description: string;
  attendees: number;
  date: string;
  speaker: string;
  status: string;
}

export default function EventTable({
  events,
  eventHeadings,
}: {
  events: Event[];
  eventHeadings: TableHeadersProps["tableHeaders"];
}) {
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState<boolean>(false);

  const handleToggleEvent = (eventId: number) => {
    setSelectedEvent((prevSelectedEvent) => {
      if (prevSelectedEvent === eventId) {
        return null;
      }

      return eventId;
    });
  };

  const totalItems = events.length;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentEvents = events.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleItemsPerPageChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setItemsPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  return (
    <Table
      tableHeaders={eventHeadings}
      totalItems={totalItems}
      itemsPerPage={itemsPerPage}
      handleItemsPerPageChange={handleItemsPerPageChange}
      handlePageChange={handlePageChange}
      currentPage={currentPage}
    >
      {currentEvents.map((event) => (
        <>
          <tr
            key={event.id}
            className={cn(
              "[&>*:not(:first-child):not(:last-child)]:hidden sm:[&>*:not(:first-child):not(:last-child)]:table-cell [&>td]:px-3 [&>td]:py-2 sm:[&>td]:px-6 sm:[&>td]:py-5",
              {
                "border border-primary-100 bg-grey-400 sm:border-none sm:bg-transparent":
                  selectedEvent === event.id,
              },
            )}
          >
            <td className="flex gap-9">
              <button
                aria-label={
                  selectedEvent === event.id
                    ? "Collapse details"
                    : "Expand details"
                }
                className="sm:hidden"
                onClick={() => handleToggleEvent(event.id)}
              >
                {selectedEvent !== event.id ? (
                  <ChevronIcon variation="right" />
                ) : (
                  <i className="block rotate-90">
                    <ChevronIcon variation="right" />
                  </i>
                )}
              </button>
              <button
                onClick={() => {
                  setIsDetailsModalOpen(true);
                  handleToggleEvent(event.id);
                }}
              >
                {event.name}
              </button>
            </td>
            <td className="text-nowrap">{event.date}</td>
            <td>{event.speaker}</td>
            <td className="shrink-0 text-nowrap">
              <span
                className={cn(
                  "flex w-fit shrink-0 items-center gap-2 rounded-full bg-blue-300 px-3 py-0.5 text-white sm:bg-blue-50 sm:px-2 sm:py-1 sm:text-blue-300 capitalize border border-border-blue",
                  {
                    "bg-green-100 border border-border-green text-white sm:bg-green-50 sm:text-green-100":
                      event.status === "completed",
                  },
                )}
              >
                <small
                  className={cn(
                    "hidden size-1.5 rounded-full bg-blue-300 sm:inline-block",
                    { "bg-green-100": event.status === "completed" },
                  )}
                />

                {event.status.split("-").join(" ")}
              </span>
            </td>
          </tr>
          {selectedEvent === event.id && (
            <tr className="text-grey-50 border border-primary-100 bg-grey-700 sm:hidden [&>td]:p-6">
              <td>{event.speaker}</td>
              <td>{event.date}</td>
            </tr>
          )}

          <Modal
            isOpen={isDetailsModalOpen && selectedEvent === event.id}
            onClose={() => setIsDetailsModalOpen(false)}
          >
            <EventDetailsModal
              selectedEvent={event}
              setIsDetailsModalOpen={setIsDetailsModalOpen}
            />
          </Modal>
        </>
      ))}
    </Table>
  );
}

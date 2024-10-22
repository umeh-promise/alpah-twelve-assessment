"use client";

import React from "react";
import Pagination from "./pagination";

interface TableHeader {
  id: number;
  title: string;
}

export interface TableHeadersProps {
  tableHeaders: TableHeader[];
  children: React.ReactNode;
  totalItems: number;
  itemsPerPage: number;
  handleItemsPerPageChange(e: React.ChangeEvent<HTMLSelectElement>): void;
  handlePageChange(e: number): void;
  currentPage: number;
}

export default function Table({
  tableHeaders,
  children,
  totalItems,
  itemsPerPage,
  handleItemsPerPageChange,
  handlePageChange,
  currentPage,
}: TableHeadersProps) {
  return (
    <section className="-mx-2 grid size-full items-start gap-2 xs:mx-0">
      <table className="w-full text-left text-sm md:px-10 rtl:text-right">
        <thead className="text-table bg-primary-500 py-3 text-sm capitalize text-grey-300 md:py-6">
          <tr className="[&>*:not(:first-child):not(:last-child)]:hidden sm:[&>*:not(:first-child):not(:last-child)]:table-cell">
            {tableHeaders.map((header) => (
              <th
                key={header.id}
                scope="col"
                className="border-y-border-1 whitespace-nowrap border-y bg-primary-500 p-6 text-xs font-semibold leading-3.5 text-grey-200"
              >
                {header.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
      <div
        className="flex w-full items-center justify-between gap-4"
        role="row"
      >
        <Pagination
          currentPage={currentPage}
          totalItems={totalItems}
          itemsPerPage={itemsPerPage}
          onPageChange={handlePageChange}
        />

        <div className="flex items-center gap-2">
          <label className="hidden md:inline-block">Show:</label>
          <select
            className="flex w-[11rem] cursor-pointer items-center gap-2 rounded-md border border-grey-400 bg-transparent px-2 py-2 text-grey-300 outline-grey-100 [&>*]:bg-grey-400"
            value={itemsPerPage}
            onChange={handleItemsPerPageChange}
          >
            <option value="10">10 rows</option>
            <option value="20">20 rows</option>
            <option value="30">30 rows</option>
          </select>
        </div>
      </div>
    </section>
  );
}

import { DotsVerticalIcon, DownloadIcon, SearchIcon } from "@/assets/icons";

const filterVariants = [
  { id: 1, name: "Date" },
  { id: 2, name: "Status" },
  { id: 3, name: "Name" },
];

export default function EventFilters() {
  return (
    <section className="grid items-center gap-2 pb-2 lg:grid-cols-[2fr_1fr]">
      <div className="flex flex-col items-start gap-2 xs:grid xs:grid-cols-2 md:flex md:flex-row md:items-center">
        <span className="flex w-full items-center gap-2 rounded-md border border-grey-400 bg-sidebar p-2 md:w-[20rem]">
          <SearchIcon />
          <input
            type="search"
            placeholder="Search..."
            className="w-full bg-sidebar outline-none"
          />
        </span>

        {filterVariants.map((filter) => (
          <select
            className="flex w-full cursor-pointer items-center gap-2 rounded-md border border-grey-400 bg-sidebar px-2 py-2 text-grey-300 outline-grey-100 md:w-[11rem] [&>*]:bg-grey-400"
            key={filter.id}
          >
            <option value="10">{filter.name}</option>
          </select>
        ))}

        <p className="text-sm font-semibold leading-3 text-grey-300">
          Displaying 100 results
        </p>
      </div>

      <div className="grid grid-cols-2 items-center gap-2 self-end sm:flex lg:justify-self-end">
        <label>Sort:</label>
        <select className="flex w-[14rem] cursor-pointer items-center gap-2 self-end justify-self-end rounded-md border border-grey-400 bg-sidebar px-2 py-2 text-grey-300 outline-grey-100 [&>*]:bg-grey-400">
          <option value="most-recent">Most Recent</option>
        </select>

        <span className="flex w-[3.6rem] cursor-pointer items-center justify-center gap-2 rounded-md border border-grey-400 py-2 text-grey-300">
          <DotsVerticalIcon />
        </span>
        <span className="flex w-[10rem] cursor-pointer items-center gap-2 justify-self-end rounded-md border border-grey-400 px-6 py-2 text-grey-300 sm:justify-self-start">
          <i className="shrink-0">
            <DownloadIcon />
          </i>
          Export
        </span>
      </div>
    </section>
  );
}

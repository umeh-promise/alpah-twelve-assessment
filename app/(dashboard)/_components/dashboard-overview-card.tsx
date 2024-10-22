import { ArrowIcon, InfoIcon } from "@/assets/icons";
import { cn } from "@/utils";

export default function DashboardOverviewCard({
  title,
  value,
  percentage,
}: {
  title: string;
  value: string;
  percentage: number;
}) {
  const percentageValue = percentage < 1 ? "down" : "up";

  return (
    <article className="rounded-[2px] border border-grey-400 p-6 bg-sidebar">
      <h4 className="flex items-center gap-1 font-semibold text-grey-200">
        {title}
        <InfoIcon />
      </h4>
      <h2 className="flex items-center gap-1 font-semibold text-grey-300">
        {value}

        <ArrowIcon variation={percentageValue} />

        <span
          className={cn("text-[1rem] leading-1 text-green-100", {
            "text-red-100": percentage < 1,
          })}
        >{`${percentage < 1 ? percentage : `+${percentage}`}.0%`}</span>
      </h2>
    </article>
  );
}

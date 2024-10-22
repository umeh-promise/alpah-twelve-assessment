"use client";

import OverviewChart from "./overview-chart";
import Carousel from "@/app/_components/carousel";

import slide_1 from "@/assets/images/slide-1.png";
import slide_2 from "@/assets/images/slide-2.png";
import slide_3 from "@/assets/images/slide-3.png";

const carouselImages = [slide_1, slide_2, slide_3] as unknown as string[];

const salesData = {
  1: 700,
  2: 900,
  3: 750,
  4: 420,
  5: 1000,
  6: 580,
  7: 850,
  8: 350,
  9: 820,
  10: 500,
  11: 900,
  12: 600,
};

const generateMonths = () => {
  return Array.from({ length: 12 }, (_, index) => {
    const monthNumber = index + 1;
    const month = new Date(0, index).toLocaleString("en", { month: "short" });

    const saleValue = (salesData as { [key: number]: number })[monthNumber];

    const sales = !!saleValue ? saleValue : 0;

    return { month, sales };
  });
};

export default function EventRegistration() {
  return (
    <section className="grid gap-4">
      <h3 className="font-medium">Event Registrations per month</h3>
      <div className="grid grid-rows-2 gap-4 md:h-auto md:grid-cols-2 md:grid-rows-1 lg:grid-cols-[1.5fr_51rem] [&>*]:h-[32rem]">
        <OverviewChart sales={(generateMonths() as []) || []} />
        <Carousel images={carouselImages} />
      </div>
    </section>
  );
}

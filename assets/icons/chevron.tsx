interface ChevronIconProps extends React.HTMLProps<HTMLOrSVGElement> {
  variation: "left" | "right";
}

export function ChevronIcon({ variation }: ChevronIconProps) {
  return variation === "left" ? (
    <svg
      width="5"
      height="8"
      viewBox="0 0 5 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.04167 1.29169L1.125 4.00002L4.04167 6.70835"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ) : (
    <svg
      width="5"
      height="8"
      viewBox="0 0 5 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.958333 1.29169L3.875 4.00002L0.958333 6.70835"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

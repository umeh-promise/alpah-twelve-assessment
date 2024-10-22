interface ArrowIconProps extends React.HTMLProps<HTMLOrSVGElement> {
  variation: "up" | "down";
}

export function ArrowIcon({ variation }: ArrowIconProps) {
  return variation === "down" ? (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.5 5.83333V11.5H5.83333M11.3333 11.3333L4.5 4.5"
        stroke="#F43F5E"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ) : (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.5 10.1667V4.5H5.83333M11.3333 4.66667L4.5 11.5"
        stroke="#10B981"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

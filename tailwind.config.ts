import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "primary-100": "var(--primary-100)",
        "primary-200": "var(--primary-200)",
        "primary-300": "var(--primary-300)",
        "primary-400": "var(--primary-400)",
        "primary-500": "var(--primary-500)",
        "primary-600": "var(--primary-600)",
        "primary-700": "var(--primary-700)",

        "grey-100": "var(--grey-100)",
        "grey-200": "var(--grey-200)",
        "grey-300": "var(--grey-300)",
        "grey-400": "var(--grey-400)",
        "grey-500": "var(--grey-500)",
        "grey-600": "var(--grey-600)",
        "grey-700": "var(--grey-700)",
        "grey-800": "var(--grey-800)",
        "grey-900": "var(--grey-900)",

        sidebar: "var(--sidebar)",
        "sidebar-border": "var(--sidebar-border)",

        "red-100": "var(--red-100)",

        "green-50": "var(--green-50)",
        "green-100": "var(--green-100)",

        "border-green": "var(--border-green)",
        "border-blue": "var(--border-blue)",

        "blue-50": "var(--blue-50)",
        "blue-100": "var(--blue-100)",
        "blue-200": "var(--blue-200)",
        "blue-300": "var(--blue-300)",
      },
      fontSize: {
        xs: "1.2rem",
        sm: "1.4rem",
        base: "1.6rem",
        md: "1.8rem",
        lg: "2rem",
        xl: "2.2rem",
      },
      lineHeight: {
        none: "0px",
        1: "1.2rem",
        2: "1.6rem",
        3: "2rem",
        3.5: "2.2rem",
        4: "2.4rem",
        5: "2.8rem",
        5.5: "3rem",
        6: "3.2rem",
        7: "3.6rem",
        8: "4rem",
        9: "4.4rem",
        10: "4.8rem",
        12: "5.6rem",
      },
      spacing: {
        0: "0px",
        0.5: "0.2rem",
        1: "0.4rem",
        1.5: "0.6rem",
        2: "0.8rem",
        3: "1rem",
        4: "1.2rem",
        5: "1.4rem",
        6: "1.6rem",
        7: "1.8rem",
        8: "2rem",
        9: "2.4rem",
        10: "2.6rem",
        11: "2.8rem",
        12: "3rem",
        13: "3.2rem",
        14: "3.4rem",
        15: "3.6rem",
        16: "3.8rem",
        17: "4rem",
        18: "4.4rem",
        20: "8rem",
        22: "9rem",
        24: "9.6rem",
        26: "10.4rem",
        28: "12rem",
        30: "11.6rem",
        30.5: "11.9rem",
        31: "14.6rem",
        32: "12.8rem",
        34: "16rem",
        36: "19.2rem",
        38: "30.7rem",
        40: "44.4rem",
        46: "54.5rem",
        50: "58.6rem",
      },

      screens: {
        xs: "375px",
      },
    },
  },
  plugins: [],
};
export default config;

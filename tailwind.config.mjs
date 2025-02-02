import flowbite from "flowbite/plugin";
import { Albert_Sans, Montserrat } from "next/font/google";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite/**/*.js", // Include Flowbite content
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
        Albert_Sans: ["Albert Sans", "sans-serif"],
      },
    },
  },
  plugins: [flowbite],
};

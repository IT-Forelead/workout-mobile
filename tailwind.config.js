/** @type {import('tailwindcss').Config} */
import konstaConfig from "konsta/config";

// wrap your config with konstaConfig
module.exports = konstaConfig({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [],
});

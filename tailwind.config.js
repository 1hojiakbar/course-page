/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "darkblue-color": "#383b93",
        "teal-bg": "#18cfa5",
        "button-bg": "#e11d48",
        "secondary-color": "#6e6e77",
        "outer-bg": "#f4f4f5",
      },
      screens: {
        sm: "640px",
        mmd: "1065px",
        xs: "567px",
        xxs: "300px",
      },
    },
  },
  plugins: [],
};

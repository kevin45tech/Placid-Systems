/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        container: "80%",
        mobile: "90%",
      },
      colors: {
        mainBlue: "#55b9ec",
        mainGrey: "#0f0f3f",
        navyBlue: "#71828e",
        darkBlue: "#3a3a62",
      },
    },
  },
  plugins: [],
};

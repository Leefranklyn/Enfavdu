/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#4A3AFF",
        grey: "#7E7E7E",
        darkGreen: "#102F2E",
        cream: "#FEF1E2",
        borderBlue: "#0464F4",
        lightBlue: "#9BC0F3",
        skyBlue: "#DCECFB",
        lightGrey: "#F6F6F6",
        blueishGray: "#97AAC5",
        footerGrey:"#35373E",
      },
      listStyleImage: {
        check: 'url("/assets/check.svg")',
      },
    },
  },
  plugins: [],
};

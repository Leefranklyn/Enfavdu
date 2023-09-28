/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#4A3AFF",
        buttonGrey : "#D4D2E3",
        linkGrey : "#CCCCCC",
        lightGrey : "#D9D9D9",
        veryLightGrey :'#E5E5E5',
        gray: "#D8D8E3",
        grey: "#7E7E7E",
        darkGreen: "#102F2E",
        cream: "#FEF1E2",
        borderBlue: "#0464F4",
        lightBlue: "#9BC0F3",
        skyBlue: "#DCECFB",
        lightGrey: "#F6F6F6",
        blueishGray: "#97AAC5",
        footerGrey:"#35373E",
        textGrey:"#444E6B",
        socials:"#E8C5B0",
        lineBlue:"#4A3AFF",
        inputGray:"#8E8383",
        red:'#D81E5B',
        loginGrey: '#8E8383',
        textGray: '#555454',
        formGray: "#EEEEEE",
        overlay: "rgba(0,0,0,0.2)"

      },
      listStyleImage: {
        check: 'url("/assets/check.svg")',
      },
      backgroundImage: {
        hero: 'url("/src/assets/AFIT1.png")',
        contact: 'url("/src/assets/background.png")'
      }
    },
  },
  plugins: [],
};

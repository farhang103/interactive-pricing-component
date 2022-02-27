const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "375px",
        lg: "1440px",
      },

      colors: {
        primary: {
          fullSliderBar: "hsl(174, 77%, 80%)",
          sliderBackground: "hsl(174, 86%, 45%)",
          discountBackground: "hsl(14, 92%, 95%)",
          discountText: "hsl(15, 100%, 70%)",
          ctaText: "hsl(226, 100%, 87%)",
        },

        neutral: {
          priceComponentBackground: "hsl (0, 0%, 100%)",
          mainBackgorund: "hsl(230, 100%, 99%)",
          emptySliderBar: "hsl(224, 65%, 95%)",
          toggleBackground: "hsl(223, 50%, 87%)",
          text: "hsl(225, 20%, 60%)",
          text_ctaBackground: "hsl(227, 35%, 25%)",
        },
      },

      fontFamily: {
        manrope: ["Manrope", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};

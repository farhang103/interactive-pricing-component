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
          fullSliderBar: "hsl(174, 77%, 80%)", //- Soft Cyan
          sliderBackground: "hsl(174, 86%, 45%)", //- Strong Cyan
          discountBackground: "hsl(14, 92%, 95%)", //- Light Grayish Red
          discountText: "hsl(15, 100%, 70%)", //- Light Red
          ctaText: "hsl(226, 100%, 87%)", //- Pale Blue
        },

        neutral: {
          priceComponentBackground: "hsl(0, 0%, 100%)", //- White
          mainBackgorund: "hsl(230, 100%, 99%)", //- Very Pale Blue
          emptySliderBar: "hsl(224, 65%, 95%)", //- Light Grayish Blue
          toggleBackground: "hsl(223, 50%, 87%)", //- Light Grayish Blue
          text: "hsl(225, 20%, 60%)", //- Grayish Blue
          text_ctaBackground: "hsl(227, 35%, 25%)", //- Dark Desaturated Blue
        },
      },

      fontFamily: {
        manrope: ["Manrope", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          softCyan: "hsl(174, 77%, 80%)",
          strongCyan: "hsl(174, 86%, 45%)",
          lightGrayishRed: "hsl(14, 92%, 95%)",
          lightRed: "hsl(15, 100%, 70%)",
          paleBlue: "hsl(226, 100%, 87%)",
        },

        neutral: {
          white: "hsl (0, 0%, 100%)",
        },
      },
    },
  },
  plugins: [],
};

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontSize: {
      xs: ["0.75rem", { lineHeight: "1rem" }],
      sm: ["0.875rem", { lineHeight: "1.25rem" }],
      base: ["1rem", { lineHeight: "1.5rem" }],
      lg: ["1.125rem", { lineHeight: "1.75rem" }],
      xl: ["1.25rem", { lineHeight: "1.75rem" }],
      "2xl": ["1.5rem", { lineHeight: "2rem" }],
      "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
      "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
      "5xl": ["3rem", { lineHeight: "1" }],
      "6xl": ["3.75rem", { lineHeight: "1" }],
      "7xl": ["4.5rem", { lineHeight: "1" }],
      "8xl": ["6rem", { lineHeight: "1" }],
      "9xl": ["8rem", { lineHeight: "1" }],
    },
    extend: {
      animation: { cursor: "cursor 1s infinite" },
      keyframes: {
        cursor: {
          "0%, 100%": { opacity: "0" },
          "50%": { opacity: "1" },
        },
      },
      colors: {
        burnt: "#bf5700",
      },
      typography: () => {
        return {
          default: {
            css: {
              "code::before": false,
              "code::after": false,
              "blockquote p:first-of-type::before": false,
              "blockquote p:last-of-type::after": false,
            },
          },
        };
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

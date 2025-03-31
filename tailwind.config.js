/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      primary: {
        100: "rgba(0, 175, 240, 0.1)",
        200: "rgba(0, 175, 240, 0.2)",
        300: "rgba(0, 175, 240, 0.3)",
        400: "rgba(0, 175, 240, 0.4)",
        500: "rgba(0, 175, 240, 0.5)",
        600: "rgba(0, 175, 240, 0.6)",
        700: "rgba(0, 175, 240, 0.7)",
        800: "rgba(0, 175, 240, 0.8)",
        900: "rgba(0, 175, 240, 0.9)",
        1: "rgba(0, 175, 240, 1)",
      },
      secondary: {
        100: "rgba(82, 206, 240, 0.1)",
        200: "rgba(82, 206, 240, 0.2)",
        300: "rgba(82, 206, 240, 0.3)",
        400: "rgba(82, 206, 240, 0.4)",
        500: "rgba(82, 206, 240, 0.5)",
        600: "rgba(82, 206, 240, 0.6)",
        700: "rgba(82, 206, 240, 0.7)",
        800: "rgba(82, 206, 240, 0.8)",
        900: "rgba(82, 206, 240, 0.9)",
        1: "rgba(82, 206, 240, 1)",
      },
      accent: {
        100: "rgba(60, 149, 155, 0.1)",
        200: "rgba(60, 149, 155, 0.2)",
        300: "rgba(60, 149, 155, 0.3)",
        400: "rgba(60, 149, 155, 0.4)",
        500: "rgba(60, 149, 155, 0.5)",
        600: "rgba(60, 149, 155, 0.6)",
        700: "rgba(60, 149, 155, 0.7)",
        800: "rgba(60, 149, 155, 0.8)",
        900: "rgba(60, 149, 155, 0.9)",
        1: "rgba(60, 149, 155, 1)",
      },
      textpr: "rgba(44, 45, 46, 1)",
      textsc: "rgba(145, 147, 153, 1)",
    },
  },
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "daisyui"],
  theme: {
    extend: {
      colors: {
        base: "#E6F4F1",
        azul: "#00AAAB",
        clarito: "#e2fffe",
        celeste: "#0088CA",
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
};

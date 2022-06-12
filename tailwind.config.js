/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
   daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#3ABFF8",
          secondary: "#92C7C7",
          accent: "#033E3E",
          neutral: "#25383C",
          "base-100": "#ffffff",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

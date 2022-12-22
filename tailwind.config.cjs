/** @type {import("tailwindcss").Config} */


const colors = require("tailwindcss/colors")




let bright = false




module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        background: "#FFF",
        onBackground: "#000",
        primary: "#000",
        onPrimary: "#FFF",
      },
    },
  },
  plugins: [],
  // !!
}

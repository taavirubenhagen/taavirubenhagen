/** @type {import("tailwindcss").Config} */


const colors = require("tailwindcss/colors")




const production = !process.env.ROLLUP_WATCH;
let bright = false




module.exports = {
    mode: 'jit',
    content: ["./src/**/*.{html,js,svelte,ts}"],
    purge: {
        content: [
            "./src/**/*.svelte",
        ],
        enabled: production,
    },
    plugins: [],
    theme: {
        fontFamily: {
            body: ['Lexend'],
            display: ['Caveat', 'Arial'],
            sans: ['Lexend'],
            mono: ['IBM Plex Mono', 'Consolas'],
        },
        transitionTimingFunction: {
          //DEFAULT: 'cubic-bezier(0.2, 0, 0.4, 1)',
          DEFAULT: 'cubic-bezier(.4, 0, .2, 1)',
          default_tailwind: 'cubic-bezier(0.4, 0, 0.2, 1)',
        },
        extend: {
            colors: {
                background: "#FFF",
                onBackground: "#000",
                primary: "#000",
                onPrimary: "#FFF",
                secondary: colors.neutral["100"],
                onSecondary: "#000",
            },
            flex: {
                center_col: "flex flex-col justify-center items-center",
                center_row: "flex flex-row justify-center items-center",
            },
            fontFamily: {
              logo: ['Permanent Marker'],
              rounded: ['Quicksand'],
              slab: ['Aleo'],           // TODO: F
              handwriting: ['Caveat'],
            },
            transitionDelay: {
                0: '0s',
                100: '100ms',
                200: '200ms',
                400: '400ms',
                800: '800ms',
                1600: '1600ms',
                3200: '3200ms',
            },
            transitionDuration: {
                DEFAULT: '100ms',
                0: '0s',
                100: '100ms',
                200: '200ms',
                400: '400ms',
                800: '800ms',
                1600: '1600ms',
                3200: '3200ms',
            },
        },
    },
}

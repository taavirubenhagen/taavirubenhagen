/** @type {import("tailwindcss").Config} */


const colors = require("tailwindcss/colors");




const production = !process.env.ROLLUP_WATCH;




module.exports = {
    mode: 'jit',
    content: [
        "./src/**",
        "./tavy/**",
    ],
    plugins: [],
    theme: {
        fontFamily: {
            body: ['Lexend'],
            display: ['Caveat', 'Arial'],
            sans: ['Lexend'],
            mono: ['IBM Plex Mono', 'Consolas'],
        },
        extend: {
            colors: {
                background: "#FFF",
                //onBackground: "#000",
                primary: "#000",
                accent: '#00F',
                //onPrimary: "#FFF",
                //secondary: colors.neutral["500"],
                //onSecondary: "#000",
                error: colors.red['500'],
                onError: "#FFF",
            },
            flex: {
                center_col: "flex flex-col justify-center items-center",
                center_row: "flex flex-row justify-center items-center",
            },
            fontFamily: {
              logo: ['Permanent Marker'],
              rounded: ['Quicksand'],
              slab: ['Aleo'],           // TODO: F
              handwriting: ['Permanent Marker', 'Yellowtail', 'Caveat'],
            },
            transitionDelay: {
                0: '0s',
                short: '100ms',
                default: '200ms',
                medium: '400ms',
                long: '800ms',
                1600: '1600ms',
                3200: '3200ms',
            },
            transitionDuration: {
                DEFAULT: '200ms',
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

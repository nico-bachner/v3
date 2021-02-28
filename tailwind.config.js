const colors = require("tailwindcss/colors");
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
    purge: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "media",
    theme: {
        colors: {
            transparent: "transparent",
            current: "currentColor",
            black: "black",
            white: "white",
            gray: colors.gray,
            blue: {
                light: "#93C5FD",
                DEFAULT: "#60A5FA",
                dark: "#3B82F6",
            },
            green: {
                DEFAULT: "#6EE7B7",
            },
        },
        extend: {
            fontFamily: {
                sans: ["Inter", ...fontFamily.sans],
            },
        },
    },
    variants: {
        extend: {
            backgroundOpacity: ["dark"],
        },
    },
};

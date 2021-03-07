const { fontFamily, boxShadow } = require("tailwindcss/defaultTheme");

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
            gray: {
                lightest: "#E5E7EB",
                light: "#D1D5DB",
                DEFAULT: "#9CA3AF",
                dark: "#6B7280",
                darkest: "#374151",
            },
            blue: {
                light: "#93C5FD",
                DEFAULT: "#60A5FA",
                dark: "#3B82F6",
            },
            green: {
                DEFAULT: "#6EE7B7",
            },
        },
        boxShadow: {
            DEFAULT: boxShadow.lg,
            lg: boxShadow["2xl"],
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
            textColor: ["active"],
        },
    },
};

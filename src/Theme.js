import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
    typography: {
        fontFamily: "'Nanum Gothic', sans-serif",
    },
    palette: {
        text: {
            primary: "#000000",
            secondary: "#FFFFFF",
            tertiary: "#4a5d79",
            title: "#013A63",
            subtitle: "#2C7DA0",
            skills: "#013A63",
            nav: "#FFFFFF"
        },

        background: {
            primary: "#FFFFFF",
            secondary: "#000000",
            tertiary: "#013A63",
            skills: "#b5bdc8",
            nav: "#468faf"
        },

        accent: "#468faf",
    },
});

export const darkTheme = createTheme({
    typography: {
        fontFamily: "'Nanum Gothic', sans-serif",
    },
    palette: {
        text: {
            primary: "#FFFFFF",
            secondary: "#000000",
            tertiary: "#979dac",
            title: "#FFFFFF",
            subtitle: "#A9D6E5",
            skills: "#013A63",
            nav: "#FFFFFF"
        },

        background: {
            primary: "#012A4A",
            secondary: "#FFFFFF",
            tertiary: "#013A63",
            skills: "#b5bdc8",
            nav: "#012A4A"
        },

        accent: "#A9D6E5",
    },
});
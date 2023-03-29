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
            nav: "#FFFFFF",
            formtext: "#000000",
            formbutton: "#FFFFFF"
        },

        background: {
            primary: "#FFFFFF",
            secondary: "#000000",
            tertiary: "#013A63",
            skills: "#b5bdc8",
            nav: "#468faf",
            form: "#a9d6e5",
            formtext: "#FFFFFF",
            formbutton: "#013A63"
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
            nav: "#FFFFFF",
            formtext: "#FFFFFF",
            formbutton: "#012A4A"
        },

        background: {
            primary: "#012A4A",
            secondary: "#FFFFFF",
            tertiary: "#01497c",
            skills: "#b5bdc8",
            nav: "#012A4A",
            form: "#01497c",
            formtext: "#012A4A",
            formbutton: "#979dac"
        },

        accent: "#A9D6E5",
    },
});
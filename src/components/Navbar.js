import React, { useState, useContext, useEffect } from 'react';
import { ThemeContext } from "../ThemeContext";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import MenuIcon from '@mui/icons-material/Menu';
import * as Scroll from "react-scroll";
import {
    useTheme,
    styled,
    Typography,
    AppBar,
    Box,
    IconButton,
    Toolbar,
    Button,
    Slide,
    useScrollTrigger
} from '@mui/material'

const navItems = ['About', 'Experience', 'Projects', 'Contact Me'];

const StyledAppBar = styled(AppBar)(({ theme, isScrolled }) => ({
    transition:
        "all 0.4s cubic-bezier(0.645,0.045,0.355,1), background-color 0ms !important",
    transitionDelay: "0.1s",
    boxShadow: isScrolled
        ? "1px 0px 4px -1px rgb(0 0 0 / 20%), 0px 2px 20px 0px rgb(0 0 0 / 14%), 1px -1px 12px 0px rgb(0 0 0 / 12%) !important"
        : "none !important",
    backgroundColor: theme.palette.background.nav + " !important",
}));

const StyledAppBarContainer = styled("div")(({ theme }) => ({
    flexDirection: "column",
    alignItems: "center",
    alignSelf: "center",
    placeSelf: "center",
    justifyContent: "center",
    maxWidth: "1200px",
    width: "90vw !important",
    [theme.breakpoints.down("sm")]: {
        width: "100vw !important",
    },
}));

const StyledButton = styled(Button)(({ theme }) => ({
    color: theme.palette.text.nav,
    minWidth: "40px",
    transform: "none",
    transition: "none",
    cursor: "pointer",
    "&:hover": {
        transition: "0.2s",
        transform: "scale(1.1)",
    }
}));

const StyledResumeLink = styled("a")(({ theme }) => ({
    cursor: "pointer",
    textDecoration: "none",
    display: "inline-flex",
    "& p": {
        borderRadius: "8px !important",
        padding: "0.25rem 0.5rem",
        marginLeft: "0.25rem",
        fontSize: "14px",
        fontWeight: "bold",
        color: theme.palette.background.primary,
        backgroundColor: theme.palette.text.title + " !important",
        transform: "none",
        transition: "0.2s",
        "&:hover": {
            transform: "scale(1.1)",
        }
    },
}));

function Navbar() {
    const { theme, setTheme } = useContext(ThemeContext);
    const MuiTheme = useTheme();
    const [mobileOpen, setMobileOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        function handleScroll() {
            const scrollY = window.scrollY;
            if (scrollY > 60) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        }
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        setTimeout(() => {
            setHasAnimated(true);
        }, 1000);
    }, []);

    const trigger = useScrollTrigger({
        target: window,
    });

    const toggleTheme = () => {
        const newTheme = (theme === 'light' ? 'dark' : 'light')
        setTheme(newTheme)
    }

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const scrollToSection = (element) => {
        Scroll.scroller.scrollTo(element, {
            duration: 1000,
        });
    };

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            <StyledAppBar component="nav" position="fixed" isScrolled={isScrolled}>
                <StyledAppBarContainer>
                    <Toolbar className="animate__animated animate__fadeInDown">
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1 }}
                        >
                            <Button sx={{ maxHeight: "2rem" }} onClick={() => { window.location.reload() }}>
                                <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                                    width="50px" height="50px" viewBox="0 0 70 70"
                                    preserveAspectRatio="xMidYMid meet">

                                    <g transform="translate(0.000000,67.000000) scale(0.100000,-0.100000)"
                                        fill={MuiTheme.palette.text.nav} stroke="none">
                                        <path d="M37 642 c-15 -16 -17 -53 -17 -308 0 -212 3 -293 12 -302 9 -9 90
                                                    -12 304 -12 291 0 293 0 308 22 14 19 16 65 16 300 0 265 -1 279 -20 298 -19
                                                    19 -33 20 -303 20 -262 0 -285 -1 -300 -18z m575 -29 c17 -15 18 -37 18 -275
                                                    0 -245 -1 -259 -20 -278 -19 -19 -33 -20 -275 -20 -242 0 -256 1 -275 20 -19
                                                    19 -20 33 -20 273 0 212 2 256 16 275 15 22 18 22 276 22 229 0 264 -2 280
                                                    -17z"/>
                                        <path d="M190 497 c0 -9 9 -19 20 -22 19 -6 20 -15 20 -141 0 -127 -1 -134
                                                    -20 -134 -11 0 -20 -7 -20 -15 0 -12 17 -15 98 -15 113 0 154 17 178 75 21 51
                                                    18 153 -6 192 -33 55 -62 67 -172 71 -83 4 -98 2 -98 -11z m209 -52 c51 -44
                                                    55 -156 7 -212 -20 -23 -31 -27 -77 -28 l-54 0 -3 133 -3 132 50 0 c38 0 56
                                                    -6 80 -25z"/>
                                    </g>
                                </svg>
                            </Button>
                        </Typography>
                        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                            <StyledButton onClick={toggleTheme}>
                                {theme === "light" ? <WbSunnyIcon /> : <DarkModeIcon />}
                            </StyledButton>
                            {navItems.map((item) => (
                                <StyledButton key={item} onClick={() => { scrollToSection(item) }}>
                                    {item}
                                </StyledButton>
                            ))}
                            <StyledResumeLink
                                href={
                                    process.env.PUBLIC_URL + "/static/david_delgrosso_resume.pdf"
                                }
                                target="_blank"
                            >
                                <Typography>RESUME</Typography>
                            </StyledResumeLink>
                        </Box>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </StyledAppBarContainer>
            </StyledAppBar>
        </Slide>
    );
}

export default Navbar;
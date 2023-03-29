import { React, useState, useEffect } from "react";
import { useTheme, useMediaQuery, styled } from "@mui/material";
import { motion } from "framer-motion";
import "animate.css";

//Component styles
const StyledLoaderContainer = styled("div")(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
    position: "fixed",
    backgroundColor: theme.palette.background.primary,
}));

//End Component styles

const pathVariants = {
    hidden: {
        pathLength: 0,
    },
    visible: {
        pathLength: 1,
        transition: {
            duration: 2,
            ease: "easeIn",
        },
    },
};

const Loader = () => {
    const [hasLoaded, setHasLoaded] = useState(false);
    const theme = useTheme();

    useEffect(() => {
        setTimeout(() => {
            setHasLoaded(true);
        }, 1800);
    }, []);

    return (
        <StyledLoaderContainer>
            <div className={hasLoaded ? "animate__animated animate__fadeOut" : ""}>
                <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 140 140"
                    width="16rem"
                    initial="hidden"
                    animate="visible"
                >
                    <motion.path
                        d="M37 642 c-15 -16 -17 -53 -17 -308 0 -212 3 -293 12 -302 9 -9 90
                        -12 304 -12 291 0 293 0 308 22 14 19 16 65 16 300 0 265 -1 279 -20 298 -19
                        19 -33 20 -303 20 -262 0 -285 -1 -300 -18z m575 -29 c17 -15 18 -37 18 -275
                        0 -245 -1 -259 -20 -278 -19 -19 -33 -20 -275 -20 -242 0 -256 1 -275 20 -19
                        19 -20 33 -20 273 0 212 2 256 16 275 15 22 18 22 276 22 229 0 264 -2 280
                        -17z M190 497 c0 -9 9 -19 20 -22 19 -6 20 -15 20 -141 0 -127 -1 -134
                        -20 -134 -11 0 -20 -7 -20 -15 0 -12 17 -15 98 -15 113 0 154 17 178 75 21 51
                        18 153 -6 192 -33 55 -62 67 -172 71 -83 4 -98 2 -98 -11z m209 -52 c51 -44
                        55 -156 7 -212 -20 -23 -31 -27 -77 -28 l-54 0 -3 133 -3 132 50 0 c38 0 56
                        -6 80 -25z"
                        transform="translate(0.000000,80.000000) scale(0.100000,-0.100000)"
                        fill="none"
                        stroke={theme.palette.accent}
                        strokeWidth="55"
                        variants={pathVariants}
                    />
                </motion.svg>
            </div>
        </StyledLoaderContainer>
    );
};

export default Loader;
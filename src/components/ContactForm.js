import React, { useState, useEffect } from 'react'
import { useInView, InView } from "react-intersection-observer";
import * as Scroll from "react-scroll";
import {
    StyledDivider,
    StyledGenericContainer,
    StyledGenericRoot,
    StyledGenericSubText,
    StyledGenericTitle,
} from "./Styles";
import "animate.css";
import { useTheme, styled, Typography } from '@mui/material';
import emailjs from "@emailjs/browser";

const ContactForm = () => {
    const [values, setValues] = useState({
        name: "",
        email: "",
        message: ""
    })
    const [formSubmitted, setFormSubmitted] = useState(false)
    const [formStatus, setFormStatus] = useState('Send')
    const theme = useTheme();

    useEffect(() => {
        emailjs.init(process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY)
    }, []);

    const [contactContainer, contactContainerInView] = useInView({
        threshold: 0.2,
        triggerOnce: true,
    });

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.send(process.env.REACT_APP_EMAIL_JS_SERVICE_ID, process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID, values)
            .then((result) => {
                setFormStatus("Message Sent")
                console.log(result.text);
            }, (error) => {
                setFormStatus("Message Failed")
                console.log(error.text);
            });
        
        setFormSubmitted(true);
    };

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    }

    return (
        <Scroll.Element name="Contact Me">
            <StyledGenericRoot ref={contactContainer}>
                <StyledGenericContainer
                    sx={
                        contactContainerInView
                            ? {
                                visibility: "visible",
                                animation: "fadeInUp",
                                animationDuration: "1s",
                            }
                            : { visibility: "hidden" }
                    }
                    className={
                        contactContainerInView ? "animate__animated animate__fadeInUp" : ""
                    }
                >
                    <StyledGenericTitle component="h1">
                        Contact Me
                        <StyledDivider />
                    </StyledGenericTitle>
                    <StyledGenericSubText component="h1">
                        While I'm not actively looking for new opportunities, I'm always open to making new connections. Feel free to reach out and I will do my best to respond in a timely manner.
                    </StyledGenericSubText>
                    <form
                        style={{
                            borderRadius: "1rem",
                            width: "60%",
                            padding: "2rem",
                            marginTop: "2rem",
                            backgroundColor: `${theme.palette.background.form}75`,
                        }}
                        onSubmit={sendEmail}
                    >
                        <Typography>
                            <div className="mb-3">
                                <label className="form-label" htmlFor="name">
                                    Full Name
                                </label>
                                <input className="form-control" type="text" name="name" placeholder="Enter your name here..." onChange={handleChange} required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label" htmlFor="email">
                                    Email
                                </label>
                                <input className="form-control" type="email" name="email" placeholder="Enter your email here..." onChange={handleChange} required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label" htmlFor="message">
                                    Message
                                </label>
                                <textarea className="form-control" name="message" placeholder="Enter your message here..." onChange={handleChange} required />
                            </div>
                            <button
                                className={`btn ${formSubmitted ? "disabled" : ""}`}
                                style={{
                                    color: theme.palette.text.secondary,
                                    backgroundColor: theme.palette.text.title,
                                    width: "50%",
                                    marginInline: "25%"
                                }}
                                type="submit"
                            >
                                {formStatus}
                            </button>
                        </Typography>
                    </form>
                </StyledGenericContainer>
            </StyledGenericRoot>
        </Scroll.Element>
    )
}

export default ContactForm
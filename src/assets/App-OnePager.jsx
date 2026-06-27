import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Circle from "./assets/circle.svg";
import SemiCircle from "./assets/semi circle.svg";
import Squiggly from "./assets/squiggly.svg";
import Triangle from "./assets/triangle.svg";
import MSH from "./assets/MSH Logo.ico";
import Me from "./assets/MSH-Sketch.jpg";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faGithub,
    faLinkedinIn,
    faHtml5,
    faCss3,
    faJava,
    faReact,
} from "@fortawesome/free-brands-svg-icons";
import { faFilePdf, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
    faAt,
    faTimes,
    faSpinner,
    faLink,
} from "@fortawesome/free-solid-svg-icons";
library.add({
    faGithub,
    faLinkedinIn,
    faFilePdf,
    faHtml5,
    faCss3,
    faJava,
    faReact,
    faEnvelope,
    faTimes,
    faSpinner,
    faLink,
});
import Movies from "./assets/movies-about-page.png";
import Netflix from "./assets/netflix-landing-page.png";
import Spotify from "./assets/spotify-landing-page.png";
import Library from "./assets/Library-Cart-page.png";

const App = () => {
    useEffect(() => {
        // Load EmailJS script
        const script = document.createElement("script");
        script.src =
            "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js";
        script.type = "text/javascript";
        script.async = true;
        document.head.appendChild(script);

        // Initialize EmailJS after script loads
        script.onload = () => {
            emailjs.init("A6ds1qhmaDYSxiRr9");
        };

        // Cleanup: remove script on unmount
        return () => {
            if (script.parentNode) {
                script.parentNode.removeChild(script);
            }
        };
    }, []);

    let contrastToggle = false;

    // Handler for mouse movement
    function moveBackground(event) {
        const shapes = document.querySelectorAll(".shape");

        const x = event.clientX * 0.05;
        const y = event.clientY * 0.05;

        for (let i = 0; i < shapes.length; ++i) {
            const isOdd = i % 2 !== 0;
            const boolInt = isOdd ? -1 : 1;
            shapes[i].style.transform =
                `translate(${x * boolInt}px, ${y * boolInt}px)`;
        }
    }

    // Attach and cleanup the event listener correctly
    useEffect(() => {
        window.addEventListener("mousemove", moveBackground);

        return () => {
            window.removeEventListener("mousemove", moveBackground);
        };
    }, []);

    function toggleContrast() {
        contrastToggle = !contrastToggle;
        if (toggleContrast) {
            document.body.classList.add("dark-theme");
        } else {
            document.body.classList.remove("dark-theme");
        }
    }

    function contact(event) {
        // Component state for modal visibility
        const [loadingVisible, setLoadingVisible] = useState(false);
        const [successVisible, setSuccessVisible] = useState(false);

        // Handle form submission
        const handleSubmit = async (event) => {
            event.preventDefault();

            try {
                setLoadingVisible(true); // show loading overlay

                await emailjs.sendForm(
                    "service_otp7b4l",
                    "template_onlzcwr",
                    event.target,
                    "A6ds1qhmaDYSxiRr9",
                );

                setLoadingVisible(false);
                setSuccessVisible(true); // show success overlay
            } catch (error) {
                setLoadingVisible(false);
                alert(
                    "The email service is unavailable at this time. Please contact me directly: Hirani.dotcom@gmail.com",
                );
            }
        };
    }

    const [isModalOpen, setIsModalOpen] = useState(false);

    function toggleModal() {
        setIsModalOpen((prev) => !prev);
    }

    // Side effect: add/remove class on body when modal changes
    useEffect(() => {
        if (isModalOpen) {
            document.body.classList.add("modal--open");
        } else {
            document.body.classList.remove("modal--open");
        }

        // Cleanup on unmount
        return () => document.body.classList.remove("modal--open");
    }, [isModalOpen]);

    // emailjs.send("service_otp7b4l", "template_onlzcwr");

    return (
        <div>
            <nav>
                <figure>
                    <img id="personal-logo" src={Me} alt="" />
                </figure>
                <ul className="nav__link--list">
                    <li className="nav__link click">
                        <a
                            href="/landing"
                            className="nav__link--anchor link__hover-effect link__hover-effect--black"
                            onClick={toggleModal}
                        >
                            About
                        </a>
                    </li>
                    <li className="nav__link click">
                        <a
                            href="/projects"
                            className="nav__link--anchor link__hover-effect link__hover-effect--black"
                        >
                            Projects
                        </a>
                    </li>
                    <li className="nav__link click">
                        <button
                            href="/"
                            className="nav__link--anchor link__hover-effect link__hover-effect--black"
                            onClick={toggleModal}
                        >
                            Contact
                        </button>
                    </li>
                </ul>
            </nav>

            <section>
                <header id="landing" onMouseMove={moveBackground(event)} className="header">
                    <div className="header__content">
                        <h1 className="title">Hello</h1>
                        <h1 className="title purple">I'm Manji.</h1>
                        <p className="header__para">
                            I'm a{" "}
                            <b className="purple">Frontend Software Engineer</b>{" "}
                            with a strong passion for experiences.
                            <br />
                            Here's a bit more{" "}
                            <b className="purple">about me.</b>
                        </p>
                        <div className="social__list">
                            <a
                                href="https://www.linkedin.com"
                                target="_blank"
                                className="social__link click"
                            >
                                <FontAwesomeIcon icon={faLinkedinIn} />
                            </a>
                            <a
                                href="https://www.github.com"
                                target="_blank"
                                className="social__link click"
                            >
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                            <a
                                alt="Under Build-Out"
                                target="_blank"
                                className="social__link no__cursor"
                            >
                                <FontAwesomeIcon icon={faFilePdf} />
                            </a>
                        </div>
                    </div>
                </header>

                <button
                    href="landing"
                    className="mail__btn click"
                    onClick={toggleModal}
                >
                    <FontAwesomeIcon icon={faEnvelope} />
                </button>

                <a href="#projects" className="scroll">
                    <div className="scroll__icon click"></div>
                </a>

                <div className="modal">
                    <div className="modal__half modal__about">
                        <h3 className="modal__title modal__title--about">
                            Here's a bit about me.
                        </h3>
                        <h4 className="modal__subtitle modal__subtitle--about">
                            Frontend Software Engineer
                        </h4>
                        <p className="modal__para">
                            I am a passionate
                            <b className="purple">
                                Frontend Software Engineer
                            </b>{" "}
                            with a strong focus on creating intuitive,
                            responsive, and visually appealing user interfaces.
                            <br />
                            <br />
                            Skilled in technologies like HTML, CSS, JavaScript,
                            and modern frameworks such as React, I enjoy
                            <b className="purple">
                                {" "}
                                transforming complex ideas
                            </b>{" "}
                            into seamless digital experiences. My approach
                            combines clean, maintainable code with a keen eye
                            for design, ensuring both functionality and
                            aesthetics.
                            <br />
                            <br />I am eager to contribute my expertise to build
                            engaging web applications that
                            <b className="purple">
                                deliver exceptional user experiences.
                            </b>
                        </p>
                        <div className="modal__languages">
                            <figure className="modal__language">
                                <FontAwesomeIcon
                                    icon={faHtml5}
                                    className="modal__language--img"
                                    alt="HTML5"
                                />
                                <span className="language__name">HTML</span>
                            </figure>
                            <figure className="modal__language">
                                <FontAwesomeIcon
                                    icon={faCss3}
                                    className="modal__language--img"
                                    alt="CSS+3"
                                />
                                <span className="language__name">CSS</span>
                            </figure>
                            <figure className="modal__language">
                                <FontAwesomeIcon
                                    icon={faJava}
                                    className="modal__language--img"
                                    alt="Javascript"
                                />
                                <span className="language__name">
                                    Javascript
                                </span>
                            </figure>
                            <figure className="modal__language">
                                <FontAwesomeIcon
                                    icon={faReact}
                                    className="fa-brands fa-react modal__language--img"
                                    alt="React"
                                />
                                <span className="language__name">React</span>
                            </figure>
                        </div>
                    </div>
                    <div className="modal__half modal__contact">
                        <FontAwesomeIcon
                            icon={faTimes}
                            className="modal__exit click"
                            onClick={toggleModal}
                        />
                        <h3 className="modal__title modal__title--contact">
                            Let's have a chat . . .
                        </h3>
                        <h4 className="modal__subtitle modal__subtitle--contact">
                            I am currently open to new opportunities!
                        </h4>
                        <form id="contact__form" onSubmit={contact(event)}>
                            <div className="form__item">
                                <label className="form__item--label">
                                    Name:{" "}
                                </label>
                                <input
                                    className="input"
                                    input="user_name"
                                    type="text"
                                    required
                                />
                            </div>
                            <div className="form__item">
                                <label className="form__item--label">
                                    Email:{" "}
                                </label>
                                <input
                                    className="input"
                                    input="user_email"
                                    type="email"
                                    required
                                />
                            </div>
                            <div className="form__item">
                                <label className="form__item--label">
                                    Message:{" "}
                                </label>
                                <textarea
                                    className="input"
                                    input="message"
                                    type="text"
                                    required
                                ></textarea>
                            </div>
                            <button
                                id="contact__submit"
                                className="form__submit"
                                type="submit"
                            >
                                Send it to me
                            </button>
                        </form>
                        <div className="modal__overlay modal__overlay--loading">
                            <FontAwesomeIcon icon={faSpinner} />
                        </div>
                        <div className="modal__overlay modal__overlay--success">
                            <FontAwesomeIcon
                                icon={faTimes}
                                className="modal__exit click"
                                onClick={toggleModal}
                            />
                            Thank you for your message! <br />
                            <br />
                            Looking forward to talking with you soon.
                        </div>
                    </div>
                </div>

                <img src={Circle} className="shape shape--0" />
                <img src={SemiCircle} className="shape shape--1" />
                <img src={Squiggly} className="shape shape--2" />
                <img src={Circle} className="shape shape--3" />
                <img src={Triangle} className="shape shape--4" />
                <img src={Circle} className="shape shape--5" />
                <img src={Squiggly} className="shape shape--6" />
                <img src={Circle} className="shape shape--7" />
                <img src={SemiCircle} className="shape shape--8" />
            </section>

            <section id="projects">
                <div className="container">
                    <div className="row">
                        <h1 className="section__title">
                            Here are some of my{" "}
                            <span className="purple">projects</span>
                        </h1>
                        <ul className="project__list">
                            <li className="project">
                                <div className="project__wrapper">
                                    <div className="project__wrapper--bg"></div>
                                    <img
                                        src={Movies}
                                        alt=""
                                        className="project__img"
                                    />
                                    <div className="project__description">
                                        <h3 className="project__description--title">
                                            Movies Search App
                                        </h3>
                                        <h4 className="project__description--subtitle">
                                            HTML, CSS, Javascript
                                        </h4>
                                        <p className="project__description--para">
                                            Using a live link to the IMDB Movies
                                            via API, user get to research some
                                            of their favorite movies by
                                            searching a keyword, sort the
                                            results by name or year of release.
                                            By choosing one of the results, they
                                            will get detailed information about
                                            their chosen movie, such as actors,
                                            genre, plot and IMDB rating. I have
                                            applied my crash course learnings on
                                            HTML, CSS & Javascript to this
                                            project.
                                        </p>
                                        <div className="project__description--links">
                                            <a
                                                href="https://react-app-final-project-six.vercel.app/"
                                                className="project__description--link"
                                            >
                                                <FontAwesomeIcon
                                                    icon={faGithub}
                                                />
                                            </a>
                                            <a
                                                href="#"
                                                className="project__description--link"
                                            >
                                                <FontAwesomeIcon
                                                    icon={faLink}
                                                />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <ul className="project__list">
                            <li className="project">
                                <div className="project__wrapper">
                                    <div className="project__wrapper--bg"></div>
                                    <img
                                        src={Netflix}
                                        alt=""
                                        className="project__img"
                                    />
                                    <div className="project__description">
                                        <h3 className="project__description--title">
                                            Clone of Netflix App
                                        </h3>
                                        <h4 className="project__description--subtitle">
                                            HTML, CSS, Javascript
                                        </h4>
                                        <p className="project__description--para">
                                            Using a live link to the IMDB Movies
                                            via API, user get to research some
                                            of their favorite movies by
                                            searching a keyword, sort the
                                            results by name or year of release.
                                            By choosing one of the results, they
                                            will get detailed information about
                                            their chosen movie, such as actors,
                                            genre, plot and IMDB rating. I have
                                            applied my crash course learnings on
                                            HTML, CSS & Javascript to this
                                            project.
                                        </p>
                                        <div className="project__description--links">
                                            <a
                                                href="https://netflix-clone-liart-two-77.vercel.app/"
                                                className="project__description--link"
                                            >
                                                <FontAwesomeIcon
                                                    icon={faGithub}
                                                />
                                            </a>
                                            <a
                                                href="#"
                                                className="project__description--link"
                                            >
                                                <FontAwesomeIcon
                                                    icon={faLink}
                                                />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <ul className="project__list">
                            <li className="project">
                                <div className="project__wrapper">
                                    <div className="project__wrapper--bg"></div>
                                    <img
                                        src={Spotify}
                                        alt=""
                                        className="project__img"
                                    />
                                    <div className="project__description">
                                        <h3 className="project__description--title">
                                            Clone of Spotify App
                                        </h3>
                                        <h4 className="project__description--subtitle">
                                            HTML, TailwindCSS, Javascript
                                        </h4>
                                        <p className="project__description--para">
                                            Learned from Avinash to create a
                                            Spotify clone app, using a static
                                            database, using TailwindCSS for the
                                            first time. Users can sample a
                                            limited number of audio files,
                                            grouped under a few psuedo albums
                                            where they can play/pause/skip back
                                            & forth/slide within an audio clip.
                                        </p>
                                        <div className="project__description--links">
                                            <a
                                                href="https://spoitfy-clone-tau.vercel.app/"
                                                className="project__description--link"
                                            >
                                                <FontAwesomeIcon
                                                    icon={faGithub}
                                                />
                                            </a>
                                            <a
                                                href="#"
                                                className="project__description--link"
                                            >
                                                <FontAwesomeIcon
                                                    icon={faLink}
                                                />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <ul className="project__list">
                            <li className="project">
                                <div className="project__wrapper">
                                    <div className="project__wrapper--bg"></div>
                                    <img
                                        src={Library}
                                        alt=""
                                        className="project__img"
                                    />
                                    <div className="project__description">
                                        <h3 className="project__description--title">
                                            Online Library App
                                        </h3>
                                        <h4 className="project__description--subtitle">
                                            HTML, CSS, Javascript
                                        </h4>
                                        <p className="project__description--para">
                                            As part of my crash course on HTML,
                                            CSS, Javascript and React, I created
                                            a library app that shows books
                                            available for purchase. Available
                                            books can be sorted in name, price &
                                            rating order. User chooses their
                                            book and gets recommendations of 4
                                            highly-rated books which they can
                                            add to their cart. if they choose a
                                            book already in the cart, they get a
                                            choice to go to the cart or choose
                                            another book. Once user is finished
                                            shopping they get directed to their
                                            cart where they see the final
                                            itemised cost of their shop.
                                            Unfortunately, have not yet worked
                                            out the functionality for the
                                            checkout. I am sure no-one wants to
                                            pay for a fictitious shopping list.
                                        </p>
                                        <div className="project__description--links">
                                            <a
                                                href="https://online-library-clone.vercel.app/"
                                                className="project__description--link"
                                            >
                                                <FontAwesomeIcon
                                                    icon={faGithub}
                                                />
                                            </a>
                                            <a
                                                href="#"
                                                className="project__description--link"
                                            >
                                                <FontAwesomeIcon
                                                    icon={faLink}
                                                />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <footer>
                <div className="row footer__row">
                    <figure className="footer__logo--wrapper">
                        <img src={MSH} className="footer__logo--img" />
                    </figure>
                    <div className="footer__social--list">
                        <a
                            href="https://www.GitHub.com"
                            target="_blank"
                            className="footer__social--link link__hover-effect link__hover-effect--white"
                        >
                            GitHub
                        </a>
                        <a
                            href="https://linkedIn.com"
                            target="_blank"
                            className="footer__social--link link__hover-effect link__hover-effect--white"
                        >
                            LinkedIn
                        </a>
                        <button
                            href="/"
                            className="footer__social--link link__hover-effect link__hover-effect--white"
                            onClick={toggleModal}
                        >
                            Contact
                        </button>
                        <a
                            alt="Under Build-Out"
                            target="_blank"
                            className=" no__cursor footer__social--link link__hover-effect link__hover-effect--white"
                            download
                        >
                            Resume
                        </a>
                    </div>
                    <div className="footer__copyright">
                        Copyright © 2026 Manji S Hirani
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default App;

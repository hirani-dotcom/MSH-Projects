import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Movies from "../assets/movies-app.png";
import Netflix from "../assets/netflix-clone.png";
import Spotify from "../assets/spotify-clone.png";
import ProjSpotify from "./ProjMovies";
import Library from "../assets/library-app.png";
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
import { useNavigate } from "react-router-dom";

const Projects = () => {
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

    const navigate = useNavigate();

    const toMovies = () => {
        navigate = "/movies";
    };

    const toSpotify = () => {
        navigate = "/spotify";
    };

    const toNetflix = () => {
        navigate = "/netflix";
    };

    const toLibrary = () => {
        navigate = "/library";
    };

    return (
        <div>
            <section id="projects">
                <div className="container">
                    <div className="row">
                        <div className="projects__summary">
                            <h1 className="section__title">
                                Here are some of my{" "}
                                <span className="purple">projects</span>
                            </h1>
                            <div className="project__summary--img">
                                <div className="thumbnail__wrapper">
                                    <div className="thumbnail__wrapper--bg">
                                        <a href="/spotify">
                                            <img
                                                className="project__img"
                                                src={Spotify}
                                                alt="Project"
                                                onClick={toSpotify}
                                            />
                                        </a>
                                    </div>
                                </div>
                                <div className="thumbnail__wrapper">
                                    <div className="thumbnail__wrapper--bg">
                                        <a href="/movies">
                                            <img
                                                className="project__img"
                                                src={Movies}
                                                alt="Project"
                                                onClick={toMovies}
                                            />
                                        </a>
                                    </div>
                                </div>
                                <div className="thumbnail__wrapper">
                                    <div className="thumbnail__wrapper--bg">
                                        <a href="/netflix">
                                            <img
                                                className="project__img"
                                                src={Netflix}
                                                alt="Project"
                                                onClick={toNetflix}
                                            />
                                        </a>
                                    </div>
                                </div>
                                <div className="thumbnail__wrapper">
                                    <div className="thumbnail__wrapper--bg">
                                        <a href="/library">
                                            <img
                                                className="project__img"
                                                src={Library}
                                                alt="Project"
                                                onClick={toLibrary}
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Modal */}
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
                        with a strong focus on creating intuitive, responsive,
                        and visually appealing user interfaces.
                        <br />
                        <br />
                        Skilled in technologies like HTML, CSS, JavaScript, and
                        modern frameworks such as React, I enjoy
                        <b className="purple">
                            {" "}
                            transforming complex ideas
                        </b>{" "}
                        into seamless digital experiences. My approach combines
                        clean, maintainable code with a keen eye for design,
                        ensuring both functionality and aesthetics.
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
                            <span className="language__name">Javascript</span>
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
                            <label className="form__item--label">Name: </label>
                            <input
                                className="input"
                                input="user_name"
                                type="text"
                                required
                            />
                        </div>
                        <div className="form__item">
                            <label className="form__item--label">Email: </label>
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
        </div>
    );
};

export default Projects;

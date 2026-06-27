import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Movies from "../assets/movies-app.png";
import Projects from "./Projects";
import { faLink, faSpinner, faTimes } from "@fortawesome/free-solid-svg-icons";
import {
    faCss3,
    faHtml5,
    faJava,
    faReact,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const ProjMovies = () => {
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

    return (
        <div>
            <section id="/movies">
                <ul className="project__list">
                    <li className="project">
                        <div className="project__wrapper">
                            <div className="project__wrapper--bg"></div>
                            <img src={Movies} alt="" className="project__img" />
                            <div className="project__description">
                                <Link to="/projects">
                                    <FontAwesomeIcon
                                        icon={faTimes}
                                        className="modal__exit click"
                                    />
                                </Link>
                                <h3 className="project__description--title">
                                    Movies Search App
                                </h3>
                                <h4 className="project__description--subtitle">
                                    HTML, CSS, Javascript, React, Firestore
                                    Authentication
                                </h4>
                                <p className="project__description--para">
                                    Using a live link to the IMDB Movies via
                                    API, user get to research some of their
                                    favorite movies by searching a keyword, sort
                                    the results by name or year of release. By
                                    choosing one of the results, they will get
                                    detailed information about their chosen
                                    movie, such as actors, genre, plot and IMDB
                                    rating. I have applied my crash course
                                    learnings on HTML, CSS,Javascript & React to
                                    this project.
                                </p>
                                <div className="project__description--links">
                                    <a
                                        href="https://react-app-final-project-six.vercel.app/"
                                        className="project__description--link"
                                    >
                                        <FontAwesomeIcon icon={faLink} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>

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
                        <Link to="/projects">
                            <FontAwesomeIcon
                                icon={faTimes}
                                className="modal__exit click"
                            />
                        </Link>
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
            </section>
        </div>
    );
};

export default ProjMovies;

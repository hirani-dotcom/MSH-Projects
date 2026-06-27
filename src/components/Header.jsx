import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLinkedin,
    faGithub,
    faHtml5,
    faCss3,
    faJava,
    faReact,
} from "@fortawesome/free-brands-svg-icons";
import { faFilePdf } from "@fortawesome/free-regular-svg-icons";
import { faTimes, faSpinner } from "@fortawesome/free-solid-svg-icons";
import Circle from "../assets/circle.svg";
import SemiCircle from "../assets/semi circle.svg";
import Squiggly from "../assets/squiggly.svg";
import Triangle from "../assets/triangle.svg";
import Resume from "../assets/FES Resume MSH.pdf";
import { Link } from "react-router-dom";

const Header = () => {
    // Handler for mouse movement
    function moveBackground(event) {
        const shapes = document.querySelectorAll(".shape");

        const x = event.clientX * 0.06;
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

    const toggleModal = () => setIsModalOpen((prev) => !prev);
    console.log(isModalOpen);

    return (
        <div>
            <section id="landing" onMouseMove={moveBackground(event)}>
                <header className="header">
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
                            <Link
                                to="https://www.linkedin.com"
                                target="_blank"
                                className="social__link click"
                            >
                                <FontAwesomeIcon icon={faLinkedin} />
                            </Link>
                            <Link
                                to="https://www.github.com"
                                target="_blank"
                                className="social__link click"
                            >
                                <FontAwesomeIcon icon={faGithub} />
                            </Link>
                            <Link
                                to={Resume}
                                target="_blank"
                                className="social__link no__cursor"
                            >
                                <FontAwesomeIcon icon={faFilePdf} />
                            </Link>
                        </div>
                    </div>
                </header>

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
                        <Link to="/">
                            <FontAwesomeIcon
                                icon={faTimes}
                                className="modal__exit click"
                                onClick={toggleModal}
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
                                onClick={() => setIsModalOpen(false)}
                            />
                            Thank you for your message! <br />
                            <br />
                            Looking forward to talking with you soon.
                        </div>
                    </div>
                </div>

                {/* Floating Shapes */}
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
        </div>
    );
};

export default Header;

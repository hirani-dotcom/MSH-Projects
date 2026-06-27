import React, { useEffect, useState } from "react";
import MSH from "../assets/MSH Logo.ico";
import Resume from "../assets/FES Resume MSH.pdf";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const Footer = () => {
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
        <div className="footer__container">
            <footer>
                <div className="row footer__row">
                    <figure className="footer__logo--wrapper">
                        <img src={MSH} className="footer__logo--img" />
                    </figure>
                    <div className="footer__social--list">
                        <Link
                            to="https://www.GitHub.com"
                            target="_blank"
                            className="nav__link--anchor link__hover-effect link__hover-effect--white"
                        >
                            GitHub
                        </Link>
                        <Link
                            to="https://linkedIn.com"
                            target="_blank"
                            className="nav__link--anchor link__hover-effect link__hover-effect--white"
                        >
                            LinkedIn
                        </Link>
                        <Link
                            to={Resume}
                            target="_blank"
                            className="nav__link--anchor link__hover-effect link__hover-effect--white"
                            download
                        >
                            Resume
                        </Link>
                        <button
                            className="mail__btn click"
                            onClick={toggleModal}
                        >
                            <FontAwesomeIcon icon={faEnvelope} />
                        </button>
                    </div>
                    <div className="footer__copyright">
                        Copyright © 2026 Manji S Hirani
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;

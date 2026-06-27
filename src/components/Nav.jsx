import React, { useState, useEffect } from "react";
import ReactDom from "react-dom/client";
import Me from "../assets/MSH-Sketch.jpg";
import { Link } from "react-router-dom";

const Nav = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => setIsModalOpen(prev => !prev);

    console.log(isModalOpen)
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
        <div className="nav__container">
            <nav>
                <figure>
                    <img id="personal-logo" src={Me} alt="" />
                </figure>
                <ul className="nav__link--list">
                    <li className="nav__link click">
                        <Link to="/"
                            className="nav__link--anchor link__hover-effect link__hover-effect--black"
                        >
                            About
                        </Link>
                    </li>
                    <li className="nav__link click">
                        <Link to="/projects"
                            className="nav__link--anchor link__hover-effect link__hover-effect--black">
                            Projects
                        </Link>
                    </li>
                    <li className="nav__link click">
                        <Link to="/"
                            className="nav__link--anchor link__hover-effect link__hover-effect--black"
                            onClick={toggleModal}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Nav;

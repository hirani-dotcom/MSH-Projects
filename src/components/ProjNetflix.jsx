import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import Netflix from "../assets/netflix-clone.png";

const ProjNetflix = () => {
    return (
        <div id="/netflix">
            <ul className="project__list">
                <li className="project">
                    <div className="project__wrapper">
                        <div className="project__wrapper--bg"></div>
                        <img src={Netflix} alt="" className="project__img" />
                        <div className="project__description">
                            <h3 className="project__description--title">
                                Clone of Netflix App
                            </h3>
                            <h4 className="project__description--subtitle">
                                HTML, CSS, Javascript, React, Firestore
                                Authentication
                            </h4>
                            <p className="project__description--para">
                                Using a static data file of limited movies resource, learned from Avinash to create a user authentication dialogue linked to Firestore and upon successful registration / sign in, user gets to browse the database, grouped under a variety of categories, and watch trailers available.
                            </p>
                            <div className="project__description--links">
                                <a
                                    href="https://netflix-clone-liart-two-77.vercel.app/"
                                    className="project__description--link"
                                >
                                    <FontAwesomeIcon icon={faLink} />
                                </a>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default ProjNetflix;

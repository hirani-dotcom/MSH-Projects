import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import Movies from "../assets/movies-app.png";

const ProjMovies = () => {
    return (
        <div id="/movies">
            <ul className="project__list">
                <li className="project">
                    <div className="project__wrapper">
                        <div className="project__wrapper--bg"></div>
                        <img src={Movies} alt="" className="project__img" />
                        <div className="project__description">
                            <h3 className="project__description--title">
                                Movies Search App
                            </h3>
                            <h4 className="project__description--subtitle">
                                HTML, CSS, Javascript, React, Firestore
                                Authentication
                            </h4>
                            <p className="project__description--para">
                                Using a live link to the IMDB Movies via API, user get to research some of their favorite movies by searching a keyword, sort the results by name or year of release. By choosing one of the results, they will get detailed information about their chosen movie, such as actors, genre, plot and IMDB rating. I have applied my crash course learnings on HTML, CSS,Javascript & React to this project.
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
        </div>
    );
};

export default ProjMovies;

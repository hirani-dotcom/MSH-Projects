import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import Spotify from "../assets/spotify-clone.png";

const ProjSpotify = () => {
    return (
        <div id="/spotify">
            <ul className="project__list">
                <li className="project">
                    <div className="project__wrapper">
                        <div className="project__wrapper--bg"></div>
                        <img src={Spotify} alt="" className="project__img" />
                        <div className="project__description">
                            <h3 className="project__description--title">
                                Clone of Spotify App
                            </h3>
                            <h4 className="project__description--subtitle">
                                HTML, TailwindCSS, Javascript, React
                            </h4>
                            <p className="project__description--para">
                                Learned from Avinash to create a Spotify clone app, using a static database, using TailwindCSS for the first time. Users can sample a limited number of audio files, grouped under a few psuedo albums where they can play/pause/skip back & forth/slide within an audio clip.
                            </p>
                            <div className="project__description--links">
                                <a
                                    href="https://spoitfy-clone-tau.vercel.app/"
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

export default ProjSpotify;

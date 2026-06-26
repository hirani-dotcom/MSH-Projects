import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import Library from "../assets/library-app.png";

const ProjLibrary = () => {
    return (
        <div id="/library">
            <ul className="project__list">
                <li className="project">
                    <div className="project__wrapper">
                        <div className="project__wrapper--bg"></div>
                        <img src={Library} alt="" className="project__img" />
                        <div className="project__description">
                            <h3 className="project__description--title">
                                Online Library App
                            </h3>
                            <h4 className="project__description--subtitle">
                                HTML, CSS, Javascript
                            </h4>
                            <p className="project__description--para">
                                As part of my crash course on HTML, CSS,
                                Javascript and React, I created a library app
                                that shows books available for purchase.
                                Available books can be sorted in name, price &
                                rating order. User chooses their book and gets
                                recommendations of 4 highly-rated books which
                                they can add to their cart. if they choose a
                                book already in the cart, they get a choice to
                                go to the cart or choose another book. Once user
                                is finished shopping they get directed to their
                                cart where they see the final itemised cost of
                                their shop. Unfortunately, have not yet worked
                                out the functionality for the checkout. I am
                                sure no-one wants to pay for a fictitious
                                shopping list.
                            </p>
                            <div className="project__description--links">
                                <a
                                    href="https://online-library-clone.vercel.app/"
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

export default ProjLibrary;

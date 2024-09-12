import React, { useState } from 'react'
import "./qualification.css";


const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    }
    return (
        <section className="qualification section" id='qulification'>
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My Personal Journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
                        onClick={() => toggleTab(1)}>
                        <i className="uil uil-graduation-cap qualification__icon">Education</i>
                    </div>

                    <div className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
                        onClick={() => toggleTab(2)}>
                        <i className="uil uil-briefcase-alt qualification__icon">Experience</i>
                    </div>
                </div>

                <div className="qualification__sections">
                    <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Web Design and Development</h3>
                                <span className="qualification__subtitle">Conestoga College</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt">May 2023 - August 2024</i>
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Information Technology</h3>
                                <span className="qualification__subtitle">University of Mumbai</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt">Sepetember - 2017</i>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">UI developer</h3>
                                <span className="qualification__subtitle">Media.net Software Services, Mumbai</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt">March 2020 - April 2023</i>
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Web Developer</h3>
                                <span className="qualification__subtitle">Accenture Solutions, Mumbai </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt">September 2018 - February 2020</i>
                                </div>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Frontend Developer</h3>
                                <span className="qualification__subtitle">CollabAce Innovative Labs Pvt. Ltd, Mumbai</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt">April 2018 - September 2018</i>
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div></div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Qualification

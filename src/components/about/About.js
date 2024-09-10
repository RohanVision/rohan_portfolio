import React from 'react'
import "./about.css";
import AboutImg from "../../assets/about.jpg";
import CV from "../../assets/RohanAmberkar.pdf";
import Info from "../about/Info";


const About = () => {
    return (
        <section className="about section" id="about">
            <h2 className="section__title">About Me</h2>
            <span className="section__subtitle">My Introduction</span>

            <div className="about__container container grid">
                <img src={AboutImg} alt="" className="about__img" />
                <div className="about__data">
                    <Info />

                    <p className="about__description">Front-End Developer, I create minimilistic web Pages.</p>
                </div>
            </div>
        </section>
    )
}

export default About

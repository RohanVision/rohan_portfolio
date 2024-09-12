import React, { useState } from 'react'
import '../header/header.css'

const Header = () => {
    // Change Background Header
    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header");
        // When scroll is higher than 200 viewport height add scroll-header class to tag with header tag
        if (this.scrollY >= 80) header.classList.add("scroll-header");
        else header.classList.remove("scroll-header")
    })

    /* ============ Toggle Menu ============ */
    const [Toggle, setToggle] = useState(false);
    const [acitveNav, setActiveNav] = useState('#home');
    return (
        <header className="header">
            <nav className="nav container">
                <a href="index.html" className="nav__logo">Rohan Amberkar</a>
                <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#home" onClick={() => setActiveNav('#home')} className={acitveNav === '#home' ? "nav__link acitve-link" : "nav__link"}>
                                <i className="uil uil-estate nav__icon"></i>Home
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#about" onClick={() => setActiveNav('#about')} className={acitveNav === '#about' ? "nav__link acitve-link" : "nav__link"}>
                                <i className="uil uil-user nav__icon"></i> About
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#skills" onClick={() => setActiveNav('#skills')} className={acitveNav === '#skills' ? "nav__link acitve-link" : "nav__link"}>
                                <i className="uil uil-file-alt nav__icon"></i> Skills
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={acitveNav === '#portfolio' ? "nav__link acitve-link" : "nav__link"}>
                                <i className="uil uil-scenery nav__icon"></i> Portfolio
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#qulification" onClick={() => setActiveNav('#qulification')} className={acitveNav === '#qulification' ? "nav__link acitve-link" : "nav__link"}>
                                <i className="uil uil-scenery nav__icon"></i> Qulification
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#contact" onClick={() => setActiveNav('#contact')} className={acitveNav === '#contact' ? "nav__link acitve-link" : "nav__link"}>
                                <i className="uil uil-message nav__icon"></i> Contact
                            </a>
                        </li>
                    </ul>

                    <i className="uil uil-times nav__close" onClick={() => setToggle(!Toggle)}></i>
                </div>
                <div className="nav__toggle" onClick={() => setToggle(!Toggle)}>
                    <i className="uil uil-apps"></i>
                </div>
            </nav>
        </header>
    )
}

export default Header

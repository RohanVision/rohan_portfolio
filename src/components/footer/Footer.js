import React from 'react'
import "./footer.css"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <div className="footer__title">Rohan Amberkar</div>
                <ul className="footer__list">
                    <li><a href="#about" className="footer__link">About</a></li>
                    <li><a href="#portfolio" className="footer__link">Portfolio</a></li>
                    <li><a href="#skills" className="footer__link">Skills</a></li>
                </ul>
                <div className="footer__socials">
                    <a href="https://github.com/RohanVision?tab=repositories" className="footer__socials-link" target='_blank' rel='noreferrer'><i className="uil uil-linkedin-alt"></i></a>
                    <a href="https://github.com/RohanVision?tab=repositories" className="footer__socials-link" target='_blank' rel='noreferrer'><i className="uil uil-github"></i></a>
                    <a href="https://github.com/RohanVision?tab=repositories" className="footer__socials-link" target='_blank' rel='noreferrer'><i className="uil uil-instagram"></i></a>
                </div>

                <span className="footer__copy">&#169; Rohan Amberkar</span>
            </div>
        </footer>
    )
}

export default Footer

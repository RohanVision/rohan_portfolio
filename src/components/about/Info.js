import React from 'react'

const Info = () => {
    return (
        <div className="about__info grid">
            <div className="about__box">
                <i className='bx bx-award about__icon'></i>
                <h3 className="about__title">Experience</h3>
                <span className="about__subtitle">4 Years Working</span>
            </div>

            <div className="about__box">
                <i className='bx bx-briefcase-alt-2 about__icon' ></i>
                <h3 className="about__title">Projects</h3>
                <span className="about__subtitle">4 Projects</span>
            </div>

            <div className="about__box">
                <i className='bx bx-certification about__icon' ></i>
                <h3 className="about__title">Certification</h3>
                <span className="about__subtitle">2 Online Certificatio</span>
            </div>
        </div>
    )
}

export default Info

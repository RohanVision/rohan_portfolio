import React from 'react'

const WorksItem = ({ project }) => {
    if (!project) return null;
    return (
        <div className='work__card' key={project.id}>
            <img src={project.image} className='work__img' alt="" />
            <h3 className="work__title">{project.title}</h3>
            <a href={project.demoUrl} target='_blank' rel="noreferrer" className="work__button">
                Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
            </a>
            <a href={project.gitUrl} target='_blank' rel="noreferrer" className="work__button">
                Git <i className="bx bx-right-arrow-alt work__button-icon"></i>
            </a>
        </div>
    )
}

export default WorksItem

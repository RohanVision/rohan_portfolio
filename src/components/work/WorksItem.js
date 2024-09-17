import React from 'react'

const WorksItem = ({ item }) => {
    return (
        <div className='work__card' key={item.id}>
            <img src={item.image} className='work__img' alt="" />
            <h3 className="work__title">{item.title}</h3>
            <a href={item.demoUrl} target='_blank' rel="noreferrer" className="work__button">
                Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
            </a>
            <a href={item.gitUrl} target='_blank' rel="noreferrer" className="work__button">
                Git <i className="bx bx-right-arrow-alt work__button-icon"></i>
            </a>
        </div>
    )
}

export default WorksItem

import React, { useEffect, useState } from 'react';
import { projectsNav } from './Data';
import { projectsData } from './Data';
import WorksItem from './WorksItem';

const Works = () => {
    const [filterNav, setFilterNav] = useState({ name: "all" });
    const [projects, setProjects] = useState([]);
    const [active, setActive] = useState(0);

    useEffect(() => {
        if (filterNav.name === "all") {
            setProjects(projectsData);
        } else {
            const newProjects = projectsData.filter((project) => {
                return project.category.toLowerCase() === filterNav.name;
            });
            setProjects(newProjects)
        }
    }, [filterNav]);

    const handleClick = (e, index) => {
        setFilterNav({ name: e.target.textContent.toLowerCase() });
        setActive(index);
    }
    return (
        <div>
            <div className="work__filter">
                {projectsNav.map((item, index) => {
                    // Dont use index as a key
                    return <span onClick={(e) => {
                        handleClick(e, index)
                    }} key={index} className={`${active === index ? "active-work" : ""} work__item`}>
                        {item.name}
                    </span>
                })}
            </div>

            <div className="work__container container grid">
                {projects.map((project) => {
                    return <WorksItem project={project} key={project.id} />
                })}
            </div>
        </div>
    )
}

export default Works

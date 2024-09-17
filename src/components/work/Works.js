import React, { useEffect, useState } from 'react';
import { projectsNav } from './Data';
import { projectsData } from './Data';
import WorksItem from './WorksItem';

const Works = () => {
    const [item, setItem] = useState({ name: "all" });
    const [projects, setProjects] = useState([]);
    const [active, setActive] = useState(0);

    useEffect(() => {
        if (item.name === "all") {
            setProjects(projectsData);
        } else {
            const newProjects = projectsData.filter((project) => {
                return project.category.toLowerCase() === item.name;
            });
            setProjects(newProjects)
        }
    }, [item]);

    const handleClick = (e, index) => {
        setItem({ name: e.target.textContent.toLowerCase() });
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
                {projects.map((item) => {
                    return <WorksItem item={item} key={item.id} />
                })}
            </div>
        </div>
    )
}

export default Works

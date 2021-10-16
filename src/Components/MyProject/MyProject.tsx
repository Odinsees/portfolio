import React from 'react';
import style from "./MyProject.module.css"
import styleContainer from "../../common/styles/Container.module.css"
import {Project} from "./Project/Project";

let project = [
    {title:"Social Network", icon:"", description:"Social network for people"},
    {title:"Todolist", icon:"", description:"Todolist"},
    {title:"Counter", icon:"", description:"Counter"},
]



export const MyProject = () => {
    return (
        <div className={style.myProjectBlock}>
            <div className={`${styleContainer.container} ${style.myProjectContainer}`}>
                <div className={style.titleBox}>
                    <h2 className={style.title}>My projects</h2>
                </div>
                <div className={style.projectBox}>
                    {project.map(project => {
                        return(
                            <Project img={project.icon} title={project.title} description={project.description}/>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}
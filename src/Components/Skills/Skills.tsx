import React from 'react';
import style from "./skills.module.css"
import styleContainer from "../../common/styles/Container.module.css"
import {Skill} from "./Skill/Skill";

let skills = [
    {id: 1, title:"JS", icon:"", description:"Description of skills here"},
    {id: 2, title:"TS", icon:"", description:"Description of skills here"},
    {id: 3, title:"React", icon:"", description:"Description of skills here"},
    {id: 4, title:"Redux", icon:"", description:"Description of skills here"},
    {id: 5, title:"HTML5", icon:"", description:"Description of skills here"},
    {id: 6, title:"CSS3", icon:"", description:"Description of skills here"}
]

export const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <div className={style.titleBox}>
                    <h2 className={style.title}>My Skills</h2>
                </div>
                <div className={style.skills}>
                    {skills.map(skills => {
                        return(
                            <Skill key={skills.id} img={skills.icon} title={skills.title} description={skills.description}/>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

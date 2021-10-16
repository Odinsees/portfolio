import React from 'react';
import style from "./skills.module.css"
import styleContainer from "../../common/styles/Container.module.css"
import {Skill} from "./Skill/Skill";

let skills = [
    {title:"JS", icon:"", description:"Description of skills here"},
    {title:"TS", icon:"", description:"Description of skills here"},
    {title:"React", icon:"", description:"Description of skills here"},
    {title:"Redux", icon:"", description:"Description of skills here"},
    {title:"HTML5", icon:"", description:"Description of skills here"},
    {title:"CSS3", icon:"", description:"Description of skills here"}
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
                            <Skill img={skills.icon} title={skills.title} description={skills.description}/>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

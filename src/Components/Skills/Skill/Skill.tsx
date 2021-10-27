import React from 'react';
import style from "./skill.module.scss"

type PropsType = {
    img:string
    title:string
    description:string
}


export const Skill = (props:PropsType) => {
    return (
        <div className={style.skillBlock}>
            <div className={style.icon}>
                <img src={props.img}/>
            </div>
            <h3 className={style.title}>{props.title}</h3>
            <span className={style.description}>{props.description}</span>
        </div>
    );
}
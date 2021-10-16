import React from 'react';
import style from "./Project.module.css"

type PropsType = {
    img: string
    title: string
    description: string
}


export const Project = (props: PropsType) => {
    return (
        <div className={style.projectBlock}>
            <div className={style.projectImg}>
                <button className={style.viewButton}>View this</button>
            </div>
            <span className={style.title}>{props.title}</span>
            <span className={style.description}>{props.description}</span>
        </div>
    );
}
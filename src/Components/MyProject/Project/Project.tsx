import React from 'react';
import style from "./Project.module.css"

type PropsType = {
    title: string
    description: string
    changeShowDesc: (id: number) => void
    showDesc: boolean
    id: number
    style:{backgroundImage:string}
}


export const Project = (props: PropsType) => {

    return (
        <div className={style.projectBlock}>
            <div style={props.style} className={style.projectImg}>
                <a className={style.viewButton}>View this</a>
            </div>
            <div className={style.projectTitle}>
                <h5>{props.title}</h5>
            </div>
            <span
                className={style.projectTechnologies}
                onClick={() => props.changeShowDesc( props.id)}>Technology: </span>
            {
                props.showDesc
                    ? <span
                        onClick={() => props.changeShowDesc( props.id)}
                        className={style.projectDescription}>{props.description}</span>
                    : ''
            }
        </div>
    );
}
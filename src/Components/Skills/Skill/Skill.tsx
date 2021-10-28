import React from 'react';
import style from "./skill.module.scss"
import {IconBGType} from "../Skills";

type PropsType = {
    title: string
    iconStyle: IconBGType
}


export const Skill = (props: PropsType) => {
    return (
        <div className={style.skillBlock}>
            <div className={style.icon} style={props.iconStyle}></div>
            <h3 className={style.title}>{props.title}</h3>
        </div>
    );
}
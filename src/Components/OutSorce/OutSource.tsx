import React from 'react';
import style from "./OutSource.module.css"
import styleContainer from "../../common/styles/Container.module.css"


export const OutSource = () => {
    return (
        <div className={style.recruitBlock}>
            <div className={`${styleContainer.container} ${style.recruitContainer}`}>
                <h2 className={style.text}>Considering options for remote work</h2>
                <button className={style.recruitButton}>Recruit me</button>
            </div>
        </div>
    );
}
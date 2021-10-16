import React from 'react';
import style from "./Main.module.css"
import styleContainer from "../../common/styles/Container.module.css"

export const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={`${styleContainer.container} ${style.mainContainer}`}>
                <div className={style.greetingText}>
                    <span>Hi where!</span>
                    <h1>I am Pavel Lebedev</h1>
                    <p>Front-end developer!</p>
                </div>
                <div className={style.photo}></div>
            </div>
        </div>
    );
}
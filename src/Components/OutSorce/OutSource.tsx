import React from 'react';
import style from "./OutSource.module.css"
import styleContainer from "../../common/styles/Container.module.css"
import {Title} from "../../common/Components/Titile/Title";


export const OutSource = () => {
    return (
        <div className={style.recruitBlock}>
            <div className={`${styleContainer.container} ${style.recruitContainer}`}>
                <Title title={'Considering options for remote work'}/>
                <a className={style.recruitButton}>Recruit me</a>
            </div>
        </div>
    );
}
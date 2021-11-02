import React from 'react';
import style from "./OutSource.module.scss"
import styleContainer from "../../common/styles/Container.module.css"
import {Title} from "../../common/Components/Titile/Title";


export const OutSource = () => {
    return (
        <div className={style.recruitBlock}>
            <div className={`${styleContainer.container} ${style.recruitContainer}`}>
                <Title className={style.title} title={'Considering options for remote work'}/>
                <a
                    href="mailto:pavel.o.lebedev@gmail.com"
                    role="button"
                    className={style.recruitButton}>Recruit me
                </a>
            </div>
        </div>
    );
}
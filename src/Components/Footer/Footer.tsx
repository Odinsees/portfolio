import React from 'react';
import style from "./footer.module.css"
import styleContainer from "../../common/styles/Container.module.css"


export const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h3 className={style.text}>Lebedev Pavel</h3>
                <div className={style.imageBox}>
                    <a href="" className={style.image}></a>
                    <a href="" className={style.image}></a>
                    <a href="" className={style.image}></a>
                    <a href="" className={style.image}></a>
                </div>
                <span className={style.security}>© 2021 All rights reserved</span>
            </div>
        </div>
    );
}
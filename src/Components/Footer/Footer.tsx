import React from 'react';
import style from "./footer.module.scss"
import styleContainer from "../../common/styles/Container.module.css"
import linkedinIcon from '../../assets/image/icon/social icon/linkedin.svg'
import githubIcon from '../../assets/image/icon/social icon/github.svg'
import codeWarsIcon from '../../assets/image/icon/social icon/codewars-svgrepo-com.svg'
import telegramIcon from '../../assets/image/icon/social icon/telegram.svg'


export const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h3 className={style.text}>Lebedev Pavel</h3>
                <div className={style.iconBox}>
                    <a style={{backgroundImage:`url(${linkedinIcon})`}} href="" className={style.socialIcon}></a>
                    <a style={{backgroundImage:`url(${githubIcon})`}} href="" className={style.socialIcon}></a>
                    <a style={{backgroundImage:`url(${codeWarsIcon})`}} href="" className={style.socialIcon}></a>
                    <a style={{backgroundImage:`url(${telegramIcon})`}} href="" className={style.socialIcon}></a>
                </div>
                <span className={style.security}>© 2021 All rights reserved</span>
            </div>
        </div>
    );
}
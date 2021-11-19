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
                <h3 className={style.text}>Pavel Lebedev</h3>
                <div className={style.iconBox}>
                    <a style={{backgroundImage: `url(${linkedinIcon})`}} target={'_blank'}
                       href="https://www.linkedin.com/in/pavel-l%D0%B5bedev-641983211/"
                       className={style.socialIcon}></a>
                    <a style={{backgroundImage: `url(${githubIcon})`}} target={'_blank'}
                       href="https://github.com/Odinsees" className={style.socialIcon}></a>
                    <a style={{backgroundImage: `url(${codeWarsIcon})`}} target={'_blank'}
                       href="https://www.codewars.com/users/Odinsees" className={style.socialIcon}></a>
                    <a style={{backgroundImage: `url(${telegramIcon})`}} target={'_blank'} href="https://t.me/odin_sees"
                       className={style.socialIcon}></a>
                </div>
                <div className={style.security}>2021</div>
            </div>
        </div>
    );
}
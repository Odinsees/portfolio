import React from 'react';
import style from "./Main.module.scss"
import styleContainer from "../../common/styles/Container.module.css"
import myPhoto from '../../assets/image/MyPhoto.jpg'
import linkedinIcon from '../../assets/image/icon/social icon/linkedin.svg'
import githubIcon from '../../assets/image/icon/social icon/github.svg'
import codeWarsIcon from '../../assets/image/icon/social icon/codewars-svgrepo-com.svg'
import telegramIcon from '../../assets/image/icon/social icon/telegram.svg'
import {Title} from "../../common/Components/Titile/Title";

export const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={`${styleContainer.container} ${style.mainContainer}`}>
                <div className={style.title}>
                    <Title title={'About Me'}/>
                </div>
                <div className={style.info}>
                    <div className={style.myPhoto}>
                        <img src={myPhoto} alt=""/>
                    </div>
                    <div className={style.infoContent}>
                        <div className={style.infoBlock}>
                            <h2 className={style.subTitle}>Who am i?</h2>
                            <h6 className={style.contentTitle}>I'm Pavel Lebedev, <br/> Front-end Developer</h6>
                            <div className={style.contentDescription}>
                                <p>
                                    I am a freelancer based in the Republic of Belarus
                                    and i have been building noteworthy UI
                                    and websites, which comply with the
                                    latest trends and technology. I help convert a vision and
                                    an idea into meaningful and useful products.
                                    Having a sharp eye for product evolution
                                    helps me prioritize tasks, iterate fast and deliver faster.
                                </p>
                            </div>
                            <div className={style.address}>
                                <div className={style.row}>
                                    <div className={style.singleInfo}>
                                        <span>Name:</span>
                                        <p>Lebedev Pavel</p>
                                    </div>
                                    <div className={style.singleInfo}>
                                        <span>Email:</span>
                                        <a href=''>pavel.o.lebedev@gmail.com</a>
                                    </div>
                                </div>
                                <div className={style.row}>
                                    <div className={style.singleInfo}>
                                        <span>Age:</span>
                                        <p>24</p>
                                    </div>
                                    <div className={style.singleInfo}>
                                        <span>From:</span>
                                        <p>Belarus, Minsk</p>
                                    </div>
                                </div>
                            </div>
                            <div className={style.contactBlock}>
                                <a
                                    href="#"
                                    role="button"
                                    download=""
                                    className={style.downloadBTN}>Download CV
                                </a>
                                <div className={style.contacts}>
                                    <a
                                        className={style.icon} style={{backgroundImage: `url(${linkedinIcon})`}}
                                        target={'_blank'}
                                        href="https://www.linkedin.com/in/pavel-l%D0%B5bedev-641983211/">
                                    </a>
                                    <a
                                        className={style.icon} style={{backgroundImage: `url(${githubIcon})`}}
                                        target={'_blank'}
                                        href="https://github.com/Odinsees">
                                    </a>
                                    <a
                                        className={style.icon} style={{backgroundImage: `url(${codeWarsIcon})`}}
                                        target={'_blank'}
                                        href="https://www.codewars.com/users/Odinsees">
                                    </a>
                                    <a
                                        className={style.icon} style={{backgroundImage: `url(${telegramIcon})`}}
                                        target={'_blank'}
                                        href="https://t.me/odin_sees">
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
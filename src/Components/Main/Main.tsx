import React from 'react';
import style from "./Main.module.scss"
import styleContainer from "../../common/styles/Container.module.css"
import myPhoto from '../../assets/image/MyPhoto.jpg'
import linkedinIcon from '../../assets/image/icon/social icon/linkedin.svg'
import githubIcon from '../../assets/image/icon/social icon/github.svg'
import instagramIcon from '../../assets/image/icon/social icon/instagram.svg'
import telegramIcon from '../../assets/image/icon/social icon/telegram.svg'

export const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={`${styleContainer.container} ${style.mainContainer}`}>\
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
                                    I am a freelancer based in the United Kingdom
                                    and i have been building noteworthy UX/UI designs
                                    and websites for years, which comply with the
                                    latest design trends. I help convert a vision and
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
                                    href="#0"
                                    role="button"
                                    className={style.downloadBTN}>Download CV</a>
                                <div className={style.contacts}>
                                    <a target={'_blank'} href="https://ru.stackoverflow.com/questions/783780/%D0%98%D0%B7%D0%BC%D0%B5%D0%BD%D0%B8%D1%82%D1%8C-%D1%86%D0%B2%D0%B5%D1%82-svg-%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F">
                                        <img src={linkedinIcon} alt=""/>
                                    </a>
                                    <a target={'_blank'} href="">
                                        <img src={githubIcon} alt=""/>
                                    </a>
                                    <a target={'_blank'} href="">
                                        <img src={instagramIcon} alt=""/>
                                    </a>
                                    <a target={'_blank'} href="">
                                        <img src={telegramIcon} alt=""/>
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
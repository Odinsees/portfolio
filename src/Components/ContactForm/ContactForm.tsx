import React from 'react';
import style from "./ContactForm.module.scss"
import styleContainer from "../../common/styles/Container.module.css"
import {Title} from "../../common/Components/Titile/Title";
import user from "../../assets/image/icon/contactsIcon/user.svg"
import location from "../../assets/image/icon/contactsIcon/location.svg"
import phone from "../../assets/image/icon/contactsIcon/phone.svg"
import mail from "../../assets/image/icon/contactsIcon/mail.svg"

export const ContactForm = () => {
    return (
        <div className={style.formBlock}>
            <div className={`${styleContainer.container} ${style.formContainer}`}>
                <div className={style.titleBlock}>
                    <Title title={'Contacts'}/>
                </div>
                <div className={style.contactFormWrapper}>
                    <div className={style.formBox}>
                        <form className={style.contactsForm}>
                            <h4 className={style.contentTitle}>Message Me</h4>
                            <div className={style.form}>
                                <div className={style.formInputTop}>
                                    <input type='text' placeholder={'name'}/>
                                </div>
                                <div className={style.formInputTop}>
                                    <input type='text' placeholder={'email'}/>
                                </div>
                                <div className={style.formInput}>
                                    <input type='text' placeholder={'subject'}/>
                                </div>
                                <div className={style.formTextArea}>
                                    <textarea placeholder={'message'}/>
                                </div>
                                <button className={style.formButton} type="submit">Send message</button>
                            </div>
                        </form>
                    </div>
                    <div className={style.contactsInfo}>
                        <div className={style.Info}>
                            <h4 className={style.contentTitle}>Contact Info</h4>
                            <p className={style.infoDescription}>Always available for freelance work if the right project comes along, Feel free to contact me!</p>
                            <ul className={style.ulContacts}>
                                <li className={style.liContacts}>
                                    <div style={{backgroundImage:`url(${user})`}} className={style.contactIcon}>
                                    </div>
                                    <div className={style.infoDetails}>
                                        <h6 className={style.infoTitle}>Name</h6>
                                        <span className={style.infoValue}>Pavel Lebedev</span>
                                    </div>
                                </li>
                                <li className={style.liContacts}>
                                    <div style={{backgroundImage:`url(${location})`}} className={style.contactIcon}>
                                    </div>
                                    <div className={style.infoDetails}>
                                        <h6 className={style.infoTitle}>Location</h6>
                                        <span className={style.infoValue}>Belarus, Minsk</span>
                                    </div>
                                </li>
                                <li className={style.liContacts}>
                                    <div style={{backgroundImage:`url(${phone})`}} className={style.contactIcon}>
                                    </div>
                                    <div className={style.infoDetails}>
                                        <h6 className={style.infoTitle}>Call me</h6>
                                        <span className={style.infoValue}>
                                            <a href="tel:+375291971705">+375 29 197 17 05</a>
                                        </span>
                                    </div>
                                </li>
                                <li className={style.liContacts}>
                                    <div style={{backgroundImage:`url(${mail})`}} className={style.contactIcon}>
                                    </div>
                                    <div className={style.infoDetails}>
                                        <h6 className={style.infoTitle}>Email me</h6>
                                        <span className={style.infoValue}>
                                            <a href="mailto:pavel.o.lebedev@gmail.com">pavel.o.lebedev@gmail.com</a>
                                        </span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
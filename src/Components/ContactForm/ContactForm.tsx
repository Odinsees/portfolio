import React from 'react';
import style from "./ContactForm.module.scss"
import styleContainer from "../../common/styles/Container.module.css"
import {Title} from "../../common/Components/Titile/Title";


export const ContactForm = () => {
    return (
        <div className={style.formBlock}>
            <div className={`${styleContainer.container} ${style.formContainer}`}>
                <Title title={'Contacts'}/>
                <form className={style.formBox}>
                    <input type='text'/>
                    <input type='text'/>
                    <textarea/>
                    <button type="submit">SEND</button>
                </form>
            </div>
        </div>
    );
}
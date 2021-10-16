import React from 'react';
import style from "./ContactForm.module.css"
import styleContainer from "../../common/styles/Container.module.css"
import {Form} from "./Form/Form";


export const ContactForm = () => {
    return (
        <div className={style.formBlock}>
            <div className={`${styleContainer.container} ${style.formContainer}`}>
                <h3 className={style.title}>Contacts</h3>
                <Form/>
                <button className={style.recruitButton}>SEND</button>
            </div>
        </div>
    );
}
import React from 'react';
import style from "./form.module.css"

export const Form = () => {
    return (
        <div className={style.formBlock}>
            <form action="" className={style.formContainer}>
                <input type='text' className={style.input}/>
                <input type='text' className={style.input}/>
                <textarea className={style.textarea}/>
            </form>
        </div>
    );
}
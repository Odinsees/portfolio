import React from 'react';
import './App.module.scss';
import {Header} from "./Components/Header/Header";
import {Main} from "./Components/Main/Main";
import {Skills} from "./Components/Skills/Skills";
import {MyProject} from "./Components/MyProject/MyProject";
import {OutSource} from "./Components/OutSorce/OutSource";
import {ContactForm} from "./Components/ContactForm/ContactForm";
import {Footer} from "./Components/Footer/Footer";
import style from "./App.module.scss"

import {Link, Element, Events, animateScroll as scroll, scrollSpy, scroller} from 'react-scroll'


function App() {
    return (
            <div className={style.App}>
                <div className={style.header}>
                    <Header/>
                </div>
                <Element name='main'>
                    <Main/>
                </Element>
                <Element name='skills'>
                    <Skills/>
                </Element>
                <Element name='myProject'>
                    <MyProject/>
                </Element>
                <OutSource/>
                <Element name='contactForm'>
                    <ContactForm/>
                </Element>
                <Footer/>
            </div>
    );
}

export default App;

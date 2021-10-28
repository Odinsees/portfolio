import React from 'react';
import './App.scss';
import {Header} from "./Components/Header/Header";
import {Main} from "./Components/Main/Main";
import {Skills} from "./Components/Skills/Skills";
import {MyProject} from "./Components/MyProject/MyProject";
import {OutSource} from "./Components/OutSorce/OutSource";
import {ContactForm} from "./Components/ContactForm/ContactForm";
import {Footer} from "./Components/Footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <MyProject/>
            <OutSource/>
            <ContactForm/>
            <Footer/>
        </div>
    );
}

export default App;

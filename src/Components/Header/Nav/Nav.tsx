import React from 'react';
import style from "./Nav.module.scss"
import {Link, Element, Events, animateScroll as scroll, scrollSpy, scroller} from 'react-scroll'

export const Nav = () => {
    return (
        <div className={style.nav}>
            <Link
                activeClass="active"
                to="main" spy={true}
                smooth={true}
                duration={500}
            >about me
            </Link>
            <Link
                activeClass="skills"
                to="skills" spy={true}
                smooth={true}
                duration={500}>skills
            </Link>
            <Link
                activeClass="myProject"
                to="myProject" spy={true}
                smooth={true}
                duration={500}>project
            </Link>
            <Link
                activeClass="contactForm"
                to="contactForm" spy={true}
                smooth={true}
                duration={500}>contacts
            </Link>
        </div>
    );
}

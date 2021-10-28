import React from 'react';
import style from "./skills.module.scss"
import styleContainer from "../../common/styles/Container.module.css"
import {Skill} from "./Skill/Skill";
import {Title} from "../../common/Components/Titile/Title";
import jsBackGround from '../../assets/image/icon/javascript-programming-language.svg'
import tsBackGround from '../../assets/image/icon/typescript-programming-language.svg'
import reactBackGround from '../../assets/image/icon/react-js.svg'
import reduxBackGround from '../../assets/image/icon/redux.svg'
import htmlBackGround from '../../assets/image/icon/html.svg'
import cssBackGround from '../../assets/image/icon/css.svg'
import gitBackGround from '../../assets/image/icon/git.svg'
import unitBackGround from '../../assets/image/icon/pngkey.com-testing-png-3333976.png'

export type IconBGType = {
    backgroundImage: string
}
type skillType = {
    id: number
    title: string
    icon: IconBGType
}
const JsBG: IconBGType = {
    backgroundImage: `url(${jsBackGround})`
};
const TsBG: IconBGType = {
    backgroundImage: `url(${tsBackGround})`
}
const reactBG: IconBGType = {
    backgroundImage:`url(${reactBackGround})`
};
const reduxBG: IconBGType = {
    backgroundImage:`url(${reduxBackGround})`
};
const htmlBG: IconBGType = {
    backgroundImage:`url(${htmlBackGround})`
};
const cssBG: IconBGType = {
    backgroundImage:`url(${cssBackGround})`
};
const gitBG: IconBGType = {
    backgroundImage:`url(${gitBackGround})`
};
const unitBG: IconBGType = {
    backgroundImage:`url(${unitBackGround})`
};




let skills:skillType[] = [
    {id: 1, title: "JavaScript", icon: JsBG,},
    {id: 2, title: "TypeScript", icon: TsBG,},
    {id: 3, title: "React", icon: reactBG,},
    {id: 4, title: "Redux", icon: reduxBG,},
    {id: 5, title: "HTML5", icon: htmlBG,},
    {id: 6, title: "CSS3", icon: cssBG,},
    {id: 7, title: "GIT", icon: gitBG,},
    {id: 8, title: "Unit Test", icon: unitBG},
]


export const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title title={'my skills'}/>
                <div className={style.skills}>
                    {skills.map(skills => {
                        return (
                            <Skill key={skills.id} title={skills.title}
                                   iconStyle={skills.icon}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

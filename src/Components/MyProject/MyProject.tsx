import React, {useState} from 'react';
import style from './MyProject.module.css'
import styleContainer from '../../common/styles/Container.module.css'
import {Project} from './Project/Project';
import {Title} from "../Titile/Title";
import todolistBackGround from '../../assets/image/todolistBG.jpg'
import counterBackGround from '../../assets/image/counterBG.jpg'
import socialNetworkBackGround from '../../assets/image/socialNetworkBG.jpg'

type ProjectType = {
    id: number
    showDesc: boolean
    title: string
    icon: {backgroundImage:string}
    description: string
}


export const MyProject = () => {

    const SocialNetworkBG = {
        backgroundImage: `url(${socialNetworkBackGround})`,
    };

    const todolistBG = {
        backgroundImage: `url(${todolistBackGround})`,
    };

    const counterBG = {
        backgroundImage: `url(${counterBackGround})`,
    };

    let [project, setProject] = useState<ProjectType[]>([
        {
            id: 1,
            showDesc: false,
            title: "Social Network",
            icon: SocialNetworkBG,
            description: "React, Redux, TS, React-Hooks, HOC, Container Component, HTML, CSS"
        },
        {id: 2, showDesc: false, title: "Todolist", icon: todolistBG, description: `React, Redux, TS, React-Hooks, HTML, CSS`},
        {id: 3, showDesc: false, title: "Counter", icon: counterBG, description: `React, Redux, TS, LocalStorage, React-Hooks, HTML, CSS`},
    ])

    const changeShowDesc = (pId: number) => {
        setProject(project.map(m => m.id === pId ? {...m, showDesc: !m.showDesc} : m))
    }

    return (
        <div className={style.myProjectBlock}>
            <div className={`${styleContainer.container} ${style.myProjectContainer}`}>
                <Title title={'my projects'}/>
                <div className={style.projectBox}>
                    {project.map(project => {
                        return (
                            <Project key={project.id}
                                     style={project.icon}
                                     title={project.title}
                                     description={project.description}
                                     showDesc={project.showDesc}
                                     id={project.id}
                                     changeShowDesc={changeShowDesc}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    );
}
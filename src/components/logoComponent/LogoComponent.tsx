import React from "react";
import style from './logoComponent.module.scss'
import logoImg from '../../img/header/Logo.svg'


interface LogoComponentProps {
    customStyle?: string;
}

const LogoComponent: React.FC<LogoComponentProps> = ({customStyle}) => {
    return (

            <div className={customStyle}>
                <img className={style.logo} src={logoImg} alt="logoImg"/>
            </div>

    )
}

export default LogoComponent;
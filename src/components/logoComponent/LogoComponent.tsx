import React from "react";
import style from './logoComponent.module.scss'
import logoImg from '../../img/header/Logo.svg'


interface Props {
    customStyle?: string;
}

const LogoComponent: React.FC<Props> = ({customStyle}) => {
    return (

            <div className={customStyle}>
                <img className={style.logo} src={logoImg} alt="logoImg"/>
            </div>

    )
}

export default LogoComponent;
import React from "react";
import style from './header.module.scss'
import LogoComponent from "../logoComponent/LogoComponent";
import HeaderAndDropMenuHrefs from "../headerAndDropMenuHrefs/HeaderAndDropMenuHrefs";

const Header = () => {
    return (
        <header className={style.header}>

            <LogoComponent/>

            <HeaderAndDropMenuHrefs
                hrefContainer={style.hrefContainer}
                hrefWrapper={style.hrefWrapper}
                hrefStyle={style.hrefStyle}
                accountWrapper={style.accountWrapper}
            />

        </header>
    )
}

export default Header;

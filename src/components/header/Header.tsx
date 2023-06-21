import React from "react";
import style from './header.module.scss'
import LogoComponent from "../logoComponent/LogoComponent";
import HeaderAndDropMenuHrefs from "../headerAndDropMenuHrefs/HeaderAndDropMenuHrefs";
import {CommonRefs} from "../../App";

interface Props extends CommonRefs {
    setDropdownMenuActive: React.Dispatch<React.SetStateAction<boolean>>,
    smoother: any,
}

const Header: React.FC<Props> = (
    {
        setDropdownMenuActive,
        smoother,
        refFirstChild,
        refSecondChild,
        refThirdChild,
        refForm,
    }
) => {
    return (
        <header className={style.header}>

            <LogoComponent/>

            <HeaderAndDropMenuHrefs
                setDropdownMenuActive={setDropdownMenuActive}
                hrefContainer={style.hrefContainer}
                hrefWrapper={style.hrefWrapper}
                hrefStyle={style.hrefStyle}
                accountWrapper={style.accountWrapper}
                smoother={smoother}
                refFirstChild={refFirstChild}
                refSecondChild={refSecondChild}
                refThirdChild={refThirdChild}
                refForm={refForm}
            />

        </header>
    )
}

export default Header;

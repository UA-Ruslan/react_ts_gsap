import React from "react";
import style from './header.module.scss'
import LogoComponent from "../logoComponent/LogoComponent";
import HeaderAndDropMenuHrefs from "../headerAndDropMenuHrefs/HeaderAndDropMenuHrefs";

interface handleClick {
    handleScrollToFirstChild: (event: React.MouseEvent<HTMLAnchorElement>) => void,
    handleScrollToSecondChild: (event: React.MouseEvent<HTMLAnchorElement>) => void,
    handleScrollToThirdChild: (event: React.MouseEvent<HTMLAnchorElement>) => void,
    handleScrollToContactUs: (event: React.MouseEvent<HTMLAnchorElement>) => void;
    setDropdownMenuActive: React.Dispatch<React.SetStateAction<boolean>>,

    refSecondChild: any,
    smoother:React.PropsWithRef<any>,
}

const Header: React.FC<handleClick> = ({
                                           handleScrollToFirstChild,
                                           handleScrollToSecondChild,
                                           handleScrollToThirdChild,
                                           handleScrollToContactUs,
                                           setDropdownMenuActive,

                                           refSecondChild,
                                           smoother,
                                       }) => {
    return (
        <header className={style.header}>

            <LogoComponent/>

            <HeaderAndDropMenuHrefs
                setDropdownMenuActive={setDropdownMenuActive}
                handleScrollToFirstChild={handleScrollToFirstChild}
                handleScrollToSecondChild={handleScrollToSecondChild}
                handleScrollToThirdChild={handleScrollToThirdChild}
                handleScrollToContactUs={handleScrollToContactUs}
                hrefContainer={style.hrefContainer}
                hrefWrapper={style.hrefWrapper}
                hrefStyle={style.hrefStyle}
                accountWrapper={style.accountWrapper}

                smoother={smoother}
                refSecondChild={refSecondChild}
            />

        </header>
    )
}

export default Header;

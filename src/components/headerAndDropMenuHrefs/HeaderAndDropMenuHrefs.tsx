import React from "react";
import accountImg from '../../img/header/cart.png'
import {CommonRefs} from "../../App";

interface Props extends CommonRefs {
    hrefWrapper: string;
    hrefStyle: string;
    accountWrapper: string;
    hrefContainer: string;
    setDropdownMenuActive: React.Dispatch<React.SetStateAction<boolean>>;
    smoother: any,
}

const HeaderAndDropMenuHrefs: React.FC<Props> = (
    {
        setDropdownMenuActive,
        hrefWrapper,
        hrefStyle,
        accountWrapper,
        hrefContainer,
        smoother,
        refFirstChild,
        refSecondChild,
        refThirdChild,
        refForm,
    }) => {

    const scrollToElement = (event: React.MouseEvent<HTMLAnchorElement>, ref: any, position: string) => {
        event.preventDefault();
        setDropdownMenuActive(false)
        smoother.current.scrollTo(ref.current, true, position);
    }

    return (
        <div className={hrefContainer}>
            <div></div>
            <div className={hrefWrapper}>
                <div>
                    <a onClick={(event) => {
                        scrollToElement(event, refSecondChild, 'bottom bottom')
                    }} className={hrefStyle} href='#'>
                        Equipment
                    </a>
                </div>
                <div>
                    <a onClick={(event) => {
                        scrollToElement(event, refThirdChild, 'bottom bottom')
                    }} className={hrefStyle} href='#'>
                        About us
                    </a>
                </div>
                <div>
                    <a onClick={(event) => {
                        scrollToElement(event, refFirstChild, 'bottom bottom')
                    }} className={hrefStyle} href='#'>
                        Blog
                    </a>
                </div>
            </div>
            <div className={accountWrapper}>
                <div>
                    <img src={accountImg} alt="accountImg" width={24} height={24}/>
                </div>
                <div style={{display: "flex", alignItems: "center"}}>
                    <a onClick={(event) => {
                        scrollToElement(event, refForm, 'center center')
                    }} className={hrefStyle} href="#">
                        Contact us
                    </a>
                </div>
            </div>
        </div>
    )
}

export default HeaderAndDropMenuHrefs;
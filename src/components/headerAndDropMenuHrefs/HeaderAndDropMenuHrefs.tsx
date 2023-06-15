import React from "react";
import accountImg from '../../img/header/cart.png'

interface LogoComponentProps {
    hrefWrapper?: string;
    hrefStyle?: string;
    accountWrapper?: string;
    hrefContainer?: string;
}

const HeaderAndDropMenuHrefs: React.FC<LogoComponentProps> = ({
                                                                  hrefWrapper,
                                                                  hrefStyle,
                                                                  accountWrapper,
                                                                  hrefContainer,
                                                              }) => {
    return (
        <div className={hrefContainer}>
            <div></div>
            <div className={hrefWrapper}>
                <div>
                    <a className={hrefStyle} href="src/components/header/Header#">Equipment</a>
                </div>
                <div>
                    <a className={hrefStyle} href="src/components/header/Header#">About us</a>
                </div>
                <div>
                    <a className={hrefStyle} href="src/components/header/Header#">Blog</a>
                </div>
            </div>
            <div className={accountWrapper}>
                <div>
                    <img src={accountImg} alt="accountImg" width={24} height={24}/>
                </div>
                <div>
                    <a className={hrefStyle} href="src/components/header/Header#">Account</a>
                </div>
            </div>
        </div>
    )
}

export default HeaderAndDropMenuHrefs;

import React from "react";
import style from './foter.module.scss'
import LogoComponent from "../logoComponent/LogoComponent";

const Footer = () => {

    const handleClick = (e: React.MouseEvent): void => {
        e.preventDefault()
    }

    return (
        <div className={style.footerWrapper}>
            <div className={style.footerInfoWrapper}>
                <LogoComponent/>
                <p>Get out there & discover your next<br/> slope, mountain & destination!</p>
                <span className={style.infoSpan}>Copyright 2019 MNTN, Inc. Terms & Privacy</span>
            </div>
            <div className={style.footerHrefWrapper}>
                <div className={`${style.hrefsWrapper} ${style.moreOnBlog}`}>
                    <h4>More on The Blog</h4>
                    <a onClick={handleClick} className={style.footerHrefItem} href="#">About MNTN</a>
                    <a onClick={handleClick} className={style.footerHrefItem} href="#">Contributors & Writers</a>
                    <a onClick={handleClick} className={style.footerHrefItem} href="#">Write For Us</a>
                    <a onClick={handleClick} className={style.footerHrefItem} href="#">Contact Us</a>
                    <a onClick={handleClick} className={style.footerHrefItem} href="#">Privacy Policy</a>
                </div>
                <div className={style.hrefsWrapper}>
                    <h4>More on MNTN</h4>
                    <a onClick={handleClick} className={style.footerHrefItem} href="#">The Team</a>
                    <a onClick={handleClick} className={style.footerHrefItem} href="#">Jobs</a>
                    <a onClick={handleClick} className={style.footerHrefItem} href="#">Press</a>
                </div>
            </div>
        </div>
    )
}

export default Footer;
import React from "react";
import style from "./firstSection.module.scss";
import sky from "../../img/firstSectionImages/sky.webp";
import blackMount from "../../img/firstSectionImages/blackMount.png";
import greenMount from "../../img/firstSectionImages/greenMount.png";
import fogTop from "../../img/firstSectionImages/fogTop.png";
import fogBottom from "../../img/firstSectionImages/fogBottom.png";
import instagram from "../../img/firstSectionImages/instagram.png";
import twitter from "../../img/firstSectionImages/twitter.png";
import arrow from "../../img/firstSectionImages/arrow.png";
import Header from "../header/Header";
import LogoComponent from "../logoComponent/LogoComponent";

interface handleClick {
    handleScrollToFirstChild: (event: React.MouseEvent<HTMLAnchorElement>) => void,
    handleScrollToSecondChild: (event: React.MouseEvent<HTMLAnchorElement>) => void,
    handleScrollToThirdChild: (event: React.MouseEvent<HTMLAnchorElement>) => void,
    handleScrollToContactUs: (event: React.MouseEvent<HTMLAnchorElement>) => void;
    setDropdownMenuActive: React.Dispatch<React.SetStateAction<boolean>>,

    refSecondChild:any,
    smoother:React.PropsWithRef<any>,
}

const FirstSection: React.FC<handleClick> = ({
                                                 handleScrollToFirstChild,
                                                 handleScrollToSecondChild,
                                                 handleScrollToThirdChild,
                                                 handleScrollToContactUs,
                                                 setDropdownMenuActive,

                                                 refSecondChild,
                                                 smoother,
                                             }) => {

    const handleInstagramClick = () => {
        window.open('https://www.Instagram.com/', '_blank');
    };
    const handleTwitterClick = () => {
        window.open('https://www.twitter.com/', '_blank');
    };

    return (
        <div className={style.firstSectionWrapper}>
            <div data-speed="clamp(0)" className={style.contentWrapper}>

                <LogoComponent customStyle={style.firstSectionLogo}/>

                <Header
                    setDropdownMenuActive={setDropdownMenuActive}
                    handleScrollToFirstChild={handleScrollToFirstChild}
                    handleScrollToSecondChild={handleScrollToSecondChild}
                    handleScrollToThirdChild={handleScrollToThirdChild}
                    handleScrollToContactUs={handleScrollToContactUs}

                    smoother={smoother}
                    refSecondChild={refSecondChild}
                />

                <div className={style.contentContainer}>
                    <div className={style.followUs}>
                        <div>
                            <p>Follow us</p>
                        </div>
                        <div className={style.iconsWrapper}>
                            <a href="https://www.instagram.com/" target="_blank">
                                <img onClick={handleInstagramClick} src={instagram} width={24} height={24}
                                     alt="instagramImg"/>
                            </a>
                            <a href="https://www.twitter.com/" target="_blank">
                                <img onClick={handleTwitterClick} src={twitter} width={24} height={24}
                                     alt="twitterImg"/>
                            </a>
                        </div>
                    </div>
                    <div className={style.titleWrapper}>
                        <div className={style.hikingGuide}>
                            <div className={style.line}></div>
                            <div>
                                <h4>A HIKING GUIDE</h4>
                            </div>
                        </div>
                        <div className={style.title}>
                            <h1>Be Prepared Por The <br/> Mountains And Beyond!</h1>
                        </div>
                        <div className={style.scrollDownWrapper}>
                            <div>
                                <p>scroll down</p>
                            </div>
                            <div className={style.arrowImg}>
                                <img src={arrow} alt="arrowImg"/>
                            </div>
                        </div>
                    </div>
                    <div className={style.scaleWrapper}>
                        <div className={style.startWrapper}>
                            <div className={style.start}>
                                <p>Start</p>
                            </div>
                            <div><p>01</p></div>
                            <div><p>02</p></div>
                            <div><p>03</p></div>
                        </div>
                        <div className={style.scale}>

                        </div>
                    </div>
                </div>

            </div>
            <div className={style.imagesContainer}>
                <img data-speed="clamp(0.1)" className={`${style.sky} ${style.imgCommonStyle}`} src={sky} alt="sky"/>
                <img data-speed="clamp(0.2)" className={`${style.blackMount} ${style.imgCommonStyle}`} src={blackMount}
                     alt="blackMount"/>
                <img data-speed="clamp(0.3)" className={`${style.greenMount} ${style.imgCommonStyle}`} src={greenMount}
                     alt="greenMount"/>
                <img data-speed="clamp(0.1)" className={`${style.fogTop} ${style.imgCommonStyle}`} src={fogTop}
                     alt="fogTop"/>
                <img data-speed="clamp(1)" className={`${style.fogBottom} ${style.imgCommonStyle}`} src={fogBottom}
                     alt="fogBottom"/>
            </div>
        </div>
    )
}

export default FirstSection;
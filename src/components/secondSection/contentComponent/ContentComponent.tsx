import React, {ReactNode} from "react";
import style from './contentComponent.module.scss'
import arrowImage from '../../../img/secondSection/arrow.png'


interface ContentComponentProps {
    iconImgSrc: string
    mainImgSrc: string,
    childStyle: string,
    childRef: any,
    h2Content: ReactNode,
    h4Content: string,
    pContent: ReactNode,
}

const ContentComponent: React.FC<ContentComponentProps> = ({
                                                               mainImgSrc,
                                                               iconImgSrc,
                                                               childStyle,
                                                               childRef,
                                                               h4Content,
                                                               h2Content,
                                                               pContent,
                                                           }) => {

    return (
        <div ref={childRef} className={childStyle}>
            <div className={style.childContentWrapper}>
                <div className={style.icon01Wrapper}>
                    <img src={iconImgSrc} alt="iconImg"/>
                </div>
                <div className={style.h4Wrapper}>
                    <div className={style.line}></div>
                    <h4>{h4Content}</h4>
                </div>
                <div className={style.h2Wrapper}>
                    {h2Content}
                    {pContent}

                </div>
                <div className={style.readMoreWrapper}>
                    <p>read more</p>
                    <img src={arrowImage} width={24} height={16}  alt="arrowImg"/>
                </div>
            </div>
            <div className={style.mainImgWrapper}>
                <img src={mainImgSrc} alt="mainImg"/>
            </div>
        </div>
    )
}

export default ContentComponent;
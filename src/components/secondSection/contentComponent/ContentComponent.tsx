import React, {ReactNode, useEffect, useRef, useState} from "react";
import style from './contentComponent.module.scss'
import arrowImage from '../../../img/secondSection/arrow.png'
import gsap from "gsap-trial";


interface ContentComponentProps {
    iconImgSrc: string
    mainImgSrc: string,
    childStyle: string,
    childRef: any,
    h2Content: ReactNode,
    h4Content: string,
    pContent: ReactNode,
    readMoreContent?: ReactNode,
}

const ContentComponent: React.FC<ContentComponentProps> = ({
                                                               mainImgSrc,
                                                               iconImgSrc,
                                                               childStyle,
                                                               childRef,
                                                               h4Content,
                                                               h2Content,
                                                               pContent,
                                                               readMoreContent,
                                                           }) => {

    const [isReadMoreActive, setReadMoreActive] = useState(false)

    const arrowRef: any = useRef(null);
    const tl: any = useRef(null);
    const readMoreContentRef: any = useRef(null);

    useEffect(() => {
        tl.current = gsap.timeline({paused: true});
        tl.current.to(arrowRef.current, {
            rotation: 90,
            duration: 0.1,
        }, 0);
        tl.current.to(readMoreContentRef.current, {
            height: 100,
            duration: 0.1,
        }, .2);

    }, []);

    useEffect(() => {
        isReadMoreActive ? tl.current.play() : tl.current.reverse();
    }, [isReadMoreActive])

    const handleMouseEnter = () => {
        gsap.to(arrowRef.current, {
            scale: 1.2,
            duration: 0.1,
        });
    };

    const handleMouseLeave = () => {
        gsap.to(arrowRef.current, {
            scale: 1,
            duration: 0.1,
        });
    };

    const handleClick = () => {
        setReadMoreActive(!isReadMoreActive)
    }

    const handleOnBlur = () => {
        setReadMoreActive(false)
    }

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
                    <img
                        tabIndex={0}
                        onBlur={handleOnBlur}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        onClick={handleClick}
                        ref={arrowRef}
                        src={arrowImage}
                        width={24}
                        height={16}
                        alt="arrowImg"/>
                </div>
                <div ref={readMoreContentRef} className={style.readMoreContent}>
                    {readMoreContent}
                </div>
            </div>
            <div className={style.mainImgWrapper}>
                <img src={mainImgSrc} alt="mainImg"/>
            </div>
        </div>
    )
}

export default ContentComponent;
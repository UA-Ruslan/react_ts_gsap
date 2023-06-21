import React, {ReactNode, useEffect, useRef, useState} from "react";
import style from './contentComponent.module.scss'
import arrowImage from '../../../img/secondSection/arrow.png'
import gsap from "gsap-trial";


interface Props {
    iconImgSrc: string
    mainImgSrc: string,
    childStyle: string,
    childRef: any,
    h2Content: ReactNode,
    h4Content: string,
    pContent: ReactNode,
    readMoreContent?: ReactNode,
}

const ContentComponent: React.FC<Props> = ({
                                               mainImgSrc,
                                               iconImgSrc,
                                               childStyle,
                                               childRef,
                                               h4Content,
                                               h2Content,
                                               pContent,
                                               readMoreContent,
                                           }) => {

    const [isReadMoreActive, setReadMoreActive] = useState<boolean>(false)
    const [stopImgOnBlur, setStopImgOnBlur] = useState<boolean>(false)
    const arrowRef: any = useRef<HTMLDivElement>(null);
    const tl: any = useRef(null);
    const readMoreContentRef: any = useRef<HTMLDivElement>(null);

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

    const onMouseEnterImg = (): void => {
        gsap.to(arrowRef.current, {
            scale: 1.2,
            duration: 0.1,
        });
    };

    const onMouseLeaveImg = (): void => {
        gsap.to(arrowRef.current, {
            scale: 1,
            duration: 0.1,
        });
    };

    const onClickImg = (): void => {
        setReadMoreActive(!isReadMoreActive)
    }
    const OnBlurImg = (e: React.FocusEvent<HTMLImageElement>): void => {
        if (stopImgOnBlur) {
            e.preventDefault()
        } else {
            setReadMoreActive(false)
        }
    }
    const onMouseEnterReadMoreContent = (): void => {
        setStopImgOnBlur(true)
    }
    const onMouseLeaveReadMoreContent = (): void => {
        setStopImgOnBlur(false)
    }
    const onBlurReadMoreContent = (): void => {
        setTimeout(() => {
            setReadMoreActive(false)
        },100)

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
                        onBlur={OnBlurImg}
                        onMouseEnter={onMouseEnterImg}
                        onMouseLeave={onMouseLeaveImg}
                        onClick={onClickImg}
                        ref={arrowRef}
                        src={arrowImage}
                        width={24}
                        height={16}
                        alt="arrowImg"/>
                </div>
                <div
                    tabIndex={0}
                    onBlur={onBlurReadMoreContent}
                    onMouseEnter={onMouseEnterReadMoreContent}
                    onMouseLeave={onMouseLeaveReadMoreContent}
                    ref={readMoreContentRef}
                    className={style.readMoreContent}
                >
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
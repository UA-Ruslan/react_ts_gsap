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
    const [isReadMoreActive, setReadMoreActive] = useState(false)

    const arrowRef: any = useRef(null);
    const tl: any = useRef(null);
    useEffect(() => {
        tl.current = gsap.timeline({paused: true});
        tl.current.to(arrowRef.current, {
            rotation: 90,
        })
    }, [])

    useEffect(() => {
        isReadMoreActive ? tl.current.play() : tl.current.reverse();
    }, [isReadMoreActive])

    const handleClick = () => {
        setReadMoreActive(!isReadMoreActive)
    }
    console.log(isReadMoreActive)
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
                    <img onClick={handleClick} ref={arrowRef} src={arrowImage} width={24} height={16} alt="arrowImg"/>
                </div>
                <div className={style.readMoreContent}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias at autem consequuntur deleniti
                        ducimus eligendi ex exercitationem facilis fuga fugit illum ipsam laboriosam laborum laudantium,
                        minima mollitia nam natus necessitatibus nemo nesciunt nostrum nulla omnis optio pariatur
                        perferendis porro quae quasi quia quod rem repellendus rerum soluta ullam unde ut veniam vero!
                        Assumenda commodi consequatur delectus doloremque dolorum eius enim eos expedita ipsum iure,
                        laboriosam, maiores modi molestiae nobis odio sapiente totam vel voluptates. Adipisci aliquam
                        consequatur cum dicta dolor dolorem earum eligendi fugit harum, in laborum magni nostrum
                        officiis
                        pariatur perferendis quas repudiandae similique temporibus totam ullam voluptate
                        voluptatibus!
                    </p>
                </div>
            </div>
            <div className={style.mainImgWrapper}>
                <img src={mainImgSrc} alt="mainImg"/>
            </div>
        </div>
    )
}

export default ContentComponent;
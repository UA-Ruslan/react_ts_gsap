import React, {useEffect, useRef} from "react";
import style from './burgerBtn.module.scss'
import gsap from "gsap-trial";

interface BurgerBtnProps {
    isDropdownMenuActive: boolean;
    setDropdownMenuActive: React.Dispatch<React.SetStateAction<boolean>>;
    children: React.ReactNode;
}

const BurgerBtn: React.FC<BurgerBtnProps> = ({isDropdownMenuActive, setDropdownMenuActive, children}) => {

    const refItem1: any = useRef(null);
    const refItem2: any = useRef(null);
    const refItem3: any = useRef(null);
    const dropMenu: any = useRef(null)
    const tl: any = useRef(null);


    useEffect(() => {
        tl.current = gsap.timeline({paused: true});

        tl.current.to(refItem1.current, {
            transformOrigin: 'top left',
            rotation: 45,
            translateX: "3px",
            translateY: "-4px",
            border: "none",
        }, 0)
        tl.current.to(refItem2.current, {
            transformOrigin: 'bottom left',
            rotation: -45,
            translateY: "9px",
            translateX: "3px",
            border: "none",
        }, 0)
        tl.current.to(refItem3.current, {
            translateX: 30,
            opacity: 0,
            border: "none",
        }, 0)
        tl.current.to(dropMenu.current, {
            top: 0,
            duration: .5,
        }, 0)
    }, []);


    useEffect(() => {
        isDropdownMenuActive ? tl.current.play() : tl.current.reverse()
    }, [isDropdownMenuActive]);


    const handleClick = () => {
        setDropdownMenuActive(!isDropdownMenuActive)
    }

    return (
        <div className={style.dropdownBtnAndMenuWrapper}>
            <div ref={dropMenu} className={style.dropdownMenuWrapper}>
                {children}
            </div>
            <div onClick={handleClick} className={style.burgerBtnItemsWrapper}>
                <div ref={refItem1} className={`${style.burgerBtnItemCommon} ${style.burgerBtnItem1}`}></div>
                <div ref={refItem2} className={`${style.burgerBtnItemCommon} ${style.burgerBtnItem2}`}></div>
                <div ref={refItem3} className={`${style.burgerBtnItemCommon} ${style.burgerBtnItem3}`}></div>
            </div>
        </div>
    )
}

export default BurgerBtn;

import React, {useRef, useLayoutEffect, useState} from 'react';
import './App.scss';
import style from "./components/burgerBtn/burgerBtn.module.scss"
import gsap from 'gsap-trial';
import {ScrollSmoother} from 'gsap-trial/ScrollSmoother';
import FirstSection from "./components/firstSection/FirstSection";
import BurgerBtn from "./components/burgerBtn/BurgerBtn";
import HeaderAndDropMenuHrefs from "./components/headerAndDropMenuHrefs/HeaderAndDropMenuHrefs";
import SecondSection from "./components/secondSection/SecondSection";
import Footer from "./components/footer/Footer";

gsap.registerPlugin(ScrollSmoother);

 export interface CommonRefs {
    refFirstChild: React.RefObject<HTMLDivElement>,
    refSecondChild: React.RefObject<HTMLDivElement>,
    refThirdChild: React.RefObject<HTMLDivElement>,
    refForm: React.LegacyRef<SVGPathElement>,
}

const App: React.FC = () => {

    const [isDropdownMenuActive, setDropdownMenuActive] = useState<boolean>(false)

    const main = useRef<HTMLDivElement>(null)
    const smoother: any = useRef(null)
    const commonRefs: CommonRefs = {
        refFirstChild: useRef<HTMLDivElement>(null),
        refSecondChild: useRef<HTMLDivElement>(null),
        refThirdChild: useRef<HTMLDivElement>(null),
        refForm: useRef<SVGPathElement>(null),
    }


    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            smoother.current = ScrollSmoother.create({
                smooth: 1,
                effects: true,
            });
        }, main);
        return () => ctx.revert();
    }, []);


    return (
        <div id='smooth-wrapper' ref={main}>

            <BurgerBtn
                isDropdownMenuActive={isDropdownMenuActive}
                setDropdownMenuActive={setDropdownMenuActive}
                HeaderAndDropMenuHrefs={
                    <HeaderAndDropMenuHrefs
                        setDropdownMenuActive={setDropdownMenuActive}
                        hrefContainer={style.hrefContainer}
                        accountWrapper={style.accountWrapper}
                        hrefWrapper={style.hrefWrapper}
                        hrefStyle={style.hrefStyle}
                        smoother={smoother}
                        {...commonRefs}
                    />
                }
            />

            <div id='smooth-content'>

                <div className='appWrapper'>

                    <FirstSection
                        setDropdownMenuActive={setDropdownMenuActive}
                        smoother={smoother}
                        {...commonRefs}
                    />

                    <SecondSection
                        {...commonRefs}
                    />

                    <Footer/>

                </div>

            </div>
        </div>
    );
}

export default App;

import React, {useRef, useLayoutEffect, useState} from 'react';
import './App.scss';
import style from "./components/burgerBtn/burgerBtn.module.scss"
import gsap from 'gsap-trial';
import {ScrollTrigger} from 'gsap-trial/ScrollTrigger';
import {ScrollSmoother} from 'gsap-trial/ScrollSmoother';
import FirstSection from "./components/firstSection/FirstSection";
import BurgerBtn from "./components/burgerBtn/BurgerBtn";
import HeaderAndDropMenuHrefs from "./components/headerAndDropMenuHrefs/HeaderAndDropMenuHrefs";
import SecondSection from "./components/secondSection/SecondSection";
import Footer from "./components/footer/Footer";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

interface dataIdProps {
    id1: string,
    id2: string,
    id3: string,
}

function App() {

    const [isDropdownMenuActive, setDropdownMenuActive] = useState<boolean>(false)

    const main: any = useRef(null)
    const smoother: any = useRef(null)

    const dataId: dataIdProps = {
        id1: 'equipment',
        id2: 'aboutUs',
        id3: 'blog',
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
                children={<HeaderAndDropMenuHrefs
                    hrefContainer={style.hrefContainer}
                    accountWrapper={style.accountWrapper}
                    hrefWrapper={style.hrefWrapper}
                    hrefStyle={style.hrefStyle}
                    dataId={dataId}
                />}
            />

            <div id='smooth-content'>

                <div className='appWrapper'>

                    <FirstSection/>

                    <SecondSection/>

                    <Footer/>

                </div>

            </div>
        </div>
    );
}

export default App;

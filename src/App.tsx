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

const App: React.FC = () => {

    const [isDropdownMenuActive, setDropdownMenuActive] = useState<boolean>(false)

    const main: React.RefObject<HTMLDivElement> | null = useRef(null)
    const smoother: React.PropsWithRef<any> = useRef(null)
    const refFirstChild: React.RefObject<HTMLDivElement> | null = useRef(null);
    const refSecondChild: React.RefObject<HTMLDivElement> | null = useRef(null);
    const refThirdChild: React.RefObject<HTMLDivElement> | null = useRef(null);
    const formRef: React.RefObject<HTMLDivElement> | null = useRef(null)


    useLayoutEffect(() => {
        const ctx = gsap.context(() => {

            smoother.current = ScrollSmoother.create({
                smooth: 1,
                effects: true,
            });
        }, main);
        return () => ctx.revert();
    }, []);




    const handleScrollToFirstChild = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        const ref = refFirstChild.current
        smoother.current.scrollTo(ref, true, 'bottom bottom');
    };

    const handleScrollToSecondChild = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        const ref = refSecondChild.current
        smoother.current.scrollTo(ref, true, 'bottom bottom');
    };

    const handleScrollToThirdChild = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        const ref = refThirdChild.current
        smoother.current.scrollTo(ref, true, 'bottom bottom');
    };

    const handleScrollToContactUs = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault()
        const ref = formRef.current;
        smoother.current.scrollTo(ref, true, 'center center')
    }

    return (
        <div id='smooth-wrapper' ref={main}>

            <BurgerBtn
                isDropdownMenuActive={isDropdownMenuActive}
                setDropdownMenuActive={setDropdownMenuActive}
                HeaderAndDropMenuHrefs={<HeaderAndDropMenuHrefs
                    handleScrollToFirstChild={handleScrollToFirstChild}
                    handleScrollToSecondChild={handleScrollToSecondChild}
                    handleScrollToThirdChild={handleScrollToThirdChild}
                    handleScrollToContactUs={handleScrollToContactUs}
                    setDropdownMenuActive={setDropdownMenuActive}
                    hrefContainer={style.hrefContainer}
                    accountWrapper={style.accountWrapper}
                    hrefWrapper={style.hrefWrapper}
                    hrefStyle={style.hrefStyle}

                    smoother={smoother}
                    refSecondChild={refSecondChild}
                />}
            />

            <div id='smooth-content'>

                <div className='appWrapper'>

                    <FirstSection
                        handleScrollToFirstChild={handleScrollToFirstChild}
                        handleScrollToSecondChild={handleScrollToSecondChild}
                        handleScrollToThirdChild={handleScrollToThirdChild}
                        handleScrollToContactUs={handleScrollToContactUs}
                        setDropdownMenuActive={setDropdownMenuActive}

                        smoother={smoother}
                        refSecondChild={refSecondChild}
                    />

                    <SecondSection
                        refFirstChild={refFirstChild}
                        refSecondChild={refSecondChild}
                        refThirdChild={refThirdChild}
                        formRef={formRef}
                    />

                    <Footer/>

                </div>

            </div>
        </div>
    );
}

export default App;

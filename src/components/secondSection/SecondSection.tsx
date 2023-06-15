import React, {useRef, useEffect} from "react";
import style from './secondSection.module.scss'
import contentComponentStyle from './contentComponent/contentComponent.module.scss'
import gsap from "gsap-trial";
import {ScrollTrigger} from "gsap-trial/ScrollTrigger";
import icon01 from '../../img/secondSection/01.png'
import icon02 from '../../img/secondSection/02.png'
import icon03 from '../../img/secondSection/03.png'
import mainImage01 from '../../img/secondSection/main01.png'
import mainImage02 from '../../img/secondSection/main02.png'
import mainImage03 from '../../img/secondSection/main03.png'

import ContentComponent from "./contentComponent/ContentComponent";


gsap.registerPlugin(ScrollTrigger);

const SecondSection = () => {

    const refSecondSection: any = useRef(null)
    const refFirstChild: any = useRef(null)
    const refSecondChild: any = useRef(null)
    const refThirdChild: any = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            const child = refFirstChild.current;

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: child,
                    start: "top 60%",
                    end: "top 0",
                    // markers: true,
                    scrub: 2,
                }
            })

            tl.to(child, {x: "100vw", duration: 5, ease: "none",})
                .to(child, {x: "100vw", duration: 10, ease: "none"})
                .to(child, {x: "0vw", duration: 5, ease: "none",})


        }, refSecondSection);
        return () => ctx.revert();

    }, []);


    useEffect(() => {
        const ctx = gsap.context(() => {
            const child = refSecondChild.current;

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: child,
                    start: "-230px 60%",
                    end: "-230px -300",
                    // markers: true,
                    scrub: 2,
                }
            })
            tl.to(child, {x: "-100vw", duration: 5, ease: "none",})
                .to(child, {x: "-100vw", duration: 10, ease: "none"})
                .to(child, {x: "0vw", duration: 5, ease: "none",})

        }, refSecondSection);
        return () => ctx.revert();
    }, []);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const child = refThirdChild.current;

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: child,
                    start: "top 81%",
                    end: "top 0",
                    // markers: true,
                    scrub: 2,
                }
            })

            tl.to(child, {x: "100vw", duration: 5, ease: "none",})
                .to(child, {x: "100vw", duration: 10, ease: "none"})
                .to(child, {x: "200vw", duration: 5, ease: "none",})



        }, refSecondSection);
        return () => ctx.revert();
    }, []);


    const h2FirstChild = <h2>What level of hiker <br/> are you?</h2>
    const h2SecondChild = <h2>Picking the right<br/> Hiking Gear!</h2>
    const h2ThirdChild = <h2>Understand Your<br/>Map & Timing</h2>

    const pFirstChild = <p>Determining what level of hiker you are can be an important tool when <br/> planning future
        hikes. This
        hiking level guide will help you plan hikes <br/> according to different hike ratings set by various
        websites like All Trails and <br/> Modern Hiker. What type of hiker are you – novice, moderate,
        advanced <br/> moderate, expert, or expert backpacker? </p>
    const pSecondChild = <p>The nice thing about beginning hiking is that you don’t really need any <br/> special gear,
        you
        can probably get away with things you already have. <br/>
        Let’s start with clothing. A typical mistake hiking beginners make is wearing<br/> jeans and regular clothes,
        which
        will get heavy and chafe wif they get <br/> sweaty or wet.</p>
    const pThirdChild = <p>To start, print out the hiking guide and map. If it’s raining, throw them in a <br/> Zip-Lock bag.
        Read over the guide, study the map, and have a good idea <br/> of what to expect. I like to know what my next landmark
        is as I hike. For <br/> example, I’ll read the guide and know that say, in a mile, I make a right turn <br/> at the
        junction..</p>


    return (
        <div ref={refSecondSection} className={style.secondSectionWrapper}>

            <ContentComponent
                iconImgSrc={icon01}
                mainImgSrc={mainImage01}
                childStyle={contentComponentStyle.mainChild}
                childRef={refFirstChild}
                h4Content={'GET STARTED'}
                h2Content={h2FirstChild}
                pContent={pFirstChild}
            />

            <ContentComponent
                iconImgSrc={icon02}
                mainImgSrc={mainImage02}
                childStyle={`${contentComponentStyle.mainChild} ${contentComponentStyle.secondChild}`}
                childRef={refSecondChild}
                pContent={pSecondChild}
                h2Content={h2SecondChild}
                h4Content={'HIKING ESSENTIALS'}

            />

            <ContentComponent
                iconImgSrc={icon03}
                mainImgSrc={mainImage03}
                childStyle={`${contentComponentStyle.mainChild} ${contentComponentStyle.thirdChild}`}
                childRef={refThirdChild}
                h4Content={'WHERE YOU GO IS THE KEY'}
                h2Content={h2ThirdChild}
                pContent={pThirdChild}
            />

        </div>
    )
}

export default SecondSection;
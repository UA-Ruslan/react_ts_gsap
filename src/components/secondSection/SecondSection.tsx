import React, {useRef, useEffect} from "react";
import style from './secondSection.module.scss'
import contentComponentStyle from './contentComponent/contentComponent.module.scss'
import gsap from "gsap-trial";
import {ScrollTrigger} from "gsap-trial/ScrollTrigger";
import {DrawSVGPlugin} from 'gsap-trial/DrawSVGPlugin'
import icon01 from '../../img/secondSection/01.png'
import icon02 from '../../img/secondSection/02.png'
import icon03 from '../../img/secondSection/03.png'
import mainImage01 from '../../img/secondSection/main01.png'
import mainImage02 from '../../img/secondSection/main02.png'
import mainImage03 from '../../img/secondSection/main03.png'
import ContentComponent from "./contentComponent/ContentComponent";


gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);

const SecondSection = () => {


    const formRef: any = useRef(null);
    const refSecondSection: any = useRef(null)
    const refFirstChild: any = useRef(null)
    const refSecondChild: any = useRef(null)
    const refThirdChild: any = useRef(null)

    useEffect(() => {
        const svgPath = formRef.current.querySelector('path');

        gsap.set(svgPath, {drawSVG: '50% 50%'});

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: formRef.current,
                start: 'bottom bottom',
                end: 'bottom 90%',
                scrub: 0.5,
                toggleActions: 'play none none reverse',
                markers: true
            },
        });

        tl.to(svgPath, {drawSVG: '0% 100%', duration: 5});

        return () => {
            tl.kill(); // Зупиняємо анімацію при розмонтуванні компонента
        };
    }, []);

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
            // .to(child, {x: "200vw", duration: 5, ease: "none",})


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
    const pThirdChild = <p>To start, print out the hiking guide and map. If it’s raining, throw them in a <br/> Zip-Lock
        bag.
        Read over the guide, study the map, and have a good idea <br/> of what to expect. I like to know what my next
        landmark
        is as I hike. For <br/> example, I’ll read the guide and know that say, in a mile, I make a right turn <br/> at
        the
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

            <div className={style.formWrapper}>
                <svg ref={formRef} viewBox="300 5 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path
                        strokeWidth='1'
                        stroke='white'
                        fill='none'
                        d="M 400 10.812 L 474.939 10.812 C 483.141 10.812 489.79 17.461 489.79 25.663 L 489.79 174.798 C 489.79 183 483.141 189.649 474.939 189.649 L 325.804 189.649 C 317.602 189.649 310.953 183 310.953 174.798 L 310.953 25.663 C 310.953 17.461 317.602 10.812 325.804 10.812 L 325.804 10.812 L 400 10.812"></path>
                </svg>
                <form>
                    <input className={`${style.inputCommon} ${style.email}`} type={"email"}/>
                    <input className={`${style.inputCommon} ${style.name}`} type={"text"}/>
                    <button className={style.submitBtn}>SUBMIT</button>
                </form>
            </div>
        </div>
    )
}

export default SecondSection;
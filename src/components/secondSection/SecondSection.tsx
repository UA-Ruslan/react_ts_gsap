import React, {useRef, useEffect, FormEvent, useState, ChangeEvent} from "react";
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

interface FormDataProps {
    email: string,
    name: string,
}

const SecondSection = () => {

    const [formData, setFormData] = useState<FormDataProps>({
        email: '',
        name: '',
    });
    const [isEmailValid, setEmailValid] = useState(true);
    const [isNameValid, setNameValid] = useState(true);
    const [isEmailEmpty, setIsEmailEmpty] = useState(false);
    const [isNameEmpty, setIsNameEmpty] = useState(false);
    const [isSuccess, setSuccess] = useState(false);

    const refSecondSection: any = useRef(null);
    const refFirstChild: any = useRef(null);
    const refSecondChild: any = useRef(null);
    const refThirdChild: any = useRef(null);
    const formRef: any = useRef(null);
    const emailInputRef: any = useRef(null);
    const nameInputRef: any = useRef(null);
    const btnRef: any = useRef(null);
    const spanRef: any = useRef(null);

    useEffect(() => {
        if (isSuccess) {
            setTimeout(() => {
                setSuccess(false)
            }, 5000)
        }
    })

    useEffect(() => {

        const ctx = gsap.context(() => {
            const svgPath = formRef.current;
            const emailInput = emailInputRef.current;
            const nameInput = nameInputRef.current;
            const btn = btnRef.current;

            gsap.set(svgPath, {drawSVG: '50% 50%'});

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: svgPath,
                    start: 'bottom 90%',
                    // markers: true,
                    onEnter: () => tl.play().timeScale(1), // Перевіряємо напрямок прокрутки і відтворюємо анімацію
                    onLeaveBack: () => tl.reverse().timeScale(-1), // Відтворюємо анімацію у зворотньому напрямку при зворотній прокрутці   scrub: true, // Включаємо режим scrub
                },
            });

            tl.to(svgPath, {drawSVG: '0% 100%', duration: 1});
            tl.to(emailInput, {opacity: 1, duration: .3,})
            tl.to(nameInput, {opacity: 1, duration: .3,})
            tl.to(btn, {opacity: 1, duration: .3,})

        }, refSecondSection);
        return () => ctx.revert();

    }, []);

    useEffect(() => {
        const svgPath = formRef.current;
        const span = spanRef.current;
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: svgPath,
                start: 'bottom 90%',
                // markers: true,
                onEnter: () => tl.play().timeScale(1), // Перевіряємо напрямок прокрутки і відтворюємо анімацію
                onLeaveBack: () => tl.reverse().timeScale(-1), // Відтворюємо анімацію у зворотньому напрямку при зворотній прокрутці   scrub: true, // Включаємо режим scrub
            },
        });
        tl.fromTo(span, {opacity: 0, duration: .3,}, {opacity: 1, duration: 1,})
    }, [isEmailValid, isNameValid, isEmailEmpty, isNameEmpty])

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


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const {name, value} = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault()

        if (formData.email.trim() === '') {
            setIsEmailEmpty(true);
            setEmailValid(true)
        } else if (!isValidEmail(formData.email) && formData.email.trim() != '') {
            setEmailValid(false)
            setIsEmailEmpty(false);
        } else if (isValidEmail(formData.email) && formData.name.trim() === '') {
            setEmailValid(true)
            setIsNameEmpty(true)
        } else if (isValidEmail(formData.email) && formData.name.trim() != '' && !isValidName(formData.name) ) {
            setEmailValid(true)
            setIsNameEmpty(false)
            setNameValid(false)
        } else {
            setIsEmailEmpty(false)
            setEmailValid(true)
            setIsNameEmpty(false)
            setNameValid(true)
            setSuccess(true)
            setFormData({email: '',name: ''})
        }
    }

    const isValidEmail = (emailValue: string) => {
        const emailValidation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailValidation.test(emailValue);
    };

    const isValidName = (name: string) => {
        const nameValidation = /^[^\d\s]+$/;
        return nameValidation.test(name);
    };

    console.log(isSuccess)

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

                <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
                    <path
                        ref={formRef}
                        strokeWidth='5'
                        stroke='white'
                        fill='none'
                        d="M 251.788 0 L 478.806 0 C 490.511 0 500 9.489 500 21.194 L 500 478.806 C 500 490.511 490.511 500 478.806 500 L 21.194 500 C 9.489 500 0 490.511 0 478.806 L 0 21.194 C 0 9.489 9.489 0 21.194 0 L 21.194 0 L 251.788 0"></path>
                </svg>

                <form onSubmit={handleSubmit}>

                    {!isEmailValid &&
                        <span ref={spanRef} className={`${style.validEmailSpan} ${style.spanCommon}`}>
                            ENTER A VALID EMAIL
                        </span>}
                    {isEmailEmpty &&
                        <span ref={spanRef} className={`${style.requiredEmailSpan} ${style.spanCommon}`}>
                            REQUIRED FIELD
                        </span>}

                    <input
                        name='email'
                        value={formData.email}
                        onChange={handleChange}
                        ref={emailInputRef}
                        placeholder='email'
                        type="text"
                        className={`${style.email} ${style.inputCommon}`}
                    />

                    {isNameEmpty &&
                        <span ref={spanRef} className={`${style.requiredNameSpan} ${style.spanCommon}`}>
                        REQUIRED FIELD
                    </span>}
                    {!isNameValid &&
                        <span ref={spanRef} className={`${style.validNameSpan} ${style.spanCommon}`}>
                        EXCEPT NUMBERS
                    </span>}
                    <input
                        name='name'
                        value={formData.name}
                        onChange={handleChange}
                        ref={nameInputRef}
                        placeholder='name'
                        type="text"
                        className={`${style.name} ${style.inputCommon}`}
                    />

                    <button ref={btnRef} className={style.submitBtn}>SUBMIT</button>
                    <span style={isSuccess?{opacity:1, transition: '.3s'} : {opacity: 0, transition: '.3s'}} className={`${style.spanSuccess} ${style.spanCommon}`}>The form was sent successfully</span>
                </form>
            </div>
        </div>
    )
}

export default SecondSection;
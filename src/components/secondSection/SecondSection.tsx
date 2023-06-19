import React, {useRef, useEffect, FormEvent, useState} from "react";
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
interface dataIdProps {
    id1: string,
    id2: string,
    id3: string,
    // dataId? : {
    //     id1: string
    //     id2: string
    //     id3: string
    // };
}

const SecondSection: React.FC<dataIdProps> = ({id1,id2,id3,}) => {

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
    const contactUsRef: any = useRef(null)

    //------------------------------------form animation-----------------------------------//
    useEffect(() => {

        const ctx = gsap.context(() => {
            const svgPath = formRef.current;
            const emailInput = emailInputRef.current;
            const nameInput = nameInputRef.current;
            const btn = btnRef.current;
            const contactUs = contactUsRef.current;

            gsap.set(svgPath, {drawSVG: '50% 50%'});

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: svgPath,
                    start: 'bottom 90%',
                    onEnter: () => tl.play().timeScale(1), // Перевіряємо напрямок прокрутки і відтворюємо анімацію
                    onLeaveBack: () => tl.reverse().timeScale(-1), // Відтворюємо анімацію у зворотньому напрямку при зворотній прокрутці   scrub: true, // Включаємо режим scrub
                },
            });

            tl.to(svgPath, {drawSVG: '0% 100%', duration: 1});
            tl.to(contactUs, {opacity: 1, duration: .3,})
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
                onEnter: () => tl.play().timeScale(1), // Перевіряємо напрямок прокрутки і відтворюємо анімацію
                onLeaveBack: () => tl.reverse().timeScale(-1), // Відтворюємо анімацію у зворотньому напрямку при зворотній прокрутці   scrub: true, // Включаємо режим scrub
            },
        });
        tl.fromTo(span, {opacity: 0, duration: .3,}, {opacity: 1, duration: 1,})
    }, [isEmailValid, isNameValid, isEmailEmpty, isNameEmpty])

    //------------------------------------/form animation-----------------------------------//

    //-------------------------contentComponents animation----------------------------------//
    useEffect(() => {
        const ctx = gsap.context(() => {
            const child = refFirstChild.current;

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: child,
                    start: "top 60%",
                    end: "top 0",
                    scrub: 2,
                }
            })

            tl.to(child, {x: "100vw", opacity: 1, duration: 5, ease: "none",})
                .to(child, {x: "100vw", duration: 10, ease: "none"})
                .to(child, {x: "0vw", opacity: 0, duration: 5, ease: "none",})


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
                    scrub: 2,
                }
            })
            tl.to(child, {x: "-100vw", opacity: 1, duration: 5, ease: "none",})
                .to(child, {x: "-100vw", duration: 10, ease: "none"})
                .to(child, {x: "0vw", opacity: 0, duration: 5, ease: "none",})

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
                    scrub: 2,
                }
            })

            tl.to(child, {x: "100vw", opacity: 1, duration: 5, ease: "none",})
                .to(child, {x: "100vw", duration: 10, ease: "none"})


        }, refSecondSection);
        return () => ctx.revert();
    }, []);

    //-------------------------/contentComponents animation----------------------------------//

    //----------------------------form validation and submit---------------------------------//

    useEffect(() => {
        if (isSuccess) {
            setTimeout(() => {
                setSuccess(false)
            }, 5000)
        }
    })

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
        } else if (isValidEmail(formData.email) && formData.name.trim() != '' && !isValidName(formData.name)) {
            setEmailValid(true)
            setIsNameEmpty(false)
            setNameValid(false)
        } else {
            setIsEmailEmpty(false)
            setEmailValid(true)
            setIsNameEmpty(false)
            setNameValid(true)
            setSuccess(true)
            setFormData({email: '', name: ''})
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

//------------------------------------/form validation and submit-----------------------------//

    return (
        <div ref={refSecondSection} className={style.secondSectionWrapper}>

            <ContentComponent
                id={id2}
                iconImgSrc={icon01}
                mainImgSrc={mainImage01}
                childStyle={contentComponentStyle.mainChild}
                childRef={refFirstChild}
                h4Content={'GET STARTED'}
                h2Content={<h2>What level of hiker <br/> are you?</h2>}
                pContent={<p>Determining what level of hiker you are can be an important tool when <br/> planning future
                    hikes. This
                    hiking level guide will help you plan hikes <br/> according to different hike ratings set by various
                    websites like All Trails and <br/> Modern Hiker. What type of hiker are you – novice, moderate,
                    advanced <br/> moderate, expert, or expert backpacker? </p>}
                readMoreContent={<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto culpa eius esse
                    ipsa omnis repellendus sapiente similique sint suscipit voluptate? Aliquam asperiores aut autem,
                    cum, debitis dicta dolorum ea eligendi error facilis fugit, ipsum labore magnam nam odit officia
                    perspiciatis quia recusandae tenetur veniam. Accusamus aliquam animi beatae blanditiis delectus
                    dignissimos dolor ducimus eos fugiat illum impedit in molestias mollitia natus odio officiis omnis
                    quaerat qui reprehenderit sed temporibus totam, veritatis. Accusantium amet aperiam cupiditate
                    deleniti eaque harum incidunt inventore iste libero natus, nostrum praesentium quibusdam, quod
                    temporibus totam unde voluptatem. Aliquam consequatur enim exercitationem maxime nesciunt quasi
                    recusandae rerum?</p>}
            />

            <ContentComponent
                id={id1}
                iconImgSrc={icon02}
                mainImgSrc={mainImage02}
                childStyle={`${contentComponentStyle.mainChild} ${contentComponentStyle.secondChild}`}
                childRef={refSecondChild}
                h4Content={'HIKING ESSENTIALS'}
                h2Content={<h2>Picking the right<br/> Hiking Gear!</h2>}
                pContent={<p>The nice thing about beginning hiking is that you don’t really need any <br/> special gear,
                    you
                    can probably get away with things you already have. <br/>
                    Let’s start with clothing. A typical mistake hiking beginners make is wearing<br/> jeans and regular
                    clothes,
                    which
                    will get heavy and chafe wif they get <br/> sweaty or wet.</p>}
                readMoreContent={<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aut blanditiis cum
                    doloribus incidunt totam velit. Ducimus ipsum tempora voluptatibus. Accusantium eligendi eveniet
                    labore numquam repellendus. Accusamus autem beatae ea labore maxime minima sapiente vero voluptatem!
                    Ab accusantium blanditiis ducimus earum fugit harum non possimus quam. Alias architecto at
                    consectetur enim maxime officiis possimus quod veniam. Cumque cupiditate excepturi incidunt nemo!
                    Commodi corporis deserunt error esse eum illo, molestias nam nihil provident quibusdam quis saepe
                    temporibus tenetur ut voluptates. Accusamus accusantium aperiam consequuntur culpa delectus,
                    deserunt dignissimos et eveniet exercitationem expedita iure laborum nesciunt nihil, numquam officia
                    qui ratione repellendus rerum unde velit! Architecto error esse exercitationem hic ipsam. Aspernatur
                    culpa enim incidunt labore pariatur, quibusdam sunt. Adipisci, cumque eveniet facere iusto nulla
                    quasi recusandae, reiciendis, ut vel vitae voluptates voluptatum. Accusamus animi aperiam autem
                    ducimus eius ipsa, iusto laboriosam laudantium minus molestias natus quisquam quos rem rerum totam
                    voluptatum.</p>}
            />

            <ContentComponent
                id={id3}
                iconImgSrc={icon03}
                mainImgSrc={mainImage03}
                childStyle={`${contentComponentStyle.mainChild} ${contentComponentStyle.thirdChild}`}
                childRef={refThirdChild}
                h4Content={'WHERE YOU GO IS THE KEY'}
                h2Content={<h2>Understand Your<br/>Map & Timing</h2>}
                pContent={<p>To start, print out the hiking guide and map. If it’s raining, throw them in
                    a <br/> Zip-Lock
                    bag.
                    Read over the guide, study the map, and have a good idea <br/> of what to expect. I like to know
                    what my next
                    landmark
                    is as I hike. For <br/> example, I’ll read the guide and know that say, in a mile, I make a right
                    turn <br/> at
                    the
                    junction..</p>}
                readMoreContent={<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto consequatur
                    doloremque dolores exercitationem iure, laboriosam neque nesciunt praesentium quas quod temporibus
                    vel voluptatibus? Ad adipisci alias aspernatur dolor ex harum, hic ipsum magni maiores maxime nemo
                    neque odio placeat possimus quae quas recusandae saepe sapiente soluta suscipit unde veniam
                    veritatis vitae. Ab at dolore doloremque magnam qui sit velit vitae voluptates. Aliquam aperiam
                    assumenda esse excepturi nesciunt, quod repellat rerum voluptatem! Adipisci distinctio eveniet,
                    explicabo molestias numquam quas quibusdam vitae. Accusamus aspernatur, cum cumque dignissimos,
                    error ipsa iure maiores natus officiis quae quo recusandae soluta suscipit. A earum fuga
                    laudantium!</p>}
            />

            <div className={style.formWrapper}>
                <h2 ref={contactUsRef} className={style.contactUS}>CONTACT US</h2>
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
                    <span style={isSuccess ? {opacity: 1, transition: '.3s'} : {opacity: 0, transition: '.3s'}}
                          className={`${style.spanSuccess} ${style.spanCommon}`}>The form was sent successfully</span>
                </form>
            </div>
        </div>
    )
}

export default SecondSection;
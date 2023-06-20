import React from "react";
import accountImg from '../../img/header/cart.png'

interface HeaderAndDropMenuHrefsProps {
    hrefWrapper: string;
    hrefStyle: string;
    accountWrapper: string;
    hrefContainer: string;
    handleScrollToFirstChild: (event: React.MouseEvent<HTMLAnchorElement>) => void;
    handleScrollToSecondChild: (event: React.MouseEvent<HTMLAnchorElement>) => void;
    handleScrollToThirdChild: (event: React.MouseEvent<HTMLAnchorElement>) => void;
    handleScrollToContactUs: (event: React.MouseEvent<HTMLAnchorElement>) => void;
    setDropdownMenuActive: React.Dispatch<React.SetStateAction<boolean>>;

    smoother:React.PropsWithRef<any>,
    refSecondChild:any,
}

const HeaderAndDropMenuHrefs: React.FC<HeaderAndDropMenuHrefsProps> = ({
                                                                           hrefWrapper,
                                                                           hrefStyle,
                                                                           accountWrapper,
                                                                           hrefContainer,
                                                                           handleScrollToFirstChild,
                                                                           handleScrollToSecondChild,
                                                                           handleScrollToThirdChild,
                                                                           handleScrollToContactUs,
                                                                           setDropdownMenuActive,

                                                                           smoother,
                                                                           refSecondChild,
                                                                       }) => {

        const ref = refSecondChild.current
    const scrollTo = (event: React.MouseEvent<HTMLAnchorElement>, ref:React.RefObject<HTMLDivElement>, position:string) => {
        event.preventDefault();
        smoother.current.scrollTo(ref , true, position);
    }

    const scrollToFirstChild = (event: any) => {
        setDropdownMenuActive(false)
        if (handleScrollToFirstChild) {
            handleScrollToFirstChild(event);
        }
    };


    // const scrollToSecondChild = (event: any) => {
    //     const ref = refSecondChild.current
    //     setDropdownMenuActive(false)
    //     scrollTo(event, ref, 'bottom bottom')
    // };
    // const scrollToSecondChild = (event: any) => {
    //     setDropdownMenuActive(false)
    //     if (handleScrollToSecondChild) {
    //         handleScrollToSecondChild(event);
    //     }
    // };
    const scrollToThirdChild = (event: any) => {
        setDropdownMenuActive(false)
        if (handleScrollToThirdChild) {
            handleScrollToThirdChild(event);
        }
    };
    const scrollToContactUs = (event: any) => {
        setDropdownMenuActive(false)
        if (handleScrollToContactUs) {
            handleScrollToContactUs(event);
        }
    };

    return (
        <div className={hrefContainer}>
            <div></div>
            <div className={hrefWrapper}>
                <div>
                    <a onClick={(event) => {scrollTo(event,ref, 'bottom bottom')}} className={hrefStyle} href='#'>Equipment</a>
                    {/*<a onClick={scrollToSecondChild} className={hrefStyle} href='#'>Equipment</a>*/}
                </div>
                <div>
                    <a onClick={scrollToThirdChild} className={hrefStyle} href='#'>About us</a>
                </div>
                <div>
                    <a onClick={scrollToFirstChild} className={hrefStyle} href='#'>Blog</a>
                </div>
            </div>
            <div  className={accountWrapper}>
                <div>
                    <img src={accountImg} alt="accountImg" width={24} height={24}/>
                </div>
                <div>
                    <a onClick={scrollToContactUs} className={hrefStyle} href="#">Contact us</a>
                </div>
            </div>
        </div>
    )
}

export default HeaderAndDropMenuHrefs;
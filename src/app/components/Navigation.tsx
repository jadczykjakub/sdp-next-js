'use client';

import { useState } from "react";
import useWindowScroll from "../hooks/use-window-scroll";
import headerLogoImage from "@/../public/images/layout/logo_nav.jpg"
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from 'react-i18next';
import Chevron from '@/../public/images/svg/chevron.svg';
import { Twirl as Hamburger } from 'hamburger-react'



const Navigation = () => {
    const { t, i18n } = useTranslation();
    const { y } = useWindowScroll();
    const isScrolled = y >= 50;

    // const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

    // const handleHamburgerClick = () => setIsNavOpen((prev) => !prev);

    const handleHamburger = (isToogled: boolean) => {
        console.log(isToogled, "elo")
    }

    return (
        <>
            <div className={` ${isScrolled ? "h-20" : 'h-24'} transition-all `}></div>
            <header className={` ${isScrolled ? "h-20" : 'h-24'} transition-all px-5 md:px-14 layout  fixed top-0 left-0 w-full flex gap-4 items-center justify-between border-b-2 border-secondary bg-black z-10`}>
                <Link href={"/"}>
                    <Image src={headerLogoImage} alt="sdp logo navigation" width={170} height={60} />
                </Link>

                <nav className="hidden md:block h-full ">
                    <ul className="flex gap-8 font-extralight h-full ">
                        <li className="hover:text-primary relative  group">
                            <Link href={t('layout.navigation.expertise.href')} className="flex gap-1 items-center h-full">{t('layout.navigation.expertise.title')} <Chevron class={` group-hover:-rotate-90 rotate-90 transition-transform` } /> </Link>
                            <div className="hidden absolute top-full left-1/2 -translate-x-1/2 group-hover:block w-80 h-80 bg-primary  "></div>
                        </li>
                        <li className="hover:text-primary flex ">
                            <Link href={t('layout.navigation.news.href') } className="h-full flex items-center">{t('layout.navigation.news.title')}</Link>
                        </li>
                        <li className="hover:text-primary flex">
                            <Link href={t('layout.navigation.people.href')} className="h-full flex items-center">{t('layout.navigation.people.title')}</Link>
                        </li>
                        <li className="hover:text-primary flex">
                            <Link href={t('layout.navigation.about-us.href')} className="h-full flex items-center">{t('layout.navigation.about-us.title')}</Link>
                        </li>
                        <li className="hover:text-primary flex">
                            <Link href={t('layout.navigation.contact.href')} className="h-full flex items-center">{t('layout.navigation.contact.title')}</Link>
                        </li>
                    </ul>
                </nav>

                <div className="md:hidden">
                    <Hamburger onToggle={handleHamburger} />
                </div>

            </header>
        </>
    );
}

export default Navigation;
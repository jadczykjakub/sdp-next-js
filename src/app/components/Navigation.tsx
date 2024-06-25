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

    return (<header className="px-5 md:px-14 layout flex gap-4 items-center justify-between border-b-2 border-secondary relative">
        <Link href={"/"}>
            <Image src={headerLogoImage} alt="sdp logo navigation" width={170} height={60} />
        </Link>

        <nav className="">
            <ul className="flex gap-2 font-extralight">
                <li className="hover:text-primary">
                    <Link href={t('layout.navigation.expertise.href')}>{t('layout.navigation.expertise.title')}</Link>
                </li>
                <li className="hover:text-primary">
                    <Link href={t('layout.navigation.news.href')}>{t('layout.navigation.news.title')}</Link>
                </li>
                <li className="hover:text-primary">
                    <Link href={t('layout.navigation.people.href')}>{t('layout.navigation.people.title')}</Link>
                </li>
                <li className="hover:text-primary">
                    <Link href={t('layout.navigation.about-us.href')}>{t('layout.navigation.about-us.title')}</Link>
                </li>
                <li className="hover:text-primary">
                    <Link href={t('layout.navigation.contact.href')}>{t('layout.navigation.contact.title')}</Link>
                </li>
            </ul>
        </nav>

        <div className="md:opacity-0">
            <Hamburger onToggle={handleHamburger} />
        </div>

    </header>);
}

export default Navigation;
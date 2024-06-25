'use client';

import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import FlagPL from '@/../public/images/svg/PL.svg'
import FlagEN from '@/../public/images/svg/GB.svg'
import { usePathname, useRouter } from 'next/navigation';


const LanguageSwitcher = () => {
    const { t, i18n } = useTranslation();


    const currentLocale = i18n.language;
    const router = useRouter();
    const currentPathname = usePathname();

    const handleChange = () => {
        
    }

    return (<div>sasdasd</div>);
}

export default LanguageSwitcher;
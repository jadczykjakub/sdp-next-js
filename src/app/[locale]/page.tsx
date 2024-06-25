'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';

import Button from '../components/Button';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import i18nConfig from '../i18nConfig';

export default function Home() {
  const { t, i18n } = useTranslation();
    const currentLocale = i18n.language;
    const router = useRouter();
    const currentPathname = usePathname();

    const handleChange = React.useCallback(
        (newLocale: string) => () => {
            const days = 30;
            const date = new Date();
            date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
            const expires = '; expires=' + date.toUTCString();
            document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

            if (currentLocale === i18nConfig.defaultLocale) {
                router.push('/' + newLocale + currentPathname);
            } else {
                router.push(currentPathname.replace(`/${currentLocale}`, `/${newLocale}`));
            }

            router.refresh();
        },
        [currentLocale, currentPathname, router],
    );

  return (
    <main>
      <span  className='bg-primary'>{t('home_text')}</span>
        <div >
          <Button linkTo='/' text='text' />

          <h1>text</h1>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={handleChange('en')}>
                English
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={handleChange('pl')}>
                Polish
            </button>
        </div>
    </main>
  );
}
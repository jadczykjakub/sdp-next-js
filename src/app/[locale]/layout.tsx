import React from 'react';
import initTranslations from '@/app/i18n';
import TranslationProvider from '@/app/[locale]/TranslationProvider';
import FooterBottom from '../components/FooterBottom';

const i18nNamespaces = ['translation'];

export default async function Layout({ children, params: { locale } }: any) {
    const { resources } = await initTranslations(locale, i18nNamespaces);

    return (
        <TranslationProvider locale={locale} resources={resources} namespaces={i18nNamespaces}>
            <div>
                {children}
            </div>
        </TranslationProvider>
    );
}

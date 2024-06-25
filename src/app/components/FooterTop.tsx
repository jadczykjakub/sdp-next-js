'use client';
import { useTranslation } from 'react-i18next';
import Button from "./Button";
import DecorationWrapper from './DecorationWrapper';

const FooterTop = () => {
    const { t, i18n } = useTranslation();
    return (<div className="flex flex-col gap-4 items-center py-12">
        <DecorationWrapper type='single' theme='dark'>
            <h4 className='text-3xl font-bold text-center'>{t('layout.footer.top.default_page.title')}</h4>
        </DecorationWrapper>
        <Button linkTo="/" text={t('layout.footer.top.default_page.button')} />
    </div>);
}

export default FooterTop;
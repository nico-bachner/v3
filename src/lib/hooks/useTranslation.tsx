import { useRouter } from 'next/router';

import { translations } from 'translations';

const useTranslation = () => {
    const { locale } = useRouter();

    const translation: Translation = translations[locale as Locale];

    return translation;
};

export { useTranslation };

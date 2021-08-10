import { useRouter } from 'next/router';

import * as translations from 'translations';

const useTranslation = () => {
    const { locale } = useRouter();

    const translation = translations[locale as Locale];

    return translation;
};

export { useTranslation };

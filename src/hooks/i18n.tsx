import { useRouter } from 'next/router';

import { en } from 'i18n/en';
import { da } from 'i18n/da';
import { fr } from 'i18n/fr';
import { de } from 'i18n/de';
import { lb } from 'i18n/lb';

export const translations = { en, da, fr, de, lb };

export const useI18n = () => {
    const { locale } = useRouter();

    return translations[locale as Locale];
};

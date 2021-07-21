import { useRouter } from 'next/router';

import { en } from 'translations/en';
import { da } from 'translations/da';
import { fr } from 'translations/fr';
import { de } from 'translations/de';
import { lb } from 'translations/lb';

export const translations = { en, da, fr, de, lb };

export const useI18n = () => {
    const { locale } = useRouter();

    return translations[locale as Locale];
};

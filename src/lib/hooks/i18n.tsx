import { useRouter } from 'next/router';

import { en } from 'content/translations/en';
import { da } from 'content/translations/da';
import { fr } from 'content/translations/fr';
import { de } from 'content/translations/de';
import { lb } from 'content/translations/lb';

export const translations = { en, da, fr, de, lb };

export const useI18n = () => {
    const { locale } = useRouter();

    return translations[locale as Locale];
};

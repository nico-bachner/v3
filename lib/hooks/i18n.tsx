import { useRouter } from 'next/router';

import { en } from '@content/i18n/en';
import { da } from '@content/i18n/da';
import { fr } from '@content/i18n/fr';
import { de } from '@content/i18n/de';
import { lb } from '@content/i18n/lb';

export const translations = { en, da, fr, de, lb };

export const useI18n = () => {
    const { locale } = useRouter();

    // @ts-ignore
    return translations[locale];
};

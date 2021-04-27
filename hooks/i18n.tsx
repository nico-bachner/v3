import { useRouter } from 'next/router';

import { translations } from '../content/i18n';

export function useI18n(customTranslations?: any, fallback?: string) {
    const { locale } = useRouter();

    if (translations) {
        return customTranslations[locale ?? fallback ?? 'en'];
    }

    return translations[locale ?? 'en'];
}

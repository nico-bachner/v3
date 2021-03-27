import { useRouter } from 'next/router';

export function useI18n(translations: any, fallback?: string) {
    const { locale } = useRouter();
    fallback = fallback ?? 'en';

    return translations[locale ?? fallback] ?? translations[fallback];
}

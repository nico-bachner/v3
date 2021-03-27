import { useRouter } from 'next/router';

export function useI18n(translations: any, fallback: string) {
    const { locale } = useRouter();

    return translations[locale ?? fallback];
}

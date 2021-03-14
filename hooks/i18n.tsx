import { useRouter } from "next/router";

interface Translations {
    en: any;
    da: any;
    fr: any;
    de: any;
    lu: any;
}

export function useI18n(translations: Translations) {
    const { locale } = useRouter();

    let translation = translations.en;

    if (locale == "da") {
        translation = translations.da;
    } else if (locale == "fr") {
        translation = translations.fr;
    } else if (locale == "de") {
        translation = translations.de;
    } else if (locale == "lu") {
        translation = translations.lu;
    }

    return translation;
}

export default function i18n(locale, translations) {
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

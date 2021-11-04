import { useRouter } from 'next/router'

import { translations } from 'content/translations'

const useTranslation = () => {
    const { locale } = useRouter()

    return translations[locale!]!
}

export { useTranslation }

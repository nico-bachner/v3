import { Select } from '@nico-bachner/components-react'

import { useRouter } from 'next/router'

const LanguageSwitch: React.FC = () => {
    const { pathname, query, locale, locales, push } = useRouter()

    return (
        <Select.Root
            value={locale}
            onValueChange={(value) => {
                push({ pathname, query }, pathname, {
                    locale: value,
                })
            }}
        >
            {locales?.map((locale) => {
                const [languageCode, countryCode] = locale.split('-')

                return (
                    <Select.Item key={locale} value={locale}>
                        {languageCode?.toUpperCase()}
                    </Select.Item>
                )
            })}
        </Select.Root>
    )
}

export default LanguageSwitch

import { Select } from '@nico-bachner/components-react'

import { useRouter } from 'next/router'

const LanguageSwitch: React.FC = () => {
    const { pathname, query, locale, locales, push } = useRouter()

    return (
        <Select.Root
            value={locale}
            onChange={({ target }) => {
                push({ pathname, query }, pathname, {
                    locale: target.value,
                })
            }}
        >
            {locales?.map((locale) => {
                const [languageCode, countryCode] = locale.split('-')

                return (
                    <Select.Option key={locale} value={locale}>
                        {languageCode?.toUpperCase()}
                    </Select.Option>
                )
            })}
        </Select.Root>
    )
}

export default LanguageSwitch

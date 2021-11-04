import { Select } from '@nico-bachner/components-react'
import { Display } from '@nico-bachner/icons-react'

import { useState, useEffect } from 'react'
import { useTheme } from '@nico-bachner/react-hooks'

const ThemeSwitch: React.FC = () => {
    const [mounted, setMounted] = useState(false)
    const { theme, themes, setTheme } = useTheme()

    // When mounted on client, now we can show the UI
    useEffect(() => setMounted(true), [])

    if (!mounted) return null

    return (
        <Select.Root
            value={theme}
            onChange={({ target }) => {
                setTheme(target.value)
            }}
        >
            {themes.map((theme) => (
                <Select.Option key={theme} value={theme}>
                    {theme.toUpperCase()}
                </Select.Option>
            ))}
        </Select.Root>
    )
}

export default ThemeSwitch

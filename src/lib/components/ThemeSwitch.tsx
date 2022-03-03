import { Select } from '@nico-bachner/components-react'
// TODO: use icons
import { Display } from '@nico-bachner/icons-react'

import { useState, useEffect } from 'react'
import { useTheme } from '@nico-bachner/react-hooks'

const ThemeSwitch: React.FC = () => {
    const [mounted, setMounted] = useState(false)
    const { theme, themes, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <Select.Root
            value={theme}
            defaultValue="system"
            onValueChange={(value) => {
                setTheme(value)
            }}
        >
            {themes.map((theme) => (
                <Select.Item key={theme} value={theme}>
                    {theme.toUpperCase()}
                </Select.Item>
            ))}
        </Select.Root>
    )
}

export default ThemeSwitch

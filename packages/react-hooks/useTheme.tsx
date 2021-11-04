import { useTheme as useNextTheme } from 'next-themes'

const useTheme = () => {
    const { theme, resolvedTheme, setTheme } = useNextTheme()

    const themes = ['system', 'light', 'dark']

    return { theme, resolvedTheme, themes, setTheme }
}

export { useTheme }

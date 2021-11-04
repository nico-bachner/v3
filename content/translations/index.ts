import en from './en'
import da from './da'
import fr from './fr'
import de from './de'
import lb from './lb'

import type { Translation } from './types'

type Translations = {
    [key: string]: Translation
}

const translations: Translations = {
    en,
    da,
    fr,
    de,
    lb,
}

export { translations }

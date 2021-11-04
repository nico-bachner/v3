import { usePath } from './usePath'

const useCurrent = (href: string): boolean => {
    const path = usePath()

    if (href == path) {
        return true
    }

    return false
}

export { useCurrent }

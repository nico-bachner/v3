import { useRouter } from 'next/router';

import { translations } from 'translations';

const useTranslation = () => {
    const { locale } = useRouter();

    return (translations as any)[locale as string] as Translation;
};

export { useTranslation };

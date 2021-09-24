import { useRouter } from 'next/router';

import { translations } from 'content/translations';

const useTranslation = () => {
    const { locale } = useRouter();

    return (translations as any)[locale as string] as Translation;
};

export { useTranslation };

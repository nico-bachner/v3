import { fetchFile } from '$lib/utils/fs';
import { fetchSerializedMDX } from '@nico-bachner/mdx/serialize';

const fetchTranslation = async (locale: string | undefined, path: string[]) => {
    const file = await fetchFile({
        basePath: ['translations'],
        path: [locale as Locale, ...path],
        extension: 'mdx',
    });

    const content = await fetchSerializedMDX(file);

    return content;
};

export { fetchTranslation };

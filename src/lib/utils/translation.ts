import { fetchFile } from '$lib/utils/fs';
import { fetchMDXContent } from '@nico-bachner/mdx/utils';

const fetchTranslation = async (locale: string | undefined, path: string[]) => {
    const file = await fetchFile({
        basePath: ['translations'],
        path: [locale as Locale, ...path],
        extension: 'mdx',
    });

    const content = await fetchMDXContent(file);

    return content;
};

export { fetchTranslation };

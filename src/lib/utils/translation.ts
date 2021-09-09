import { fetchFile } from '@lib/utils/fs';
import { fetchMDXContent, MDXContent } from '@nico-bachner/mdx/utils';

type Args = {
    locale: string | undefined;
    path: string[];
};

const fetchTranslation: Fetch<Args, MDXContent> = async ({ locale, path }) => {
    const file = await fetchFile({
        basePath: ['translations'],
        path: [locale!, ...path],
        extension: 'mdx',
    });

    const content = await fetchMDXContent(file);

    return content;
};

export { fetchTranslation };

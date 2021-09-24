import { fetchFile } from '@lib/utils/fs';
import { fetchMDXContent, MDXContent } from '@nico-bachner/mdx/utils';

type Args = {
    locale: string | undefined;
    path: string[];
};

const fetchTranslation: Fetch<Args, MDXContent> = async ({ locale, path }) => {
    const [languageCode, countryCode] = locale!.split('-');

    const file = await fetchFile({
        basePath: ['content', 'translations'],
        path: [languageCode!, ...path],
        extension: 'mdx',
    });

    const content = await fetchMDXContent(file);

    return content;
};

export { fetchTranslation };

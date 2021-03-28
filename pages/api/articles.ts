import type { NextApiRequest, NextApiResponse } from 'next';
import type { DevArticle } from '../../lib/types';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const devArticlesResponse = await fetch(
        'https://dev.to/api/articles?username=nico_bachner'
    );
    const devArticles = await devArticlesResponse.json();

    const articles = devArticles.map((devArticle: DevArticle) => {
        return {
            title: devArticle.title,
            slug: devArticle.slug.slice(0, devArticle.slug.length - 5),
            dev_slug: devArticle.slug,
            description: devArticle.description,
            tags: devArticle.tag_list,
            published: devArticle.published_at,
        };
    });

    return res.status(200).json(articles);
};

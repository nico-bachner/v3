import type { DevArticle, Article } from './types';

export async function getArticles() {
    const devArticlesResponse = await fetch(
        'https://dev.to/api/articles?username=nico_bachner'
    );
    const devArticles = await devArticlesResponse.json();
    const articles = devArticles
        .sort(
            (a: DevArticle, b: DevArticle) =>
                new Date(b.published_at).getTime() -
                new Date(a.published_at).getTime()
        )
        .map((devArticle: DevArticle) => {
            const article: Article = {
                title: devArticle.title,
                slug: devArticle.slug.slice(0, devArticle.slug.length - 5),
                dev_url: devArticle.url,
                description: devArticle.description,
                published: devArticle.published_at,
                tags: devArticle.tag_list,
            };
            return article;
        });
    return articles;
}

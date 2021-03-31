import { useI18n } from '../hooks/i18n';
import { translations } from '../i18n';

import Link from '../components/Link';

import type { DevArticle, Article } from '../lib/types';

export async function getStaticProps() {
    const devArticlesResponse = await fetch(
        'https://dev.to/api/articles?username=nico_bachner'
    );
    const devArticles = await devArticlesResponse.json();
    const articles = devArticles.map((devArticle: DevArticle) => {
        return {
            title: devArticle.title,
            slug: devArticle.slug.slice(0, devArticle.slug.length - 5),
            dev_url: devArticle.url,
            description: devArticle.description,
            published: devArticle.published_at,
        };
    });

    return {
        props: {
            articles,
        },
        revalidate: 1,
    };
}

interface Props {
    articles: Article[];
}

export default function Articles(props: Props) {
    const i18n = useI18n(translations, 'en');

    return (
        <main className="max-w-2xl mx-auto">
            <h1>{i18n.articles.title}</h1>
            <p>{i18n.articles.subtitle}</p>
            <div className="grid gap-4 mt-4">
                {props.articles.map((article: Article, index: number) => (
                    <div key={index} className="card">
                        <h3 className="text-2xl capitalize sm:text-3xl">
                            {article.title}
                        </h3>
                        <p className="mt-2 mb-4">{article.description}</p>
                        <p className="flex space-x-8">
                            <Link
                                href={article.dev_url}
                                className="text-azure hover:underline"
                            >
                                Read on DEV
                            </Link>
                            <Link
                                href={'/articles/' + article.slug}
                                className="text-azure hover:underline"
                            >
                                Read Here
                            </Link>
                        </p>
                    </div>
                ))}
            </div>
        </main>
    );
}

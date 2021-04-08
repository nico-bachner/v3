import { useI18n } from '../hooks/i18n';
import { translations } from '../i18n';

import Link from '../components/Link';
import Card from '../components/Card';

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
            <div className="grid my-8 gap-y-8">
                {props.articles.map((article: Article, index: number) => (
                    <Card key={index}>
                        <h3 className="text-2xl capitalize sm:text-3xl">
                            {article.title}
                        </h3>
                        <p className="mt-2 mb-4">{article.description}</p>
                        <nav className="flex space-x-8">
                            <Link href={article.dev_url}>Read on DEV</Link>
                            <Link href={'/articles/' + article.slug}>
                                Read Here
                            </Link>
                        </nav>
                    </Card>
                ))}
            </div>
        </main>
    );
}

import { useI18n } from '../hooks/i18n';
import { translations } from '../i18n';

import { getArticles } from '../lib/getArticles';

import ArticleCard from '../components/ArticleCard';

import type { Article } from '../lib/types';

export async function getStaticProps() {
    const articles = await getArticles();

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
                    <ArticleCard key={index} {...article} />
                ))}
            </div>
        </main>
    );
}

import { useI18n } from '../../hooks/i18n';
import { translations } from '../../i18n';

import { getArticles } from '../../lib/mdx';

import { ArticleProps } from '../../components/Article';
import ArticleCard from '../../components/ArticleCard';

interface Props {
    articles: ArticleProps[];
}

export default function Articles({ articles }: Props) {
    const i18n = useI18n(translations, 'en');

    return (
        <main className="max-w-2xl mx-auto">
            <h1>{i18n.articles.title}</h1>
            <p className="mt-4">{i18n.articles.subtitle}</p>
            <div className="grid gap-8 my-8">
                {articles.map((article: ArticleProps, index: number) => (
                    <ArticleCard key={index} {...article} />
                ))}
            </div>
        </main>
    );
}

export async function getStaticProps() {
    const articles = await getArticles();

    return {
        props: {
            articles,
        },
    };
}

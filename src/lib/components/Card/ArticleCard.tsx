import Card from './Card';

import { useTranslation } from '@lib/hooks/useTranslation';

type ArticleCardProps = ArticleData & {
    type: 'h2' | 'h3' | 'h4';
};

const ArticleCard: React.VFC<ArticleCardProps> = ({
    type,
    path,
    title,
    description,
    reading_time,
}) => {
    const { actions } = useTranslation();

    return (
        <Card
            type={type}
            href={`/${path.join('/')}`}
            header={title}
            body={description}
            cta={`${actions.read} →`}
            info={<>{reading_time} min</>}
        />
    );
};

export default ArticleCard;

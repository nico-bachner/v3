import Card from './Card';

import { useTranslation } from '@lib/hooks/useTranslation';

type ArticleCardProps = ArticleData;

const ArticleCard: React.VFC<ArticleCardProps> = ({
    path,
    title,
    description,
    reading_time,
}) => {
    const { actions } = useTranslation();

    return (
        <Card
            href={`/${path.join('/')}`}
            header={title}
            body={description}
            cta={`${actions.read} →`}
            info={<>{reading_time} min</>}
        />
    );
};

export default ArticleCard;

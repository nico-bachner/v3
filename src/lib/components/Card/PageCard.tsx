import Card from './Card';

import { useTranslation } from '@lib/hooks/useTranslation';

type PageCardProps = PageData & {
    type: 'h2' | 'h3' | 'h4';
};

const PageCard: React.VFC<PageCardProps> = ({
    type,
    path,
    title,
    description,
}) => {
    const { actions } = useTranslation();

    return (
        <Card
            type={type}
            href={`/${path.join('/')}`}
            header={title}
            body={description}
            cta={`${actions.visit} →`}
        />
    );
};

export default PageCard;

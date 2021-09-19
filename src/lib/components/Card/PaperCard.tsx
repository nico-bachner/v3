import Card from './Card';

import { useTranslation } from '@lib/hooks/useTranslation';

type PaperCardProps = PaperData & {
    type: 'h2' | 'h3' | 'h4';
};

const PaperCard: React.VFC<PaperCardProps> = ({
    type,
    path,
    title,
    description,
    institution,
}) => {
    const { actions } = useTranslation();

    return (
        <Card
            type={type}
            href={`/${path.join('/')}`}
            header={title}
            body={description}
            cta={`${actions.read} →`}
            info={institution ?? undefined}
        />
    );
};

export default PaperCard;

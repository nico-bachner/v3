import Card from './Card';

import { useTranslation } from '@lib/hooks/useTranslation';

type PaperCardProps = PaperData;

const PaperCard: React.VFC<PaperCardProps> = ({
    path,
    title,
    description,
    institution,
}) => {
    const { actions } = useTranslation();

    return (
        <Card
            href={`/${path.join('/')}`}
            header={title}
            body={description}
            cta={`${actions.read} →`}
            info={institution ?? undefined}
        />
    );
};

export default PaperCard;

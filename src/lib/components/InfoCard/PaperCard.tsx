import InfoCard from './InfoCard'

import { useTranslation } from '@lib/hooks/useTranslation'

const PaperCard: React.VFC<PaperData> = ({
    path,
    title,
    description,
    institution,
}) => {
    const { actions } = useTranslation()

    return (
        <InfoCard
            href={`/${path.join('/')}`}
            header={title}
            body={description}
            cta={actions.read}
            info={institution ?? undefined}
        />
    )
}

export default PaperCard

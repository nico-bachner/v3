import InfoCard from './InfoCard'

import { useTranslation } from '@lib/hooks/useTranslation'

const ArticleCard: React.VFC<ArticleData> = ({
    path,
    title,
    description,
    reading_time,
}) => {
    const { actions } = useTranslation()

    return (
        <InfoCard
            href={`/${path.join('/')}`}
            header={title}
            body={description}
            cta={actions.read}
            info={`${reading_time} min`}
        />
    )
}

export default ArticleCard

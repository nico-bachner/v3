import InfoCard from './InfoCard'

import { useTranslation } from '@lib/hooks/useTranslation'

const ProjectCard: React.VFC<ProjectData> = ({
    path,
    title,
    description,
    from,
    to,
}) => {
    const getPeriod = (from: number, to: number | null) => {
        const from_year = new Date(from).getFullYear()

        if (to) {
            const to_year = new Date(to).getFullYear()

            if (to_year == from_year) {
                return `${to_year}`
            }

            return `${from_year} – ${to_year}`
        }

        return `${from_year} – Present`
    }

    const { actions } = useTranslation()

    return (
        <InfoCard
            href={`/${path.join('/')}`}
            header={title}
            body={description}
            cta={actions.more_info}
            info={getPeriod(from, to)}
        />
    )
}

export default ProjectCard

import Card from './Card';

import { useTranslation } from '@lib/hooks/useTranslation';

type ProjectCardProps = ProjectData;

const ProjectCard: React.VFC<ProjectCardProps> = ({
    path,
    title,
    description,
    from,
    to,
}) => {
    const getPeriod = (from: number, to: number | null) => {
        const from_year = new Date(from).getFullYear();

        if (to) {
            const to_year = new Date(to).getFullYear();

            if (to_year == from_year) {
                return `${to_year}`;
            }

            return `${from_year} – ${to_year}`;
        }

        return `${from_year} – Present`;
    };

    const { actions } = useTranslation();

    return (
        <Card
            href={`/${path.join('/')}`}
            header={title}
            body={description}
            cta={`${actions.moreInformation} →`}
            info={getPeriod(from, to)}
        />
    );
};

export default ProjectCard;

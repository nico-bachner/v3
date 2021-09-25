import { Card, Link, Text } from '@nico-bachner/components-react';

type IconCardProps = {
    name: string;
    icon: React.ReactChild;
};

const IconCard: React.VFC<IconCardProps> = ({ name, icon }) => {
    const slug = name.replaceAll(' ', '');

    return (
        <Link
            href={`https://github.com/nico-bachner/v3/blob/main/packages/icons-react/${slug}.tsx`}
        >
            <Card variant="interactive">
                {icon}

                <Text size={4} align="center">
                    {name}
                </Text>
            </Card>
        </Link>
    );
};

export default IconCard;

import { Card, Link, Stack, Text } from '@nico-bachner/components-react'

type InfoCardProps = {
    href: string
    header: string
    body: string
    cta: string
    info?: React.ReactChild
}

const InfoCard: React.VFC<InfoCardProps> = ({
    href,
    header,
    body,
    cta,
    info,
}) => (
    <Link href={href}>
        <Card variant="interactive">
            <Stack gap={8}>
                <Text size={6}>
                    <Text type="strong">{header}</Text>
                </Text>
                <Text truncate={3}>{body}</Text>
                <Stack direction="row" justify="space-between">
                    <Text color="blue-6">{cta} →</Text>
                    <Text color="neutral-8">{info}</Text>
                </Stack>
            </Stack>
        </Card>
    </Link>
)

export default InfoCard

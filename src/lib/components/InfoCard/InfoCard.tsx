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
        <Card interactive>
            <Stack gap={6}>
                <Text size={6}>
                    <Text type="strong">{header}</Text>
                </Text>
                <Text>{body}</Text>
                <Stack direction="row" justify="space-between">
                    <Text color="blue">{cta} →</Text>
                    <Text color="neutral-8">{info}</Text>
                </Stack>
            </Stack>
        </Card>
    </Link>
)

export default InfoCard

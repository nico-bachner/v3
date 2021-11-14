import Head from '@lib/components/Head'
import Layout from '@lib/components/Layout'
import Title from '@lib/components/Title'

type ComponentPageProps = {
    title: string
    subtitle?: string
    width?: 'sm' | 'md' | 'lg'
}

const ComponentPage: React.FC<ComponentPageProps> = ({
    children,
    title,
    subtitle,
    width = 'sm',
}) => (
    <Layout width={width}>
        <Head
            title={`${title} - Nico Design`}
            description={`The ${title} Component from Nico Bachner's Design System`}
        />

        <Title title={title} subtitle={subtitle} />

        {children}
    </Layout>
)

export default ComponentPage

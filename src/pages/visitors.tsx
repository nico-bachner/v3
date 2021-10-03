import styles from '@lib/styles/Visitors.module.css';

import { Chart, Table, Text } from '@nico-bachner/components-react';
import Head from '@lib/components/Head';
import Layout from '@lib/components/Layout';

import db from '@lib/utils/supabase';

import type { NextPage, GetServerSideProps } from 'next';

type Props = {
    visits: {
        paths: PathData[];
        languages: LanguageData[];
    };
    clicks: ClickData[];
};

const getServerSideProps: GetServerSideProps<Props> = async () => {
    const { data: paths } = await db
        .from<PathData>('paths')
        .select('path, visits');

    if (!paths) {
        throw new Error(`paths could not be fetched`);
    }

    const { data: languages } = await db
        .from<LanguageData>('languages')
        .select('language, visits');

    if (!languages) {
        throw new Error(`languages could not be fetched`);
    }

    const { data: clicks } = await db
        .from<ClickData>('clicks')
        .select('href, clicks');

    if (!clicks) {
        throw new Error(`clicks could not be fetched`);
    }

    return {
        props: {
            visits: {
                paths: paths.sort((a, b) => b.visits - a.visits),
                languages: languages.sort((a, b) => b.visits - a.visits),
            },
            clicks: clicks.sort((a, b) => b.clicks - a.clicks),
        },
    };
};

const Visitors: NextPage<Props> = ({ visits, clicks }) => (
    <Layout width="sm" className={styles.main}>
        <Head
            title="Visitors | Nico Bachner"
            description="Insights into the visitors of nicobachner.com"
        />
        <Text type="h1">Visitors</Text>
        <Text size={6} className={styles.subtitle}>
            Insights into the visitors of nicobachner.com
        </Text>

        <section id="visits">
            <Text type="h2">Page visits</Text>

            <Text type="h3" className={styles.h3}>
                By Path
            </Text>
            <Table.Root>
                <Table.Head>
                    <Table.Row>
                        <Table.HeadItem>Path</Table.HeadItem>
                        <Table.HeadItem>Visits</Table.HeadItem>
                    </Table.Row>
                </Table.Head>
                <Table.Body>
                    {visits.paths
                        .filter(({ visits }) => visits > 0)
                        .map(({ path, visits }) => (
                            <Table.Row key={path}>
                                <Table.BodyItem>
                                    {decodeURIComponent(path)}
                                </Table.BodyItem>
                                <Table.BodyItem>{visits}</Table.BodyItem>
                            </Table.Row>
                        ))}
                    <Table.Row className={styles.strong}>
                        <Table.BodyItem>Total</Table.BodyItem>
                        <Table.BodyItem>
                            {visits.paths
                                .map(({ visits }) => visits)
                                .reduce((prev, current) => prev + current)}
                        </Table.BodyItem>
                    </Table.Row>
                </Table.Body>
            </Table.Root>

            <Text type="h3" className={styles.h3}>
                By Language
            </Text>
            <Chart
                type="pie"
                data={visits.languages.map(({ language, visits }) => ({
                    value: visits,
                    label: language.toUpperCase(),
                }))}
                fontSize="4px"
                className={styles.pie}
            />
        </section>

        <section id="visits">
            <Text type="h2">Link Clicks</Text>

            <Table.Root>
                <Table.Head>
                    <Table.Row>
                        <Table.HeadItem>Destination</Table.HeadItem>
                        <Table.HeadItem>Clicks</Table.HeadItem>
                    </Table.Row>
                </Table.Head>
                <Table.Body>
                    {clicks
                        .filter(({ clicks }) => clicks > 0)
                        .map(({ href, clicks }) => (
                            <Table.Row key={href}>
                                <Table.BodyItem>
                                    {decodeURIComponent(href)}
                                </Table.BodyItem>
                                <Table.BodyItem>{clicks}</Table.BodyItem>
                            </Table.Row>
                        ))}
                    <Table.Row className={styles.strong}>
                        <Table.BodyItem>Total</Table.BodyItem>
                        <Table.BodyItem>
                            {clicks
                                .map(({ clicks }) => clicks)
                                .reduce((prev, current) => prev + current)}
                        </Table.BodyItem>
                    </Table.Row>
                </Table.Body>
            </Table.Root>
        </section>
    </Layout>
);

export { getServerSideProps };

export default Visitors;

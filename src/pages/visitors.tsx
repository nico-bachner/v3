import styles from '@lib/styles/Visitors.module.css';

import { Button, Chart, Table, Text } from '@nico-bachner/components-react';
import Head from '@lib/components/Head';
import Layout from '@lib/components/Layout';

import { useState } from 'react';
import { fetchVisits } from '@lib/utils/db/visits';
import { fetchClicks } from '@lib/utils/db/clicks';

import type { NextPage, GetServerSideProps } from 'next';

type VisitsData = {
    paths: PathData[];
    languages: LanguageData[];
};

type Props = {
    visits: VisitsData;
    clicks: ClickData[];
};

const getServerSideProps: GetServerSideProps<Props> = async () => {
    return {
        props: {
            visits: await fetchVisits(),
            clicks: await fetchClicks(),
        },
    };
};

const Visitors: NextPage<Props> = ({
    visits: initialVisits,
    clicks: initialClicks,
}) => {
    const [visits, setVisits] = useState(initialVisits);
    const [clicks, setClicks] = useState(initialClicks);

    return (
        <Layout width="sm" className={styles.main}>
            <Head
                title="Visitors | Nico Bachner"
                description="Insights into the visitors of nicobachner.com"
            />
            <Text type="heading-1">Visitors</Text>
            <Text size={6} className={styles.subtitle}>
                Insights into the visitors of nicobachner.com
            </Text>

            <section id="visits">
                <Text type="heading-2">Page visits</Text>

                <Button
                    variant="primary"
                    onClick={async () => {
                        const res = await fetch('/api/visits');
                        const visits: VisitsData = await res.json();

                        setVisits(visits);
                    }}
                >
                    Refresh
                </Button>

                <Text type="heading-3" className={styles.h3}>
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

                <Text type="heading-3" className={styles.h3}>
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
                <Text type="heading-2">Link Clicks</Text>

                <Button
                    variant="primary"
                    onClick={async () => {
                        const res = await fetch('/api/clicks');
                        const clicks: ClickData[] = await res.json();

                        setClicks(clicks);
                    }}
                >
                    Refresh
                </Button>

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
};

export { getServerSideProps };

export default Visitors;

import styles from '@lib/styles/Visitors.module.css';

import { fetchViews } from '@lib/utils/views';

import { Chart, Table, Text } from '@nico-bachner/components-react';
import Head from '@lib/components/Head';
import Layout from '@lib/components/Layout';

import type { NextPage, GetServerSideProps } from 'next';

type Props = {
    views: {
        paths?: PathData[];
        languages?: LanguageData[];
    };
};

export const getServerSideProps: GetServerSideProps<Props> = async () => ({
    props: {
        views: await fetchViews(),
    },
});

const Visitors: NextPage<Props> = ({ views }) => {
    const { paths, languages } = views;

    return (
        <Layout width="sm" className={styles.main}>
            <Head
                title="Visitors | Nico Bachner"
                description="Insights into the visitors of nicobachner.com"
            />
            <Text type="h1">Visitors</Text>
            <Text size={6} className={styles.subtitle}>
                Insights into the visitors of nicobachner.com
            </Text>

            <section id="views">
                <Text type="h2">Page Views</Text>

                <Text type="h3" className={styles.h3}>
                    By Path
                </Text>
                <Table.Root>
                    <Table.Head>
                        <Table.Row>
                            <Table.HeadItem>Path</Table.HeadItem>
                            <Table.HeadItem>Views</Table.HeadItem>
                        </Table.Row>
                    </Table.Head>
                    <Table.Body>
                        {paths
                            ?.filter(({ views }) => views > 0)
                            .map(({ path, views }) => (
                                <Table.Row key={path}>
                                    <Table.BodyItem>
                                        {decodeURIComponent(path)}
                                    </Table.BodyItem>
                                    <Table.BodyItem>{views}</Table.BodyItem>
                                </Table.Row>
                            ))}
                    </Table.Body>
                </Table.Root>

                <Text type="h3" className={styles.h3}>
                    By Language
                </Text>
                <Chart
                    type="pie"
                    data={languages!.map(({ language, views }) => ({
                        value: views,
                        label: language.toUpperCase(),
                    }))}
                    fontSize="4px"
                    className={styles.pie}
                />
            </section>
        </Layout>
    );
};

export default Visitors;

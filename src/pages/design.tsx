import styles from '@lib/styles/Design.module.css';

import { Text } from '@nico-bachner/components-react';

import Head from '@lib/components/Head';
import Layout from '@lib/components/Layout';
import Icons from '@lib/components/design/Icons';
import FormElements from '@lib/components/design/FormElements';
import Typography from '@lib/components/design/Typography';
import Hyperlinks from '@lib/components/design/Hyperlinks';
import Buttons from '@lib/components/design/Buttons';
import Lists from '@lib/components/design/Lists';
import Cards from '@lib/components/design/Cards';

const Design = () => {
    return (
        <Layout width="lg" className={styles.main}>
            <Head
                title="Design | Nico Bachner"
                description="Nico Bachner's Design System"
            />

            <Text type="h1">Design</Text>
            <Text size={6}>My personal Design System</Text>

            <section>
                <Text type="h2">Typography</Text>
                <Typography />
            </section>

            <section>
                <Text type="h2">Buttons</Text>
                <Buttons />
            </section>

            <section>
                <Text type="h2">Cards</Text>
                <Cards />
            </section>

            <section>
                <Text type="h2">Hyperlinks</Text>
                <Hyperlinks />
            </section>

            <section>
                <Text type="h2">Lists</Text>
                <Lists />
            </section>

            <section>
                <Text type="h2">Form Elements</Text>
                <FormElements />
            </section>

            <section>
                <Text type="h2">Icons</Text>
                <Icons />
            </section>
        </Layout>
    );
};

export default Design;

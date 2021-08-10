import styles from '$styles/CommandCentre.module.css';

import { useRouter } from 'next/router';
import { useTranslation } from '$lib/hooks/useTranslation';

import { Text, Link, List, Select } from '@nico-bachner/components-react';
import Head from '$lib/components/Head';

import type { NextPage } from 'next';

const CommandCentre: NextPage = () => {
    const { pathname, query, locale, locales, push } = useRouter();
    const { pages, links } = useTranslation();

    return (
        <main className={styles.main}>
            <Head
                title="Command Centre | Nico Bachner"
                description="A map of the site"
            />

            <Text type="h1">Command Centre</Text>
            <Text size={6} marginStart={3}>
                A map of the site
            </Text>

            <Text type="h2" marginStart={5} marginEnd={3}>
                Language
            </Text>
            <label className={styles.label}>
                <Text>Language:</Text>
                <Select
                    options={(locales as Locale[]).map((locale) => {
                        return {
                            value: locale,
                            content: locale.toUpperCase(),
                        };
                    })}
                    value={locale}
                    onChange={({ target }) => {
                        push({ pathname, query }, pathname, {
                            locale: target.value,
                        });
                    }}
                />
            </label>

            <Text type="h2" marginStart={5}>
                Pages
            </Text>
            <Text type="h3" marginStart={5}>
                Main
            </Text>
            <List
                type="unordered"
                items={pages.main.map(({ href, title }) => (
                    <Text key={href}>
                        <Link href={href} variant="secondary">
                            {title}
                        </Link>
                    </Text>
                ))}
            />

            <Text type="h3" marginStart={5}>
                Other
            </Text>
            <List
                type="unordered"
                items={pages.other.map(({ href, title }) => (
                    <Text key={href}>
                        <Link href={href} variant="secondary">
                            {title}
                        </Link>
                    </Text>
                ))}
            />

            <Text type="h2" marginStart={5}>
                External Links
            </Text>
            <Text type="h3" marginStart={5}>
                Social
            </Text>
            <List
                type="unordered"
                items={links.social.map(({ href, title }) => (
                    <Text key={href}>
                        <Link href={href} variant="secondary">
                            {title}
                        </Link>
                    </Text>
                ))}
            />

            <Text type="h3" marginStart={5}>
                Other
            </Text>
            <List
                type="unordered"
                items={links.other.map(({ href, title }) => (
                    <Text key={href}>
                        <Link href={href} variant="secondary">
                            {title}
                        </Link>
                    </Text>
                ))}
            />
        </main>
    );
};

export default CommandCentre;

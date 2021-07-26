import styles from './Menu.module.css';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useI18n } from '$lib/hooks/useI18n';
import supabase from '$lib/utils/supabase';

import {
    Button,
    Link,
    Details,
    Divider,
    Text,
    Select,
} from '@nico-bachner/components-react';

const Menu: React.VFC = () => {
    const { pathname, query, locale, locales, push } = useRouter();
    const { pages } = useI18n();

    const [session, setSession] = useState<Session | null>(null);

    useEffect(() => {
        setSession(supabase.auth.session());

        supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
        });
    }, []);

    return (
        <Details summary="Menu">
            <div className={styles.menu}>
                <div className={styles.item}>
                    <label className={styles.label}>
                        <Text size="sm">Language:</Text>
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
                            size="sm"
                        />
                    </label>
                </div>

                <Divider />

                <div className={styles.item}>
                    <Text size="sm">
                        <Text type="strong">Assorted</Text>
                    </Text>

                    {pages.other.map(({ title, href }) => (
                        <Text key={href} size="sm" margin="tighter">
                            <Link href={href}>{title}</Link>
                        </Text>
                    ))}
                </div>

                <Divider />

                <div className={styles.item}>
                    <Text size="sm">
                        <Text type="strong">Admin</Text>
                    </Text>

                    <Text size="sm" margin="tighter">
                        <Link href="/analytics">Analytics</Link>
                    </Text>
                </div>

                <Divider />

                <div className={styles.item}>
                    <div className={styles.center}>
                        <Button
                            onClick={() => {
                                if (session) {
                                    setSession(null);
                                }

                                supabase.auth.signOut();

                                push('/login');
                            }}
                        >
                            {session ? 'Sign Out' : 'Sign In'}
                        </Button>
                    </div>
                </div>
            </div>
        </Details>
    );
};

export default Menu;

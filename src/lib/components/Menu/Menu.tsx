import styles from './Menu.module.css';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useI18n } from '$lib/hooks/useI18n';
import supabase from '$lib/utils/supabase';

import { Button, Link, Text, Select } from '@nico-bachner/components-react';

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
        <div className={styles.menu}>
            <div className={styles.item}>
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
            </div>

            <div className={styles.item}>
                <Text>
                    <Text type="strong">Assorted</Text>
                </Text>

                {pages.other.map(({ title, href }) => (
                    <Text key={href} margin={3}>
                        <Link href={href} variant="secondary">
                            {title}
                        </Link>
                    </Text>
                ))}
            </div>

            <div className={styles.item}>
                <Text>
                    <Text type="strong">Admin</Text>
                </Text>

                <Text margin={3}>
                    <Link href="/analytics" variant="secondary">
                        Analytics
                    </Link>
                </Text>
            </div>

            <div className={styles.item}>
                <div className={styles.center}>
                    <Button
                        variant="primary"
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
    );
};

export default Menu;

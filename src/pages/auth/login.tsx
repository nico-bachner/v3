import styles from '$styles/auth/Login.module.css';

import { useState } from 'react';
import { useAuth } from '$lib/hooks/useAuth';
import supabase from '$lib/utils/supabase';

import { Button, Text, Input } from '@nico-bachner/components-react';

import type { NextPage } from 'next';

const Login: NextPage = () => {
    const [email, setEmail] = useState('');

    const { session } = useAuth();

    if (session) {
        return (
            <main className={styles.main}>
                <Text type="h1">Login</Text>
                <Text size={6} marginStart={6} marginEnd={5}>
                    Logged In!
                </Text>
            </main>
        );
    }

    return (
        <main className={styles.main}>
            <Text type="h1">Login</Text>
            <Text size={6} marginStart={2}>
                Sign in to see more content
            </Text>

            <div className={styles.methods}>
                <section className={styles.oauth}>
                    <Text type="h2">OAuth</Text>
                    <Text marginStart={3} marginEnd={5}>
                        Sign in via one of the providers below
                    </Text>
                    <div className={styles.providers}>
                        <Button
                            variant="secondary"
                            type="submit"
                            onClick={() => {
                                supabase.auth.signIn({ provider: 'github' });
                            }}
                        >
                            Sign in with GitHub
                        </Button>
                    </div>
                </section>

                <section className={styles.email}>
                    <Text type="h2">Email</Text>
                    <Text marginStart={3} marginEnd={5}>
                        Sign in via magic link with your email below
                    </Text>
                    <form className={styles.form}>
                        <Input
                            required
                            type="email"
                            placeholder="Your email"
                            value={email}
                            onChange={({ target }) => setEmail(target.value)}
                        />
                        <Button
                            variant="primary"
                            type="submit"
                            onClick={() => {
                                supabase.auth.signIn({ email });
                            }}
                        >
                            Send magic link
                        </Button>
                    </form>
                </section>
            </div>
        </main>
    );
};

export default Login;

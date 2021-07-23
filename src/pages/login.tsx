import styles from '$lib/styles/Login.module.css';

import { useState } from 'react';
import supabase from '$lib/utils/supabase';

import { Button, Text, Input } from '@nico-bachner/components-react';

import type { NextPage } from 'next';

const Login: NextPage = () => {
    const [email, setEmail] = useState('');

    return (
        <main className={styles.main}>
            <Text type="h1">Login</Text>
            <Text size="lg" margin="tight">
                Sign in to see more content
            </Text>

            <div className={styles.methods}>
                <section className={styles.oauth}>
                    <Text type="h2" margin="tight">
                        OAuth
                    </Text>
                    <Text margin="tight">
                        Sign in via one of the providers below
                    </Text>
                    <div className={styles.providers}>
                        <Button
                            type="submit"
                            onClick={() => {
                                supabase.auth.signIn({ provider: 'github' });
                            }}
                        >
                            Sign in with GitHub
                        </Button>
                    </div>
                </section>

                <hr />

                <section className={styles.email}>
                    <Text type="h2" margin="tight">
                        Email
                    </Text>
                    <Text margin="tight">
                        Sign in via magic link with your email below
                    </Text>
                    <form className={styles.form}>
                        <Input
                            type="email"
                            placeholder="Your email"
                            value={email}
                            onChange={({ target }) => setEmail(target.value)}
                        />
                        <Button
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

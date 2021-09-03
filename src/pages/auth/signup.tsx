import styles from '$styles/auth/SignUp.module.css';

import { useState } from 'react';
import { useRouter } from 'next/router';

import { Form, Text, Input } from '@nico-bachner/components-react';

import type { NextPage } from 'next';

const SignUp: NextPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { push } = useRouter();

    return (
        <main className={styles.main}>
            <Text type="h1" margin={[0, 5]}>
                Sign Up
            </Text>

            <Form
                className={styles.form}
                onSubmit={async (event) => {
                    event.preventDefault();

                    const res = await fetch('/api/auth/new', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            email,
                            password,
                        }),
                    });

                    const { user } = await res.json();

                    if (user) {
                        push(`/auth/verify?email=${user.email}`);
                    }
                }}
            >
                <Input
                    required
                    type="email"
                    placeholder="Your email"
                    value={email}
                    onChange={({ target }) => setEmail(target.value)}
                />
                <Input
                    required
                    type="password"
                    placeholder="Your password"
                    value={password}
                    onChange={({ target }) => setPassword(target.value)}
                />
            </Form>
        </main>
    );
};

export default SignUp;

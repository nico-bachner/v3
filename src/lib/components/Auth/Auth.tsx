import styles from './Auth.module.css';

import { useState } from 'react';
import supabase from '$lib/utils/supabase';

import { Button, Text, Input } from '@nico-bachner/components-react';

const Auth = () => {
    const [email, setEmail] = useState('');

    const login = async () => {
        await supabase.auth.signIn({ email });
        alert('Check your email for the login link!');
    };

    return (
        <>
            <Text type="h1">Views</Text>
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
                <div className={styles.submit}>
                    <Button
                        type="submit"
                        onClick={() => {
                            login();
                        }}
                    >
                        Send magic link
                    </Button>
                </div>
            </form>
        </>
    );
};

export default Auth;

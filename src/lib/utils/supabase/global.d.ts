type User = {
    id: string;
    app_metadata: {
        provider?: string;
        [key: string]: any;
    };
    user_metadata: {
        [key: string]: any;
    };
    aud: string;
    confirmation_sent_at?: string;
    email?: string;
    created_at: string;
    confirmed_at?: string;
    last_sign_in_at?: string;
    role?: string;
    updated_at?: string;
};

type Session = {
    provider_token?: string | null;
    access_token: string;
    /**
     * The number of seconds until the token expires (since it was issued). Returned when a login is confirmed.
     */
    expires_in?: number;
    /**
     * A timestamp of when the token will expire. Returned when a login is confirmed.
     */
    expires_at?: number;
    refresh_token?: string;
    token_type: string;
    user: User | null;
};

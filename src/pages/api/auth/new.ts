import { auth } from '$lib/utils/supabase';

import { NextApiHandler } from 'next';

const New: NextApiHandler = async (req, res) => {
    const { email, password } = req.body;

    const { user, error } = await auth.signUp({
        email,
        password,
    });

    if (error) {
        return res.status(401).json({ error: error.message });
    }

    return res.status(200).json({ user });
};

export default New;

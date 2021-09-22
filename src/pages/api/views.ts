import { fetchViews } from '@lib/utils/views';

import type { NextApiHandler } from 'next';

const Views: NextApiHandler = async (req, res) => {
    if (req.method == 'GET') {
        const data = await fetchViews();

        return res.status(200).json(data);
    }
};

export default Views;

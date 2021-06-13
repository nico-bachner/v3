import { getViews, getUpdatedViews } from '@lib/views';

import { NextApiHandler } from 'next';

const apiHandler: NextApiHandler = async (req, res) => {
    const { slug } = req.query;

    if (Array.isArray(slug)) {
        return res.status(400).send('');
    }

    if (req.method == 'POST') {
        const views = await getUpdatedViews(slug);

        const json = {
            slug,
            views,
        };

        return res.status(200).json(json);
    }

    if (req.method == 'GET') {
        const views = await getViews(slug);

        const json = {
            slug,
            views,
        };

        return res.status(200).json(json);
    }
};

export default apiHandler;

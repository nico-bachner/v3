import { fetchViews, fetchUpdatedViews } from '$lib/utils/views';

import { NextApiHandler } from 'next';

const Views: NextApiHandler = async (req, res) => {
    const { path } = req.query;

    if (!path) {
        throw new Error(`'path' is required`);
    }

    if (Array.isArray(path)) {
        throw new Error(`'path' must be a string`);
    }

    if (req.method == 'POST') {
        const views = await fetchUpdatedViews(path);

        return res.status(200).json({
            path,
            views,
        });
    }

    if (req.method == 'GET') {
        const views = await fetchViews(path);

        return res.status(200).json({
            path,
            views,
        });
    }
};

export default Views;

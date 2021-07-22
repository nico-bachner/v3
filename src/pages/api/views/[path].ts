import { getViews, getUpdatedViews } from '$lib/utils/views';

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
        return res.status(200).json({
            path,
            views: await getUpdatedViews(path),
        });
    }

    if (req.method == 'GET') {
        return res.status(200).json({
            path,
            views: await getViews(path),
        });
    }
};

export default Views;

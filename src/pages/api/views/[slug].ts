import { getViews, getUpdatedViews } from 'lib/views';

import { NextApiHandler } from 'next';

const apiHandler: NextApiHandler = async (req, res) => {
    const { slug, type } = req.query;

    if (!slug || Array.isArray(slug)) {
        return res.status(400).send(null);
    }

    if (Array.isArray(type)) {
        return res.status(400).send(null);
    }

    if (req.method == 'POST') {
        return res.status(200).json({
            slug,
            type: type ?? 'page',
            views: await getUpdatedViews(slug, type ?? 'page'),
        });
    }

    if (req.method == 'GET') {
        return res.status(200).json({
            slug,
            type: type ?? 'page',
            views: await getViews(slug, type ?? 'page'),
        });
    }
};

export default apiHandler;

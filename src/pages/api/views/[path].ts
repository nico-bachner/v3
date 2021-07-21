import { getViews, getUpdatedViews } from '$lib/utils/views';

import { NextApiHandler } from 'next';

const apiHandler: NextApiHandler = async (req, res) => {
    const { path: pathString } = req.query;

    const path = decodeURIComponent(pathString as string);

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

export default apiHandler;

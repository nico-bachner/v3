import { getViewsData } from '@lib/views';

import { NextApiHandler } from 'next';

const apiHandler: NextApiHandler = async (req, res) => {
    if (req.method == 'GET') {
        const views = await getViewsData();

        return res.status(200).json(views);
    }
};

export default apiHandler;

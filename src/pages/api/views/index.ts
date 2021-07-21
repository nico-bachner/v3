import { getAllViews } from '$lib/utils/views';

import { NextApiHandler } from 'next';

const apiHandler: NextApiHandler = async (req, res) => {
    const views = await getAllViews();

    return res.status(200).json(views);
};

export default apiHandler;

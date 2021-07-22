import { getAllViews } from '$lib/utils/views';

import { NextApiHandler } from 'next';

const AllViews: NextApiHandler = async (req, res) => {
    const views = await getAllViews();

    return res.status(200).json(views);
};

export default AllViews;

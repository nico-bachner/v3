import type { NextApiRequest, NextApiResponse } from 'next';

import { getArticles } from '../../lib/getArticles';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const articles = await getArticles();

    return res.status(200).json(articles);
};

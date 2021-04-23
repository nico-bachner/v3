import type { NextApiRequest, NextApiResponse } from 'next';
import getRepos from '../../lib/repo';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const repositories = await getRepos();

    res.setHeader('Content-Type', 'application/json');

    return res.status(200).json(repositories);
};

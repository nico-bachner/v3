import type { NextApiHandler } from 'next';
import { getRepos } from '../../lib/github';

const Repositories: NextApiHandler = async (req, res) => {
    const repositories = await getRepos();

    res.setHeader('Content-Type', 'application/json');

    return res.status(200).json(repositories);
};

export default Repositories;

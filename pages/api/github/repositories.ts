import { getRepos } from '@lib/github';

import { NextApiHandler } from 'next';

const apiHandler: NextApiHandler = async (req, res) => {
    const repositories = await getRepos();

    return res.status(200).json(repositories);
};

export default apiHandler;

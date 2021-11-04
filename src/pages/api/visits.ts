import { fetchVisits } from '@lib/utils/db/visits'

import type { NextApiHandler } from 'next'

const Visits: NextApiHandler = async (req, res) => {
    const visits = await fetchVisits()

    return res.status(200).json(visits)
}

export default Visits

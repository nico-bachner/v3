import { fetchVisits } from '@lib/utils/db/visits'

import type { NextApiHandler } from 'next'

const Visits: NextApiHandler = async (req, res) => {
    const visits = await fetchVisits()

    return res.status(200).json(JSON.stringify(visits, null, 2))
}

export default Visits

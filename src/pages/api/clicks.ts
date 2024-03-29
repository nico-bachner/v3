import { fetchClicks } from '@lib/utils/db/clicks'

import type { NextApiHandler } from 'next'

const Clicks: NextApiHandler = async (req, res) => {
    const clicks = await fetchClicks()

    return res.status(200).json(JSON.stringify(clicks, null, 2))
}

export default Clicks

import db from '@lib/utils/supabase'

import type { NextApiHandler } from 'next'

const Click: NextApiHandler = async (req, res) => {
    const { href } = JSON.parse(req.body)

    if (req.method == 'POST') {
        const { data: clicksData } = await db
            .from<ClickData>('clicks')
            .select('href, clicks')

        if (!clicksData) {
            throw new Error(`data not found`)
        }

        const dbClickItems = clicksData.filter((item) => item.href == href)
        const dbClickItem = dbClickItems[0]

        if (dbClickItem) {
            await db
                .from<ClickData>('clicks')
                .update({ clicks: dbClickItem.clicks + 1 })
                .match({ href })
        } else {
            await db.from<ClickData>('clicks').insert({ href, clicks: 1 })
        }

        return res.status(200).json(dbClickItem)
    }
}

export default Click

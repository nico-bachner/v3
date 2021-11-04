import db from '@lib/utils/supabase'

import type { NextApiHandler } from 'next'

const Visit: NextApiHandler = async (req, res) => {
    const { path, language } = JSON.parse(req.body)

    if (req.method == 'POST') {
        const { data: pathsData } = await db
            .from<PathData>('paths')
            .select('path, visits')
            .eq('path', path)

        if (!pathsData) {
            throw new Error(`data not found`)
        }

        const dbPathItems = pathsData.filter((item) => item.path == path)
        const dbPathItem = dbPathItems[0]

        if (dbPathItem) {
            await db
                .from<PathData>('paths')
                .update({ visits: dbPathItem.visits + 1 })
                .match({ path })
        } else {
            await db.from<PathData>('paths').insert({ path, visits: 1 })
        }

        const { data: languagesData } = await db
            .from<LanguageData>('languages')
            .select('language, visits')
            .eq('language', language)

        if (!languagesData) {
            throw new Error(`data not found`)
        }

        const dbLanguageItems = languagesData.filter(
            (item) => item.language == language
        )
        const dbLanguageItem = dbLanguageItems[0]

        if (dbLanguageItem) {
            await db
                .from<LanguageData>('languages')
                .update({ visits: dbLanguageItem.visits + 1 })
                .match({ language })
        } else {
            await db
                .from<LanguageData>('languages')
                .insert({ language, visits: 1 })
        }

        return res.status(200).json(dbLanguageItem)
    }
}

export default Visit

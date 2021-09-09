import db from '@lib/utils/supabase';

import type { NextApiHandler } from 'next';

const View: NextApiHandler = async (req, res) => {
    const { path, locale } = JSON.parse(req.body);

    if (req.method == 'POST') {
        const { data: originalPathsItem } = await db
            .from<PathsItem>('paths')
            .select('path, views')
            .eq('path', path);

        if (!originalPathsItem) {
            throw new Error(`'originalPathsItem' not found`);
        }

        if (originalPathsItem[0]) {
            await db
                .from<PathsItem>('paths')
                .update({ views: originalPathsItem[0].views + 1 })
                .match({ path });
        } else {
            await db.from<PathsItem>('paths').insert([{ path, views: 1 }]);
        }

        const { data: originalLocalesItem } = await db
            .from<LocalesItem>('locales')
            .select('locale, views')
            .eq('locale', path);

        if (!originalLocalesItem) {
            throw new Error(`'originalLocalesItem' not found`);
        }

        if (originalLocalesItem[0]) {
            await db
                .from<LocalesItem>('locales')
                .update({ views: originalLocalesItem[0].views + 1 })
                .match({ locale });
        } else {
            await db
                .from<LocalesItem>('locales')
                .insert([{ locale, views: 1 }]);
        }

        return res.status(200).json('');
    }
};

export default View;

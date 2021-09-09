import db from '@lib/utils/supabase';

import type { NextApiHandler } from 'next';

type PathsItem = {
    path: string;
    views: number;
};

type LocalesItem = {
    locale: string;
    views: number;
};

const Views: NextApiHandler = async (req, res) => {
    if (req.method == 'GET') {
        const { data: unorderedPaths } = await db
            .from<PathsItem>('paths')
            .select('path, views');

        const paths = unorderedPaths?.sort((a, b) => b.views - a.views);

        const { data: unorderedLocales } = await db
            .from<LocalesItem>('locales')
            .select('locale, views');

        const locales = unorderedLocales?.sort((a, b) => b.views - a.views);

        return res.status(200).json({
            paths,
            locales,
        });
    }
};

export default Views;

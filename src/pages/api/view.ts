import db from '@lib/utils/supabase';

import type { NextApiHandler } from 'next';

const View: NextApiHandler = async (req, res) => {
    const { path, language, location } = JSON.parse(req.body);

    if (req.method == 'POST') {
        const { data: originalPathsItem } = await db
            .from<PathData>('paths')
            .select('path, views')
            .eq('path', path);

        if (!originalPathsItem) {
            throw new Error(`data not found`);
        }

        if (originalPathsItem[0]) {
            await db
                .from<PathData>('paths')
                .update({ views: originalPathsItem[0].views + 1 })
                .match({ path });
        } else {
            await db.from<PathData>('paths').insert([{ path, views: 1 }]);
        }

        const { data: languagesData } = await db
            .from<LanguageData>('languages')
            .select('language, views')
            .eq('language', language);

        if (!languagesData) {
            throw new Error(`data not found`);
        }

        if (languagesData[0]) {
            await db
                .from<LanguageData>('languages')
                .update({ views: languagesData[0].views + 1 })
                .match({ language });
        } else {
            await db
                .from<LanguageData>('languages')
                .insert([{ language, views: 1 }]);
        }

        const { data: locationsData } = await db
            .from<LocationData>('locations')
            .select('location, views')
            .eq('location', location);

        if (!locationsData) {
            throw new Error(`data not found`);
        }

        if (locationsData[0]) {
            await db
                .from<LocationData>('locations')
                .update({ views: locationsData[0].views + 1 })
                .match({ location });
        } else {
            await db
                .from<LocationData>('locations')
                .insert([{ location, views: 1 }]);
        }

        return res.status(200).json({});
    }
};

export default View;

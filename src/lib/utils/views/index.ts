import db from '@lib/utils/supabase';

const fetchViews = async () => {
    const { data: paths } = await db
        .from<PathData>('paths')
        .select('path, views');

    const { data: languages } = await db
        .from<LanguageData>('languages')
        .select('language, views');

    if (!paths || !languages) {
        throw new Error(
            `The required data could not be extracted from the database`
        );
    }

    return {
        paths: paths.sort((a, b) => b.views - a.views),
        languages: languages.sort((a, b) => b.views - a.views),
    };
};

export { fetchViews };

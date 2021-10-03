import db from '@lib/utils/supabase';

const fetchViews = async () => {
    const { data: paths } = await db
        .from<PathData>('paths')
        .select('path, visits');

    const { data: languages } = await db
        .from<LanguageData>('languages')
        .select('language, visits');

    if (!paths || !languages) {
        throw new Error(
            `The required data could not be extracted from the database`
        );
    }

    return {
        paths: paths.sort((a, b) => b.visits - a.visits),
        languages: languages.sort((a, b) => b.visits - a.visits),
    };
};

export { fetchViews };

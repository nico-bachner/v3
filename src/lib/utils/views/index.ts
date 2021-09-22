import db from '@lib/utils/supabase';

const fetchViews = async () => {
    const { data: paths } = await db
        .from<PathData>('paths')
        .select('path, views');

    const { data: languages } = await db
        .from<LanguageData>('languages')
        .select('language, views');

    const { data: locations } = await db
        .from<LocationData>('locations')
        .select('location, views');

    if (!paths || !languages || !locations) {
        throw new Error(
            `The required data could not be extracted from the database`
        );
    }

    return {
        paths: paths.sort((a, b) => b.views - a.views),
        languages: languages.sort((a, b) => b.views - a.views),
        locations: locations.sort((a, b) => b.views - a.views),
    };
};

export { fetchViews };

import db from '@lib/utils/supabase';

const fetchViews = async () => {
    const { data: unorderedPaths } = await db
        .from<PathsItem>('paths')
        .select('path, views');

    const paths = unorderedPaths?.sort((a, b) => b.views - a.views);

    const { data: unorderedLocales } = await db
        .from<LocalesItem>('locales')
        .select('locale, views');

    const locales = unorderedLocales?.sort((a, b) => b.views - a.views);

    return {
        paths,
        locales,
    };
};

export { fetchViews };

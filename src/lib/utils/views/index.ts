import db from '$lib/utils/supabase';

const fetchViews: Fetch<string, number> = async (path: string) => {
    const { data } = await db
        .from<ViewItem>('views')
        .select('path, views')
        .eq('path', path);

    if (data && data.length) {
        return (data[0] as ViewItem).views;
    }

    await db.from<ViewItem>('views').insert([{ path, views: 0 }]);

    return 0;
};

const fetchUpdatedViews = async (path: string) => {
    const views = await fetchViews(path);

    const { data } = await db
        .from<ViewItem>('views')
        .update({ views: views + 1 })
        .match({ path });

    return data?.length ? (data[0] as ViewItem).views : views;
};

const fetchAllViews = async () => {
    const { data: views } = await db
        .from<ViewItem>('views')
        .select('path, views');

    return views ?? [];
};

export { fetchViews, fetchUpdatedViews, fetchAllViews };

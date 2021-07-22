import db from '$lib/utils/supabase';

export const getAllViews = async () => {
    const { data } = await db.from<ViewItem>('views').select('path, views');

    return data;
};

export const getViews = async (path: string) => {
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

export const getUpdatedViews = async (path: string) => {
    const views = await getViews(path);

    const { data } = await db
        .from<ViewItem>('views')
        .update({ views: views + 1 })
        .match({ path });

    return data?.length ? (data[0] as ViewItem).views : views;
};

import db from './supabase';

export const getViewsData = async () => {
    const { data } = await db
        .from<ViewItem>('views')
        .select('slug, type, views');

    return data;
};

export const getViews = async (slug: string, type: string) => {
    const { data } = await db
        .from<ViewItem>('views')
        .select('slug, type, views')
        .eq('slug', slug)
        .eq('type', type);

    if (data && data.length) {
        return (data[0] as ViewItem).views;
    }

    await db
        .from<ViewItem>('views')
        .insert([{ slug: slug, type: type, views: 0 }]);

    return 0;
};

export const getUpdatedViews = async (slug: string, type: string) => {
    const views = await getViews(slug, type);

    const { data } = await db
        .from<ViewItem>('views')
        .update({ views: views + 1 })
        .match({ slug: slug });

    return data?.length ? (data[0] as ViewItem).views : views;
};

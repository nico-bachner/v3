import db from '@lib/supabase';

export const getViewsData = async () => {
    const { data: viewItems, error } = await db
        .from<ViewItem>('views')
        .select('slug, views');

    if (viewItems && !error) {
        return viewItems;
    }
};

export const getViews = async (slug: string) => {
    const { data: viewItems, error } = await db
        .from<ViewItem>('views')
        .select('slug, views')
        .eq('slug', slug);

    if (viewItems && !error) {
        return viewItems[0].views;
    }

    return 0;
};

export const getUpdatedViews = async (slug: string) => {
    const views = await getViews(slug);

    const { data: updatedViewItems, error } = await db
        .from<ViewItem>('views')
        .update({ views: views + 1 })
        .match({ slug: slug });

    if (updatedViewItems && !error) {
        return updatedViewItems[0].views;
    }

    return 0;
};

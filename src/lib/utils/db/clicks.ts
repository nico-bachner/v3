import db from '@lib/utils/supabase';

const fetchClicks = async () => {
    const { data: clicks } = await db
        .from<ClickData>('clicks')
        .select('href, clicks');

    if (!clicks) {
        throw new Error(`clicks could not be fetched`);
    }

    return clicks.sort((a, b) => b.clicks - a.clicks);
};

export { fetchClicks };

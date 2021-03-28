import { supabase } from '../lib/supabase';

export async function useSupabase(database: string) {
    const { data } = await supabase.from(database).select();

    return data;
}

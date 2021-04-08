import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
    'https://gcuycdssaicfinxufddo.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYxNjI2NzkxMSwiZXhwIjoxOTMxODQzOTExfQ.bUY4QiCcs9D9lkUMsuspehX_5msT-AB4YnrKOsSbmdg'
);

export async function useSupabase(database: string) {
    const { data } = await supabase.from(database).select();

    return data;
}

import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
    // @ts-ignore
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default supabase;

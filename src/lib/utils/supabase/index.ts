import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
    // @ts-ignore
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

const { auth } = supabase;

export { auth };

export default supabase;

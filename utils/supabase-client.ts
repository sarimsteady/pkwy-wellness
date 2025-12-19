import { Database } from '@/types/database';
import { createClient } from '@supabase/supabase-js';

export const supabaseClient = () => {
    const supabaseUrl = process.env.SUPABASE_URL!;
    const supabaseAnonKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

    if (!supabaseUrl || !supabaseAnonKey) {
        throw new Error('Missing Supabase environment variables');
    }

    return createClient<Database>(supabaseUrl, supabaseAnonKey, {
        auth: {
            persistSession: false,
        },
    });
}

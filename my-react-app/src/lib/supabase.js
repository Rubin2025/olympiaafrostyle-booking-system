import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://bflhkuuklfdwwegaknza.supabase.co";
const supabaseKey = "sb_publishable_ScngvAScLo-B5x4r7s8gtg_0t1FsLkS";

export const supabase = createClient(supabaseUrl, supabaseKey);
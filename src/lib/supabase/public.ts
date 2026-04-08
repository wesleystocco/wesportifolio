import { createClient } from "@supabase/supabase-js";

import { getSupabaseEnv } from "./config";

export function createPublicClient() {
  const { supabaseUrl, supabasePublishableKey } = getSupabaseEnv();

  return createClient(supabaseUrl, supabasePublishableKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
}

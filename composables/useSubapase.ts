import { createClient } from '@supabase/supabase-js'

export const useSupabase = () => {
  const config = useRuntimeConfig().public
    const supabase = createClient(config.supabse_url, config.supabse_key)
    return supabase
  }
  
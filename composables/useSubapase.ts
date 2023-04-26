import { createClient } from '@supabase/supabase-js'

export const useSupabase = () => {
  const config = useRuntimeConfig().public
    // const supabase = createClient(config.supabse_url, config.supabse_key)
    const supabase = createClient('https://hhglwwfxpbdquebgdfts.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhoZ2x3d2Z4cGJkcXVlYmdkZnRzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODI0MDk0MjgsImV4cCI6MTk5Nzk4NTQyOH0.yHFsKIg5E24wiCt9hvOHp3VxnvWVmciAGEi8NIkQiA4')
    return supabase
  }
  
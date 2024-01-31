import { VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY } from "$env/static/private";
import { createSupabaseServerClient } from "@supabase/auth-helpers-sveltekit";

export const handle = async ({ event, resolve }: any) => {
  event.locals.supabase = createSupabaseServerClient({
    supabaseUrl: VITE_SUPABASE_URL,
    supabaseKey: VITE_SUPABASE_ANON_KEY,
    event,
  })

  /**
   * a little helper that is written for convenience so that instead
   * of calling `const { data: { session } } = await supabase.auth.getSession()`
   * you just call this `await getSession()`
   */
  event.locals.getSession = async () => {
    const {
      data: { session },
    } = await event.locals.supabase.auth.getSession()
    return session
  }

  return resolve(event, {
    filterSerializedResponseHeaders(name: string) {
      return name === 'content-range'
    },
  })
}

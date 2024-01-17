// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production

// import { error } from "@sveltejs/kit";
// import type { PageLoad } from "./$types";

// export const load: PageLoad =async () => {
//   throw error(404, { message: 'this is prolly another 404 error' })
// }
export const prerender = true;

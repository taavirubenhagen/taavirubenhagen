import { redirect } from '@sveltejs/kit'
 
/** @type {import('./$types').LayoutServerLoad} */
export function load({ request: any }) {
    throw redirect(307, '/drafts/terminal/home');
}
import { redirect } from '@sveltejs/kit'
 
/** @type {import('./$types').LayoutServerLoad} */
export function load({ request }) {
    if (request.url.search("(\.app\/|7.\/)$") !== -1) {
        //throw redirect(307, '/portfolio/home');
    }
}
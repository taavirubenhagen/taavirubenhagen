import { redirect } from '@sveltejs/kit'
 
/** @type {import('./$types').LayoutServerLoad} */
export function load({ request }) {
    const subroute = request.url.split("/home/")[1];
    throw redirect(307, '/main/home/' + ( subroute ?? "" ));
}
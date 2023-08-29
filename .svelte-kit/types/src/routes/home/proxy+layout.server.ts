// @ts-nocheck
import { redirect } from '@sveltejs/kit'
 
/** @param {Parameters<import('./$types').LayoutServerLoad>[0]} event */
export function load({ request }) {
    const subroute = request.url.split("/home/")[1];
    throw redirect(307, '/main/home/' + ( subroute ?? "" ));
}
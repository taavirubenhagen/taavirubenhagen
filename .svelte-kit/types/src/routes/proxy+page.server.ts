// @ts-nocheck
import { redirect } from '@sveltejs/kit'
 
/** @param {Parameters<import('./$types').LayoutServerLoad>[0]} event */
export function load({ request }) {
    if (request.url.search("(\....\/|7.\/)$") !== -1) {
        //throw redirect(307, '/portfolio/home');
    }
}
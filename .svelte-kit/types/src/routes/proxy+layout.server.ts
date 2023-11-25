// @ts-nocheck
import { redirect } from '@sveltejs/kit'
 
/** @param {Parameters<import('./$types').LayoutServerLoad>[0]} event */
export function load({ request }) {
    if (request.url.search("(\/presenter\/download\/.+)$") !== -1) {
        throw redirect(307, 'main/presenter/download');
    }
    if (request.url.search("(\/home.+)$") !== -1 && request.url.search("(\/main.+)$") === -1) {
        const subroute = request.url.split("/home")[1];
        throw redirect(307, '/main/home' + ( subroute ?? "" ))
    };
    if (request.url.search("(\....\/|7.\/)$") !== -1) {
        throw redirect(307, '/personal/home');
    }
}
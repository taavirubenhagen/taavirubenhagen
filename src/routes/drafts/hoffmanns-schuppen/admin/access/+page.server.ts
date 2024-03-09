import { redirect } from '@sveltejs/kit';
 
/** @type {import('./$types').LayoutServerLoad} */
export function load({ params }) {
    throw redirect(307, '/drafts/hoffmanns-schuppen/admin/login/failed');
}
// @ts-nocheck
import { redirect } from '@sveltejs/kit';
 
/** @param {Parameters<import('./$types').LayoutServerLoad>[0]} event */
export function load({ params }) {
    throw redirect(307, '/drafts/hoffmanns-schuppen/admin/login/failed');
}
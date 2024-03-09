// @ts-nocheck
import { redirect } from '@sveltejs/kit'
 
/** @param {Parameters<import('./$types').LayoutServerLoad>[0]} event */
export function load({ request: any }) {
    throw redirect(307, '/drafts/terminal/home');
}
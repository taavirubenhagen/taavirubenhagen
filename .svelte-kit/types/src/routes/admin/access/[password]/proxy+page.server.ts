// @ts-nocheck
import { redirect } from '@sveltejs/kit';
 
/** @param {Parameters<import('./$types').LayoutServerLoad>[0]} event */
export function load({ params }) {
    if (params.password != import.meta.env.VITE_ADMIN_PASSWORD) {
        throw redirect(307, '/admin/login/failed');
    }
}
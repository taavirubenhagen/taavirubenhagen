import { redirect } from '@sveltejs/kit';
 
/** @type {import('./$types').LayoutServerLoad} */
export function load({ params }) {
    if (params.password != import.meta.env.VITE_ADMIN_PASSWORD) {
        throw redirect(307, '/admin/login/failed');
    }
}

import root from '../root.svelte';
import { set_building } from '__sveltekit/environment';
import { set_assets, set_private_env, set_public_env } from '../../../node_modules/@sveltejs/kit/src/runtime/shared-server.js';

export const options = {
	app_template_contains_nonce: false,
	csp: {"mode":"auto","directives":{"upgrade-insecure-requests":false,"block-all-mixed-content":false},"reportOnly":{"upgrade-insecure-requests":false,"block-all-mixed-content":false}},
	csrf_check_origin: true,
	embedded: false,
	env_public_prefix: 'PUBLIC_',
	hooks: null, // added lazily, via `get_hooks`
	preload_strategy: "modulepreload",
	root,
	service_worker: false,
	templates: {
		app: ({ head, body, assets, nonce, env }) => "\r\n<!DOCTYPE html>\r\n<html lang=\"en\">\r\n\t<head>\r\n\t\t<meta charset=\"utf-8\" />\r\n\t\t<link rel=\"icon\" href=\"" + assets + "/logo_icon.svg\" />\r\n\t\t<title>Taavi Rübenhagen.</title>\r\n\t\t<meta name=\"viewport\" content=\"width=device-width\" />\r\n\t\t<meta name=\"theme-color\" content=\"#000\">\r\n\r\n\t\t<link rel=\"preconnect\" href=\"https://fonts.googleapis.com\"/>\r\n\t\t<link rel=\"preconnect\" href=\"https://fonts.gstatic.com\"/>\r\n\t\t<link href=\"https://fonts.googleapis.com/css2?family=Lexend&family=Dongle&family=Aleo&family=Flow+Circular&family=Caveat&family=Inter&family=IBM+Plex+Mono&display=swap\" rel=\"stylesheet\"/>\r\n\t\t<link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\"/>\r\n        <link rel=\"stylesheet\" href=\"https://cdn.jsdelivr.net/gh/iconoir-icons/iconoir@main/css/iconoir.css\">\r\n\r\n\t\t<script>\r\n\t\t\timport \"./global.postcss\";\r\n\t\t</script>\r\n\t\t<script src=\"https://unpkg.com/@rive-app/canvas@1.0.98\"></script>\r\n\t\t\r\n\t\t" + head + "\r\n\t</head>\r\n\t<body>\r\n\t\t<div>" + body + "</div>\r\n\t</body>\r\n</html>\r\n",
		error: ({ status, message }) => "<!DOCTYPE html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<title>" + message + "</title>\n\n\t\t<style>\n\t\t\tbody {\n\t\t\t\tfont-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,\n\t\t\t\t\tUbuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tjustify-content: center;\n\t\t\t\theight: 100vh;\n\t\t\t}\n\n\t\t\t.error {\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tmax-width: 32rem;\n\t\t\t\tmargin: 0 1rem;\n\t\t\t}\n\n\t\t\t.status {\n\t\t\t\tfont-weight: 200;\n\t\t\t\tfont-size: 3rem;\n\t\t\t\tline-height: 1;\n\t\t\t\tposition: relative;\n\t\t\t\ttop: -0.05rem;\n\t\t\t}\n\n\t\t\t.message {\n\t\t\t\tborder-left: 1px solid #ccc;\n\t\t\t\tpadding: 0 0 0 1rem;\n\t\t\t\tmargin: 0 0 0 1rem;\n\t\t\t\tmin-height: 2.5rem;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t}\n\n\t\t\t.message h1 {\n\t\t\t\tfont-weight: 400;\n\t\t\t\tfont-size: 1em;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\t\t</style>\n\t</head>\n\t<body>\n\t\t<div class=\"error\">\n\t\t\t<span class=\"status\">" + status + "</span>\n\t\t\t<div class=\"message\">\n\t\t\t\t<h1>" + message + "</h1>\n\t\t\t</div>\n\t\t</div>\n\t</body>\n</html>\n"
	},
	version_hash: "43peou"
};

export function get_hooks() {
	return {};
}

export { set_assets, set_building, set_private_env, set_public_env };
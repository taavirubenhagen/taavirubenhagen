export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","full_logo.png","full_logo.svg","icons/outfyx_add.svg","icons/outfyx_bookmark.svg","icons/outfyx_camera.svg","icons/outfyx_close.svg","icons/outfyx_clothes_rack.svg","icons/outfyx_favorite.svg","icons/outfyx_flat_arrow_down.svg","icons/outfyx_forward.svg","icons/outfyx_home.svg","icons/outfyx_info.svg","icons/outfyx_menu.svg","icons/outfyx_person.svg","icons/outfyx_search.svg","icons/outfyx_settings.svg","logo_icon.svg"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml"},
	_: {
		entry: {"file":"_app/immutable/start-953c9ebb.js","imports":["_app/immutable/start-953c9ebb.js","_app/immutable/chunks/index-37bd3a1a.js","_app/immutable/chunks/singletons-78cae2c2.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

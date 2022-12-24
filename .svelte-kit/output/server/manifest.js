export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","full_logo.png","full_logo.svg","icons/outfyx_add.svg","icons/outfyx_bookmark.svg","icons/outfyx_camera.svg","icons/outfyx_close.svg","icons/outfyx_clothes_rack.svg","icons/outfyx_favorite.svg","icons/outfyx_flat_arrow_down.svg","icons/outfyx_forward.svg","icons/outfyx_home.svg","icons/outfyx_info.svg","icons/outfyx_menu.svg","icons/outfyx_person.svg","icons/outfyx_search.svg","icons/outfyx_settings.svg","logo_icon.svg"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml"},
	_: {
		entry: {"file":"_app/immutable/start-91d0c97f.js","imports":["_app/immutable/start-91d0c97f.js","_app/immutable/chunks/index-2cc5d297.js","_app/immutable/chunks/singletons-a583a336.js","_app/immutable/chunks/index-210a4c0e.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/services",
				pattern: /^\/services\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

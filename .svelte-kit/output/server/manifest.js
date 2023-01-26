export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","full_logo.png","full_logo.svg","icons/icons_1_down_8.svg","icons/icons_1_up_8.svg","icons/outfyx_add.svg","icons/outfyx_bookmark.svg","icons/outfyx_camera.svg","icons/outfyx_close.svg","icons/outfyx_clothes_rack.svg","icons/outfyx_favorite.svg","icons/outfyx_flat_arrow_down.svg","icons/outfyx_forward.svg","icons/outfyx_home.svg","icons/outfyx_info.svg","icons/outfyx_menu.svg","icons/outfyx_person.svg","icons/outfyx_search.svg","icons/outfyx_settings.svg","icons/tavy_instagram.svg","logo_icon.svg"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml"},
	_: {
		entry: {"file":"_app/immutable/start-ecc644e4.js","imports":["_app/immutable/start-ecc644e4.js","_app/immutable/chunks/index-3bbe8e8c.js","_app/immutable/chunks/singletons-0c879f0f.js","_app/immutable/chunks/index-8391e297.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js'),
			() => import('./nodes/7.js'),
			() => import('./nodes/8.js'),
			() => import('./nodes/9.js'),
			() => import('./nodes/10.js'),
			() => import('./nodes/11.js'),
			() => import('./nodes/12.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 6 },
				endpoint: null
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/fenni/blog/admin/post",
				pattern: /^\/fenni\/blog\/admin\/post\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 8 },
				endpoint: null
			},
			{
				id: "/me/home",
				pattern: /^\/me\/home\/?$/,
				params: [],
				page: { layouts: [0,3,4], errors: [1,,,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/presenter/web/[id]",
				pattern: /^\/presenter\/web\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0], errors: [1], leaf: 10 },
				endpoint: null
			},
			{
				id: "/three",
				pattern: /^\/three\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 11 },
				endpoint: null
			},
			{
				id: "/work",
				pattern: /^\/work\/?$/,
				params: [],
				page: { layouts: [0,5], errors: [1,,], leaf: 12 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

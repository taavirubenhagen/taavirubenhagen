export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","full_logo.png","full_logo.svg","icons/0.1/icons_1_down_8.svg","icons/0.1/icons_1_up_8.svg","icons/0.2/down.svg","icons/0.2/phone.svg","icons/0.2/phone_thin.svg","icons/0.2/README.md","icons/deprecated/others/tavy_instagram.svg","icons/deprecated/outfyx/outfyx_add.svg","icons/deprecated/outfyx/outfyx_bookmark.svg","icons/deprecated/outfyx/outfyx_camera.svg","icons/deprecated/outfyx/outfyx_close.svg","icons/deprecated/outfyx/outfyx_clothes_rack.svg","icons/deprecated/outfyx/outfyx_favorite.svg","icons/deprecated/outfyx/outfyx_flat_arrow_down.svg","icons/deprecated/outfyx/outfyx_forward.svg","icons/deprecated/outfyx/outfyx_home.svg","icons/deprecated/outfyx/outfyx_info.svg","icons/deprecated/outfyx/outfyx_menu.svg","icons/deprecated/outfyx/outfyx_person.svg","icons/deprecated/outfyx/outfyx_search.svg","icons/deprecated/outfyx/outfyx_settings.svg","icons/ICONS.md","icon_animations.riv","logo_icon.svg"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml",".md":"text/markdown"},
	_: {
		entry: {"file":"_app/immutable/start-c1bca591.js","imports":["_app/immutable/start-c1bca591.js","_app/immutable/chunks/index-5a593291.js","_app/immutable/chunks/singletons-9fe8fbc2.js","_app/immutable/chunks/index-2d3453a6.js"],"stylesheets":[],"fonts":[]},
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
			() => import('./nodes/12.js'),
			() => import('./nodes/13.js'),
			() => import('./nodes/14.js'),
			() => import('./nodes/15.js'),
			() => import('./nodes/16.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 7 },
				endpoint: null
			},
			{
				id: "/beta/fenni",
				pattern: /^\/beta\/fenni\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/beta/three",
				pattern: /^\/beta\/three\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 9 },
				endpoint: null
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0,3], errors: [1,,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/fenni/blog/admin/post",
				pattern: /^\/fenni\/blog\/admin\/post\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 11 },
				endpoint: null
			},
			{
				id: "/me/design/tavy/icons",
				pattern: /^\/me\/design\/tavy\/icons\/?$/,
				params: [],
				page: { layouts: [0,4], errors: [1,,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/me/design/tavy/icons/explore",
				pattern: /^\/me\/design\/tavy\/icons\/explore\/?$/,
				params: [],
				page: { layouts: [0,4], errors: [1,,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/me/home",
				pattern: /^\/me\/home\/?$/,
				params: [],
				page: { layouts: [0,4,5], errors: [1,,,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/presenter/web/[id]",
				pattern: /^\/presenter\/web\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0], errors: [1], leaf: 15 },
				endpoint: null
			},
			{
				id: "/work",
				pattern: /^\/work\/?$/,
				params: [],
				page: { layouts: [0,6], errors: [1,,], leaf: 16 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

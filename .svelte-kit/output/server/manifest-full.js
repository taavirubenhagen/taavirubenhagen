export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","icons/0.1/icons_1_down_8.svg","icons/0.1/icons_1_up_8.svg","icons/0.2/down.svg","icons/0.2/phone.svg","icons/0.2/phone_thin.svg","icons/0.2/README.md","icons/deprecated/others/tavy_instagram.svg","icons/deprecated/outfyx/outfyx_add.svg","icons/deprecated/outfyx/outfyx_bookmark.svg","icons/deprecated/outfyx/outfyx_camera.svg","icons/deprecated/outfyx/outfyx_close.svg","icons/deprecated/outfyx/outfyx_clothes_rack.svg","icons/deprecated/outfyx/outfyx_favorite.svg","icons/deprecated/outfyx/outfyx_flat_arrow_down.svg","icons/deprecated/outfyx/outfyx_forward.svg","icons/deprecated/outfyx/outfyx_home.svg","icons/deprecated/outfyx/outfyx_info.svg","icons/deprecated/outfyx/outfyx_menu.svg","icons/deprecated/outfyx/outfyx_person.svg","icons/deprecated/outfyx/outfyx_search.svg","icons/deprecated/outfyx/outfyx_settings.svg","icons/ICONS.md","icon_animations.riv","logos/full_logo.png","logos/full_logo.svg","logos/icon_compatible/README.md","logos/logo.svg","logos/logo_icon.svg"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml",".md":"text/markdown"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.ce63a88f.js","imports":["_app/immutable/entry/start.ce63a88f.js","_app/immutable/chunks/index.3f5f83d0.js","_app/immutable/chunks/singletons.84e3d965.js","_app/immutable/chunks/index.6895e06d.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.f2efaaad.js","imports":["_app/immutable/entry/app.f2efaaad.js","_app/immutable/chunks/index.3f5f83d0.js"],"stylesheets":[],"fonts":[]}},
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
			() => import('./nodes/16.js'),
			() => import('./nodes/17.js'),
			() => import('./nodes/18.js'),
			() => import('./nodes/19.js'),
			() => import('./nodes/20.js'),
			() => import('./nodes/21.js'),
			() => import('./nodes/22.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 8 },
				endpoint: null
			},
			{
				id: "/beta/fenni",
				pattern: /^\/beta\/fenni\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/beta/three",
				pattern: /^\/beta\/three\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 10 },
				endpoint: null
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0,3], errors: [1,,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/fenni/blog/admin/post",
				pattern: /^\/fenni\/blog\/admin\/post\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 12 },
				endpoint: null
			},
			{
				id: "/me/contact",
				pattern: /^\/me\/contact\/?$/,
				params: [],
				page: { layouts: [0,4], errors: [1,,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/me/design/tavy/icons",
				pattern: /^\/me\/design\/tavy\/icons\/?$/,
				params: [],
				page: { layouts: [0,4], errors: [1,,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/me/design/tavy/icons/explore",
				pattern: /^\/me\/design\/tavy\/icons\/explore\/?$/,
				params: [],
				page: { layouts: [0,4], errors: [1,,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/me/home",
				pattern: /^\/me\/home\/?$/,
				params: [],
				page: { layouts: [0,4,5], errors: [1,,,], leaf: 16 },
				endpoint: null
			},
			{
				id: "/me/landing/social",
				pattern: /^\/me\/landing\/social\/?$/,
				params: [],
				page: { layouts: [0,4,6], errors: [1,,,], leaf: 17 },
				endpoint: null
			},
			{
				id: "/presenter/web/[id]",
				pattern: /^\/presenter\/web\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0], errors: [1], leaf: 18 },
				endpoint: null
			},
			{
				id: "/tts",
				pattern: /^\/tts\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 21 },
				endpoint: null
			},
			{
				id: "/t/0",
				pattern: /^\/t\/0\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 19 },
				endpoint: null
			},
			{
				id: "/t/1",
				pattern: /^\/t\/1\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 20 },
				endpoint: null
			},
			{
				id: "/work",
				pattern: /^\/work\/?$/,
				params: [],
				page: { layouts: [0,7], errors: [1,,], leaf: 22 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

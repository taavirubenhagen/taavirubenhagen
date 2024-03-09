export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["blog/2023-05-19.md","blog/blog_data.json","drafts/hoffmanns-schuppen/ads/g-s-dunkel_ls.png","drafts/hoffmanns-schuppen/Aktie.png","drafts/hoffmanns-schuppen/investing.jpg","drafts/hoffmanns-schuppen/local_business.jpg","images/abstract.jpg","images/depri_portrait.jpg","images/depri_portrait_square.jpg","images/logos/t-r_logo.svg","images/mockups/presenter_notes_mockup.png","images/programming.jpg","presenter/Presentation Master 2.msi","tavy/icons/2024-03/README.md","tavy/icons/README.md"]),
	mimeTypes: {".md":"text/markdown",".json":"application/json",".png":"image/png",".jpg":"image/jpeg",".svg":"image/svg+xml",".msi":"application/octet-stream"},
	_: {
		client: {"start":"_app/immutable/entry/start.8416a405.js","app":"_app/immutable/entry/app.99192681.js","imports":["_app/immutable/entry/start.8416a405.js","_app/immutable/chunks/index.7b7993cb.js","_app/immutable/chunks/singletons.e862e256.js","_app/immutable/chunks/index.228e60ed.js","_app/immutable/chunks/paths.426c780e.js","_app/immutable/entry/app.99192681.js","_app/immutable/chunks/index.7b7993cb.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/9.js')),
			__memo(() => import('./nodes/10.js')),
			__memo(() => import('./nodes/11.js')),
			__memo(() => import('./nodes/12.js')),
			__memo(() => import('./nodes/13.js')),
			__memo(() => import('./nodes/14.js')),
			__memo(() => import('./nodes/15.js')),
			__memo(() => import('./nodes/16.js')),
			__memo(() => import('./nodes/17.js')),
			__memo(() => import('./nodes/18.js')),
			__memo(() => import('./nodes/19.js')),
			__memo(() => import('./nodes/20.js')),
			__memo(() => import('./nodes/21.js')),
			__memo(() => import('./nodes/22.js')),
			__memo(() => import('./nodes/23.js')),
			__memo(() => import('./nodes/24.js')),
			__memo(() => import('./nodes/25.js')),
			__memo(() => import('./nodes/26.js')),
			__memo(() => import('./nodes/27.js')),
			__memo(() => import('./nodes/28.js')),
			__memo(() => import('./nodes/29.js')),
			__memo(() => import('./nodes/30.js')),
			__memo(() => import('./nodes/31.js')),
			__memo(() => import('./nodes/32.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/admin",
				pattern: /^\/admin\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/admin/access",
				pattern: /^\/admin\/access\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/admin/access/[password]",
				pattern: /^\/admin\/access\/([^/]+?)\/?$/,
				params: [{"name":"password","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/admin/login/[state]",
				pattern: /^\/admin\/login\/([^/]+?)\/?$/,
				params: [{"name":"state","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/coming-soon",
				pattern: /^\/coming-soon\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/counter/privacy-policy",
				pattern: /^\/counter\/privacy-policy\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/drafts/hoffmanns-schuppen",
				pattern: /^\/drafts\/hoffmanns-schuppen\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/drafts/hoffmanns-schuppen/countdown",
				pattern: /^\/drafts\/hoffmanns-schuppen\/countdown\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/drafts/hoffmanns-schuppen/home",
				pattern: /^\/drafts\/hoffmanns-schuppen\/home\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/drafts/hoffmanns-schuppen/investor-relations",
				pattern: /^\/drafts\/hoffmanns-schuppen\/investor-relations\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/drafts/hoffmanns-schuppen/mach-mit",
				pattern: /^\/drafts\/hoffmanns-schuppen\/mach-mit\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/drafts/hoffmanns-schuppen/produkte",
				pattern: /^\/drafts\/hoffmanns-schuppen\/produkte\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/drafts/terminal",
				pattern: /^\/drafts\/terminal\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 16 },
				endpoint: null
			},
			{
				id: "/drafts/terminal/[route]",
				pattern: /^\/drafts\/terminal\/([^/]+?)\/?$/,
				params: [{"name":"route","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 17 },
				endpoint: null
			},
			{
				id: "/drafts/website",
				pattern: /^\/drafts\/website\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 18 },
				endpoint: null
			},
			{
				id: "/drafts/website/contact",
				pattern: /^\/drafts\/website\/contact\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 19 },
				endpoint: null
			},
			{
				id: "/hs",
				pattern: /^\/hs\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 20 },
				endpoint: null
			},
			{
				id: "/legal/contact",
				pattern: /^\/legal\/contact\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 21 },
				endpoint: null
			},
			{
				id: "/legal/privacy-policy",
				pattern: /^\/legal\/privacy-policy\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 22 },
				endpoint: null
			},
			{
				id: "/politics/jugendparlament",
				pattern: /^\/politics\/jugendparlament\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 23 },
				endpoint: null
			},
			{
				id: "/politics/jugendparlament/sticker",
				pattern: /^\/politics\/jugendparlament\/sticker\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 24 },
				endpoint: null
			},
			{
				id: "/presenter/download",
				pattern: /^\/presenter\/download\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 25 },
				endpoint: null
			},
			{
				id: "/presenter/privacy-policy",
				pattern: /^\/presenter\/privacy-policy\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 26 },
				endpoint: null
			},
			{
				id: "/presenter/sticker",
				pattern: /^\/presenter\/sticker\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 27 },
				endpoint: null
			},
			{
				id: "/presenter/support-url",
				pattern: /^\/presenter\/support-url\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 28 },
				endpoint: null
			},
			{
				id: "/presenter/waitlist",
				pattern: /^\/presenter\/waitlist\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 29 },
				endpoint: null
			},
			{
				id: "/projects",
				pattern: /^\/projects\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 30 },
				endpoint: null
			},
			{
				id: "/shop/dropshipping",
				pattern: /^\/shop\/dropshipping\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 31 },
				endpoint: null
			},
			{
				id: "/shop/dropshipping/coming-soon",
				pattern: /^\/shop\/dropshipping\/coming-soon\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 32 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();

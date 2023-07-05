export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["abp_drawing.png","blog/2023-05-19.md","blog/blog_data.json","icons/deprecated/0.1/icons_1_down_8.svg","icons/deprecated/0.1/icons_1_up_8.svg","icons/deprecated/0.2/down.svg","icons/deprecated/0.2/phone.svg","icons/deprecated/0.2/phone_thin.svg","icons/deprecated/0.2/README.md","icons/deprecated/others/tavy_instagram.svg","icons/deprecated/outfyx/outfyx_add.svg","icons/deprecated/outfyx/outfyx_bookmark.svg","icons/deprecated/outfyx/outfyx_camera.svg","icons/deprecated/outfyx/outfyx_close.svg","icons/deprecated/outfyx/outfyx_clothes_rack.svg","icons/deprecated/outfyx/outfyx_favorite.svg","icons/deprecated/outfyx/outfyx_flat_arrow_down.svg","icons/deprecated/outfyx/outfyx_forward.svg","icons/deprecated/outfyx/outfyx_home.svg","icons/deprecated/outfyx/outfyx_info.svg","icons/deprecated/outfyx/outfyx_menu.svg","icons/deprecated/outfyx/outfyx_person.svg","icons/deprecated/outfyx/outfyx_search.svg","icons/deprecated/outfyx/outfyx_settings.svg","icons/Drawicons/Files/Drawicons.ai","icons/Drawicons/Files/Drawicons.fig","icons/Drawicons/Filled/SVG/arrow1.svg","icons/Drawicons/Filled/SVG/arrow2.svg","icons/Drawicons/Filled/SVG/arrow3.svg","icons/Drawicons/Filled/SVG/arrow4.svg","icons/Drawicons/Filled/SVG/arrow5.svg","icons/Drawicons/Filled/SVG/arrow6.svg","icons/Drawicons/Filled/SVG/arrow7.svg","icons/Drawicons/Filled/SVG/award1.svg","icons/Drawicons/Filled/SVG/bag1.svg","icons/Drawicons/Filled/SVG/ball1.svg","icons/Drawicons/Filled/SVG/ball2.svg","icons/Drawicons/Filled/SVG/ball3.svg","icons/Drawicons/Filled/SVG/bolt1.svg","icons/Drawicons/Filled/SVG/bolt2.svg","icons/Drawicons/Filled/SVG/bolt3.svg","icons/Drawicons/Filled/SVG/bolt4.svg","icons/Drawicons/Filled/SVG/bomb1.svg","icons/Drawicons/Filled/SVG/book1.svg","icons/Drawicons/Filled/SVG/bottle1.svg","icons/Drawicons/Filled/SVG/bow1.svg","icons/Drawicons/Filled/SVG/bubble1.svg","icons/Drawicons/Filled/SVG/bubble2.svg","icons/Drawicons/Filled/SVG/bubble3.svg","icons/Drawicons/Filled/SVG/burger1.svg","icons/Drawicons/Filled/SVG/burger2.svg","icons/Drawicons/Filled/SVG/cloud1.svg","icons/Drawicons/Filled/SVG/cloud2.svg","icons/Drawicons/Filled/SVG/cloud3.svg","icons/Drawicons/Filled/SVG/cloud4.svg","icons/Drawicons/Filled/SVG/cog1.svg","icons/Drawicons/Filled/SVG/cuboid1.svg","icons/Drawicons/Filled/SVG/cylinder1.svg","icons/Drawicons/Filled/SVG/device1.svg","icons/Drawicons/Filled/SVG/device2.svg","icons/Drawicons/Filled/SVG/diamond1.svg","icons/Drawicons/Filled/SVG/diamond2.svg","icons/Drawicons/Filled/SVG/dice1.svg","icons/Drawicons/Filled/SVG/drop1.svg","icons/Drawicons/Filled/SVG/drop2.svg","icons/Drawicons/Filled/SVG/excalamation1.svg","icons/Drawicons/Filled/SVG/explode1.svg","icons/Drawicons/Filled/SVG/explode2.svg","icons/Drawicons/Filled/SVG/explode3.svg","icons/Drawicons/Filled/SVG/explode4.svg","icons/Drawicons/Filled/SVG/fire1.svg","icons/Drawicons/Filled/SVG/flower1.svg","icons/Drawicons/Filled/SVG/flower2.svg","icons/Drawicons/Filled/SVG/flower3.svg","icons/Drawicons/Filled/SVG/flower4.svg","icons/Drawicons/Filled/SVG/flower5.svg","icons/Drawicons/Filled/SVG/ghost1.svg","icons/Drawicons/Filled/SVG/glass1.svg","icons/Drawicons/Filled/SVG/glass2.svg","icons/Drawicons/Filled/SVG/glass3.svg","icons/Drawicons/Filled/SVG/heart1.svg","icons/Drawicons/Filled/SVG/heart2.svg","icons/Drawicons/Filled/SVG/heart3.svg","icons/Drawicons/Filled/SVG/heart4.svg","icons/Drawicons/Filled/SVG/lamp1.svg","icons/Drawicons/Filled/SVG/letter1.svg","icons/Drawicons/Filled/SVG/lip1.svg","icons/Drawicons/Filled/SVG/lip2.svg","icons/Drawicons/Filled/SVG/lip3.svg","icons/Drawicons/Filled/SVG/lolly1.svg","icons/Drawicons/Filled/SVG/maths1.svg","icons/Drawicons/Filled/SVG/maths2.svg","icons/Drawicons/Filled/SVG/maths3.svg","icons/Drawicons/Filled/SVG/maths4.svg","icons/Drawicons/Filled/SVG/maths5.svg","icons/Drawicons/Filled/SVG/maths6.svg","icons/Drawicons/Filled/SVG/maths7.svg","icons/Drawicons/Filled/SVG/maths8.svg","icons/Drawicons/Filled/SVG/moon1.svg","icons/Drawicons/Filled/SVG/moon2.svg","icons/Drawicons/Filled/SVG/moon3.svg","icons/Drawicons/Filled/SVG/mug1.svg","icons/Drawicons/Filled/SVG/pen1.svg","icons/Drawicons/Filled/SVG/play1.svg","icons/Drawicons/Filled/SVG/play2.svg","icons/Drawicons/Filled/SVG/puck1.svg","icons/Drawicons/Filled/SVG/question1.svg","icons/Drawicons/Filled/SVG/shape1.svg","icons/Drawicons/Filled/SVG/shape10.svg","icons/Drawicons/Filled/SVG/shape11.svg","icons/Drawicons/Filled/SVG/shape12.svg","icons/Drawicons/Filled/SVG/shape13.svg","icons/Drawicons/Filled/SVG/shape14.svg","icons/Drawicons/Filled/SVG/shape15.svg","icons/Drawicons/Filled/SVG/shape16.svg","icons/Drawicons/Filled/SVG/shape2.svg","icons/Drawicons/Filled/SVG/shape3.svg","icons/Drawicons/Filled/SVG/shape4.svg","icons/Drawicons/Filled/SVG/shape5.svg","icons/Drawicons/Filled/SVG/shape6.svg","icons/Drawicons/Filled/SVG/shape7.svg","icons/Drawicons/Filled/SVG/shape8.svg","icons/Drawicons/Filled/SVG/shape9.svg","icons/Drawicons/Filled/SVG/shield1.svg","icons/Drawicons/Filled/SVG/smoke1.svg","icons/Drawicons/Filled/SVG/smoke3.svg","icons/Drawicons/Filled/SVG/smoke4.svg","icons/Drawicons/Filled/SVG/speaker1.svg","icons/Drawicons/Filled/SVG/speech1.svg","icons/Drawicons/Filled/SVG/speech2.svg","icons/Drawicons/Filled/SVG/speech3.svg","icons/Drawicons/Filled/SVG/speech4.svg","icons/Drawicons/Filled/SVG/star1.svg","icons/Drawicons/Filled/SVG/star2.svg","icons/Drawicons/Filled/SVG/star3.svg","icons/Drawicons/Filled/SVG/star4.svg","icons/Drawicons/Filled/SVG/star5.svg","icons/Drawicons/Filled/SVG/star6.svg","icons/Drawicons/Filled/SVG/sun1.svg","icons/Drawicons/Filled/SVG/sword1.svg","icons/Drawicons/Filled/SVG/triangle1.svg","icons/Drawicons/Filled/SVG/triangle2.svg","icons/Drawicons/Filled/SVG/user1.svg","icons/Drawicons/Filled/SVG/user2.svg","icons/Drawicons/Outlined/SVG/.DS_Store","icons/Drawicons/Outlined/SVG/arrow1.svg","icons/Drawicons/Outlined/SVG/arrow2.svg","icons/Drawicons/Outlined/SVG/arrow3.svg","icons/Drawicons/Outlined/SVG/arrow4.svg","icons/Drawicons/Outlined/SVG/arrow5.svg","icons/Drawicons/Outlined/SVG/arrow6.svg","icons/Drawicons/Outlined/SVG/arrow7.svg","icons/Drawicons/Outlined/SVG/award1.svg","icons/Drawicons/Outlined/SVG/bag1.svg","icons/Drawicons/Outlined/SVG/ball1.svg","icons/Drawicons/Outlined/SVG/ball2.svg","icons/Drawicons/Outlined/SVG/ball3.svg","icons/Drawicons/Outlined/SVG/bolt1.svg","icons/Drawicons/Outlined/SVG/bolt2.svg","icons/Drawicons/Outlined/SVG/bolt4.svg","icons/Drawicons/Outlined/SVG/bolt5.svg","icons/Drawicons/Outlined/SVG/bomb1.svg","icons/Drawicons/Outlined/SVG/book1.svg","icons/Drawicons/Outlined/SVG/bottle1.svg","icons/Drawicons/Outlined/SVG/bow1.svg","icons/Drawicons/Outlined/SVG/bubble1.svg","icons/Drawicons/Outlined/SVG/bubble2.svg","icons/Drawicons/Outlined/SVG/bubble3.svg","icons/Drawicons/Outlined/SVG/burger1.svg","icons/Drawicons/Outlined/SVG/burger2.svg","icons/Drawicons/Outlined/SVG/cloud1.svg","icons/Drawicons/Outlined/SVG/cloud2.svg","icons/Drawicons/Outlined/SVG/cloud3.svg","icons/Drawicons/Outlined/SVG/cloud4.svg","icons/Drawicons/Outlined/SVG/cog1.svg","icons/Drawicons/Outlined/SVG/cuboid1.svg","icons/Drawicons/Outlined/SVG/cylinder1.svg","icons/Drawicons/Outlined/SVG/device1.svg","icons/Drawicons/Outlined/SVG/device2.svg","icons/Drawicons/Outlined/SVG/diamond1.svg","icons/Drawicons/Outlined/SVG/diamond2.svg","icons/Drawicons/Outlined/SVG/dice1.svg","icons/Drawicons/Outlined/SVG/drop1.svg","icons/Drawicons/Outlined/SVG/drop2.svg","icons/Drawicons/Outlined/SVG/exclamation1.svg","icons/Drawicons/Outlined/SVG/explode1.svg","icons/Drawicons/Outlined/SVG/explode2.svg","icons/Drawicons/Outlined/SVG/explode3.svg","icons/Drawicons/Outlined/SVG/explode4.svg","icons/Drawicons/Outlined/SVG/fire1.svg","icons/Drawicons/Outlined/SVG/flower1.svg","icons/Drawicons/Outlined/SVG/flower2.svg","icons/Drawicons/Outlined/SVG/flower3.svg","icons/Drawicons/Outlined/SVG/flower4.svg","icons/Drawicons/Outlined/SVG/flower5.svg","icons/Drawicons/Outlined/SVG/ghost1.svg","icons/Drawicons/Outlined/SVG/glass1.svg","icons/Drawicons/Outlined/SVG/glass2.svg","icons/Drawicons/Outlined/SVG/glass3.svg","icons/Drawicons/Outlined/SVG/heart1.svg","icons/Drawicons/Outlined/SVG/heart2.svg","icons/Drawicons/Outlined/SVG/heart3.svg","icons/Drawicons/Outlined/SVG/heart4.svg","icons/Drawicons/Outlined/SVG/lamp1.svg","icons/Drawicons/Outlined/SVG/lip1.svg","icons/Drawicons/Outlined/SVG/lip2.svg","icons/Drawicons/Outlined/SVG/lip3.svg","icons/Drawicons/Outlined/SVG/lolly1.svg","icons/Drawicons/Outlined/SVG/mail1.svg","icons/Drawicons/Outlined/SVG/maths1.svg","icons/Drawicons/Outlined/SVG/maths2.svg","icons/Drawicons/Outlined/SVG/maths3.svg","icons/Drawicons/Outlined/SVG/maths4.svg","icons/Drawicons/Outlined/SVG/maths5.svg","icons/Drawicons/Outlined/SVG/maths6.svg","icons/Drawicons/Outlined/SVG/maths7.svg","icons/Drawicons/Outlined/SVG/maths8.svg","icons/Drawicons/Outlined/SVG/moon1.svg","icons/Drawicons/Outlined/SVG/moon3.svg","icons/Drawicons/Outlined/SVG/moon4.svg","icons/Drawicons/Outlined/SVG/mug1.svg","icons/Drawicons/Outlined/SVG/pen1.svg","icons/Drawicons/Outlined/SVG/play1.svg","icons/Drawicons/Outlined/SVG/play2.svg","icons/Drawicons/Outlined/SVG/puck1.svg","icons/Drawicons/Outlined/SVG/question1.svg","icons/Drawicons/Outlined/SVG/shape1.svg","icons/Drawicons/Outlined/SVG/shape10.svg","icons/Drawicons/Outlined/SVG/shape11.svg","icons/Drawicons/Outlined/SVG/shape12.svg","icons/Drawicons/Outlined/SVG/shape13.svg","icons/Drawicons/Outlined/SVG/shape14.svg","icons/Drawicons/Outlined/SVG/shape15.svg","icons/Drawicons/Outlined/SVG/shape16.svg","icons/Drawicons/Outlined/SVG/shape17.svg","icons/Drawicons/Outlined/SVG/shape2.svg","icons/Drawicons/Outlined/SVG/shape3.svg","icons/Drawicons/Outlined/SVG/shape5.svg","icons/Drawicons/Outlined/SVG/shape6.svg","icons/Drawicons/Outlined/SVG/shape7.svg","icons/Drawicons/Outlined/SVG/shape8.svg","icons/Drawicons/Outlined/SVG/shape9.svg","icons/Drawicons/Outlined/SVG/shield1.svg","icons/Drawicons/Outlined/SVG/smoke1.svg","icons/Drawicons/Outlined/SVG/smoke2.svg","icons/Drawicons/Outlined/SVG/smoke3.svg","icons/Drawicons/Outlined/SVG/speaker1.svg","icons/Drawicons/Outlined/SVG/speech1.svg","icons/Drawicons/Outlined/SVG/speech2.svg","icons/Drawicons/Outlined/SVG/speech3.svg","icons/Drawicons/Outlined/SVG/speech4.svg","icons/Drawicons/Outlined/SVG/star1.svg","icons/Drawicons/Outlined/SVG/star2.svg","icons/Drawicons/Outlined/SVG/star3.svg","icons/Drawicons/Outlined/SVG/star4.svg","icons/Drawicons/Outlined/SVG/star5.svg","icons/Drawicons/Outlined/SVG/star6.svg","icons/Drawicons/Outlined/SVG/sun1.svg","icons/Drawicons/Outlined/SVG/sword1.svg","icons/Drawicons/Outlined/SVG/triangle1.svg","icons/Drawicons/Outlined/SVG/triangle2.svg","icons/Drawicons/Outlined/SVG/user1.svg","icons/Drawicons/Outlined/SVG/user2.svg","icons/Drawicons/__MACOSX/Files/._Drawicons.ai","icons/Drawicons/__MACOSX/Files/._Drawicons.fig","icons/Drawicons/__MACOSX/Outlined/SVG/._.DS_Store","icons/ICONS.md","logos/full_logo.png","logos/full_logo.svg","logos/icon_compatible/README.md","logos/logo.svg","logos/logo_icon.svg","mockups/presenter_notes_mockup.png"]),
	mimeTypes: {".png":"image/png",".md":"text/markdown",".json":"application/json",".svg":"image/svg+xml",".ai":"application/postscript",".fig":"application/x-xfig"},
	_: {
		client: {"start":"_app/immutable/entry/start.57acbe5e.js","app":"_app/immutable/entry/app.24e425cd.js","imports":["_app/immutable/entry/start.57acbe5e.js","_app/immutable/chunks/index.2e7d4bc0.js","_app/immutable/chunks/index.60a3356b.js","_app/immutable/chunks/paths.9327c3d0.js","_app/immutable/entry/app.24e425cd.js","_app/immutable/chunks/preload-helper.41c905a7.js","_app/immutable/chunks/index.2e7d4bc0.js"],"stylesheets":[],"fonts":[]},
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
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/me/blog",
				pattern: /^\/me\/blog\/?$/,
				params: [],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/me/contact",
				pattern: /^\/me\/contact\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/me/home",
				pattern: /^\/me\/home\/?$/,
				params: [],
				page: { layouts: [0,2,4,], errors: [1,,,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/me/landing/social",
				pattern: /^\/me\/landing\/social\/?$/,
				params: [],
				page: { layouts: [0,2,5,], errors: [1,,,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/portfolio/home",
				pattern: /^\/portfolio\/home\/?$/,
				params: [],
				page: { layouts: [0,6,], errors: [1,,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/portfolio/newsletter",
				pattern: /^\/portfolio\/newsletter\/?$/,
				params: [],
				page: { layouts: [0,6,], errors: [1,,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/presenter/waitlist",
				pattern: /^\/presenter\/waitlist\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/supabase-test",
				pattern: /^\/supabase-test\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/tts",
				pattern: /^\/tts\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 16 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

param ($path, [boolean]$downloadscoop=$False)




$dir = "C://Users/User/CODE"
$md = "C://Users/User/CODE/taavirubenhagen/EXTERNAL/scripts/md"
$sc = "C://Users/User/CODE/taavirubenhagen/EXTERNAL/scripts/sc"

$path = "$dir/$path"
$src = "$path/src"
$routes = "$src/routes"




If ($downloadscoop) {
  Write-Host "Downloading scoop and installing sudo...\nIf the following script throws an error stating one of them is not recognized, set them as system environment variables." -ForegroundColor Gray
  Invoke-Expression (new-object net.webclient).downloadstring('https://get.scoop.sh')
  set-executionpolicy unrestricted -s cu -f
  scoop install sudo
}




npm create svelte@latest
Set-Location $path
npm i
npm i -D tailwindcss postcss autoprefixer #svelte-preprocess
npx tailwindcss init tailwind.config.cjs -p








& $md $src/global.postcss
& $md $src/stores.ts
& $md $src/app.d.ts

& $md $routes/+layout.svelte








& $sc $path/tailwind.config.cjs '/** @type {import("tailwindcss").Config} */


const colors = require("tailwindcss/colors")




let bright = false




module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        background: "#FFF",
        onBackground: "#000",
      },
    },
  },
  plugins: [],
  // !!
}'




#& $sc $src/app.d.ts '// See https://kit.svelte.dev/docs/types#app
#// for information about these interfaces
#// and what to do when importing types
#declare namespace App {
#	// interface Locals {}
#	// interface PageData {}
#	// interface Error {}
#	// interface Platform {}
#}'




& $sc $src/app.html '
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8" />
		<link rel="icon" href="%sveltekit.assets%/favicon.png" />
		<title>Taavi Rübenhagen</title>
		<meta name="viewport" content="width=device-width" />

		<link rel="preconnect" href="https://fonts.googleapis.com"/>
		<link rel="preconnect" href="https://fonts.gstatic.com"/>
		<link href="https://fonts.googleapis.com/css2?family=Lexend&display=swap" rel="stylesheet"/>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/iconoir-icons/iconoir@main/css/iconoir.css">

		<script>
			import "./global.postcss"
		</script>
		
		%sveltekit.head%
	</head>
	<body>
		<div>%sveltekit.body%</div>
	</body>
</html>'




& $sc $routes/+layout.svelte '<script lang="ts">
  import "../global.postcss"
</script>




<main class="w-screen min-h-screen bg-black">
  <slot></slot>
</main>'




& $sc $src/global.postcss '@tailwind base;
@tailwind components;
@tailwind utilities;


/* ROOT STYLES */

  :root {
    @apply m-0 p-0 bg-background text-onBackground;
    font-family: "Inter", "IBM Plex Mono";
  }
  :root::-webkit-scrollbar {
    @apply w-2 bg-transparent;
  }
  @media (min-width: 640px) {
    :root {
      max-width: none;
    }
  }




/* TEXT-RELATED STYLES */

  .text {
    @apply inline;
  }
  .text::selection {
    background-color: theme("colors.onBackground");
    color: theme("colors.background");
  }

  h1 { @apply; }
  h2 { @apply; }
  h3 { @apply; }
  h4 { @apply; }
  s1 { @apply; }
  s2 { @apply; }
  p1 { @apply; }
  p2 { @apply; }
  b1 { @apply; }
  b2 { @apply; }
    
    
  

/* GENERAL CUSTOM CLASSES */

  .click_through {
    @apply transition-all duration-500;
    pointer-events: none;
    background: url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7);
  }


  .center_col {
    @apply flex flex-col justify-center items-center;
  }
  .center_row {
    @apply flex flex-row justify-center items-center;
  }

    
  @media (min-width: 640px) {
    .size_screen {
      width: calc(100vw - 2 * 4rem);
      min-height: calc(100vh - 2 * 4rem);
      margin: 4rem;
      margin-right: calc(4rem + 4rem);
    }
  }
  @media (max-width: 640px) {
    .size_screen {
      width: calc(100vw - 2 * 2rem);
      min-height: calc(100vh - 2 * 2rem);
      margin: 2rem;
      margin-right: calc(2rem + 4rem);
    }
  }
  .inner_size_screen {
    @apply size_screen m-0;
    margin: 0;
  }'








<#
Insert into svelte.config.js:
  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],
#>








vite dev
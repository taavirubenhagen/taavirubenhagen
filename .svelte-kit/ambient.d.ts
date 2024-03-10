
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const VITE_ADMIN_PASSWORD: string;
	export const VITE_HOFFMANNS_ADMIN_PASSWORD: string;
	export const VITE_PUBLIC_SUPABASE_URL: string;
	export const VITE_PUBLIC_SUPABASE_ANON_KEY: string;
	export const ALLUSERSPROFILE: string;
	export const ANDROID_HOME: string;
	export const APPDATA: string;
	export const CABAL_DIR: string;
	export const ChocolateyInstall: string;
	export const ChocolateyLastPathUpdate: string;
	export const ChocolateyToolsLocation: string;
	export const CHROME_CRASHPAD_PIPE_NAME: string;
	export const CMD_DURATION_MS: string;
	export const COLORTERM: string;
	export const CommonProgramFiles: string;
	export const CommonProgramW6432: string;
	export const COMPUTERNAME: string;
	export const ComSpec: string;
	export const DriverData: string;
	export const EFC_10116: string;
	export const FILE_PWD: string;
	export const FPS_BROWSER_APP_PROFILE_STRING: string;
	export const FPS_BROWSER_USER_PROFILE_STRING: string;
	export const GHCUP_INSTALL_BASE_PREFIX: string;
	export const GIT_ASKPASS: string;
	export const GOPATH: string;
	export const HOMEDRIVE: string;
	export const HOMEPATH: string;
	export const JAVA_HOME: string;
	export const KEY_PATH: string;
	export const LANG: string;
	export const LAST_EXIT_CODE: string;
	export const LOCALAPPDATA: string;
	export const LOGONSERVER: string;
	export const NODE_ENV: string;
	export const NUMBER_OF_PROCESSORS: string;
	export const NUSHELL_CURRENT_SHELL: string;
	export const OLDPWD: string;
	export const OneDrive: string;
	export const ORIGINAL_XDG_CURRENT_DESKTOP: string;
	export const OS: string;
	export const Path: string;
	export const PATHEXT: string;
	export const PNPM_HOME: string;
	export const PROCESSOR_ARCHITECTURE: string;
	export const PROCESSOR_IDENTIFIER: string;
	export const PROCESSOR_LEVEL: string;
	export const PROCESSOR_REVISION: string;
	export const ProgramData: string;
	export const ProgramFiles: string;
	export const ProgramW6432: string;
	export const PROMPT: string;
	export const PSModulePath: string;
	export const PUBLIC: string;
	export const PWD: string;
	export const scoop: string;
	export const SESSIONNAME: string;
	export const sudo: string;
	export const SystemDrive: string;
	export const SystemRoot: string;
	export const tavy: string;
	export const TEMP: string;
	export const TERM_PROGRAM: string;
	export const TERM_PROGRAM_VERSION: string;
	export const TMP: string;
	export const USERDOMAIN: string;
	export const USERDOMAIN_ROAMINGPROFILE: string;
	export const USERNAME: string;
	export const USERPROFILE: string;
	export const VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
	export const VSCODE_GIT_ASKPASS_MAIN: string;
	export const VSCODE_GIT_ASKPASS_NODE: string;
	export const VSCODE_GIT_IPC_HANDLE: string;
	export const windir: string;
	export const _MSYS2_BASH: string;
	export const _MSYS2_PREFIX: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/master/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		VITE_ADMIN_PASSWORD: string;
		VITE_HOFFMANNS_ADMIN_PASSWORD: string;
		VITE_PUBLIC_SUPABASE_URL: string;
		VITE_PUBLIC_SUPABASE_ANON_KEY: string;
		ALLUSERSPROFILE: string;
		ANDROID_HOME: string;
		APPDATA: string;
		CABAL_DIR: string;
		ChocolateyInstall: string;
		ChocolateyLastPathUpdate: string;
		ChocolateyToolsLocation: string;
		CHROME_CRASHPAD_PIPE_NAME: string;
		CMD_DURATION_MS: string;
		COLORTERM: string;
		CommonProgramFiles: string;
		CommonProgramW6432: string;
		COMPUTERNAME: string;
		ComSpec: string;
		DriverData: string;
		EFC_10116: string;
		FILE_PWD: string;
		FPS_BROWSER_APP_PROFILE_STRING: string;
		FPS_BROWSER_USER_PROFILE_STRING: string;
		GHCUP_INSTALL_BASE_PREFIX: string;
		GIT_ASKPASS: string;
		GOPATH: string;
		HOMEDRIVE: string;
		HOMEPATH: string;
		JAVA_HOME: string;
		KEY_PATH: string;
		LANG: string;
		LAST_EXIT_CODE: string;
		LOCALAPPDATA: string;
		LOGONSERVER: string;
		NODE_ENV: string;
		NUMBER_OF_PROCESSORS: string;
		NUSHELL_CURRENT_SHELL: string;
		OLDPWD: string;
		OneDrive: string;
		ORIGINAL_XDG_CURRENT_DESKTOP: string;
		OS: string;
		Path: string;
		PATHEXT: string;
		PNPM_HOME: string;
		PROCESSOR_ARCHITECTURE: string;
		PROCESSOR_IDENTIFIER: string;
		PROCESSOR_LEVEL: string;
		PROCESSOR_REVISION: string;
		ProgramData: string;
		ProgramFiles: string;
		ProgramW6432: string;
		PROMPT: string;
		PSModulePath: string;
		PUBLIC: string;
		PWD: string;
		scoop: string;
		SESSIONNAME: string;
		sudo: string;
		SystemDrive: string;
		SystemRoot: string;
		tavy: string;
		TEMP: string;
		TERM_PROGRAM: string;
		TERM_PROGRAM_VERSION: string;
		TMP: string;
		USERDOMAIN: string;
		USERDOMAIN_ROAMINGPROFILE: string;
		USERNAME: string;
		USERPROFILE: string;
		VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
		VSCODE_GIT_ASKPASS_MAIN: string;
		VSCODE_GIT_ASKPASS_NODE: string;
		VSCODE_GIT_IPC_HANDLE: string;
		windir: string;
		_MSYS2_BASH: string;
		_MSYS2_PREFIX: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}

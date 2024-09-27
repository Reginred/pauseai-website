import { sveltekit } from '@sveltejs/kit/vite'
import { partytownVite } from '@builder.io/partytown/utils'
import path from 'path'

const config = {
	server: {
		port: 37572
	},
	plugins: [
		// Partytown first because SvelteKit copies from static to build in same hook (see below)
		partytownVite({
			// place in static as build is wiped by adapter which always runs last
			dest: path.join(__dirname, 'static', '~partytown')
		}),
		sveltekit()
	]
}

export default config

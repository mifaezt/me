// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	plugins: ['~/plugins/gsap.js'],
	compatibilityDate: '2025-07-15',
	devtools: { enabled: true },

	ssr: false,
	nitro: {
		prerender: {
			routes: ['/'],
		},
	},
	css: ['~/styles/main.scss', '~/styles/fonts.scss'],
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: `
            @use "~/styles/variables" as *;
            @use "~/styles/mixins" as *;
          `,
				},
			},
		},
	},
})

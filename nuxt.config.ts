// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	// plugins: ['~/plugins/gsap.js'],
	compatibilityDate: '2025-07-15',
	devtools: { enabled: true },

	ssr: false,
	nitro: {
		prerender: {
			routes: ['/'],
		},
	},

	// Добавляем модуль i18n
	modules: ['@nuxtjs/i18n'],

	// Конфигурация i18n
	i18n: {
		locales: [
			{
				code: 'ru',
				name: 'Русский',
				file: 'ru.json',
			},
			{
				code: 'en',
				name: 'English',
				file: 'en.json',
			},
		],
		defaultLocale: 'ru',
		langDir: 'locales',
		strategy: 'prefix_except_default',
		detectBrowserLanguage: {
			useCookie: true,
			cookieKey: 'i18n_redirected',
			redirectOn: 'root',
		},
		vueI18n: './i18n.config.ts',
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

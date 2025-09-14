<template>
	<article :class="$style.resume">
		<header :class="$style.header">
			<h1 :class="$style.name">Ильин Игорь Альбертович</h1>
			<div class="mainHeaderContainer">
				<div :class="$style.personalInfo">
					<p>Мужчина, 26 лет, родился 11 октября 1998</p>
					<p>
						+7 (953) 5389063 • Telegram:
						<a href="https://t.me/mifaest" target="_blank">@mifaest</a>
					</p>
					<p>
						Email:
						<a href="mailto:igorilin98@gmail.com">igorilin98@gmail.com</a>
					</p>
					<p>Проживает: Москва • Гражданство: Россия</p>
					<p>Готов к переезду, готов к командировкам</p>
				</div>
				<div :class="$style.meImgContainer">
					<img :class="$style.meImg" src="/public/images/me.jpg" />
					<p>
						я с медведем <br />
						(я слева)
					</p>
				</div>
			</div>
		</header>

		<section :class="$style.section">
			<h2 :class="$style.sectionTitle">Желаемая должность</h2>
			<div :class="$style.desiredPosition">
				<h3>Frontend-разработчик</h3>
				<p>Специализации: Программист, разработчик</p>
				<p>Занятость: полная занятость</p>
				<p>График работы: полный день, гибкий график, удаленная работа</p>
			</div>
		</section>

		<section :class="$style.section">
			<h2 :class="$style.sectionTitle">Опыт работы — 1 год 9 месяцев</h2>

			<div :class="$style.experienceItem">
				<div :class="$style.experienceHeader">
					<h3>Frontend-разработчик</h3>
					<span :class="$style.date"
						>Июль 2024 — настоящее время (1 год 3 месяца)</span
					>
				</div>
				<p :class="$style.company">Hold my deer, Черногория</p>
				<p>Проект: Веб приложение для оплаты парковки</p>
				<p>Стек: Vue 3, Nuxt.js, TypeScript, SCSS, SwiperJS, Storybook</p>
				<ul :class="$style.responsibilities">
					<li>
						Разработка UI-системы: модульный UI-Kit, адаптивные компоненты
					</li>
					<li>Интеграция SwiperJS для интерактивных элементов</li>
					<li>Документация в Storybook для командной работы</li>
					<li>Рефакторинг legacy-кода, улучшение производительности</li>
					<li>Настройка Eslint/Prettier, регулярный багфиксинг</li>
				</ul>
			</div>

			<div :class="$style.experienceItem">
				<div :class="$style.experienceHeader">
					<h3>Fullstack-разработчик</h3>
					<span :class="$style.date">Декабрь 2024 — Июнь 2025 (7 месяцев)</span>
				</div>
				<p :class="$style.company">Jarviranta, Петрозаводск</p>
				<p>Проект: Разработка сайта для гостевого домика</p>
				<p>Стек: Laravel, JavaScript, MySQL, Git, Voyager</p>
				<ul :class="$style.responsibilities">
					<li>Проектирование архитектуры и дизайна в Pixso</li>
					<li>Реализация фронтенда и бэкенда (Laravel + MySQL)</li>
					<li>Настройка бронирования, авторизации и регистрации</li>
					<li>Интеграция админ-панели Voyager</li>
				</ul>
			</div>

			<div :class="$style.experienceItem">
				<div :class="$style.experienceHeader">
					<h3>Frontend-разработчик (Фриланс)</h3>
					<span :class="$style.date">Март 2025 — Апрель 2025 (2 месяца)</span>
				</div>
				<p :class="$style.company">Петрозаводск</p>
				<p>Проект: Свадебный сайт-приглашение</p>
				<p>Стек: Vue 3, Nuxt, TypeScript, JavaScript, MySQL</p>
				<ul :class="$style.responsibilities">
					<li>Создание уникального дизайна и UX</li>
					<li>Адаптивная вёрстка с mobile-first подходом</li>
					<li>Настройка интерактивных элементов и RSVP-формы</li>
					<li>Настройка бэкенда на MySQL, деплой на хостинг</li>
				</ul>
			</div>

			<div :class="$style.experienceItem">
				<div :class="$style.experienceHeader">
					<h3>Стажёр</h3>
					<span :class="$style.date">2023 (стажировка)</span>
				</div>
				<p :class="$style.company">ООО Бизнес-логика, Петрозаводск</p>
				<p>Проект: CRM для логистической компании</p>
				<p>Стек: HTML, CSS, JS, Vue 3, Pinia, Vite</p>
				<ul :class="$style.responsibilities">
					<li>Создание дашборда с графиками для визуализации данных</li>
					<li>Реализация CRUD-интерфейса для работы с заказами</li>
					<li>Добавление мультиязычности (поддержка 2 языков)</li>
				</ul>
			</div>
		</section>

		<section :class="$style.section">
			<h2 :class="$style.sectionTitle">Образование</h2>
			<div :class="$style.educationItem">
				<h3>Среднее специальное</h3>
				<p>2019 — ГАПОУ РК "Индустриальный колледж"</p>
				<p>Компьютерные системы и комплексы, Инженер</p>
			</div>

			<div :class="$style.certificates">
				<h3>Электронные сертификаты</h3>
				<ul>
					<li>2025 — Development and promotion of WEB project</li>
					<li>2023 — HTML CSS HTML CSS JS</li>
					<li>2022 — "Поколение Python": курс для начинающих</li>
				</ul>
			</div>
		</section>

		<section :class="$style.section">
			<h2 :class="$style.sectionTitle">Навыки</h2>
			<div :class="$style.skillsGrid">
				<div>
					<h3>Языки</h3>
					<p>Русский — Родной</p>
				</div>
				<div>
					<h3>Технологии</h3>
					<div :class="$style.skillsList">
						<span
							v-for="skill in skills"
							:key="skill"
							:class="$style.skillTag"
							>{{ skill }}</span
						>
					</div>
				</div>
			</div>
		</section>

		<section :class="$style.section">
			<h2 :class="$style.sectionTitle">Обо мне</h2>
			<div :class="$style.about">
				<p>Я фронтенд-разработчик и в активном поиске дружной команды!</p>

				<h4>Кратко:</h4>
				<ul>
					<li>
						Опыт в команде (10+ человек): разработка главной страницы ЛК с
						Responsive Design
					</li>
					<li>
						Рабочий стек: Vue3 Composition
						API/Nuxt/TypeScript/SCSS/Git/Kanban+Taiga
					</li>
					<li>Собственные проекты Fullstack (От идеи до релиза)</li>
					<li>
						Знаком с React, Bootstrap, TailwindCSS, Pinia, CI/CD, REST API,
						Linux
					</li>
					<li>
						Автоматизация: браузерные расширения, скрипты для оптимизации
						процессов
					</li>
				</ul>

				<div :class="$style.quote">
					<p>✔ "Хороший код — это код, который легко поддерживать."</p>
					<p>✔ KISS, DRY, SOLID</p>
				</div>
			</div>
		</section>

		<footer :class="$style.footer">
			<p>Резюме обновлено 11 сентября 2025 в 09:30</p>
		</footer>
	</article>
</template>

<script setup>
const skills = [
	'HTML',
	'CSS',
	'HTML5',
	'CSS3',
	'JavaScript',
	'TypeScript',
	'Vue',
	'VueJS',
	'Vue 3',
	'Nuxt',
	'Pinia',
	'React',
	'PHP',
	'Laravel',
	'MySQL',
	'Git',
	'GitHub',
	'Figma',
	'SwiperJS',
	'StoryBook',
	'REST API',
	'Docker',
	'Bash',
	'Tailwind',
	'BEM',
	'Postman',
	'SaaS',
	'MS SQL',
	'CMS Wordpress',
	'phpMyAdmin',
	'Vite',
	'ESLint',
	'Prettier',
	'CI/CD',
	'Linux',
]
</script>

<style module lang="scss">
.resume {
	max-width: 1000px;
	margin: 0 auto;
	padding: 2rem;
	font-family: 'Arial', sans-serif;
	line-height: 1.6;
	color: var(--text);
	// background: var(--primary);
	transition: var(--transition-main);
}

.mainHeaderContainer {
	display: flex;
	flex-direction: row;
}

.meImg {
	width: 200px;
}

.header {
	margin-bottom: 2rem;
	border-bottom: 2px solid var(--border-color);
	padding-bottom: 1rem;
}

.name {
	font-size: 2.5rem;
	margin-bottom: 1rem;
	color: var(--light);
	font-weight: 600;
}

.personalInfo {
	p {
		margin: 0.5rem 0;
		color: var(--text-accent);
	}

	a {
		color: var(--text-second);
		text-decoration: none;
		transition: var(--transition-main);

		&:hover {
			color: var(--light);
			text-decoration: underline;
		}
	}
}

.section {
	margin-bottom: 2.5rem;
}

.sectionTitle {
	font-size: 1.8rem;
	margin-bottom: 1rem;
	color: var(--light);
	border-bottom: 1px solid var(--border-color);
	padding-bottom: 0.5rem;
	font-weight: 600;
}

.desiredPosition {
	h3 {
		font-size: 1.4rem;
		margin-bottom: 0.5rem;
		color: var(--text-second);
		font-weight: 600;
	}

	p {
		margin: 0.3rem 0;
		color: var(--text-accent);
	}
}

.experienceItem {
	margin-bottom: 2rem;
	padding: 1.5rem;
	background: var(--card-bg);
	border-radius: 12px;
	border-left: 4px solid var(--text-second);
	transition: var(--transition-main);

	&:hover {
		transform: translateY(-2px);
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
	}
}

.experienceHeader {
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	margin-bottom: 0.5rem;

	h3 {
		font-size: 1.3rem;
		margin: 0;
		color: var(--light);
		font-weight: 600;
	}
}

.date {
	color: var(--text-accent);
	font-size: 0.9rem;
	white-space: nowrap;
}

.company {
	font-weight: 600;
	color: var(--text-second);
	margin-bottom: 0.5rem;
}

.responsibilities {
	margin: 1rem 0 0 0;
	padding-left: 1.5rem;

	li {
		margin-bottom: 0.5rem;
		color: var(--text);
		position: relative;

		&::before {
			content: '•';
			color: var(--text-second);
			font-weight: bold;
			display: inline-block;
			width: 1em;
			margin-left: -1em;
		}
	}
}

.educationItem,
.certificates {
	margin-bottom: 1.5rem;

	h3 {
		font-size: 1.2rem;
		margin-bottom: 0.5rem;
		color: var(--text-second);
		font-weight: 600;
	}

	p,
	li {
		color: var(--text-accent);
		margin: 0.3rem 0;
	}
}

.skillsGrid {
	display: grid;
	grid-template-columns: 1fr 2fr;
	gap: 2rem;

	h3 {
		font-size: 1.2rem;
		margin-bottom: 0.5rem;
		color: var(--text-second);
		font-weight: 600;
	}
}

.skillsList {
	display: flex;
	flex-wrap: wrap;
	gap: 0.5rem;
}

.skillTag {
	background: var(--skill-bg);
	color: var(--skill-text);
	padding: 0.4rem 1rem;
	border-radius: 20px;
	font-size: 0.9rem;
	font-weight: 500;
	transition: var(--transition-main);
	border: 1px solid var(--border-color);

	&:hover {
		background: var(--text-second);
		color: var(--light);
		transform: translateY(-1px);
	}
}

.about {
	h4 {
		font-size: 1.2rem;
		margin: 1rem 0 0.5rem 0;
		color: var(--text-second);
		font-weight: 600;
	}

	ul {
		margin: 0.5rem 0;
		padding-left: 1.5rem;

		li {
			margin-bottom: 0.5rem;
			color: var(--text);

			&::before {
				content: '•';
				color: var(--text-second);
				font-weight: bold;
				display: inline-block;
				width: 1em;
				margin-left: -1em;
			}
		}
	}
}

.quote {
	margin-top: 1.5rem;
	padding: 1.5rem;
	background: var(--quote-bg);
	border-left: 4px solid var(--text-second);
	border-radius: 8px;

	p {
		margin: 0.5rem 0;
		color: var(--text-second);
		font-style: italic;
		font-weight: 500;
	}
}

.footer {
	margin-top: 2rem;
	padding-top: 1rem;
	border-top: 1px solid var(--border-color);
	text-align: center;
	color: var(--text-accent);
	font-size: 0.9rem;
}

@media (max-width: 768px) {
	.resume {
		padding: 1rem;
	}

	.name {
		font-size: 2rem;
	}

	.experienceHeader {
		flex-direction: column;
		gap: 0.5rem;
	}

	.skillsGrid {
		grid-template-columns: 1fr;
		gap: 1rem;
	}

	.skillsList {
		justify-content: flex-start;
	}

	.sectionTitle {
		font-size: 1.5rem;
	}
}
</style>

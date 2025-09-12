<template>
	<header :class="$style.header">
    		<!-- Навигация -->
		<!-- <nav class="nav">
			<div class="nav-container">
				<div class="nav-logo">Portfolio</div>
				<ul class="nav-links" :class="{ active: isMenuOpen }">
					<li>
						<a href="#home" class="nav-link" @click="closeMenu">Главная</a>
					</li>
					<li>
						<a href="#skills" class="nav-link" @click="closeMenu">Навыки</a>
					</li>
					<li>
						<a href="#projects" class="nav-link" @click="closeMenu">Проекты</a>
					</li>
					<li>
						<a href="#contact" class="nav-link" @click="closeMenu">Контакты</a>
					</li>
				</ul>
				<div class="burger" :class="{ active: isMenuOpen }" @click="toggleMenu">
					<div class="line1"></div>
					<div class="line2"></div>
					<div class="line3"></div>
				</div>
			</div>
		</nav> -->


		<ParticlesBackground />
		<nav :class="$style.navbar">
			<div :class="$style.logo">IgorI</div>
			<ul :class="[$style.navLinks, { [$style.navActive]: isNavActive }]">
        <li>
					<NuxtLink to="/" :class="$style.navLink" @click="closeNav">Главная</NuxtLink>
				</li>
				<li>
					<NuxtLink to="/portfolio" :class="$style.navLink" @click="closeNav">Портфолио</NuxtLink>
				</li>
				<li>
					<NuxtLink href="#skills" :class="$style.navLink" @click="closeNav">Навыки</NuxtLink>
				</li>
				<li>
					<NuxtLink href="#projects" :class="$style.navLink" @click="closeNav"
						>Проекты</NuxtLink
					>
				</li>
				<li>
					<NuxtLink href="#contact" :class="$style.navLink" @click="closeNav"
						>Контакты</NuxtLink
					>
				</li>
			</ul>
			<div
				:class="[$style.burger, { [$style.toggle]: isNavActive }]"
				@click="toggleNav"
			>
				<div :class="$style.line1"></div>
				<div :class="$style.line2"></div>
				<div :class="$style.line3"></div>
			</div>
		</nav>
	</header>
</template>

<script setup>
const isNavActive = ref(false)

const toggleNav = () => {
	isNavActive.value = !isNavActive.value
}

const closeNav = () => {
	isNavActive.value = false
}

// Функция переключения меню
const toggleMenu = () => {
	isMenuOpen.value = !isMenuOpen.value
}

// Функция закрытия меню
const closeMenu = () => {
	isMenuOpen.value = false
}

// Закрытие меню при изменении размера окна
const handleResize = () => {
	if (window.innerWidth > 768) {
		closeMenu()
	}
}

// Добавляем обработчик события изменения размера окна
onMounted(() => {
	window.addEventListener('resize', handleResize)
})

// Убираем обработчик при размонтировании компонента
onUnmounted(() => {
	window.removeEventListener('resize', handleResize)
})
</script>

<style lang="scss" module>
.header {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	padding: 1.5rem 5%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	z-index: 100;
	background: #1a2334;
	background: linear-gradient(
		186deg,
		rgba(26, 35, 52, 1) 0%,
		rgba(24, 31, 47, 1) 50%,
		rgba(17, 23, 35, 1) 100%
	);
	backdrop-filter: blur(10px);
	color: var(--text-second);
}

.navbar {
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
}

.logo {
	font-size: 1.8rem;
	font-weight: 700;
	color: var(--text-second);
	position: relative;

	&:hover {
		color: var(--light);
		transition: var(--transition-main);
	}
	&::after {
		content: attr(data-text);
		position: absolute;
		top: 0;
		left: 0;
		color: var(--accent);
		width: 0;
		overflow: hidden;
		transition: 0.5s;
	}

	&:hover::after {
		width: 100%;
	}
}

.navLinks {
	display: flex;
	list-style: none;
	margin: 0;
	padding: 0;

	// Стили для мобильной версии
	@media (max-width: 768px) {
		position: absolute;
		right: 0;
		height: 92vh;
		top: 8vh;
		background: #1a2334;
		background: linear-gradient(
			186deg,
			rgba(26, 35, 52, 0.95) 0%,
			rgba(24, 31, 47, 0.95) 50%,
			rgba(17, 23, 35, 0.95) 100%
		);
		backdrop-filter: blur(15px);
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		transform: translateX(100%);
		transition: transform 0.5s ease-in;
		z-index: 1000;
	}
}

// Класс для активного состояния меню
.navActive {
	@media (max-width: 768px) {
		transform: translateX(0%);
	}
}

.navLink {
	margin-left: 2.5rem;
	text-decoration: none;
	color: var(--text-second);
	font-weight: 500;
	position: relative;
	transition: var(--transition-main);

	// Стили для мобильной версии
	@media (max-width: 768px) {
		margin: 2rem 0;
		font-size: 1.2rem;
	}

	&::after {
		content: '';
		position: absolute;
		bottom: -5px;
		left: 0;
		width: 0;
		height: 2px;
		background-color: var(--light);
		transition: width 0.3s;
	}

	&:hover {
		color: var(--light);

		&::after {
			width: 100%;
		}
	}
}

.burger {
	display: none;
	cursor: pointer;
	z-index: 1001;

	// Показываем бургер только на мобильных
	@media (max-width: 768px) {
		display: block;
	}

	div {
		width: 25px;
		height: 3px;
		background-color: var(--text-second);
		margin: 5px;
		transition: all 0.3s ease;
	}
}

// Стили для анимации бургера при клике
.toggle {
	.line1 {
		transform: rotate(-45deg) translate(-5px, 6px);
	}

	.line2 {
		opacity: 0;
	}

	.line3 {
		transform: rotate(45deg) translate(-5px, -6px);
	}
}

/* бургер */
// .nav {
// 	position: relative;
// 	z-index: 2;
// }
</style>

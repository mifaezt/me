<template>
	<div>
		<div class="cursor"></div>
		 <ParticlesBackground />
		<!-- Навигация -->
		<nav class="nav">
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
		</nav>
		
	

		<section id="home" class="hero">

			<div class="hero-content">
				<h1>Добро пожаловать в мое портфолио</h1>
				<p>Здесь вы найдете информацию о моих навыках и проектах</p>
			</div>
		</section>

		<!-- Добавлены дополнительные секции для навигации -->
		<section id="skills" class="section">
			<h2>Навыки</h2>
			<p>Мои профессиональные навыки и умения</p>
		</section>

		<section id="projects" class="section">
			<h2>Проекты</h2>
			<p>Примеры моих работ</p>
		</section>

		<section id="contact" class="section">
			<h2>Контакты</h2>
			<p>Свяжитесь со мной</p>
		</section>
	</div>
</template>

<script setup>


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

<style>
/* Добавьте стили для позиционирования частиц */
/* #tsparticles {
	position: absolute;
	width: 100%;
	height: 100vh;
	top: 0;
	left: 0;
	z-index: 0;
} */

.hero {
	position: relative;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: black;
}

.hero-content {
	position: relative;
	z-index: 1;
	text-align: center;
	/* color: white; */
}

/* Остальные ваши стили */
.nav {
	position: relative;
	z-index: 2;
}
</style>
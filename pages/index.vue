<template>
	<div>
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

		<h1 :class="$style['js-text-cont']">{{ displayedText }}</h1>
	</div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const displayedText = ref('')
const text = 'Welcome in my site'
let p = 0

function printSmbl() {
	const timeout = Math.round(Math.random() * 100)
	displayedText.value += text[p]
	p++
	if (p < text.length) {
		setTimeout(printSmbl, timeout)
	}
}

onMounted(() => {
	setTimeout(printSmbl, 100)
})
</script>

<style lang="scss" module>
.js-text-cont {
	// Ваши стили для контейнера с текстом
	min-height: 1.5em; // Чтобы сохранялось место для текста
	margin: 20px 0;
	padding: 10px;
	border: 1px solid #ccc;
	// background-color: #f9f9f9;
}
</style>

<template>
	<!-- Репозиторий tsParticles: https://github.com/matteobruni/tsparticles -->
	<!-- Сайт tsParticles: https://particles.js.org -->
	<Particles
		id="tsparticles"
		:options="options"
		:particlesInit="particlesInit"
	/>
</template>

<script lang="ts" setup>
import type { Engine } from 'tsparticles-engine'
import { loadSlim } from 'tsparticles-slim' // ⚠️ ДОБАВЬТЕ ЭТОТ ИМПОРТ
import { ref } from 'vue'

// использование пустого объекта options загрузит параметры по умолчанию: статичные частицы без фона, радиусом 3px, непрозрачностью 100%, белого цвета
// все параметры можно найти здесь: https://particles.js.org/docs/interfaces/Options_Interfaces_IOptions.IOptions.html
const options = ref({
	background: {
		color: 'tranparent', // устанавливает цвет фона для canvas
	},
	fullScreen: {
		enable: true, // включение этого параметра заставит canvas заполнить весь экран, по умолчанию включено
		zIndex: -1, // это значение z-index, используемое когда fullScreen включен, по умолчанию 0
	},
	interactivity: {
		events: {
			onClick: {
				enable: true, // включает событие клика, по умолчанию отключено
				mode: 'push', // добавляет частицы при клике
			},
			onHover: {
				enable: true, // включает событие наведения курсора, по умолчанию отключено
				mode: 'repulse', // отталкивает частицы при наведении курсора
			},
		},
		modes: {
			push: {
				quantity: 1, // количество частиц для добавления при клике
			},
			repulse: {
				distance: 50, // расстояние частиц от курсора
			},
		},
	},
	particles: {
		links: {
			color: '#ffffff', // цвет соединительных линий
			opacity: 0.1, // прозрачность линий (0 - полностью прозрачные, 1 - полностью непрозрачные)
			width: 0.5, // толщина линий в пикселях
			distance: 100, // максимальное расстояние между частицами для соединения линиями
			enable: true, // включение/выключение линий между частицами
			consent: false, // требуется ли "согласие" частиц на соединение (если true - линии появляются только при определенных условиях)
			blink: false, // мигание линий (если true - линии будут появляться и исчезать)
			frequency: 0.5, // частота мигания/обновления линий (чем выше значение, тем чаще)
		},
		move: {
			enable: true, // включение этого параметра заставит частицы двигаться на canvas
			speed: { min: 0.5, max: 1 }, // использование диапазона скорости заставит частицы двигаться со случайной скоростью между min/max значениями, каждая частица имеет свое значение, которое по умолчанию не меняется со временем
		},
		number: {
			value: 25,
		},
		opacity: {
			value: { min: 0.1, max: 0.7 }, // использование различной непрозрачности для создания полупрозрачных эффектов
		},
		size: {
			value: { min: 0.7, max: 1.5 }, // рандомизация размера частиц
		},
	},
})

// ФУНКЦИЮ ИНИЦИАЛИЗАЦИИ
async function particlesInit(engine: Engine) {
	await loadSlim(engine)
	// await loadFull(engine); // для этого примера достаточно slim версии, выбирайте что предпочитаете, slim меньше по размеру, но не имеет всех плагинов и функции следа мыши
}
</script>

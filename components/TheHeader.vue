<template>

	<header :class="$style.header">
		<nav :class="$style.navbar">
			<div :class="$style.logo" data-text="Portfolio">Ilin Igor</div>
			<ul :class="$style.navLinks">
				<li><a href="#home" :class="$style.navLink">Главная</a></li>
				<li><a href="#skills" :class="$style.navLink">Навыки</a></li>
				<li><a href="#projects" :class="$style.navLink">Проекты</a></li>
				<li><a href="#contact" :class="$style.navLink">Контакты</a></li>
			</ul>
			<div :class="$style.burger">
				<div :class="$style.line1"></div>
				<div :class="$style.line2"></div>
				<div :class="$style.line3"></div>
			</div>
		</nav>
	</header>

</template>

<script>

</script>



<style lang="sass" module>

.header
  position: fixed
  top: 0
  left: 0
  width: 100%
  padding: 1.5rem 5%
  display: flex
  justify-content: space-between
  align-items: center
  z-index: 100
  background-color: rgba(245, 246, 250, 0.9)
  backdrop-filter: blur(10px)

.navbar
  display: flex
  justify-content: space-between
  align-items: center
  width: 100%

.logo
  font-size: 1.8rem
  font-weight: 700
  color: var(--primary)
  position: relative

.logo::after
  content: attr(data-text)
  position: absolute
  top: 0
  left: 0
  color: var(--accent)
  width: 0
  overflow: hidden
  transition: 0.5s

.logo:hover::after
  width: 100%

.navLinks
  display: flex
  list-style: none
  margin: 0
  padding: 0

.navLink
  margin-left: 2.5rem
  text-decoration: none
  color: var(--dark)
  font-weight: 500
  position: relative
  transition: color 0.3s

.navLink::after
  content: ''
  position: absolute
  bottom: -5px
  left: 0
  width: 0
  height: 2px
  background-color: var(--primary)
  transition: width 0.3s

.navLink:hover
  color: var(--primary)

.navLink:hover::after
  width: 100%

.burger
  display: none
  cursor: pointer

.burger div
  width: 25px
  height: 3px
  background-color: var(--dark)
  margin: 5px
  transition: all 0.3s ease
</style>

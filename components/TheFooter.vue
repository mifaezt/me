<template>
	<footer :class="$style.footer">
		<p>&copy; 2023 Frontend Developer Portfolio</p>
	</footer>
</template>

<style lang="sass" module>
.footer
  text-align: center
  padding: 2rem
  background-color: #333
  color: white

@keyframes float
  0%, 100%
    transform: translateY(0)
  50%
    transform: translateY(-20px)
</style>

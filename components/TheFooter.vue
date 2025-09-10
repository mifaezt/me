<template>
	<footer :class="$style.footer">
		<p>My Frontend Developer Portfolio</p>
	</footer>
</template>

<style lang="scss" module>
.footer {
	text-align: center;
	padding: 2rem;
	background: #1a2334;
	background: linear-gradient(
		136deg,
		rgba(26, 35, 52, 1) 0%,
		rgba(24, 31, 47, 1) 50%,
		rgba(17, 23, 35, 1) 100%
	);
	// color: white;
}

@keyframes float {
	0%,
	100% {
		transform: translateY(0);
	}
	50% {
		transform: translateY(-20px);
	}
}
</style>

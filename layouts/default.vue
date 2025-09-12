<template>
	<div class="container"></div>
	<TheHeader />

	<main>
		<slot></slot>
	</main>
	<footer>
		<TheFooter />
	</footer>
</template>
<style>
body {
	margin-top: 80px;
	margin-bottom: 80px;
}

</style>

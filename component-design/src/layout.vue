<template>
	<html>
		<body>
			<div id="app">
				<header>
					<button></button>
					<portal to="modal">
						<AlertModal></AlertModal>
					</portal>
					<div id="modal"></div>
				</header>
				<main></main>
				<footer></footer>
			</div>

			<portal-target>
				<div id="modal"></div>
			</portal-target>
		</body>
	</html>
</template>

<script>
export default {};
</script>

<style></style>

<template>
	<div>
		<button
			:type="buttonType"
			class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
		>
			<slot></slot>
			{{ buttonText }}
		</button>
	</div>
</template>

<script>
export default {
	props: {
		buttonType: { type: String, default: 'button' },
		buttonText: String,
	},
};
</script>

<style></style>

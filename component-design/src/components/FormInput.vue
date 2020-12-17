<template>
	<div>
		<label for="email-address" class="sr-only">{{ inputLabel }}</label>
		<input
			:id="inputId"
			:type="inputType"
			:autocomplete="inputAutoComplete"
			required
			class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
			:placeholder="inputLabel"
			@input="inputText"
			:value="value"
		/>
	</div>
</template>

<script>
export default {
	props: {
		value: String,
		inputId: String,
		inputLabel: String,
		inputType: String,
		inputAutoComplete: String,
		// inputPlaceHolder: String,
	},

	methods: {
		inputText() {
			const value = event.target.value;
			const koreanRegex = /a-zA-/;
			if (koreanRegex.text(value)) {
				this.$emit('invalid:korean');
				return;
			}
			this.$emit('input', event.target.value);
		},
	},
};
</script>

<style></style>

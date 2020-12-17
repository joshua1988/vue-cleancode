<template>
	<div
		class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
	>
		<div class="max-w-md w-full space-y-8">
			<div>
				<img
					class="mx-auto h-12 w-auto"
					src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
					alt="Workflow"
				/>
				<h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
					Sign in to your account
				</h2>
				<p class="mt-2 text-center text-sm text-gray-600">
					Or
					<a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
						start your 14-day free trial
					</a>
				</p>
			</div>

			<div>computed: {{ doubleStr }}</div>
			<div>methods: {{ ddoubleStr() }}</div>

			<form class="mt-8 space-y-6" @submit.prevent="submitForm">
				<input type="hidden" name="remember" value="true" />
				<div class="rounded-md shadow-sm -space-y-px">
					<!-- NOTE: v-model 문법 -->
					<!-- <input type="text" v-model="str" /> -->
					<!-- NOTE: v-model 내부 구조 -->
					<!-- <input type="text" :value="str" @input="inputStr" /> -->
					<FormInput
						v-model="email"
						inputId="email-address"
						inputAutoComplete="email"
						inputType="email"
						inputLabel="Email address"
						validation="korean"
						@invalid="isEmailInvalid"
					></FormInput>
					<!-- <div>
						<label for="email-address" class="sr-only">Email address</label>
						<input
							id="email-address"
							type="email"
							autocomplete="email"
							required
							class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
							placeholder="Email address"
						/>
					</div> -->
					<FormInput v-model="password"></FormInput>
					<!-- <div>
						<label for="password" class="sr-only">Password</label>
						<input
							id="password"
							type="password"
							autocomplete="current-password"
							required
							class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
							placeholder="Password"
						/>
					</div> -->
				</div>

				<div class="flex items-center justify-between">
					<div class="flex items-center">
						<input
							v-model="remembered"
							id="remember_me"
							name="remember_me"
							type="checkbox"
							class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
						/>
						<label for="remember_me" class="ml-2 block text-sm text-gray-900">
							Remember me
						</label>
					</div>

					<div class="text-sm">
						<a
							@click="$router.push('/dropdown')"
							class="font-medium text-indigo-600 hover:text-indigo-500"
						>
							Forgot your password?
						</a>
					</div>
				</div>

				<BasicButton buttonType="submit">
					<span class="absolute left-0 inset-y-0 flex items-center pl-3">
						<!-- Heroicon name: lock-closed -->
						<svg
							class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
						>
							<path
								fill-rule="evenodd"
								d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
								clip-rule="evenodd"
							/>
						</svg>
					</span>
				</BasicButton>
			</form>
		</div>
	</div>
</template>

<script>
import BasicButton from '../components/BasicButton.vue';
import FormInput from '../components/FormInput.vue';

export default {
	components: { FormInput, BasicButton },

	data() {
		return {
			str: 100,
			email: '',
			password: '',
		};
	},

	computed: {
		isFormValid() {
			return this.email.length > 0 && this.password.length > 6;
		},
		doubleStr() {
			return this.str * 2;
		},
	},

	methods: {
		inputStr() {
			this.str = event.target.value;
		},
		ddoubleStr() {
			return this.str * 2;
		},
		async submitForm() {
			try {
				// NOTE: validation 조건을 computed로 활용해보세요...
				if (!this.isFormValid) {
					return;
				}
				await createUser();
				this.$router.push('/home');
			} catch (error) {
				alert(error);
			}
		},
	},
};
</script>

<style></style>

<template>
  <div
    class="min-h-screen flex items-center justify-center bg-gray-50 px-4 sm:px-6 lg:px-8"
  >
    <button
      type="button"
      class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      @click="isModalOpen = !isModalOpen"
    >
      Open
    </button>

    <AlertModal v-if="isModalOpen"></AlertModal>
  </div>
</template>

<script>
import AlertModal from "@/components/AlertModal.vue";

export default {
  components: { AlertModal },

  data() {
    return {
      isModalOpen: false
    };
  }
};
</script>

<style></style>

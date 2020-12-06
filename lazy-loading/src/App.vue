<template>
  <div>
    <h1>성능 최적화</h1>
    <main>
      <ul>
        <li v-for="image in images" :key="image.key">
          <img
            ref="randomPhotos"
            class="lazy"
            src="./images/thumbnail.png"
            :data-src="image.src.small"
            :data-srcset="image.src.small"
            :alt="image.photographer"
          />
        </li>
      </ul>
    </main>
  </div>
</template>

<script>
import { fetchImagesBySearchKeywords } from "./api";

export default {
  data() {
    return {
      images: []
    };
  },

  methods: {
    async fetchData() {
      const { data } = await fetchImagesBySearchKeywords("dogs");
      this.images = data.photos;
    },
    setupLazyLoading() {
      const lazyImageObserver = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              let lazyImage = entry.target;
              lazyImage.src = lazyImage.dataset.src;
              lazyImage.srcset = lazyImage.dataset.srcset;
              lazyImage.classList.remove("lazy");
              lazyImageObserver.unobserve(lazyImage);
            }
          });
        },
        { rootMargin: "20%" }
      );
      this.$refs.randomPhotos.forEach(imageElement => {
        lazyImageObserver.observe(imageElement);
      });
    }
  },

  created() {
    this.fetchData();
  },

  updated() {
    this.setupLazyLoading();
  }
};
</script>

<style></style>

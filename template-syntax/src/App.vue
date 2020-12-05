<template>
  <div>
    <h1>Vue.js 템플릿 문법 리뷰</h1>
    <nav>
      <router-link class="links" to="/computed">computed 속성</router-link>
      <router-link class="links" to="/watch">watch 속성</router-link>
      <router-link class="links" to="/form">Form 다루기</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style>
.links {
  margin-right: 10px;
}
</style>

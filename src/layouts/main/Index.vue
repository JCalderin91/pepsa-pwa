<template>
  <div id="main">
    <navbar />
    <div class="body">
      <router-view />
    </div>
    <div class="decoration"></div>
  </div>
</template>

<script>
export default {
  components: {
    navbar: () => import("./partials/Navbar"),
    endPage: () => import("./partials/EndPage"),
  },
};
</script>

<style lang="scss" scoped>
#main {
  min-height: 100vh;
  padding-bottom: 2rem;
  display: grid;
  grid-template-rows: 80px 1fr 15px;
  .body{
    background-color: var(--primary);
    color: white;
    padding-top: .5rem;
  }
  .decoration{
    background-color: var(--secondary);
  }
}
</style>
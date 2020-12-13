<template>
  <div id="main">
    <navbar />
    <div class="body">
      <router-view />
    </div>
    <div class="footer">
      <div class="container footer-wrapper">
        <span>Pepsa 2020</span>
        <c-icon size="23" color="#fff" icon="alert-circle" />
      </div>
    </div>
    <div class="decoration"></div>
  </div>
</template>

<script>
export default {
  components: {
    navbar: () => import("./partials/Navbar"),
    endPage: () => import("./partials/EndPage"),
    CIcon: () => import("../../components/CIcon.vue"),
  },
};
</script>

<style lang="scss" scoped>
#main {
  min-height: 100vh;
  display: grid;
  grid-template-rows: 80px calc(100vh - 140px) 45px 15px;
  .body{
    background-color: var(--primary);
    color: white;
    padding-top: .5rem;
  }
  .footer{
    background-color: var(--primary);
    .footer-wrapper{
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      span{
        text-transform: uppercase;
        color: white;
      }
    }
  }
  .decoration{
    background-color: var(--secondary);
  }
}
</style>
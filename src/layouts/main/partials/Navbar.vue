<template>
  <header class="header">
    <div class="navbar-content container">
      <div class="logo-header">
        <img src="@/assets/images/isotipo.svg" height="48" alt="">
        <div class="logo-text">
          <div class="logo-title">Pepsa</div>
          <div class="logo-subtitle">Sistema de prestamos</div>
        </div>
      </div>

      <div class="exit">
        <router-link :to="{name:'login'}">Salir</router-link>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "navbar",
  computed: {
    isMenu() {
      return this.$route.name === "dashboard";
    },
  },
};
</script>

<style lang="scss" scoped>

.navbar-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  .logo-header{
    display: flex;
    align-items: center;
    .logo-text{
      margin-left: .5rem;
      .logo-title{
        text-transform: uppercase;
        font-weight: bold;
      }
      .logo-subtitle{
        text-transform: uppercase;
        font-weight: bold;
        font-size: .7rem;
      }
    }
  }
}
</style>
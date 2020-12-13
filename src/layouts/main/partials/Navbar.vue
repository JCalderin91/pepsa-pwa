<template>
  <header class="header">
    <div class="navbar-content container">
      <div class="logo-header">
        <img
          v-if="$route.name == 'dashboard'"
          src="@/assets/images/isotipo.svg"
          height="48"
          alt=""
        />
        <router-link :to="{ name: 'dashboard' }" class="arrow-back" v-else>
          <c-icon icon="arrow" />
        </router-link>
        <div class="logo-text">
          <div class="logo-title">{{ $route.meta.title }}</div>
          <div class="logo-subtitle">Sistema de prestamos</div>
        </div>
      </div>

      <div class="exit">
        <router-link :to="{ name: 'login' }">
          <c-icon icon="log-out" />
        </router-link>
      </div>
    </div>
  </header>
</template>

<script>
import CIcon from "../../../components/CIcon.vue";
export default {
  components: { CIcon },
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
  .arrow-back{
    width: 48px;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .logo-header {
    display: flex;
    align-items: center;
    .logo-text {
      margin-left: 0.5rem;
      .logo-title {
        text-transform: uppercase;
        font-weight: bold;
      }
      .logo-subtitle {
        text-transform: uppercase;
        font-weight: bold;
        font-size: 0.7rem;
      }
    }
  }
}
</style>
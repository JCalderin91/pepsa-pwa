<template>
  <div class="login">
    <nav>Sistema de prestamos</nav>
    <div class="body">
      <!-- <img src="@/assets/images/isotipo.svg" alt="" class="watter-mark"> -->
      <img src="@/assets/images/isotipo.svg" alt="logo pepsa" height="80" />
      <h1 class="title">Pepsa</h1>
      <br>
      <br>
      <div class="welcome-text">Inicio de sesión</div>
      <c-input-text placeholder="Usuario" ></c-input-text>
      <c-input-text placeholder="Contraseña" ></c-input-text>
      <div class="forgot">Olvide la contraseña</div>
      <br>
      <c-button :to="{name:'dashboard'}" color="primary">Entrar</c-button>
    </div>
    <footer></footer>
  </div>
</template>

<script>
import CButton from '../../../components/CButton.vue';
import CInputText from '../../../components/CInputText.vue';
export default {
  components: { CButton, CInputText },};
</script>

<style lang="scss" scoped>
.login {
  min-height: 100vh;
  position: relative;
  display: grid;
  grid-template-rows: 48px 1fr 15px;
  nav {
    background-color: var(--primary);
    color: white;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    position: relative;
    // .watter-mark{
    //   position: absolute;
    //   top: 50%;
    //   left: 50%;
    //   transform: translate(-50%,-50%);
    //   z-index: -1;
    //   width: 95%;
    //   opacity: .1;
    // }
    .title{
      text-transform: uppercase;
      font-size: 1.5rem;
      font-weight: bold;
    }
    .welcome-text{
      font-weight: bold;
      font-size: 1.2rem;
    }
    .forgot{
      color: rgb(165, 165, 165);
      font-size: .9rem;
    }
  }
  footer {
    background-color: var(--secondary);
  }
}
</style>
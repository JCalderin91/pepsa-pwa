<template>
  <div id="error-404">
    <!-- <img class="image-404" src="@/assets/image/404.jpg" /> -->
    <h3
      class="error-message"
    >Lo sentimos, pero la página que busca no se encuentra. Por favor, asegúrese de haber escrito la URL correcta</h3>
    <v-btn @click="$router.go(-1)" class="btn-back" elevation="8" color="primary">Volver</v-btn>
  </div>
</template>

<style lang="scss" scoped>
#error-404 {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  padding: 0 2rem;
  .image-404 {
    width: 400px;
    margin-bottom: 1.5rem;
  }
  .btn-back {
    margin-top: 2rem;
  }
}
</style>

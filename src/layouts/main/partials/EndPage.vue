<template>
  <div class="footer">
    <p>Sistema de Gestión de Administración FerreGil</p>
    <p>05:23 p.m. 02/09/2020</p>
  </div>
</template>

<script>
export default {
  name: "end-page",
};
</script>

<style lang="scss" scoped>
.footer {
  background: #0f1b3d;
  color: white;
  padding: 0.5rem 1rem !important;
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  p {
    margin: 0;
    font-size: 0.7rem;
    opacity: 0.7;
  }
}
</style>
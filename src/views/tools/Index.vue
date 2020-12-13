<template>
  <div class="tools container">
    <c-input-text placeholder="Buscar herramienta" />
    <div class="tool-group">
      <div class="tool-item" v-for="i in  8" :key="i">
        <div class="tool-image">
          <img src="@/assets/images/drill.png" alt="" />
        </div>
        <div class="tool-text">
          <div class="title">Taladro broca de acero</div>
          <div class="branch-model">
            <span>Truper</span>
            <div class="separator">|</div>
            <span>taladors</span>
          </div>
          <div class="code">S10215478</div>
          <div class="status active">Disponible</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CInputText from "../../components/CInputText.vue";
export default {
  components: { CInputText },
};
</script>

<style lang="scss" scoped>
.tools{
    }
.tool-group {
    max-height: calc(100vh - 225px);
    overflow: scroll;
  .tool-item {
    display: grid;
    grid-template-columns: 30% 1fr;
    gap: 1rem;
    background-color: #fff;
    border-radius: 0.8rem;
    height: 100px;
    color: rgb(155, 155, 155);
    padding: 1rem;
    position: relative;
    margin-bottom: 1rem;
    .tool-image {
        height: 100%;
        display: flex;
        align-items: center;
        border-right: 1px solid rgb(209, 209, 209);
        padding: 0 .5rem;
        img{
          max-height: 100%;
          max-width: 100%;
      }
    }
    .tool-text {
      padding-left: 0.5rem;
      .title {
        color: var(--primary);
        font-weight: bold;
        font-size: 1.3rem;
      }
      .branch-model {
        display: flex;
        margin-bottom: 0.2rem;
        .separator {
          margin: 0 0.2rem;
        }
      }
      .status {
        position: absolute;
        bottom: 1rem;
        right: 1rem;
        &::before {
          position: absolute;
          content: "";
          height: 10px;
          width: 10px;
          border-radius: 50%;
          background-color: #29d400;
          display: block;
          left: -1rem;
          top: 50%;
          transform: translateY(-50%);
        }
      }
    }
  }
}
</style>
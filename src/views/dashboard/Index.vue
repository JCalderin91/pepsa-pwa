<template>
    <div class="container">
        <h2 class="hi">Hola, Juan David</h2>
        <p>Bienvenido a la plataforma de préstamos</p>
        <c-input-text placeholder="Buscar"/>
        <div class="menu-group">
            <router-link :to="{name:'tools'}" class="menu-item">
                <img src="@/assets/images/listar-herramientas.svg" alt="" class="image">
                <h4 class="title">Listar herramientas</h4>
            </router-link >
            <router-link :to="{name:'scanner'}" class="menu-item">
                <img src="@/assets/images/listar-pedidos.svg" alt="" class="image">
                <h4 class="title">Listar herramientas</h4>
            </router-link >
            <router-link :to="{name:'scanner'}" class="menu-item">
                <img src="@/assets/images/escaner-codigo.svg" alt="" class="image">
                <h4 class="title">Listar herramientas</h4>
            </router-link >
            <router-link :to="{name:'scanner'}" class="menu-item">
                <img src="@/assets/images/agregar-herramienta.svg" alt="" class="image">
                <h4 class="title">Listar herramientas</h4>
            </router-link>
        </div>
    </div>
</template>

<script>
import CInputText from '../../components/CInputText.vue'
    export default {
  components: { CInputText },
        
    }
</script>

<style lang="scss" scoped>
.hi{
    margin: .2rem 0;
}
p{
    margin: .5rem 0;
}
.menu-group{
    display: grid;
    grid-template: 180px 180px / 1fr 1fr;
    gap: .5rem;
    height: calc(100vh - 275px);
    overflow: scroll;
    .menu-item{
        background-image: url('~@/assets/images/mascara.svg');
        background-position: 100% 0;
        background-size: 50%;
        background-color: #fff;
        background-repeat: no-repeat;
        padding: 1.5rem 1.5rem;
        border-radius: 0.8rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        text-decoration: none;
        .image{
            height: 75px;
        }
        .title{
            color: var(--primary);
            font-weight: bold;
            font-size: 1.3rem;
            margin: 0;
        }
    }
}
</style>
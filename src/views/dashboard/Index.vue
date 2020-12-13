<template>
    <div class="container">
        <h2 class="hi">Hola, Juan David</h2>
        <p>Bienvenido a la plataforma de préstamos</p>
        <c-input-text placeholder="Buscar"/>
        <router-link :to="{name:'scanner'}">Escanear</router-link>
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
</style>
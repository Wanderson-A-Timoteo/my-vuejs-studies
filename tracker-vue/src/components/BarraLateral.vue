<template>
  <header class="menu">
    <h1 class="is-flex is-align-items-center is-justify-content-center">
      <img src="../assets/timed-tasks.png" alt="Logo Alura Tracker">
    </h1>
    <button class="button" @click="alterarTema">
      {{ textoBotao }}
    </button>
  </header>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'BarraLateral',
    emits: ['aoTemaAlterado'],
    data () {
      return {
        modoEscuroAtivo: false
      }
    },
    computed: {
      textoBotao () {
        if (this.modoEscuroAtivo) {
          return 'Desativar modo escuro'
        }
        return 'Ativar modo escuro'
      }
    },
    methods: {
      alterarTema() : void {
        this.modoEscuroAtivo = !this.modoEscuroAtivo;
        this.$emit('aoTemaAlterado', this.modoEscuroAtivo)
      }
    }
  })
</script>

<style scoped>
  header {
    background: #1f1f25;
    width: 100%;
    height: 100vh;
    padding: 1rem;
    text-align: center;
  }
  .button {
    margin-top: 1rem;
  }
  @media only screen and (max-width: 768px) {
    header {
      padding: 2.5rem;
      height: auto;
    }
  }
</style>
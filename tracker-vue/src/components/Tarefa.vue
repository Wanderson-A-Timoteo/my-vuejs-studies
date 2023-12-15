<template>
  <div class="box has-text-weight-bold">
    <di class="columns">
      <div class="column is-7">
        Descrição da tarefa
      </div>
      <div class="column">
        <Cronometro tempoEmSegundos=15 />
      </div>
    </di>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
import Cronometro from './Cronometro.vue';
  
  export default defineComponent({
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Tarefa',
    components: { 
      Cronometro 
    }
  });
</script>

<style scoped>
  .lista {
    padding: 1.25rem;
  }
</style>

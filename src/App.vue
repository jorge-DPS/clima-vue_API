<script setup>

import Form from './components/Form.vue';
import useClima from './composables/useClima.js';

const { getClima } = useClima();

console.log();


</script>

<template>
  <h1 class="titulo">Buscador de Clima</h1>
  <div class="contenedor buscador-clima">
    <Form 
      @get-clima="getClima"
    />
  </div>

</template>

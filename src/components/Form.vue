<script setup>
import { reactive, ref } from 'vue';
import Alert from './Alert.vue';

const paises = [
  { codigo: "US", nombre: "Estados Unidos" },
  { codigo: "MX", nombre: "México" },
  { codigo: "AR", nombre: "Argentina" },
  { codigo: "CO", nombre: "Colombia" },
  { codigo: "CR", nombre: "Costa Rica" },
  { codigo: "ES", nombre: "España" },
  { codigo: "PE", nombre: "Perú" }
]

const find = reactive({
  ciudad:'',
  pais:''
})

const error = ref('')

const emit = defineEmits(['get-clima'])

const consultarClima = () => {
  if(Object.values(find).includes('')) {
    error.value = 'Todos los campos son obligatorios'
    return
  }
  error.value = ''
  emit('get-clima', find)
}
</script>

<template>
  <form 
    class="formulario"
    @submit.prevent="consultarClima"
  >

    <Alert v-if="error">
      {{ error }}
    </Alert>
    
    <div class="campo">
      <label for="ciudad">Ciudad</label>
      <input 
        type="text" 
        id="ciudad" 
        placeholder="Ciudad" 
        v-model="find.ciudad"
        />
    </div>

    <div class="campo">
      <label for="pais">País</label>
      <select 
        id="pais"
        v-model="find.pais"
      >
        <option value="" disabled selected>-- Seleccione un país --</option>
        <option class="option" v-for="pais in paises" :key="pais.codigo" :value="pais.codigo">{{ pais.nombre }}</option>
      </select>
    </div>

    <input class="submit" type="submit" value="Consultar">



  </form>
</template>

<style scoped></style>

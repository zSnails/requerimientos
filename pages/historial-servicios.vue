<template>
  <div class="flex flex-row h-screen space-x-[15px] justify-center m-[35px]">
    <UCard class="bg-static basis-1/4 flex flex-col justify-between items-center">
      <template #header>
        <center>
          <font size="6rem">
            <h1><b>Historial de Servicios</b></h1>
          </font>
        </center>
        <UInput v-model="filtroEstilista" variant="none" class="mb-[20px] bg-static rounded-lg shadow-lg"
                 placeholder="Estilista..." />
      </template>
      <DatePicker class="mt-[20px]" @update:model-value="onDateChange"></DatePicker>
      <template #footer>
        <center>
          <font size="30px">
            <b></b>
          </font>
        </center>
      </template>
    </UCard>
    <div class="flex flex-col basis-1/2 space-y-[15px]">
      <div class="max-h-[750px] overflow-auto">
        <template v-for="(serviciosPorFecha, fecha) in serviciosAgrupados" :key="fecha">
          <h2 class="text-xl mt-4">{{ fecha }}</h2>
          <div v-for="servicio in serviciosPorFecha" :key="servicio.id" class="text-left">
            <UCard class="bg-static mb-[10px]">
              <div class="flex flex-col h-full w-full space-y-[20px]">
                <div class="flex flex-row h-full w-full">
                  <UAvatar size="xl" :src="servicio.imagen"></UAvatar>
                  <span class="grow"></span>
                  <div class="flex flex-col items-end h-full">
                    <font size="6px">
                      <b>
                        <h1>{{ servicio.nombreServicio }}</h1>
                      </b>
                    </font>
                    <font size="0.3rem">
                      <p>{{ servicio.descripcion }}</p>
                    </font>
                  </div>
                </div>
                <div class="flex flex-row items-center space-x-[5px]">
                  <UIcon name="i-heroicons-user" />
                  <font size="0.03rem">
                    {{ servicio.nombreEstilista }}
                  </font>
                </div>
                <div class="flex flex-row items-center space-x-[5px]">
                  <UIcon name="i-heroicons-currency-dollar" />
                  <font size="0.03rem">
                    {{ servicio.precio }}
                  </font>
                </div>
              </div>
            </UCard>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

let servicios = ref([
  {
    id: 1,
    fecha: '21/03/2024',
    nombreEstilista: 'Juan Pérez',
    nombreServicio: 'Corte de pelo',
    descripcion: 'Corte de pelo estándar',
    precio: 50,
    imagen: '/img/100x100.svg',
  },
  {
    id: 2,
    fecha: '22/03/2024', 
    nombreEstilista: 'Carlos',
    nombreServicio: 'Manicura',
    descripcion: 'Manicura completa',
    precio: 30,
    imagen: '/img/100x100.svg',
  },
  {
    id: 3,
    fecha: '22/03/2024', 
    nombreEstilista: 'Carlos',
    nombreServicio: 'Corte de Pelo',
    descripcion: 'Corte',
    precio: 50,
    imagen: '/img/100x100.svg',
  },
  {
    id: 4,
    fecha: '21/03/2024', 
    nombreEstilista: 'Carlos',
    nombreServicio: 'Corte de Pelo',
    descripcion: 'Corte',
    precio: 50,
    imagen: '/img/100x100.svg',
  },
]);

let filtroEstilista = ref('');
let selectedDate = ref('');

const onDateChange = (date) => {
  console.log('Fecha seleccionada:', date);
  if (date) {
    selectedDate.value = date.toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' }); 
  } else {
    selectedDate.value = '';
  }
  console.log(selectedDate.value);
};

const serviciosAgrupados = computed(() => {
  const serviciosPorFecha = servicios.value.reduce((acumulador, servicio) => {
    const formattedDate = formatoFecha(servicio.fecha);
    const nombreMatches = servicio.nombreEstilista.toLowerCase().includes(filtroEstilista.value.toLowerCase());
    const dateMatches = !selectedDate.value || formattedDate === selectedDate.value;

    if (nombreMatches && dateMatches) {
      if (!acumulador[formattedDate]) {
        acumulador[formattedDate] = [];
      }
      acumulador[formattedDate].push(servicio);
    }

    return acumulador;
  }, {});

  return serviciosPorFecha;
});

function formatoFecha(fecha) {
  const [dia, mes, anio] = fecha.split('/');
  return `${dia.padStart(2, '0')}/${mes.padStart(2, '0')}/${anio}`;
}
</script>

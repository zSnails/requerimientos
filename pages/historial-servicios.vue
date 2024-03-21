<template>
    <div class="flex flex-row h-screen space-x-[15px] justify-center m-[35px]">
        <UCard class="bg-static basis-1/4 flex flex-col justify-between items-center">
            <template #header>
                <center>
                    <font size="6rem">
                        <h1><b>Historial de Servicios</b></h1>
                    </font>
                </center>
            </template>
            <DatePicker class="mt-[20px]"></DatePicker>
            <template #footer>
                <center>
                    <font size="30px">
                        <b>
                        </b>
                    </font>
                </center>
            </template>
        </UCard>
      <div class="flex flex-col basis-1/2 space-y-[15px]">
        <div class="max-h-[750px] overflow-auto">
          <!-- Aquí puedes iterar sobre una lista de servicios realizados -->
          <!-- Cada servicio podría tener información como la fecha, el cliente, el servicio realizado y el precio -->
          <div v-for="servicio in historialServicios" :key="servicio.id" class="text-left">
            <p class="text-black font-bold text-xl">{{ servicio.fecha }}</p>
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
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  let historialServicios = ref([
    {
      id: 1,
      fecha: '2024-03-21',
      nombreEstilista: 'Juan Pérez',
      nombreServicio: 'Corte de pelo',
      descripcion: 'Corte de pelo estándar',
      precio: 50,
      imagen: '/img/100x100.svg',
    },
    // Puedes agregar más servicios aquí
  ]);
  </script>
  
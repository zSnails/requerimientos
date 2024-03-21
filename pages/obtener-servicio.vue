<template>
    <div class="flex flex-row h-screen space-x-[15px] justify-center m-[35px]">
        <UCard class="bg-static basis-1/4 flex flex-col justify-between items-center">
            <template #header>
                <center>
                    <font size="6rem">
                        <h1><b>Fecha del servicio</b></h1>
                    </font>
                </center>
            </template>
            <DatePicker class="mt-[20px]"></DatePicker>
            <template #footer>
                <center>
                    <font size="30px">
                        <b>
                            <h1>
                                {{ precio }}
                            </h1>
                        </b>
                    </font>
                </center>
            </template>
        </UCard>
        <div class="flex flex-col basis-1/2 space-y-[15px]">
            <UCard class="bg-static">
                <div class="flex flex-col h-full w-full space-y-[20px]">
                    <div class="flex flex-row h-full w-full">
                        <UAvatar size="xl" src="/img/100x100.svg"></UAvatar>
                        <span class="grow"></span>
                        <div class="flex flex-col items-end h-full">
                            <font size="6px">
                                <b>
                                    <h1>Servicio</h1>
                                </b>
                            </font>
                            <font size="0.3rem">
                                <p>Hola soy la descripción del servicio jajaja</p>
                            </font>
                        </div>
                    </div>
                    <div class="flex flex-row items-center space-x-[5px]">
                        <UIcon name="i-heroicons-user" />
                        <font size="0.03rem">
                            Nombre del estilista
                        </font>
                    </div>
                </div>
            </UCard>
            <UCard class="bg-static">
                <div class="h-full flex flex-col items-center">
                    <font size="6rem">
                        <b>
                            <h1>Últimos retoques</h1>
                        </b>
                    </font>
                    <div class="flex-flex-col items-center">
                        <font size="3rem">
                            <center>
                                <h1>Extras</h1>
                            </center>
                        </font>
                        <div class="flex flex-wrap flex-row space-x-[30px]">
                            <UCheckbox label="Trato especial" />
                            <UCheckbox label="Limpieza profunda" />
                            <UCheckbox label="Champú especial" />
                            <UCheckbox label="Herramientas especiales" />
                        </div>
                        <div class="flex flex-col items-start">
                            <font size="4rem" class="mt-[15px]">
                                <h1>Notas</h1>
                            </font>
                            <UTextarea :rows="5" class="mt-[5px] w-full"></UTextarea>
                        </div>
                    </div>
                </div>
            </UCard>
            <center>
                <UButton color="teal" class="w-fit shadow-lg" variant="soft" size="xl">Agendar Cita</UButton>
            </center>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

let precio = ref(0);
</script>

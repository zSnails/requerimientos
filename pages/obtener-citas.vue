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
            </template>
        </UCard>
        <div class="flex flex-col basis-1/2 space-y-[15px]">
            <div class="text-left">
                <p class="text-black font-bold text-xl">Hoy</p>
            </div>
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
            <div class="text-left">
                <p class="text-black font-bold text-xl">Mañana</p>
            </div>
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
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

let precio = ref(0);
</script>

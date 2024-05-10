<template>
    <div class="flex flex-row h-screen space-x-[15px] justify-center m-[35px]">
        <UCard class="bg-static basis-1/4 flex flex-col justify-between items-center">
            <template #header>
                <center>
                    <font size="6rem">
                        <h1><b>Fecha del servicio</b></h1>
                    </font>
                    <UInput v-model="estilista" variant="none" class="mb-[20px] bg-static rounded-lg shadow-lg"
                        placeholder="Estilista..." />
                </center>
            </template>
            <DatePicker @update:model-value="enCambioDeFecha" class="mt-[20px]"></DatePicker>
            <template #footer>
            </template>
        </UCard>
        <div class="flex flex-col basis-1/2 space-y-[15px]">
            <div v-for="(servicios, fecha) in porEstilista" :key="fecha" class="max-h-[750px] overflow-auto">
                <div class="text-left">
                    <p class="text-black font-bold text-xl">{{ formatRelative(fromDate(fecha), today) }}</p>
                </div>
                <UCard v-for="servicio in servicios" class="bg-static mb-[10px]">
                    <div class="flex flex-col h-full w-full space-y-[20px]">
                        <div class="flex flex-row h-full w-full">
                            <UAvatar size="xl" src="/img/100x100.svg"></UAvatar>
                            <span class="grow"></span>
                            <div class="flex flex-col items-end h-full">
                                <font size="6px">
                                    <b>
                                        <h1>{{ servicio.descripcion }}</h1>
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
                                {{ servicio.estilista }}
                            </font>
                        </div>
                    </div>
                </UCard>
                <!-- Resto de tu código -->
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { formatRelative } from 'date-fns';

interface Servicio {
    id: number;
    fecha: Date;
    estilista: string;
    descripcion: string;
};


let today = new Date();

let dif = new Date(today);
dif.setUTCDate(dif.getUTCDate() + 1);

function fromDate(input: string): Date {
    let reversed = input.split('/').reverse().join('-');
    console.log(reversed);
    let date = new Date(reversed);
    date.setUTCDate(date.getUTCDate() + 1);
    return date;
}

let servicios = ref<Servicio[]>([
    { id: 1, fecha: today, estilista: 'Bruno', descripcion: 'Servicio 1' },
    { id: 2, fecha: today, estilista: 'Carlos', descripcion: 'Servicio 2' },
    { id: 3, fecha: dif, estilista: 'Lolo', descripcion: 'Servicio 3' },
]);

let estilista = ref('');

const fechaSeleccionada = ref('');

function enCambioDeFecha(fecha: Date): void {
    console.log(fecha);
    if (fecha === null) {
        fechaSeleccionada.value = '';
        return;
    }
    fechaSeleccionada.value = fecha.toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' }); // Formatear la fecha como día, mes, año
};

const porEstilista = computed(() => {
    let grupos: Record<string, Servicio[]> = {};

    let filtrado: Servicio[] = servicios.value.filter(servicio => servicio.estilista.toLowerCase().includes(estilista.value.toLowerCase()));
    filtrado.forEach((servicio: Servicio) => {
        const fecha = servicio.fecha.toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' });
        if (fechaSeleccionada.value !== '' && fecha !== fechaSeleccionada.value) {
            return;
        }

        if (!grupos[fecha]) {
            grupos[fecha] = [];
        }
        grupos[fecha].push(servicio);
    });

    return grupos;
});
</script>

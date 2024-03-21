<template>
    <div class="flex flex-row h-screen space-x-[10px] justify-center m-[35px]">
        <UCard class="bg-static basis-1/4 flex justify-center">
            <UInput v-model="filter" variant="none" class="mb-[20px] bg-static rounded-lg shadow-lg"
                placeholder="Buscar..." />
            <URadioGroup class="mx-[8px] mb-[20px]" v-model="selected" legend="Tipos" :options="typeOptions" />
            <URadioGroup class="mx-[8px]" v-model="gender" legend="Estilista" :options="stylistGender" />
        </UCard>
        <div class="flex flex-col basis-1/2">
            <UCard class="bg-static grow overflow-y-auto">
                <ServiceCard @click="redirectToCard()" class="p-[20px] hover:bg-[#00000010] mb-[10px] rounded-lg"
                    v-for="servicio in servicios" :description="servicio.description" :name="servicio.name"
                    :deletable="false" />
            </UCard>
        </div>
    </div>
</template>
<script setup lang="ts">
import ServiceCard from "@/components/ServiceCard.vue";
const router = useRouter();
const typeOptions = [
    { value: 'solo', label: 'Solo' },
    { value: 'grupo', label: 'En grupo' },
    { value: 'rapido', label: 'Rápido' },
    { value: 'lento', label: 'Lento' },
];

function redirectToCard() {
    router.push({ path: 'obtener-servicio' })
}

const stylistGender = [
    { value: 'masculino', label: 'Masculino' },
    { value: 'femenino', label: 'Femenino' }
];

interface Service {
    name: string;
    description: string
};

const allServices: Service[] = [
    {
        name: 'Lavado de pelo',
        description: 'Le lavamos el pelo vio jue fuap'
    },
    {
        name: 'Pintada de uñas',
        description: 'Yay lo que usted ve en la imagen'
    },
    {
        name: 'Este si es un corte de pelos',
        description: 'Este si era, no como lo que puso Z en el primero'
    },
    {
        name: 'Spa o algo así',
        description: 'Hola'
    },
    {
        name: 'Depilación de piernas',
        description: 'A mano'
    }
];

const filter = ref("");

const servicios = computed(() => allServices.filter((s: Service) => s.name.toLowerCase().includes(filter.value.toLowerCase())))

const selected = ref("solo");
const gender = ref("masculino");
</script>
<style>
/* something */
</style>

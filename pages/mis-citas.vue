<template>
    <div class="p-8">
        <div v-for="cita in citas" :key="cita.id"
            class="bg-white p-4 rounded-lg shadow-lg flex items-center justify-between mb-4">
            <div>
                <h3 class="text-lg font-semibold">{{ cita.servicio }}</h3>
                <p class="text-gray-600">{{ cita.fecha }} - {{ cita.hora }}</p>
            </div>
            <button @click="cancelarCita(cita.id)" class="px-4 py-2 bg-red-500 text-white rounded-lg">Cancelar cita</button>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            citas: [
                { id: 1, servicio: 'Corte de cabello', fecha: '2024-03-25', hora: '10:00' },
                { id: 2, servicio: 'Manicure', fecha: '2024-03-26', hora: '15:30' },
                { id: 3, servicio: 'Depilación', fecha: '2024-03-27', hora: '11:45' },
            ]
        };
    },
    methods: {
        cancelarCita(id) {
            this.citas = this.citas.filter(cita => cita.id !== id);
        }
    }
};
</script>
  
<style>
/* Estilos adicionales si los necesitas */
</style>
  

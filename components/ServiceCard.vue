<template>
    <div class="flex flex-row h-full">
        <div class="flex flex-row">
            <UAvatar size="lg" src="/img/100x100.svg" alt="image" class="me-[10px]" />
            <div class="flex flex-col">
                <h1>{{ props.name }}</h1>
                <p>{{ props.description }}</p>
            </div>
        </div>
        <span class="grow"></span>
        <UButton color="red" variant="soft" :class="props.deletable ? '' : 'hidden'">Eliminar</UButton>
    </div>
</template>
<script setup lang="ts">
const props = defineProps(['deletable', 'name', 'description']);
</script>

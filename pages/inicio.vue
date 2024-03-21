<template>
  <div class="carousel-container max-w-2xl mx-auto">
    <UCarousel v-slot="{ item }" :items="items" :ui="{ item: 'basis-full' }" class="rounded-lg overflow-hidden" indicators>
      <div class="carousel-item relative">
        <img :src="item.src" class="w-full h-80 object-cover" draggable="false">
        <p class="absolute bottom-2 left-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded">{{ item.description }}</p>
      </div>
    </UCarousel>
  </div>
</template>

<script setup lang="ts">
const items = [
  { src: '/img/barbero1.jpg', description: 'Matarrita' },
  { src: '/img/barbero2.jpg', description: 'Centeno' },
  { src: '/img/barbero3.jpg', description: 'Saborío' },
  { src: '/img/barbero4.jpg', description: 'Golobio' }
]
</script>

<template>
    <div class="flex flex-col space-y-[35px] m-[35px]">
        <UCarousel v-slot="{ item }" :items="items" :ui="{ item: 'basis-full' }"
            class="rounded-xl shadow-xl flex flex-row h-3/4 basis-1/4" indicators>
            <img :src="item.src" class="basis-1/2 max-w-1/2 min-w-1/2 object-cover rounded-xl" draggable="false">
            <div class="flex flex-col mx-[35px] basis-1/2 grow">
                <font size="6rem">
                    <h1 class="px-2 py-1 rounded">{{ item.name }}</h1>
                </font>
                <font size="3rem">
                    <p class="px-2 py-1 rounded min-w-[600px]">{{ item.description }}</p>
                </font>
            </div>
        </UCarousel>
        <center>
            <UButton size="xl" variant="ghost" color="cyan" class="hover:shadow-xl w-fit" @click="agendar()">Agenda ya</UButton>
        </center>
    </div>
</template>

<script setup lang="ts">

const router = useRouter();
function agendar() {
    router.push({ path: '/servicios' });
}
const items = [
    {
        src: '/img/barbero1.jpg',
        "name": "Bruno \"El Cortador de Leyendas\"",
        "description": "Bruno es un barbero legendario en la ciudad, conocido por sus habilidades excepcionales y su estilo único. Su barbería está decorada con recuerdos de sus viajes por todo el mundo, donde aprendió técnicas de corte de cabello y estilos de diferentes culturas. Además de su destreza con las tijeras y la navaja, Bruno es un gran conversador y un confidente para muchos de sus clientes, quienes confían en él no solo para un buen corte de cabello, sino también para charlas sinceras y sabias. Su lema es \"Cortando más que cabello, cortando historias\".",
        "age": 45
    },
    {
        src: '/img/barbero2.jpg',
        "name": "Lolo \"La Dama de las Tijeras\"",
        "description": "Lolo es una barbero con un toque femenino en su estilo. Es experta en cortes de cabello modernos y creativos. Su barbería tiene un ambiente acogedor y relajante, donde los clientes disfrutan de música suave y un servicio personalizado. Lolo es conocida por su atención al detalle y su habilidad para transformar cualquier cabello en una obra maestra. Además, es una entusiasta del cuidado del cabello y siempre está al día con las últimas tendencias y productos.",
        "age": 32
    },
    {
        src: '/img/barbero3.jpg',
        "name": "Carlos \"El Maestro de la Navaja\"",
        "description": "Carlos es un barbero con una habilidad excepcional con la navaja. Su especialidad son los afeitados clásicos y meticulosos que dejan a los clientes sintiéndose renovados y listos para conquistar el mundo. Con años de experiencia, Carlos ha perfeccionado su técnica para garantizar un afeitado suave y sin irritaciones. Además de su destreza con la navaja, Carlos es conocido por su amabilidad y su capacidad para hacer que cada cliente se sienta especial.",
        "age": 50
    },
    {
        src: '/img/barbero4.jpg',
        "name": "Alex \"El Estilista Apasionado\"",
        "description": "Alex es un barbero apasionado y talentoso que ha ganado reconocimiento por su habilidad para crear cortes de cabello modernos y elegantes. Su barbería es un espacio inclusivo y acogedor donde todos son bienvenidos. Alex es abiertamente gay y se enorgullece de su identidad, inspirando a otros a sentirse cómodos y aceptados. Además de su talento con las tijeras, Alex es conocido por su personalidad vibrante y su capacidad para crear una experiencia única para cada cliente.",
        "age": 35
    }
];
</script>


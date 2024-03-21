<template>
    <div class="flex flex-col max-h-screen h-screen">
        <UHorizontalNavigation :links="links" class="border-p border-gray-200 dark:border-gray-800 shadow-sm" />
        <!-- WARNING: this could cause trouble later on -->
        <NuxtPage class="grow h-[0px]" />
    </div>
</template>
<script setup lang="ts">
const links = [
    {
        label: 'Beauty Shop',
        avatar: {
            src: '/img/logo.png',
        },
    },
    {
        label: 'Servicios',
        icon: 'i-heroicons-home',
        to: '/servicios'
    },
    {
        label: 'Información',
        icon: 'i-heroicons-information-circle',
        to: '/informacion'
    },
    {
        label: 'Contacto',
        icon: 'i-heroicons-user',
        to: '/contacto'
    }
];
</script>
<style>
.bg-static {
    background-color: rgba(0, 0, 0, .03);
}

:root[data-theme="light"] {
    --text-50: #ebedf9;
    --text-100: #d7daf4;
    --text-200: #afb5e9;
    --text-300: #8890dd;
    --text-400: #606bd2;
    --text-500: #3846c7;
    --text-600: #2d389f;
    --text-700: #222a77;
    --text-800: #161c50;
    --text-900: #0b0e28;
    --text-950: #060714;

    --background-50: #ebebfa;
    --background-100: #d7d7f4;
    --background-200: #afafe9;
    --background-300: #8787de;
    --background-400: #5f5fd3;
    --background-500: #3737c8;
    --background-600: #2c2ca0;
    --background-700: #212178;
    --background-800: #161650;
    --background-900: #0b0b28;
    --background-950: #050514;

    --primary-50: #ebecf9;
    --primary-100: #d8d9f3;
    --primary-200: #b1b3e7;
    --primary-300: #8a8ddb;
    --primary-400: #6367cf;
    --primary-500: #3c40c3;
    --primary-600: #30349c;
    --primary-700: #242775;
    --primary-800: #181a4e;
    --primary-900: #0c0d27;
    --primary-950: #060614;

    --secondary-50: #f6ebf9;
    --secondary-100: #eed8f3;
    --secondary-200: #dcb1e7;
    --secondary-300: #cb8adb;
    --secondary-400: #b963cf;
    --secondary-500: #a83cc3;
    --secondary-600: #86309c;
    --secondary-700: #652475;
    --secondary-800: #43184e;
    --secondary-900: #220c27;
    --secondary-950: #110614;

    --accent-50: #f9ebf9;
    --accent-100: #f3d8f3;
    --accent-200: #e6b1e7;
    --accent-300: #da8adb;
    --accent-400: #cd63cf;
    --accent-500: #c13cc3;
    --accent-600: #9a309c;
    --accent-700: #742475;
    --accent-800: #4d184e;
    --accent-900: #270c27;
    --accent-950: #130614;

}

:root[data-theme="dark"] {
    --text-50: #050614;
    --text-100: #0a0d29;
    --text-200: #141952;
    --text-300: #1f267a;
    --text-400: #2933a3;
    --text-500: #3340cc;
    --text-600: #5c66d6;
    --text-700: #858ce0;
    --text-800: #adb3eb;
    --text-900: #d6d9f5;
    --text-950: #ebecfa;

    --background-50: #050514;
    --background-100: #0a0a29;
    --background-200: #141452;
    --background-300: #1f1f7a;
    --background-400: #2929a3;
    --background-500: #3333cc;
    --background-600: #5c5cd6;
    --background-700: #8585e0;
    --background-800: #adadeb;
    --background-900: #d6d6f5;
    --background-950: #ebebfa;

    --primary-50: #060614;
    --primary-100: #0c0d27;
    --primary-200: #181a4e;
    --primary-300: #242775;
    --primary-400: #30349c;
    --primary-500: #3c40c3;
    --primary-600: #6367cf;
    --primary-700: #8a8ddb;
    --primary-800: #b1b3e7;
    --primary-900: #d8d9f3;
    --primary-950: #ebecf9;

    --secondary-50: #110613;
    --secondary-100: #210c27;
    --secondary-200: #43184e;
    --secondary-300: #642574;
    --secondary-400: #86319b;
    --secondary-500: #a73dc2;
    --secondary-600: #b964ce;
    --secondary-700: #ca8bda;
    --secondary-800: #dcb1e7;
    --secondary-900: #edd8f3;
    --secondary-950: #f6ecf9;

    --accent-50: #130614;
    --accent-100: #270c27;
    --accent-200: #4d184e;
    --accent-300: #742475;
    --accent-400: #9a309c;
    --accent-500: #c13cc3;
    --accent-600: #cd63cf;
    --accent-700: #da8adb;
    --accent-800: #e6b1e7;
    --accent-900: #f3d8f3;
    --accent-950: #f9ebf9;

}
</style>

<template>
    <div class="flex justify-center items-center h-screen bg-gray-100">
      <div class="bg-gray-200 p-8 rounded-lg shadow-lg max-w-lg w-full flex items-center">
        <div class="mr-4 pr-4 border-r-2 border-black">
          <img src="/img/logo.png" alt="Logo" class="h-24">
        </div>
        <div class="flex flex-col">
          <div class="flex items-center justify-center mb-6">
            <h2 class="text-xl font-bold">Inicio de sesión</h2>
          </div>
          <div class="flex flex-col items-center">
            <input type="text" placeholder="Usuario" class="w-full px-4 py-2 mb-4 border rounded-lg">
            <input type="password" placeholder="Contraseña" class="w-full px-4 py-2 mb-4 border rounded-lg">
            <button class="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Login</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <style>
  /* Estilos adicionales para el formulario */
  </style>
  
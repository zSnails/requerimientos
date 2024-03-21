<template>
    <div class="info-wrapper">
      <div class="info-container">
        <div v-for="(info, index) in infoData" :key="index" class="info-box" :class="{ 'active': activeIndex === index }" :style="{ backgroundColor: colors[index] }">
          <h2 class="info-title">{{ info.title }}</h2>
          <p class="info-text">{{ info.text }}</p>
        </div>
      </div>
      <div class="indicator">
        <span v-for="(info, index) in infoData" :key="index" class="indicator-dot" :class="{ 'active': activeIndex === index }" @click="changeSlide(index)"></span>
      </div>
      <div class="arrows">
        <button @click="prev" class="arrow-button" v-if="activeIndex > 0">←</button>
        <button @click="next" class="arrow-button" v-if="activeIndex < infoData.length - 1">→</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        activeIndex: 0,
        infoData: [
          { title: 'Valores', text: 'Calidad en el servicio, Innovación constante, Ética profesional, Respeto por la individualidad de cada cliente.' },
          { title: 'Visión', text: 'Convertirnos en el salón de belleza más reconocido y preferido por nuestra excelencia y atención al cliente.' },
          { title: 'Misión', text: 'Proporcionar servicios de belleza de alta calidad que resalten la belleza natural de nuestros clientes.' }
        ],
        colors: ['#76D7C4', '#ABEBC6', '#D7BDE2'] // Colores diferentes para cada cuadro
      };
    },
    methods: {
      next() {
        if (this.activeIndex < this.infoData.length - 1) {
          this.activeIndex++;
        }
      },
      prev() {
        if (this.activeIndex > 0) {
          this.activeIndex--;
        }
      },
      changeSlide(index) {
        this.activeIndex = index;
      }
    }
  };
  </script>
  
  <style>
  .info-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 80vh;
  }
  
  .info-container {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .info-box {
    width: 100%;
    padding: 20px;
    border-radius: 10px;
    color: #333;
    margin-bottom: 20px;
    opacity: 0;
    transition: opacity 0.5s;
  }
  
  .info-box.active {
    opacity: 1;
  }
  
  .info-title {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }
  
  .info-text {
    font-size: 1rem;
  }
  
  .indicator {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }
  
  .indicator-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #ccc;
    margin: 0 5px;
    cursor: pointer;
  }
  
  .indicator-dot.active {
    background-color: #333;
  }
  
  .arrows {
    display: flex;
    justify-content: space-between;
    width: 30%;
  }
  
  .arrow-button {
    background-color: #f0ebeb;
    color: #333;
    font-size: 1.5rem;
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .arrow-button:hover {
    background-color: #d3d0d0;
  }
  </style>
  
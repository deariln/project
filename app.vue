<template>
  <section class="body">
    <div class="div-butt_main">
      <button class="button-main">
        ГЛАВНАЯ СТРАНИЦА 
      </button>
    </div>
    <div class="div-matrix_butt">
       <button class="matrix-fate">
        Матрица судьбы
       </button>
       <button class="matrix-year">
        Матрица года
       </button>
    </div>

 
  <div class="container">

    <form action="" class="form">
      
      <input type="text" placeholder="Name" class="form__input" id="name" />
      <label for="name" class="form__label">Name</label>

      <label for="bday">Введите дату вашего рождения:</label>
      <input type="date" id="bday" name="bday" />
     
    </form>
</div>
  </section>
</template>

<script setup lang="ts">
</script>

<style lang="scss">
@use "~/assets/css/style.css";
</style>
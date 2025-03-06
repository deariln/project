<template>
  <section class="body">
    <div class="div-butt_main">
      <button class="button-main">
       vika.ashram
      </button>
    </div>
    <div class="div-matrix_butt">
      <NuxtLink to="/matrix_fate" class="matrix-fate">
        Матрица судьбы
      </NuxtLink>
      <NuxtLink to="/matrix_year" class="matrix-year">
        Матрица года
      </NuxtLink>
      <NuxtLink to="/compatibility" class="matrix-comp">
        Совместимость
      </NuxtLink>
    </div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </section>
</template>

<script setup lang="ts">
</script>

<style>
@import "~/assets/css/style.css";
@import "~/assets/css/media.css";
</style>
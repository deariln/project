<template>
  <section class="body">
    <div class="div-butt_main">
      <button class="button-main">
        ГЛАВНАЯ СТРАНИЦА
      </button>
    </div>
    <div class="div-matrix_butt">
      <NuxtLink to="/matrix_fate" class="matrix-fate">
        Матрица судьбы
      </NuxtLink>
      <NuxtLink to="/matrix_year" class="matrix-year">
        Матрица года
      </NuxtLink>
      <NuxtLink to="/compatibility" class="matrix-year">
        Совместимость
      </NuxtLink>
    </div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <!-- <div class="container">

<form action="" class="form">

  <input type="text" placeholder="Name" class="form__input" id="name" />
  <label for="name" class="form__label">Name</label>

  <label for="bday">Введите дату вашего рождения:</label>
  <input type="date" id="bday" name="bday" />

</form>
</div>

    <svg id="matrixSVG" viewBox="0 0 800 800" preserveAspectRatio="xMidYMid meet">
      <line id="line-1-2" x1="36" y1="400" x2="400" y2="36" class="line-segment"
        style="stroke-dasharray: 514.774; stroke-dashoffset: 0;"></line>
      <line id="line-2-3" x1="400" y1="36" x2="764" y2="400" class="line-segment"
        style="stroke-dasharray: 514.774; stroke-dashoffset: 0;"></line>
      <line id="line-3-4" x1="764" y1="400" x2="400" y2="764" class="line-segment"
        style="stroke-dasharray: 514.774; stroke-dashoffset: 0;"></line>
      <line id="line-4-1" x1="400" y1="764" x2="36" y2="400" class="line-segment"
        style="stroke-dasharray: 514.774; stroke-dashoffset: 0;"></line>
      <line id="line-1-5" x1="36" y1="400" x2="400" y2="400" class="line-segment"
        style="stroke-dasharray: 364; stroke-dashoffset: 0;"></line>
      <line id="line-2-5" x1="400" y1="36" x2="400" y2="400" class="line-segment"
        style="stroke-dasharray: 364; stroke-dashoffset: 0;"></line>
      <line id="line-3-5" x1="764" y1="400" x2="400" y2="400" class="line-segment"
        style="stroke-dasharray: 364; stroke-dashoffset: 0;"></line>
      <line id="line-4-5" x1="400" y1="764" x2="400" y2="400" class="line-segment"
        style="stroke-dasharray: 364; stroke-dashoffset: 0;"></line>
      <line id="line-1-6" x1="36" y1="400" x2="142" y2="142" class="line-segment"
        style="stroke-dasharray: 278.927; stroke-dashoffset: 0;"></line>
      <line id="line-6-2" x1="142" y1="142" x2="400" y2="36" class="line-segment"
        style="stroke-dasharray: 278.927; stroke-dashoffset: 0;"></line>
      <line id="line-2-7" x1="400" y1="36" x2="658" y2="142" class="line-segment"
        style="stroke-dasharray: 278.927; stroke-dashoffset: 0;"></line>
      <line id="line-7-3" x1="658" y1="142" x2="764" y2="400" class="line-segment"
      style="stroke-dasharray: 278.927; stroke-dashoffset: 0;"></line>
    <line id="line-3-8" x1="764" y1="400" x2="658" y2="658" class="line-segment"
      style="stroke-dasharray: 278.927; stroke-dashoffset: 0;"></line>
    <line id="line-8-4" x1="658" y1="658" x2="400" y2="764" class="line-segment"
      style="stroke-dasharray: 278.927; stroke-dashoffset: 0;"></line>
    <line id="line-4-9" x1="400" y1="764" x2="142" y2="658" class="line-segment"
      style="stroke-dasharray: 278.927; stroke-dashoffset: 0;"></line>
    <line id="line-9-1" x1="142" y1="658" x2="36" y2="400" class="line-segment"
      style="stroke-dasharray: 278.927; stroke-dashoffset: 0;"></line>
    <line id="line-6-7" x1="142" y1="142" x2="658" y2="142" class="line-segment"
      style="stroke-dasharray: 516; stroke-dashoffset: 0;"></line>
    <line id="line-7-8" x1="658" y1="142" x2="658" y2="658" class="line-segment"
      style="stroke-dasharray: 516; stroke-dashoffset: 0;"></line>
    <line id="line-8-9" x1="658" y1="658" x2="142" y2="658" class="line-segment"
      style="stroke-dasharray: 516; stroke-dashoffset: 0;"></line>
    <line id="line-6-9" x1="142" y1="142" x2="142" y2="658" class="line-segment"
      style="stroke-dasharray: 516; stroke-dashoffset: 0;"></line>
    <line id="line-6-8" x1="142" y1="142" x2="658" y2="658" class="line-segment"
      style="stroke-dasharray: 729.734; stroke-dashoffset: 0;"></line>
    <line id="line-7-9" x1="658" y1="142" x2="142" y2="658" class="line-segment"
      style="stroke-dasharray: 729.734; stroke-dashoffset: 0;"></line>
    <circle cx="36" cy="400" r="29" class="matrix-circle" style="stroke: rgb(174, 143, 190); fill: rgb(255, 255, 255);">
    </circle><text x="36" y="402" class="matrix-text" style="font-size: 30px;">3</text>
    <circle cx="400" cy="36" r="29" class="matrix-circle" style="stroke: rgb(174, 143, 190); fill: rgb(255, 255, 255);">
    </circle><text x="400" y="38" class="matrix-text" style="font-size: 30px;">1</text>
    <circle cx="764" cy="400" r="29" class="matrix-circle" style="stroke: rgb(199, 90, 90); fill: rgb(255, 255, 255);">
    </circle><text x="764" y="402" class="matrix-text" style="font-size: 30px;">9</text>
    <circle cx="400" cy="764" r="29" class="matrix-circle" style="stroke: rgb(199, 90, 90); fill: rgb(255, 255, 255);">
    </circle><text x="400" y="766" class="matrix-text" style="font-size: 30px;">13</text>
    <circle cx="400" cy="400" r="29" class="matrix-circle"
      style="stroke: rgb(191, 153, 161); fill: rgb(255, 255, 255);"></circle><text x="400" y="402" class="matrix-text"
      style="font-size: 30px;"></text>
    <circle cx="142" cy="142" r="29" class="matrix-circle"
      style="stroke: rgb(174, 164, 158); fill: rgb(255, 255, 255);"></circle><text x="142" y="144" class="matrix-text"
      style="font-size: 30px;"></text>
    <circle cx="658" cy="142" r="29" class="matrix-circle"
      style="stroke: rgb(174, 164, 158); fill: rgb(255, 255, 255);"></circle><text x="658" y="144" class="matrix-text"
      style="font-size: 30px;"></text>
    <circle cx="658" cy="658" r="29" class="matrix-circle"
      style="stroke: rgb(174, 164, 158); fill: rgb(255, 255, 255);"></circle><text x="658" y="660" class="matrix-text"
      style="font-size: 30px;"></text>
    <circle cx="142" cy="658" r="29" class="matrix-circle"
      style="stroke: rgb(174, 164, 158); fill: rgb(255, 255, 255);"></circle><text x="142" y="660" class="matrix-text"
      style="font-size: 30px;"></text>
    <circle cx="142" cy="400" r="22" class="matrix-circle"
      style="stroke: rgb(163, 176, 224); fill: rgb(255, 255, 255);"></circle><text x="142" y="402" class="matrix-text"
      style="font-size: 30px;"></text>
    <circle cx="217" cy="217" r="22" class="matrix-circle"
      style="stroke: rgb(174, 164, 158); fill: rgb(255, 255, 255);"></circle><text x="217" y="219" class="matrix-text"
      style="font-size: 30px;"></text>
    <circle cx="400" cy="142" r="22" class="matrix-circle"
      style="stroke: rgb(163, 176, 224); fill: rgb(255, 255, 255);"></circle><text x="400" y="144" class="matrix-text"
      style="font-size: 30px;"></text>
    <circle cx="583" cy="217" r="22" class="matrix-circle"
      style="stroke: rgb(174, 164, 158); fill: rgb(255, 255, 255);"></circle><text x="583" y="219" class="matrix-text"
      style="font-size: 30px;"></text>
    <circle cx="658" cy="400" r="22" class="matrix-circle"
      style="stroke: rgb(242, 181, 125); fill: rgb(255, 255, 255);"></circle><text x="658" y="402" class="matrix-text"
      style="font-size: 30px;"></text>
    <circle cx="583" cy="583" r="22" class="matrix-circle"
      style="stroke: rgb(174, 164, 158); fill: rgb(255, 255, 255);"></circle><text x="583" y="585" class="matrix-text"
      style="font-size: 30px;"></text>
    <circle cx="400" cy="658" r="22" class="matrix-circle"
      style="stroke: rgb(242, 181, 125); fill: rgb(255, 255, 255);"></circle><text x="400" y="660" class="matrix-text"
      style="font-size: 30px;"></text>
    <circle cx="217" cy="583" r="22" class="matrix-circle"
      style="stroke: rgb(174, 164, 158); fill: rgb(255, 255, 255);"></circle><text x="217" y="585" class="matrix-text"
      style="font-size: 30px;"></text>
    <circle cx="92" cy="400" r="22" class="matrix-circle" style="stroke: rgb(90, 112, 199); fill: rgb(255, 255, 255);">
    </circle><text x="92" y="402" class="matrix-text" style="font-size: 30px;">14</text>
    <circle cx="182" cy="182" r="22" class="matrix-circle"
      style="stroke: rgb(174, 164, 158); fill: rgb(255, 255, 255);"></circle><text x="182" y="184" class="matrix-text"
      style="font-size: 30px;"></text>
    <circle cx="400" cy="92" r="22" class="matrix-circle" style="stroke: rgb(90, 112, 199); fill: rgb(255, 255, 255);">
    </circle><text x="400" y="94" class="matrix-text" style="font-size: 30px;">10</text>
    <circle cx="617" cy="182" r="22" class="matrix-circle"
      style="stroke: rgb(174, 164, 158); fill: rgb(255, 255, 255);"></circle><text x="617" y="184" class="matrix-text"
      style="font-size: 30px;">10</text>
    <circle cx="707" cy="400" r="22" class="matrix-circle"
      style="stroke: rgb(174, 164, 158); fill: rgb(255, 255, 255);"></circle><text x="707" y="402" class="matrix-text"
      style="font-size: 30px;">8</text>
    <circle cx="617" cy="617" r="22" class="matrix-circle"
      style="stroke: rgb(174, 164, 158); fill: rgb(255, 255, 255);"></circle><text x="617" y="619" class="matrix-text"
      style="font-size: 30px;">7</text>
    <circle cx="400" cy="707" r="22" class="matrix-circle"
      style="stroke: rgb(174, 164, 158); fill: rgb(255, 255, 255);"></circle><text x="400" y="709" class="matrix-text"
      style="font-size: 30px;">7</text>
    <circle cx="182" cy="617" r="22" class="matrix-circle"
      style="stroke: rgb(174, 164, 158); fill: rgb(255, 255, 255);"></circle><text x="182" y="619" class="matrix-text"
      style="font-size: 30px;">22</text>
    <circle cx="264" cy="400" r="22" class="matrix-circle"
      style="stroke: rgb(137, 184, 151); fill: rgb(255, 255, 255);"></circle><text x="264" y="402" class="matrix-text"
      style="font-size: 30px;">19</text>
    <circle cx="400" cy="264" r="22" class="matrix-circle"
      style="stroke: rgb(137, 184, 151); fill: rgb(255, 255, 255);"></circle><text x="400" y="266" class="matrix-text"
      style="font-size: 30px;">17</text>
    <circle cx="496" cy="496" r="22" class="matrix-circle"
      style="stroke: rgb(174, 164, 158); fill: rgb(255, 255, 255);"></circle><text x="496" y="498" class="matrix-text"
      style="font-size: 30px;">11</text>
    <circle cx="576" cy="464" r="22" class="matrix-circle"
      style="stroke: rgb(174, 164, 158); fill: rgb(255, 255, 255);"></circle><text x="576" y="466" class="matrix-text"
      style="font-size: 30px;">10</text><text x="546" y="432" fill="#9DBC78"
      style="font: bold 22px Cakra, serif;">$</text>
    <circle cx="464" cy="576" r="22" class="matrix-circle"
      style="stroke: rgb(174, 164, 158); fill: rgb(255, 255, 255);"></circle><text x="464" y="578" class="matrix-text"
      style="font-size: 30px;">5</text><text x="434" y="544" fill="#EFA1A1"
      style="font: bold 30px Cakra, serif;">♥</text>
  </svg> -->


  </section>
</template>

<script setup lang="ts">
</script>

<style lang="scss">@use "~/assets/css/style.css";</style>
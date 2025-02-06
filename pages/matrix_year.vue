<template>
    <div class="container">

        <form action="" class="form">

            <!-- <label  for="name" class="form__label">Name</label> -->
            <input class="input-text"  type="text" placeholder="Имя" id="name" />

            <!-- <label for="birthday">Дата рождения:</label> -->
            <input class="input-date" type="date" id="birthday" name="birthday">
             
            <!-- <label for="number">Год</label> -->
            <input class="input-year" type="number" min="1900" max="2099" step="1" placeholder="Год"   />
        </form>
    </div>

    <div class="div-butt_year">
        <button class="butt-year" >Рассчитать</button>
    </div>

    <svg id="matrixSVG" viewBox="0 0 800 800" preserveAspectRatio="xMidYMid meet">
        <line id="line-1-2" x1="56" y1="400" x2="400" y2="56" class="line-segment"
            style="stroke-dasharray: 486.489; stroke-dashoffset: 0;"></line>
        <line id="line-2-3" x1="400" y1="56" x2="744" y2="400" class="line-segment"
            style="stroke-dasharray: 486.489; stroke-dashoffset: 0;"></line>
        <line id="line-3-4" x1="744" y1="400" x2="400" y2="744" class="line-segment"
            style="stroke-dasharray: 486.489; stroke-dashoffset: 0;"></line>
        <line id="line-4-1" x1="400" y1="744" x2="56" y2="400" class="line-segment"
            style="stroke-dasharray: 486.489; stroke-dashoffset: 0;"></line>
    <line id="line-1-5" x1="56" y1="400" x2="400" y2="400" class="line-segment"
        style="stroke-dasharray: 344; stroke-dashoffset: 0;"></line>
    <line id="line-2-5" x1="400" y1="56" x2="400" y2="400" class="line-segment"
        style="stroke-dasharray: 344; stroke-dashoffset: 0;"></line>
    <line id="line-3-5" x1="744" y1="400" x2="400" y2="400" class="line-segment"
        style="stroke-dasharray: 344; stroke-dashoffset: 0;"></line>
    <line id="line-4-5" x1="400" y1="744" x2="400" y2="400" class="line-segment"
        style="stroke-dasharray: 344; stroke-dashoffset: 0;"></line>
    <circle cx="56" cy="400" r="29" class="matrix-circle" style="stroke: rgb(174, 143, 190); fill: rgb(255, 255, 255);">
    </circle>
    <circle cx="400" cy="56" r="29" class="matrix-circle" style="stroke: rgb(174, 143, 190); fill: rgb(255, 255, 255);">
    </circle>
    <circle cx="744" cy="400" r="29" class="matrix-circle" style="stroke: rgb(199, 90, 90); fill: rgb(255, 255, 255);">
    </circle>
    <circle cx="400" cy="744" r="29" class="matrix-circle" style="stroke: rgb(199, 90, 90); fill: rgb(255, 255, 255);">
    </circle>
    <circle cx="400" cy="400" r="29" class="matrix-circle"
        style="stroke: rgb(191, 153, 161); fill: rgb(255, 255, 255);"></circle>
</svg></template>

<script setup lang="ts">
</script>

<style scoped></style>
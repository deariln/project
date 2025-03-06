<template>
    <div class="container">

        <form action="" class="form">

            <!-- <label  for="name" class="form__label">Name</label> -->

            <!-- <label for="birthday">Дата рождения:</label> -->
            <input class="input-date" type="date" id="birthday" name="birthday" v-model="birthday">
             
            <!-- <label for="number">Год</label> -->
            <input class="input-year" type="number" min="1900" max="2099" step="1" placeholder="Год" v-model="yearNumber">
           
        </form>
    </div>
   
    <div class="div-butt_year">
        <button class="butt-year" @click="calculate" >Рассчитать</button>
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
    <text x="48" y="406" fill="#000000" style="font: bold 22px Cakra, serif;">{{ leftNumber }}</text>

    <circle cx="400" cy="56" r="29" class="matrix-circle" style="stroke: rgb(174, 143, 190); fill: rgb(255, 255, 255);">
    </circle>
    <text x="392" y="62" fill="#000000" style="font: bold 22px Cakra, serif;">{{ upNumber }}</text>

    <circle cx="744" cy="400" r="29" class="matrix-circle" style="stroke: rgb(199, 90, 90); fill: rgb(255, 255, 255);">
    </circle>
    <text x="736" y="405" fill="#000000" style="font: bold 22px Cakra, serif;">{{ rightNumber }}</text>

    <circle cx="400" cy="744" r="29" class="matrix-circle" style="stroke: rgb(199, 90, 90); fill: rgb(255, 255, 255);">
    </circle>
    <text x="392" y="750" fill="#000000" style="font: bold 22px Cakra, serif;">{{ downNumber }}</text>

    <circle cx="400" cy="400" r="29" class="matrix-circle"
        style="stroke: rgb(191, 153, 161); fill: rgb(255, 255, 255);"></circle>
        <text x="392" y="406" fill="#000000" style="font: bold 22px Cakra, serif;">{{ centerNumber }}</text>

</svg>

</template>

<script setup lang="ts">
import {useMatrix} from '~/store/matrix'
const birthday = ref('2006-07-31')
const yearNumber = ref('2025')
const yearNumberSt = ref('')
const leftNumber = ref('')
const upNumber = ref('')
const rightNumber = ref('')
const downNumber = ref('')
const centerNumber = ref('')

const matrixStore = useMatrix()

const calculate = () => {
    const arr = birthday.value.split('-')
    const day = arr[2]
    const month = arr[1]
    const year = arr[0]



    let yearNumberNum = (yearNumber.value).split('').reduce((a, el) => a + (+el), 0)
    yearNumberSt.value = yearNumberNum.toString()

    
    let leftNumberNum = (matrixStore.shared.dayNum + parseInt(yearNumberSt.value))
    if (leftNumberNum > 22) {
        leftNumberNum = (leftNumberNum).toString().split('').reduce((a, el) => a + (+el), 0)
    }
    leftNumber.value = leftNumberNum.toString()

    
    let upNumberNum = (matrixStore.shared.monthNum + parseInt(yearNumberSt.value))
    if (upNumberNum > 22) {
        upNumberNum = (upNumberNum).toString().split('').reduce((a, el) => a + (+el), 0)
    }
    upNumber.value = upNumberNum.toString()

    
    let rightNumberNum = (matrixStore.shared.yearNum + parseInt(yearNumberSt.value))
    if (rightNumberNum > 22) {
        rightNumberNum = (rightNumberNum).toString().split('').reduce((a, el) => a + (+el), 0)
    }
    rightNumber.value = rightNumberNum.toString()

    let downNumberNum = (matrixStore.shared.fateNum + parseInt(yearNumberSt.value))
    if (downNumberNum > 22) {
        downNumberNum = (downNumberNum).toString().split('').reduce((a, el) => a + (+el), 0)
    }
    downNumber.value = downNumberNum.toString()


    let centerNumberNum = (parseInt(leftNumber.value) + parseInt(upNumber.value) + parseInt(rightNumber.value) + parseInt(downNumber.value))
    if (centerNumberNum > 22) {
        centerNumberNum = (centerNumberNum).toString().split('').reduce((a, el) => a + (+el), 0)
    }
    centerNumber.value = centerNumberNum.toString()

}
</script>

<style scoped></style>
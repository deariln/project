<template>
    <div class="container">

        <form action="" class="form">
            <!-- <label for="name" class="form__label">Имя</label> -->
            <input class="input-text" type="text" placeholder="Имя" id="name" />


            <!-- <label for="birthday">Дата рождения:</label> -->
            <input class="input-date" type="date" id="birthday" name="birthday" v-model="birthday">
            {{ birthday }} {{ fateNum }}
        </form>
        <!-- <iframe style="width: 100%; height: 850px; border: none; overflow: hidden;" src="https://matrix-profi.ru/yourcalc"></iframe> -->
    </div>

    <div class="div-butt_fate">
        <button class="butt-fate" @click="calculate">Рассчитать</button>
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
        </circle>
        <text x="30" y="408" fill="#000000" style="font: bold 22px Cakra, serif;">{{ dayNum }}</text>

        <circle cx="400" cy="36" r="29" class="matrix-circle" style="stroke: rgb(174, 143, 190); fill: rgb(255, 255, 255);">
        </circle>
        <text x="393" y="42" fill="#000000" style="font: bold 22px Cakra, serif;">{{ monthNum }}</text>

        <circle cx="764" cy="400" r="29" class="matrix-circle" style="stroke: rgb(199, 90, 90); fill: rgb(255, 255, 255);">
        </circle>
        <text x="760" y="406" fill="#000000" style="font: bold 22px Cakra, serif;">{{ yearNum }}</text>

        <circle cx="400" cy="764" r="29" class="matrix-circle" style="stroke: rgb(199, 90, 90); fill: rgb(255, 255, 255);">
        </circle>
        <text x="390" y="770" fill="#000000" style="font: bold 22px Cakra, serif;">{{ fateNum }}</text>

        <circle cx="400" cy="400" r="29" class="matrix-circle"
            style="stroke: rgb(191, 153, 161); fill: rgb(255, 255, 255);"></circle>
        <text x="390" y="406" fill="#000000" style="font: bold 22px Cakra, serif;">{{ mainNum }}</text>

        <circle cx="142" cy="142" r="29" class="matrix-circle"
            style="stroke: rgb(174, 164, 158); fill: rgb(255, 255, 255);"></circle>
            <text x="133" y="147" fill="#000000" style="font: bold 22px Cakra, serif;">{{ leftUp }}</text>

        <circle cx="658" cy="142" r="29" class="matrix-circle"
            style="stroke: rgb(174, 164, 158); fill: rgb(255, 255, 255);"></circle>
            <text x="648" y="149" fill="#000000" style="font: bold 22px Cakra, serif;">{{ rightUp }}</text>

        <circle cx="658" cy="658" r="29" class="matrix-circle"
            style="stroke: rgb(174, 164, 158); fill: rgb(255, 255, 255);"></circle>
            <text x="650" y="650" fill="#000000" style="font: bold 22px Cakra, serif;">{{ rightDown }}</text>

        <circle cx="142" cy="658" r="29" class="matrix-circle"
            style="stroke: rgb(174, 164, 158); fill: rgb(255, 255, 255);"></circle>

        <circle cx="142" cy="400" r="22" class="matrix-circle"
            style="stroke: rgb(163, 176, 224); fill: rgb(255, 255, 255);"></circle>
            <text x="140" y="410" fill="#000000" style="font: bold 22px Cakra, serif;">{{ thirdLeft }}</text>

        <circle cx="217" cy="217" r="22" class="matrix-circle"
            style="stroke: rgb(174, 164, 158); fill: rgb(255, 255, 255);"></circle>
        <circle cx="400" cy="142" r="22" class="matrix-circle"
            style="stroke: rgb(163, 176, 224); fill: rgb(255, 255, 255);"></circle>
        <circle cx="583" cy="217" r="22" class="matrix-circle"
            style="stroke: rgb(174, 164, 158); fill: rgb(255, 255, 255);"></circle>

        <circle cx="658" cy="400" r="22" class="matrix-circle"
            style="stroke: rgb(242, 181, 125); fill: rgb(255, 255, 255);"></circle>

        <circle cx="450" cy="400" r="20" class="matrix-circle"
            style="stroke: rgb(117, 117, 117); fill: rgb(255, 255, 255);"></circle>
        <circle cx="496" cy="400" r="20" class="matrix-circle"
            style="stroke: rgb(117, 117, 117); fill: rgb(255, 255, 255);"></circle>

        <circle cx="583" cy="583" r="22" class="matrix-circle"
            style="stroke: rgb(174, 164, 158); fill: rgb(255, 255, 255);"></circle>
        <circle cx="400" cy="658" r="22" class="matrix-circle"
            style="stroke: rgb(242, 181, 125); fill: rgb(255, 255, 255);"></circle>
        <circle cx="217" cy="583" r="22" class="matrix-circle"
            style="stroke: rgb(174, 164, 158); fill: rgb(255, 255, 255);"></circle>
        <circle cx="92" cy="400" r="22" class="matrix-circle" style="stroke: rgb(90, 112, 199); fill: rgb(255, 255, 255);">
        </circle>
        <circle cx="182" cy="182" r="22" class="matrix-circle"
            style="stroke: rgb(174, 164, 158); fill: rgb(255, 255, 255);"></circle>
        <circle cx="400" cy="92" r="22" class="matrix-circle" style="stroke: rgb(90, 112, 199); fill: rgb(255, 255, 255);">
        </circle>
        <circle cx="617" cy="182" r="22" class="matrix-circle"
            style="stroke: rgb(174, 164, 158); fill: rgb(255, 255, 255);"></circle>
        <circle cx="707" cy="400" r="22" class="matrix-circle"
            style="stroke: rgb(174, 164, 158); fill: rgb(255, 255, 255);"></circle>
        <circle cx="617" cy="617" r="22" class="matrix-circle"
            style="stroke: rgb(174, 164, 158); fill: rgb(255, 255, 255);"></circle>
        <circle cx="400" cy="707" r="22" class="matrix-circle"
            style="stroke: rgb(174, 164, 158); fill: rgb(255, 255, 255);"></circle>
        <circle cx="182" cy="617" r="22" class="matrix-circle"
            style="stroke: rgb(174, 164, 158); fill: rgb(255, 255, 255);"></circle>
        <circle cx="264" cy="400" r="22" class="matrix-circle"
            style="stroke: rgb(137, 184, 151); fill: rgb(255, 255, 255);"></circle>
        <circle cx="400" cy="264" r="22" class="matrix-circle"
            style="stroke: rgb(137, 184, 151); fill: rgb(255, 255, 255);"></circle>
        <circle cx="496" cy="496" r="22" class="matrix-circle"
            style="stroke: rgb(174, 164, 158); fill: rgb(255, 255, 255);"></circle>
        <circle cx="576" cy="464" r="22" class="matrix-circle"
            style="stroke: rgb(174, 164, 158); fill: rgb(255, 255, 255);"></circle><text x="546" y="432" fill="#9DBC78"
            style="font: bold 22px Cakra, serif;">$</text>
        <circle cx="464" cy="576" r="22" class="matrix-circle"
            style="stroke: rgb(174, 164, 158); fill: rgb(255, 255, 255);"></circle><text x="434" y="544" fill="#EFA1A1"
            style="font: bold 30px Cakra, serif;">♥</text>
    </svg>

    <svg class="svg-two" viewBox="0 0 1024 300" fill="none" xmlns="http://www.w3.org/2000/svg">

        <text x="325" y="50" text-anchor="middle" class="title">Личное
            <tspan x="325" dy="1.2em">предназначение:</tspan>
        </text>
        <path d="M350 140 L460 175" class="line"></path>
        <path d="M350 210 L460 175" class="line"></path>
        <text x="300" y="145" text-anchor="end" class="title">Небо:</text>
        <circle cx="350" cy="140" r="25" class="circle"></circle>
        <text x="350" y="140" class="circle-label" id="svg31"></text>
        <text x="300" y="215" text-anchor="end" class="title">Земля:</text>
        <circle cx="350" cy="210" r="25" class="circle"></circle>
        <text x="350" y="210" class="circle-label" id="svg32"></text>
        <circle cx="460" cy="175" r="25" class="circle"></circle>
        <text x="460" y="175" class="circle-label" id="svg33"></text>
        <text x="710" y="50" text-anchor="middle" class="title">Социальное
            <tspan x="710" dy="1.2em">предназначение:</tspan>
        </text>
        <path d="M690 140 L800 175" class="line"></path>
        <path d="M690 210 L800 175" class="line"></path>
        <text x="640" y="145" text-anchor="end" class="title">М:</text>
        <circle cx="690" cy="140" r="25" class="circle"></circle>
        <text x="690" y="140" class="circle-label" id="svg34"></text>
        <text x="640" y="215" text-anchor="end" class="title">Ж:</text>
        <circle cx="690" cy="210" r="25" class="circle"></circle>
        <text x="690" y="210" class="circle-label" id="svg35"></text>
        <circle cx="800" cy="175" r="25" class="circle"></circle>
        <text x="800" y="175" class="circle-label" id="svg36"></text>
        <text x="400" y="290" text-anchor="end" class="title">Духовная гармония:</text>
        <circle cx="460" cy="270" r="25" class="circle"></circle>
        <text x="460" y="270" class="circle-label" id="svg37"></text>
        <text x="740" y="290" text-anchor="end" class="title">Планетарное:</text>
        <circle cx="800" cy="270" r="25" class="circle"></circle>
        <text x="800" y="270" class="circle-label" id="svg38"></text>
    </svg>
</template>

<script setup lang="ts">
const birthday = ref('')
const fateNum = ref('')
const dayNum = ref('')
const monthNum = ref('')
const yearNum = ref('')
const mainNum = ref('')
const leftUp = ref('')
const rightUp = ref('')
const rightDown = ref('')
const thirdLeft = ref('')

const calculate = () => {
    const arr = birthday.value.split('-')
    const day = arr[2]
    const month = arr[1]
    const year = arr[0]

    let fateNumNum = (day + month + year).split('').reduce((a, el) => a + (+el), 0)
    fateNum.value = fateNumNum.toString()
    let dayNumNum = (day).split('').reduce((a, el) => a + (+el), 0)
    // if (![11, 22, 33].includes(dayNumNum)) {
    //     dayNumNum = dayNumNum.toString().split('').reduce((a,el)=> a+(+el),0)
    // }
    dayNum.value = dayNumNum.toString()

    let monthNumNum = (month).split('').reduce((a, el) => a + (+el), 0)
    monthNum.value = monthNumNum.toString()


    let yearNumNum = (year).split('').reduce((a, el) => a + (+el), 0)
    yearNum.value = yearNumNum.toString()

    let mainNumNum = (parseInt(yearNum.value) + parseInt(monthNum.value) + parseInt(dayNum.value)).toString().split('').reduce((a, el) => a + parseInt(el), 0)
    let main = (mainNumNum + parseInt(fateNum.value)).toString().split('').reduce((a, el) => a + parseInt(el), 0);
    mainNum.value = main.toString();

    let leftUpNum = (dayNum.value + monthNum.value).toString().split('').reduce((a, el) => a + (+el), 0)
    leftUp.value = leftUpNum.toString()

    let rightUpNum = (monthNum.value + yearNum.value).toString().split('').reduce((a, el) => a + (+el), 0)
    rightUp.value = rightUpNum.toString()

    // let rightDownNum = (yearNum.value + fateNum.value).toString().split('').reduce((a, el) => a + (+el), 0)
    // let rightDownNumNum = (rightDownNum + (fateNum.value)).toString().split('').reduce((a, el) => a + (+el), 0)
    // rightDown.value = rightDownNumNum.toString()
    



}
</script>



<style scoped></style>
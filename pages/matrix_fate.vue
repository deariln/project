<template>
    <div class="container">

        <form action="" class="form">
            <!-- <label for="name" class="form__label">Имя</label> -->
            <input class="input-text" type="text" placeholder="Имя" id="name" />


            <!-- <label for="birthday">Дата рождения:</label> -->
            <input class="input-date" type="date" id="birthday" name="birthday" v-model="birthday">
        </form>
        <!-- <iframe style="width: 100%; height: 850px; border: none; overflow: hidden;" src="https://matrix-profi.ru/yourcalc"></iframe> -->
    </div>

    <div class="div-butt_fate">
        <button class="butt-fate" @click="calculate">Рассчитать</button>
    </div>

    
    <!-- <div style="margin: 10px 0; display: flex; align-items: center; justify-content: center; gap: 10px;">
    <span style="font-size:16px;">ПРОГНОСТИКА</span>
    <label class="toggle-switch">
      <input type="checkbox" id="extraPointsToggle">
      <span class="slider"></span>
    </label>
  </div> -->


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
        <text x="30" y="408" fill="#000000" style="font: bold 22px Cakra, serif;">{{ matrix.dayNum }}</text>

        <circle cx="400" cy="36" r="29" class="matrix-circle" style="stroke: rgb(174, 143, 190); fill: rgb(255, 255, 255);">
        </circle>
        <text x="393" y="42" fill="#000000" style="font: bold 22px Cakra, serif;">{{ matrix.monthNum }}</text>

        <circle cx="764" cy="400" r="29" class="matrix-circle" style="stroke: rgb(199, 90, 90); fill: rgb(255, 255, 255);">
        </circle>
        <text x="760" y="406" fill="#000000" style="font: bold 22px Cakra, serif;">{{ matrix.yearNum }}</text>

        <circle cx="400" cy="764" r="29" class="matrix-circle" style="stroke: rgb(199, 90, 90); fill: rgb(255, 255, 255);">
        </circle>
        <text x="390" y="770" fill="#000000" style="font: bold 22px Cakra, serif;">{{ matrix.fateNum }}</text>

        <circle cx="400" cy="400" r="29" class="matrix-circle"
            style="stroke: rgb(191, 153, 161); fill: rgb(255, 255, 255);"></circle>
        <text x="390" y="406" fill="#000000" style="font: bold 22px Cakra, serif;">{{ matrix.mainNum }}</text>

        <circle cx="142" cy="142" r="29" class="matrix-circle"
            style="stroke: rgb(174, 164, 158); fill: rgb(255, 255, 255);"></circle>
        <text x="133" y="147" fill="#000000" style="font: bold 22px Cakra, serif;">{{ matrix.leftUp }}</text>

        <circle cx="658" cy="142" r="29" class="matrix-circle"
            style="stroke: rgb(174, 164, 158); fill: rgb(255, 255, 255);"></circle>
        <text x="648" y="149" fill="#000000" style="font: bold 22px Cakra, serif;">{{ matrix.rightUp }}</text>

        <circle cx="658" cy="658" r="29" class="matrix-circle"
            style="stroke: rgb(174, 164, 158); fill: rgb(255, 255, 255);"></circle>
        <text x="652" y="662" fill="#000000" style="font: bold 22px Cakra, serif;">{{ matrix.rightDown }}</text>

        <circle cx="142" cy="658" r="29" class="matrix-circle"
            style="stroke: rgb(174, 164, 158); fill: rgb(255, 255, 255);"></circle>
            <text x="130" y="662" fill="#000000" style="font: bold 22px Cakra, serif;">{{ matrix.leftDown }}</text>

        <circle cx="142" cy="400" r="22" class="matrix-circle"
            style="stroke: rgb(163, 176, 224); fill: rgb(255, 255, 255);"></circle>
        <text x="133" y="405" fill="#000000" style="font: bold 22px Cakra, serif;">{{ matrix.thirdLeft }}</text>

        <circle cx="217" cy="217" r="22" class="matrix-circle"
            style="stroke: rgb(174, 164, 158); fill: rgb(255, 255, 255);"></circle>
            <text x="205" y="223" fill="#000000" style="font: bold 22px Cakra, serif;">{{ matrix.thirdLeftUp }}</text>

        <circle cx="400" cy="142" r="22" class="matrix-circle"
            style="stroke: rgb(163, 176, 224); fill: rgb(255, 255, 255);"></circle>
            <text x="391" y="150" fill="#000000" style="font: bold 22px Cakra, serif;">{{ matrix.thirdCenter }}</text>

        <circle cx="583" cy="217" r="22" class="matrix-circle"
            style="stroke: rgb(174, 164, 158); fill: rgb(255, 255, 255);"></circle>
            <text x="574" y="224" fill="#000000" style="font: bold 22px Cakra, serif;">{{ matrix.thirdRightUp }}</text>

        <circle cx="658" cy="400" r="22" class="matrix-circle"
            style="stroke: rgb(242, 181, 125); fill: rgb(255, 255, 255);"></circle>
            <text x="648" y="405" fill="#000000" style="font: bold 22px Cakra, serif;">{{ matrix.thirdRight }}</text>

        <circle cx="450" cy="400" r="20" class="matrix-circle"
            style="stroke: rgb(117, 117, 117); fill: rgb(255, 255, 255);"></circle>
            <text x="445" y="405" fill="#000000" style="font: bold 22px Cakra, serif;">{{ matrix.secondMainRight }}</text>

        <circle cx="496" cy="400" r="20" class="matrix-circle"
            style="stroke: rgb(117, 117, 117); fill: rgb(255, 255, 255);"></circle>
            <text x="489" y="406" fill="#000000" style="font: bold 22px Cakra, serif;">{{ matrix.thirdMainRight }}</text>


        <circle cx="583" cy="583" r="22" class="matrix-circle"
            style="stroke: rgb(174, 164, 158); fill: rgb(255, 255, 255);"></circle>
            <text x="574" y="589" fill="#000000" style="font: bold 22px Cakra, serif;">{{ matrix.thirdRightDown }}</text>

        <circle cx="400" cy="658" r="22" class="matrix-circle"
            style="stroke: rgb(242, 181, 125); fill: rgb(255, 255, 255);"></circle>
            <text x="395" y="663" fill="#000000" style="font: bold 22px Cakra, serif;">{{ matrix.thirdDown }}</text>

        <circle cx="217" cy="583" r="22" class="matrix-circle"
            style="stroke: rgb(174, 164, 158); fill: rgb(255, 255, 255);"></circle>
            <text x="210" y="588" fill="#000000" style="font: bold 22px Cakra, serif;">{{ matrix.thirdLeftDown }}</text>

        <circle cx="92" cy="400" r="22" class="matrix-circle" style="stroke: rgb(90, 112, 199); fill: rgb(255, 255, 255);">
        </circle>
        <text x="84" y="405" fill="#000000" style="font: bold 22px Cakra, serif;">{{ matrix.secondLeft }}</text>

        <circle cx="182" cy="182" r="22" class="matrix-circle"
            style="stroke: rgb(174, 164, 158); fill: rgb(255, 255, 255);"></circle>
            <text x="175" y="189" fill="#000000" style="font: bold 22px Cakra, serif;">{{ matrix.secondLeftUp }}</text>

        <circle cx="400" cy="92" r="22" class="matrix-circle" style="stroke: rgb(90, 112, 199); fill: rgb(255, 255, 255);">
        </circle>
        <text x="393" y="100" fill="#000000" style="font: bold 22px Cakra, serif;">{{ matrix.secondCenter }}</text>

        <circle cx="617" cy="182" r="22" class="matrix-circle"
            style="stroke: rgb(174, 164, 158); fill: rgb(255, 255, 255);"></circle>
            <text x="610" y="190" fill="#000000" style="font: bold 22px Cakra, serif;">{{ matrix.secondRightUp }}</text>

        <circle cx="707" cy="400" r="22" class="matrix-circle"
            style="stroke: rgb(174, 164, 158); fill: rgb(255, 255, 255);"></circle>
            <text x="700" y="407" fill="#000000" style="font: bold 22px Cakra, serif;">{{ matrix.secondRight }}</text>

        <circle cx="617" cy="617" r="22" class="matrix-circle"
            style="stroke: rgb(174, 164, 158); fill: rgb(255, 255, 255);"></circle>
            <text x="608" y="622" fill="#000000" style="font: bold 22px Cakra, serif;">{{ matrix.secondRightDown }}</text>

        <circle cx="400" cy="707" r="22" class="matrix-circle"
            style="stroke: rgb(174, 164, 158); fill: rgb(255, 255, 255);"></circle>
            <text x="390" y="712" fill="#000000" style="font: bold 22px Cakra, serif;">{{ matrix.secondDown }}</text>

        <circle cx="182" cy="617" r="22" class="matrix-circle"
            style="stroke: rgb(174, 164, 158); fill: rgb(255, 255, 255);"></circle>
            <text x="173" y="623" fill="#000000" style="font: bold 22px Cakra, serif;">{{ matrix.secondLeftDown }}</text>

        <circle cx="264" cy="400" r="22" class="matrix-circle"
            style="stroke: rgb(137, 184, 151); fill: rgb(255, 255, 255);"></circle>
            <text x="260" y="408" fill="#000000" style="font: bold 22px Cakra, serif;">{{ matrix.secondMainLeft }}</text>

        <circle cx="400" cy="264" r="22" class="matrix-circle"
            style="stroke: rgb(137, 184, 151); fill: rgb(255, 255, 255);"></circle>
            <text x="390" y="270" fill="#000000" style="font: bold 22px Cakra, serif;">{{ matrix.secondMainUp }}</text>

        <circle cx="496" cy="496" r="22" class="matrix-circle"
            style="stroke: rgb(174, 164, 158); fill: rgb(255, 255, 255);"></circle>
            <text x="486" y="502" fill="#000000" style="font: bold 22px Cakra, serif;">{{ matrix.betweenHeartAndDollar }}</text>

        <circle cx="576" cy="464" r="22" class="matrix-circle"
            style="stroke: rgb(174, 164, 158); fill: rgb(255, 255, 255);"></circle><text x="546" y="432" fill="#9DBC78"
            style="font: bold 22px Cakra, serif;">$</text>
            <text x="570" y="470" fill="#000000" style="font: bold 22px Cakra, serif;">{{ matrix.dollar }}</text>


        <circle cx="464" cy="576" r="22" class="matrix-circle"
            style="stroke: rgb(174, 164, 158); fill: rgb(255, 255, 255);"></circle><text x="434" y="544" fill="#EFA1A1"
            style="font: bold 30px Cakra, serif;">♥</text>
            <text x="457" y="580" fill="#000000" style="font: bold 22px Cakra, serif;">{{ matrix.heart }}</text>
    </svg>

    <svg class="svg-two" viewBox="0 0 1024 300" fill="none" xmlns="http://www.w3.org/2000/svg">

        <text x="325" y="50" text-anchor="middle" class="title">Личное
            <tspan x="325" dy="1.2em">предназначение:</tspan>
        </text>
        <path d="M350 140 L460 175" class="line"></path>
        <path d="M350 210 L460 175" class="line"></path>
        <text x="300" y="145" text-anchor="end" class="title">Небо:</text>
        <circle cx="350" cy="140" r="25" class="circle"></circle>
        <text x="345" y="145" fill="#000000" style="font: bold 22px Cakra, serif;">{{ matrix.sky }}</text>

        <text x="350" y="140" class="circle-label" id="svg31"></text>
        <text x="300" y="215" text-anchor="end" class="title">Земля:</text>
        <circle cx="350" cy="210" r="25" class="circle"></circle>
        <text x="340" y="215" fill="#000000" style="font: bold 22px Cakra, serif;">{{ matrix.earth }}</text>

        <text x="350" y="210" class="circle-label" id="svg32"></text>
        <circle cx="460" cy="175" r="25" class="circle"></circle>
        <text x="450" y="180" fill="#000000" style="font: bold 22px Cakra, serif;">{{ matrix.skyEarth }}</text>

        <text x="460" y="175" class="circle-label" id="svg33"></text>
        <text x="710" y="50" text-anchor="middle" class="title">Социальное
            <tspan x="710" dy="1.2em">предназначение:</tspan>
        </text>
        <path d="M690 140 L800 175" class="line"></path>
        <path d="M690 210 L800 175" class="line"></path>
        <text x="640" y="145" text-anchor="end" class="title">М:</text>
        <circle cx="690" cy="140" r="25" class="circle"></circle>
        <text x="681" y="145" fill="#000000" style="font: bold 22px Cakra, serif;">{{ matrix.manLine }}</text>

        <text x="690" y="140" class="circle-label" id="svg34"></text>
        <text x="640" y="215" text-anchor="end" class="title">Ж:</text>
        <circle cx="690" cy="210" r="25" class="circle"></circle>
        <text x="680" y="215" fill="#000000" style="font: bold 22px Cakra, serif;">{{ matrix.womanLine }}</text>

        <text x="690" y="210" class="circle-label" id="svg35"></text>
        <circle cx="800" cy="175" r="25" class="circle"></circle>
        <text x="795" y="182" fill="#000000" style="font: bold 22px Cakra, serif;">{{ matrix.manWoman }}</text>

        <text x="800" y="175" class="circle-label" id="svg36"></text>
        <text x="400" y="290" text-anchor="end" class="title">Духовная гармония:</text>
        <circle cx="460" cy="270" r="25" class="circle"></circle>
        <text x="455" y="275" fill="#000000" style="font: bold 22px Cakra, serif;">{{ matrix.spiritual }}</text>

        <text x="460" y="270" class="circle-label" id="svg37"></text>
        <text x="740" y="290" text-anchor="end" class="title">Планетарное:</text>
        <circle cx="800" cy="270" r="25" class="circle"></circle>
        <text x="791" y="275" fill="#000000" style="font: bold 22px Cakra, serif;">{{ matrix.planetary }}</text>

        <text x="800" y="270" class="circle-label" id="svg38"></text>
    </svg>


<!-- <text x="314.5667701651638"
        y="63.53274348956283" fill="#DFC4C9" font-size="15px" text-anchor="end"
        transform="rotate(67.66455743469609,314.5667701651638,63.53274348956283)"
        style="font-family: Montserrat, sans-serif;">7</text> -->

</template>

<script setup lang="ts">
import {useMatrix} from '~/store/matrix'
const birthday = ref('2006-07-31')
const matrixStore = useMatrix()
const matrix = ref({} as any)

const calculate = () => {
    matrix.value = matrixStore.calculateMatrix(birthday.value)
}
</script>

<style scoped></style>
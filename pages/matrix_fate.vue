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
        <text x="652" y="662" fill="#000000" style="font: bold 22px Cakra, serif;">{{ rightDown }}</text>

        <circle cx="142" cy="658" r="29" class="matrix-circle"
            style="stroke: rgb(174, 164, 158); fill: rgb(255, 255, 255);"></circle>
            <text x="130" y="662" fill="#000000" style="font: bold 22px Cakra, serif;">{{ leftDown }}</text>

        <circle cx="142" cy="400" r="22" class="matrix-circle"
            style="stroke: rgb(163, 176, 224); fill: rgb(255, 255, 255);"></circle>
        <text x="133" y="405" fill="#000000" style="font: bold 22px Cakra, serif;">{{ thirdLeft }}</text>

        <circle cx="217" cy="217" r="22" class="matrix-circle"
            style="stroke: rgb(174, 164, 158); fill: rgb(255, 255, 255);"></circle>
            <text x="205" y="223" fill="#000000" style="font: bold 22px Cakra, serif;">{{ thirdLeftUp }}</text>

        <circle cx="400" cy="142" r="22" class="matrix-circle"
            style="stroke: rgb(163, 176, 224); fill: rgb(255, 255, 255);"></circle>
            <text x="391" y="150" fill="#000000" style="font: bold 22px Cakra, serif;">{{ thirdCenter }}</text>

        <circle cx="583" cy="217" r="22" class="matrix-circle"
            style="stroke: rgb(174, 164, 158); fill: rgb(255, 255, 255);"></circle>
            <text x="574" y="224" fill="#000000" style="font: bold 22px Cakra, serif;">{{ thirdRightUp }}</text>

        <circle cx="658" cy="400" r="22" class="matrix-circle"
            style="stroke: rgb(242, 181, 125); fill: rgb(255, 255, 255);"></circle>
            <text x="648" y="405" fill="#000000" style="font: bold 22px Cakra, serif;">{{ thirdRight }}</text>

        <circle cx="450" cy="400" r="20" class="matrix-circle"
            style="stroke: rgb(117, 117, 117); fill: rgb(255, 255, 255);"></circle>
            <text x="445" y="405" fill="#000000" style="font: bold 22px Cakra, serif;">{{ secondMainRight }}</text>

        <circle cx="496" cy="400" r="20" class="matrix-circle"
            style="stroke: rgb(117, 117, 117); fill: rgb(255, 255, 255);"></circle>
            <text x="489" y="406" fill="#000000" style="font: bold 22px Cakra, serif;">{{ thirdMainRight }}</text>


        <circle cx="583" cy="583" r="22" class="matrix-circle"
            style="stroke: rgb(174, 164, 158); fill: rgb(255, 255, 255);"></circle>
            <text x="574" y="589" fill="#000000" style="font: bold 22px Cakra, serif;">{{ thirdRightDown }}</text>

        <circle cx="400" cy="658" r="22" class="matrix-circle"
            style="stroke: rgb(242, 181, 125); fill: rgb(255, 255, 255);"></circle>
            <text x="395" y="663" fill="#000000" style="font: bold 22px Cakra, serif;">{{ thirdDown }}</text>

        <circle cx="217" cy="583" r="22" class="matrix-circle"
            style="stroke: rgb(174, 164, 158); fill: rgb(255, 255, 255);"></circle>
            <text x="210" y="588" fill="#000000" style="font: bold 22px Cakra, serif;">{{ thirdLeftDown }}</text>

        <circle cx="92" cy="400" r="22" class="matrix-circle" style="stroke: rgb(90, 112, 199); fill: rgb(255, 255, 255);">
        </circle>
        <text x="84" y="405" fill="#000000" style="font: bold 22px Cakra, serif;">{{ secondLeft }}</text>

        <circle cx="182" cy="182" r="22" class="matrix-circle"
            style="stroke: rgb(174, 164, 158); fill: rgb(255, 255, 255);"></circle>
            <text x="175" y="189" fill="#000000" style="font: bold 22px Cakra, serif;">{{ secondLeftUp }}</text>

        <circle cx="400" cy="92" r="22" class="matrix-circle" style="stroke: rgb(90, 112, 199); fill: rgb(255, 255, 255);">
        </circle>
        <text x="393" y="100" fill="#000000" style="font: bold 22px Cakra, serif;">{{ secondCenter }}</text>

        <circle cx="617" cy="182" r="22" class="matrix-circle"
            style="stroke: rgb(174, 164, 158); fill: rgb(255, 255, 255);"></circle>
            <text x="610" y="190" fill="#000000" style="font: bold 22px Cakra, serif;">{{ secondRightUp }}</text>

        <circle cx="707" cy="400" r="22" class="matrix-circle"
            style="stroke: rgb(174, 164, 158); fill: rgb(255, 255, 255);"></circle>
            <text x="700" y="407" fill="#000000" style="font: bold 22px Cakra, serif;">{{ secondRight }}</text>

        <circle cx="617" cy="617" r="22" class="matrix-circle"
            style="stroke: rgb(174, 164, 158); fill: rgb(255, 255, 255);"></circle>
            <text x="608" y="622" fill="#000000" style="font: bold 22px Cakra, serif;">{{ secondRightDown }}</text>

        <circle cx="400" cy="707" r="22" class="matrix-circle"
            style="stroke: rgb(174, 164, 158); fill: rgb(255, 255, 255);"></circle>
            <text x="390" y="712" fill="#000000" style="font: bold 22px Cakra, serif;">{{ secondDown }}</text>

        <circle cx="182" cy="617" r="22" class="matrix-circle"
            style="stroke: rgb(174, 164, 158); fill: rgb(255, 255, 255);"></circle>
            <text x="173" y="623" fill="#000000" style="font: bold 22px Cakra, serif;">{{ secondLeftDown }}</text>

        <circle cx="264" cy="400" r="22" class="matrix-circle"
            style="stroke: rgb(137, 184, 151); fill: rgb(255, 255, 255);"></circle>
            <text x="260" y="408" fill="#000000" style="font: bold 22px Cakra, serif;">{{ secondMainLeft }}</text>

        <circle cx="400" cy="264" r="22" class="matrix-circle"
            style="stroke: rgb(137, 184, 151); fill: rgb(255, 255, 255);"></circle>
            <text x="390" y="270" fill="#000000" style="font: bold 22px Cakra, serif;">{{ secondMainUp }}</text>

        <circle cx="496" cy="496" r="22" class="matrix-circle"
            style="stroke: rgb(174, 164, 158); fill: rgb(255, 255, 255);"></circle>
            <text x="486" y="502" fill="#000000" style="font: bold 22px Cakra, serif;">{{ betweenHeartAndDollar }}</text>

        <circle cx="576" cy="464" r="22" class="matrix-circle"
            style="stroke: rgb(174, 164, 158); fill: rgb(255, 255, 255);"></circle><text x="546" y="432" fill="#9DBC78"
            style="font: bold 22px Cakra, serif;">$</text>
            <text x="570" y="470" fill="#000000" style="font: bold 22px Cakra, serif;">{{ dollar }}</text>


        <circle cx="464" cy="576" r="22" class="matrix-circle"
            style="stroke: rgb(174, 164, 158); fill: rgb(255, 255, 255);"></circle><text x="434" y="544" fill="#EFA1A1"
            style="font: bold 30px Cakra, serif;">♥</text>
            <text x="457" y="580" fill="#000000" style="font: bold 22px Cakra, serif;">{{ heart }}</text>
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


<!-- <text x="314.5667701651638"
        y="63.53274348956283" fill="#DFC4C9" font-size="15px" text-anchor="end"
        transform="rotate(67.66455743469609,314.5667701651638,63.53274348956283)"
        style="font-family: Montserrat, sans-serif;">7</text> -->

</template>

<script setup lang="ts">
const birthday = ref('2006-07-31')
const fateNum = ref('')
const dayNum = ref('')
const monthNum = ref('')
const yearNum = ref('')
const mainNum = ref('')
const leftUp = ref('')
const rightUp = ref('')
const rightDown = ref('')
const leftDown = ref('')
const thirdLeft = ref('')
const secondLeft = ref('')
const thirdCenter = ref('')
const secondCenter = ref('')
const thirdRight = ref('')
const secondRight = ref('')
const thirdDown = ref('')
const secondDown = ref('')
const secondMainRight = ref('')
const thirdLeftUp = ref('')
const secondLeftUp = ref('')
const thirdRightUp = ref('')
const secondRightUp = ref('')
const thirdRightDown = ref('')
const secondRightDown = ref('')
const thirdLeftDown = ref('')
const secondLeftDown = ref('')
const betweenHeartAndDollar = ref('')
const heart = ref('')
const dollar = ref('')
const secondMainLeft = ref('')
const thirdMainRight = ref('')
const secondMainUp = ref('')

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
    
    
    let rightDownNum = (parseInt(yearNum.value) + parseInt(fateNum.value))
    if (rightDownNum > 22) {
        rightDownNum = (rightDownNum).toString().split('').reduce((a, el) => a + (+el), 0)
    }
    rightDown.value = rightDownNum.toString()

     
    let leftDownNum = (parseInt(dayNum.value) + parseInt(fateNum.value))
    if (leftDownNum > 22) {
        leftDownNum = (leftDownNum).toString().split('').reduce((a, el) => a + (+el), 0)
    }
    leftDown.value = leftDownNum.toString()
    
      
    let thirdLeftNum = (parseInt(dayNum.value) + parseInt(mainNum.value))
    if (thirdLeftNum > 22) {
        thirdLeftNum = (thirdLeftNum).toString().split('').reduce((a, el) => a + (+el), 0)
    }
    thirdLeft.value = thirdLeftNum.toString()
    
          
    let secondLeftNum = (parseInt(dayNum.value) + parseInt(thirdLeft.value))
    if (secondLeftNum > 22) {
        secondLeftNum = (secondLeftNum).toString().split('').reduce((a, el) => a + (+el), 0)
    }
    secondLeft.value = secondLeftNum.toString()

    
    let thirdCenterNum = (parseInt(monthNum.value) + parseInt(mainNum.value))
    if (thirdCenterNum > 22) {
        thirdCenterNum = (thirdCenterNum).toString().split('').reduce((a, el) => a + (+el), 0)
    }
    thirdCenter.value = thirdCenterNum.toString()

        
    let secondCenterNum = (parseInt(monthNum.value) + parseInt(thirdCenter.value))
    if (secondCenterNum > 22) {
        secondCenterNum = (secondCenterNum).toString().split('').reduce((a, el) => a + (+el), 0)
    }
    secondCenter.value = secondCenterNum.toString()


    let thirdRightNum = (parseInt(yearNum.value) + parseInt(mainNum.value))
    if (thirdRightNum > 22) {
        thirdRightNum = (thirdRightNum).toString().split('').reduce((a, el) => a + (+el), 0)
    }
    thirdRight.value = thirdRightNum.toString()


    let secondRightNum = (parseInt(yearNum.value) + parseInt(thirdRight.value))
    if (secondRightNum > 22) {
        secondRightNum = (secondRightNum).toString().split('').reduce((a, el) => a + (+el), 0)
    }
    secondRight.value = secondRightNum.toString()


    let thirdDownNum = (parseInt(fateNum.value) + parseInt(mainNum.value))
    if (thirdDownNum > 22) {
        thirdDownNum = (thirdDownNum).toString().split('').reduce((a, el) => a + (+el), 0)
    }
    thirdDown.value = thirdDownNum.toString()


    let secondDownNum = (parseInt(fateNum.value) + parseInt(thirdDown.value))
    if (secondDownNum > 22) {
        secondDownNum = (secondDownNum).toString().split('').reduce((a, el) => a + (+el), 0)
    }
    secondDown.value = secondDownNum.toString()

    
    let secondMainRightNum = (parseInt(leftDown.value) + parseInt(leftUp.value) + parseInt(rightUp.value) + parseInt(rightDown.value))
    if (secondMainRightNum > 22) {
        secondMainRightNum = (secondMainRightNum).toString().split('').reduce((a, el) => a + (+el), 0)
    }
    secondMainRight.value = secondMainRightNum.toString()

       
    let thirdLeftUpNum = (parseInt(leftUp.value) + parseInt(secondMainRight.value))
    if (thirdLeftUpNum > 22) {
        thirdLeftUpNum = (thirdLeftUpNum).toString().split('').reduce((a, el) => a + (+el), 0)
    }
    thirdLeftUp.value = thirdLeftUpNum.toString()

         
    let secondLeftUpNum = (parseInt(leftUp.value) + parseInt(thirdLeftUp .value))
    if (secondLeftUpNum > 22) {
        secondLeftUpNum = (secondLeftUpNum).toString().split('').reduce((a, el) => a + (+el), 0)
    }
    secondLeftUp.value = secondLeftUpNum.toString()


    let thirdRightUpNum = (parseInt(rightUp.value) + parseInt(secondMainRight .value))
    if (thirdRightUpNum > 22) {
        thirdRightUpNum = (thirdRightUpNum).toString().split('').reduce((a, el) => a + (+el), 0)
    }
    thirdRightUp.value = thirdRightUpNum.toString()

    
    let secondRightUpNum = (parseInt(rightUp.value) + parseInt(thirdRightUp .value))
    if (secondRightUpNum > 22) {
        secondRightUpNum = (secondRightUpNum).toString().split('').reduce((a, el) => a + (+el), 0)
    }
    secondRightUp.value = secondRightUpNum.toString()

        
    let thirdRightDownNum = (parseInt(rightDown.value) + parseInt(secondMainRight .value))
    if (thirdRightDownNum > 22) {
        thirdRightDownNum = (thirdRightDownNum).toString().split('').reduce((a, el) => a + (+el), 0)
    }
    thirdRightDown.value = thirdRightDownNum.toString()


    let secondRightDownNum = (parseInt(rightDown.value) + parseInt(thirdRightDown .value))
    if (secondRightDownNum > 22) {
        secondRightDownNum = (secondRightDownNum).toString().split('').reduce((a, el) => a + (+el), 0)
    }
    secondRightDown.value = secondRightDownNum.toString()


    let thirdLeftDownNum = (parseInt(leftDown.value) + parseInt(secondMainRight .value))
    if (thirdLeftDownNum > 22) {
        thirdLeftDownNum = (thirdLeftDownNum).toString().split('').reduce((a, el) => a + (+el), 0)
    }
    thirdLeftDown.value = thirdLeftDownNum.toString()

        
    let secondLeftDownNum = (parseInt(leftDown.value) + parseInt(thirdLeftDown .value))
    if (secondLeftDownNum > 22) {
        secondLeftDownNum = (secondLeftDownNum).toString().split('').reduce((a, el) => a + (+el), 0)
    }
    secondLeftDown.value = secondLeftDownNum.toString()

            
    let betweenHeartAndDollarNum = (parseInt(thirdDown.value) + parseInt( thirdRight.value))
    if (betweenHeartAndDollarNum > 22) {
        betweenHeartAndDollarNum = (betweenHeartAndDollarNum).toString().split('').reduce((a, el) => a + (+el), 0)
    }
    betweenHeartAndDollar.value = betweenHeartAndDollarNum.toString()

    let heartNum = (parseInt(betweenHeartAndDollar.value) + parseInt( thirdDown.value))
    if (heartNum > 22) {
        heartNum = (heartNum).toString().split('').reduce((a, el) => a + (+el), 0)
    }
    heart.value = heartNum.toString()

    
    let dollarNum = (parseInt(betweenHeartAndDollar.value) + parseInt( thirdRight.value))
    if (dollarNum > 22) {
        dollarNum = (dollarNum).toString().split('').reduce((a, el) => a + (+el), 0)
    }
    dollar.value = dollarNum.toString()

    let secondMainLeftNum = (parseInt(thirdLeft.value) + parseInt( mainNum.value))
    if (secondMainLeftNum > 22) {
        secondMainLeftNum = (secondMainLeftNum).toString().split('').reduce((a, el) => a + (+el), 0)
    }
    secondMainLeft.value = secondMainLeftNum.toString()

    let thirdMainRightNum = (parseInt(mainNum.value) + parseInt( secondMainRight.value))
    if (thirdMainRightNum > 22) {
        thirdMainRightNum = (thirdMainRightNum).toString().split('').reduce((a, el) => a + (+el), 0)
    }
    thirdMainRight.value = thirdMainRightNum.toString()

    
    let secondMainUpNum = (parseInt(mainNum.value) + parseInt( thirdCenter.value))
    if (secondMainUpNum > 22) {
        secondMainUpNum = (secondMainUpNum).toString().split('').reduce((a, el) => a + (+el), 0)
    }
    secondMainUp.value = secondMainUpNum.toString()
}
</script>



<style scoped></style>
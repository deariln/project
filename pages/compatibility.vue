<template>
    <div class="container">

        <form action="" class="form">
            <!-- <label for="birthday" class="form__label">Имя первого парнтера</label> -->
            <input class="input-date" type="date" id="birthday_one" name="birthday" v-model="birthday">
            {{ birthday }} {{ fateNum }}

            <!-- <label for="birthday">Дата рождения:</label> -->
            <input class="input-date" type="date" id="birthday_two" name="birthday" v-model="birthdayTwo">
            {{ birthdayTwo }} {{ fateNum }}
        </form>
    </div>
    <div class="div-butt_fate">
        <button class="butt-fate" @click="calculate">Рассчитать</button>
    </div>
        
    <div class="container-partners">
        <div class="parnter1">
            
            <div class="p-one_partner">
                <p>Матрица первого партнера</p>
            </div>
            <svg id="partner1SVG" viewBox="0 0 800 800" preserveAspectRatio="xMidYMid meet">
                <line id="lineC-1-2" x1="36" y1="400" x2="400" y2="36" class="line-segment"
                    style="stroke-dasharray: 514.774; stroke-dashoffset: 0; stroke: rgb(64, 62, 63); fill: none;">
                </line>
                <line id="lineC-2-3" x1="400" y1="36" x2="764" y2="400" class="line-segment"
                    style="stroke-dasharray: 514.774; stroke-dashoffset: 0; stroke: rgb(64, 62, 63); fill: none;">
                </line>

                <line id="lineC-3-4" x1="764" y1="400" x2="400" y2="764" class="line-segment"
                    style="stroke-dasharray: 514.774; stroke-dashoffset: 0; stroke: rgb(64, 62, 63); fill: none;">
                </line>

                <line id="lineC-4-1" x1="400" y1="764" x2="36" y2="400" class="line-segment"
                    style="stroke-dasharray: 514.774; stroke-dashoffset: 0; stroke: rgb(64, 62, 63); fill: none;">
                </line>

                <line id="lineC-1-5" x1="36" y1="400" x2="400" y2="400" class="line-segment"
                    style="stroke-dasharray: 364; stroke-dashoffset: 0; stroke: rgb(64, 62, 63); fill: none;"></line>

                <line id="lineC-2-5" x1="400" y1="36" x2="400" y2="400" class="line-segment"
                    style="stroke-dasharray: 364; stroke-dashoffset: 0; stroke: rgb(64, 62, 63); fill: none;"></line>

                <line id="lineC-3-5" x1="764" y1="400" x2="400" y2="400" class="line-segment"
                    style="stroke-dasharray: 364; stroke-dashoffset: 0; stroke: rgb(64, 62, 63); fill: none;"></line>

                <line id="lineC-4-5" x1="400" y1="764" x2="400" y2="400" class="line-segment"
                    style="stroke-dasharray: 364; stroke-dashoffset: 0; stroke: rgb(64, 62, 63); fill: none;"></line>

                <line id="lineC-1-6" x1="36" y1="400" x2="142" y2="142" class="line-segment"
                    style="stroke-dasharray: 278.927; stroke-dashoffset: 0; stroke: rgb(64, 62, 63); fill: none;">
                </line>

                <line id="lineC-6-2" x1="142" y1="142" x2="400" y2="36" class="line-segment"
                    style="stroke-dasharray: 278.927; stroke-dashoffset: 0; stroke: rgb(64, 62, 63); fill: none;">
                </line>

                <line id="lineC-2-7" x1="400" y1="36" x2="658" y2="142" class="line-segment"
                    style="stroke-dasharray: 278.927; stroke-dashoffset: 0; stroke: rgb(64, 62, 63); fill: none;">
                </line>

                <line id="lineC-7-3" x1="658" y1="142" x2="764" y2="400" class="line-segment"
                    style="stroke-dasharray: 278.927; stroke-dashoffset: 0; stroke: rgb(64, 62, 63); fill: none;">
                </line>

                <line id="lineC-3-8" x1="764" y1="400" x2="658" y2="658" class="line-segment"
                    style="stroke-dasharray: 278.927; stroke-dashoffset: 0; stroke:rgb(64, 62, 63); fill: none;"></line>

                <line id="lineC-8-4" x1="658" y1="658" x2="400" y2="764" class="line-segment"
                    style="stroke-dasharray: 278.927; stroke-dashoffset: 0; stroke: rgb(64, 62, 63); fill: none;">
                </line>

                <line id="lineC-4-9" x1="400" y1="764" x2="142" y2="658" class="line-segment"
                    style="stroke-dasharray: 278.927; stroke-dashoffset: 0; stroke: rgb(64, 62, 63); fill: none;">
                </line>

                <line id="lineC-9-1" x1="142" y1="658" x2="36" y2="400" class="line-segment"
                    style="stroke-dasharray: 278.927; stroke-dashoffset: 0; stroke:rgb(64, 62, 63); fill: none;"></line>

                <line id="lineC-6-7" x1="142" y1="142" x2="658" y2="142" class="line-segment"
                    style="stroke-dasharray: 516; stroke-dashoffset: 0; stroke: rgb(64, 62, 63); fill: none;"></line>

                <line id="lineC-7-8" x1="658" y1="142" x2="658" y2="658" class="line-segment"
                    style="stroke-dasharray: 516; stroke-dashoffset: 0; stroke: rgb(64, 62, 63); fill: none;"></line>

                <line id="lineC-8-9" x1="658" y1="658" x2="142" y2="658" class="line-segment"
                    style="stroke-dasharray: 516; stroke-dashoffset: 0; stroke: rgb(64, 62, 63); fill: none;"></line>

                <line id="lineC-6-9" x1="142" y1="142" x2="142" y2="658" class="line-segment"
                    style="stroke-dasharray: 516; stroke-dashoffset: 0; stroke: rgb(64, 62, 63); fill: none;"></line>

                <line id="lineC-6-8" x1="142" y1="142" x2="658" y2="658" class="line-segment"
                    style="stroke-dasharray: 729.734; stroke-dashoffset: 0; stroke:rgb(64, 62, 63); fill: none;"></line>

                <line id="lineC-7-9" x1="658" y1="142" x2="142" y2="658" class="line-segment"
                    style="stroke-dasharray: 729.734; stroke-dashoffset: 0; stroke: rgb(64, 62, 63); fill: none;">
                </line>

                <circle cx="36" cy="400" r="29" class="matrix-circle"
                    style="stroke: rgb(174, 143, 190); fill: rgb(255, 255, 255);"></circle>
                    <text x="30" y="408" fill="#000000" style="font: bold 22px Cakra, serif;">{{ dayNum }}</text>

                <circle cx="400" cy="36" r="29" class="matrix-circle"
                    style="stroke: rgb(174, 143, 190); fill: rgb(255, 255, 255);"></circle>
                    <text x="393" y="42" fill="#000000" style="font: bold 22px Cakra, serif;">{{ monthNum }}</text>

                <circle cx="764" cy="400" r="29" class="matrix-circle"
                    style="stroke: rgb(199, 90, 90); fill: rgb(255, 255, 255);"></circle>
                    <text x="760" y="406" fill="#000000" style="font: bold 22px Cakra, serif;">{{ yearNum }}</text>

                <circle cx="400" cy="764" r="29" class="matrix-circle"
                    style="stroke: rgb(199, 90, 90); fill: rgb(255, 255, 255);"></circle>
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
        </div>

        <div class="partner2">
            <div class="p-two_partner">
                <p>Матрица второго партнера</p>
            </div>
    
            <svg id="partner2SVG" viewBox="0 0 800 800" preserveAspectRatio="xMidYMid meet">
                <line id="lineC-1-2" x1="36" y1="400" x2="400" y2="36" class="line-segment"
                    style="stroke-dasharray: 514.774; stroke-dashoffset: 0; stroke: rgb(64, 62, 63); fill: none;">
                </line>

                <line id="lineC-2-3" x1="400" y1="36" x2="764" y2="400" class="line-segment"
                    style="stroke-dasharray: 514.774; stroke-dashoffset: 0; stroke: rgb(64, 62, 63); fill: none;">
                </line>

                <line id="lineC-3-4" x1="764" y1="400" x2="400" y2="764" class="line-segment"
                    style="stroke-dasharray: 514.774; stroke-dashoffset: 0; stroke: rgb(64, 62, 63); fill: none;">
                </line>

                <line id="lineC-4-1" x1="400" y1="764" x2="36" y2="400" class="line-segment"
                    style="stroke-dasharray: 514.774; stroke-dashoffset: 0; stroke: rgb(64, 62, 63); fill: none;">
                </line>

                <line id="lineC-1-5" x1="36" y1="400" x2="400" y2="400" class="line-segment"
                    style="stroke-dasharray: 364; stroke-dashoffset: 0; stroke: rgb(64, 62, 63); fill: none;"></line>

                <line id="lineC-2-5" x1="400" y1="36" x2="400" y2="400" class="line-segment"
                    style="stroke-dasharray: 364; stroke-dashoffset: 0; stroke: rgb(64, 62, 63); fill: none;"></line>

                <line id="lineC-3-5" x1="764" y1="400" x2="400" y2="400" class="line-segment"
                    style="stroke-dasharray: 364; stroke-dashoffset: 0; stroke:rgb(64, 62, 63); fill: none;"></line>

                <line id="lineC-4-5" x1="400" y1="764" x2="400" y2="400" class="line-segment"
                    style="stroke-dasharray: 364; stroke-dashoffset: 0; stroke: rgb(64, 62, 63); fill: none;"></line>

                <line id="lineC-1-6" x1="36" y1="400" x2="142" y2="142" class="line-segment"
                    style="stroke-dasharray: 278.927; stroke-dashoffset: 0; stroke: rgb(64, 62, 63); fill: none;">
                </line>

                <line id="lineC-6-2" x1="142" y1="142" x2="400" y2="36" class="line-segment"
                    style="stroke-dasharray: 278.927; stroke-dashoffset: 0; stroke: rgb(64, 62, 63); fill: none;">
                </line>

                <line id="lineC-2-7" x1="400" y1="36" x2="658" y2="142" class="line-segment"
                    style="stroke-dasharray: 278.927; stroke-dashoffset: 0; stroke: rgb(64, 62, 63); fill: none;">
                </line>

                <line id="lineC-7-3" x1="658" y1="142" x2="764" y2="400" class="line-segment"
                    style="stroke-dasharray: 278.927; stroke-dashoffset: 0; stroke: rgb(64, 62, 63); fill: none;">
                </line>

                <line id="lineC-3-8" x1="764" y1="400" x2="658" y2="658" class="line-segment"
                    style="stroke-dasharray: 278.927; stroke-dashoffset: 0; stroke: rgb(64, 62, 63); fill: none;">
                </line>

                <line id="lineC-8-4" x1="658" y1="658" x2="400" y2="764" class="line-segment"
                    style="stroke-dasharray: 278.927; stroke-dashoffset: 0; stroke: rgb(64, 62, 63); fill: none;">
                </line>

                <line id="lineC-4-9" x1="400" y1="764" x2="142" y2="658" class="line-segment"
                    style="stroke-dasharray: 278.927; stroke-dashoffset: 0; stroke: rgb(64, 62, 63); fill: none;">
                </line>

                <line id="lineC-9-1" x1="142" y1="658" x2="36" y2="400" class="line-segment"
                    style="stroke-dasharray: 278.927; stroke-dashoffset: 0; stroke: rgb(64, 62, 63); fill: none;">
                </line>

                <line id="lineC-6-7" x1="142" y1="142" x2="658" y2="142" class="line-segment"
                    style="stroke-dasharray: 516; stroke-dashoffset: 0; stroke: rgb(64, 62, 63); fill: none;"></line>

                <line id="lineC-7-8" x1="658" y1="142" x2="658" y2="658" class="line-segment"
                    style="stroke-dasharray: 516; stroke-dashoffset: 0; stroke: rgb(64, 62, 63); fill: none;"></line>

                <line id="lineC-8-9" x1="658" y1="658" x2="142" y2="658" class="line-segment"
                    style="stroke-dasharray: 516; stroke-dashoffset: 0; stroke: rgb(64, 62, 63); fill: none;"></line>

                <line id="lineC-6-9" x1="142" y1="142" x2="142" y2="658" class="line-segment"
                    style="stroke-dasharray: 516; stroke-dashoffset: 0; stroke: rgb(64, 62, 63); fill: none;"></line>

                <line id="lineC-6-8" x1="142" y1="142" x2="658" y2="658" class="line-segment"
                    style="stroke-dasharray: 729.734; stroke-dashoffset: 0; stroke: rgb(64, 62, 63); fill: none;">
                </line>

                <line id="lineC-7-9" x1="658" y1="142" x2="142" y2="658" class="line-segment"
                    style="stroke-dasharray: 729.734; stroke-dashoffset: 0; stroke: rgb(64, 62, 63); fill: none;">
                </line>
                <circle cx="36" cy="400" r="29" class="matrix-circle"
                    style="stroke: rgb(174, 143, 190); fill: rgb(255, 255, 255);"></circle>
                    <text x="30" y="408" fill="#000000" style="font: bold 22px Cakra, serif;">{{ dayNum2 }}</text>

                <circle cx="400" cy="36" r="29" class="matrix-circle"
                    style="stroke: rgb(174, 143, 190); fill: rgb(255, 255, 255);"></circle>
                    <text x="393" y="42" fill="#000000" style="font: bold 22px Cakra, serif;">{{ monthNum2 }}</text>

                <circle cx="764" cy="400" r="29" class="matrix-circle"
                    style="stroke: rgb(199, 90, 90); fill: rgb(255, 255, 255);"></circle>
                    <text x="760" y="406" fill="#000000" style="font: bold 22px Cakra, serif;">{{ yearNum2 }}</text>

                <circle cx="400" cy="764" r="29" class="matrix-circle"
                    style="stroke: rgb(199, 90, 90); fill: rgb(255, 255, 255);"></circle>
                    <text x="390" y="770" fill="#000000" style="font: bold 22px Cakra, serif;">{{ fateNum2 }}</text>

                <circle cx="400" cy="400" r="29" class="matrix-circle"
                    style="stroke: rgb(191, 153, 161); fill: rgb(255, 255, 255);"></circle>
                    <text x="390" y="406" fill="#000000" style="font: bold 22px Cakra, serif;">{{ mainNum2 }}</text>

                <circle cx="142" cy="142" r="29" class="matrix-circle"
                    style="stroke: rgb(174, 164, 158); fill: rgb(255, 255, 255);"></circle>
                    <text x="133" y="147" fill="#000000" style="font: bold 22px Cakra, serif;">{{ leftUp2 }}</text>

                <circle cx="658" cy="142" r="29" class="matrix-circle"
                    style="stroke: rgb(174, 164, 158); fill: rgb(255, 255, 255);"></circle>
                    <text x="648" y="149" fill="#000000" style="font: bold 22px Cakra, serif;">{{ rightUp2}}</text>

                    <circle cx="658" cy="658" r="29" class="matrix-circle"
            style="stroke: rgb(174, 164, 158); fill: rgb(255, 255, 255);"></circle>
        <text x="652" y="662" fill="#000000" style="font: bold 22px Cakra, serif;">{{ rightDown2 }}</text>

        <circle cx="142" cy="658" r="29" class="matrix-circle"
            style="stroke: rgb(174, 164, 158); fill: rgb(255, 255, 255);"></circle>
            <text x="130" y="662" fill="#000000" style="font: bold 22px Cakra, serif;">{{ leftDown2 }}</text>

        <circle cx="142" cy="400" r="22" class="matrix-circle"
            style="stroke: rgb(163, 176, 224); fill: rgb(255, 255, 255);"></circle>
        <text x="133" y="405" fill="#000000" style="font: bold 22px Cakra, serif;">{{ thirdLeft2 }}</text>

        <circle cx="217" cy="217" r="22" class="matrix-circle"
            style="stroke: rgb(174, 164, 158); fill: rgb(255, 255, 255);"></circle>
            <text x="205" y="223" fill="#000000" style="font: bold 22px Cakra, serif;">{{ thirdLeftUp2 }}</text>

        <circle cx="400" cy="142" r="22" class="matrix-circle"
            style="stroke: rgb(163, 176, 224); fill: rgb(255, 255, 255);"></circle>
            <text x="391" y="150" fill="#000000" style="font: bold 22px Cakra, serif;">{{ thirdCenter2 }}</text>

        <circle cx="583" cy="217" r="22" class="matrix-circle"
            style="stroke: rgb(174, 164, 158); fill: rgb(255, 255, 255);"></circle>
            <text x="574" y="224" fill="#000000" style="font: bold 22px Cakra, serif;">{{ thirdRightUp2 }}</text>

        <circle cx="658" cy="400" r="22" class="matrix-circle"
            style="stroke: rgb(242, 181, 125); fill: rgb(255, 255, 255);"></circle>
            <text x="648" y="405" fill="#000000" style="font: bold 22px Cakra, serif;">{{ thirdRight2 }}</text>

        <circle cx="450" cy="400" r="20" class="matrix-circle"
            style="stroke: rgb(117, 117, 117); fill: rgb(255, 255, 255);"></circle>
            <text x="445" y="405" fill="#000000" style="font: bold 22px Cakra, serif;">{{ secondMainRight2 }}</text>

        <circle cx="496" cy="400" r="20" class="matrix-circle"
            style="stroke: rgb(117, 117, 117); fill: rgb(255, 255, 255);"></circle>
            <text x="489" y="406" fill="#000000" style="font: bold 22px Cakra, serif;">{{ thirdMainRight2 }}</text>


        <circle cx="583" cy="583" r="22" class="matrix-circle"
            style="stroke: rgb(174, 164, 158); fill: rgb(255, 255, 255);"></circle>
            <text x="574" y="589" fill="#000000" style="font: bold 22px Cakra, serif;">{{ thirdRightDown2 }}</text>

        <circle cx="400" cy="658" r="22" class="matrix-circle"
            style="stroke: rgb(242, 181, 125); fill: rgb(255, 255, 255);"></circle>
            <text x="395" y="663" fill="#000000" style="font: bold 22px Cakra, serif;">{{ thirdDown2 }}</text>

        <circle cx="217" cy="583" r="22" class="matrix-circle"
            style="stroke: rgb(174, 164, 158); fill: rgb(255, 255, 255);"></circle>
            <text x="210" y="588" fill="#000000" style="font: bold 22px Cakra, serif;">{{ thirdLeftDown2 }}</text>

        <circle cx="92" cy="400" r="22" class="matrix-circle" style="stroke: rgb(90, 112, 199); fill: rgb(255, 255, 255);">
        </circle>
        <text x="84" y="405" fill="#000000" style="font: bold 22px Cakra, serif;">{{ secondLeft2 }}</text>

        <circle cx="182" cy="182" r="22" class="matrix-circle"
            style="stroke: rgb(174, 164, 158); fill: rgb(255, 255, 255);"></circle>
            <text x="175" y="189" fill="#000000" style="font: bold 22px Cakra, serif;">{{ secondLeftUp2 }}</text>

        <circle cx="400" cy="92" r="22" class="matrix-circle" style="stroke: rgb(90, 112, 199); fill: rgb(255, 255, 255);">
        </circle>
        <text x="393" y="100" fill="#000000" style="font: bold 22px Cakra, serif;">{{ secondCenter2 }}</text>

        <circle cx="617" cy="182" r="22" class="matrix-circle"
            style="stroke: rgb(174, 164, 158); fill: rgb(255, 255, 255);"></circle>
            <text x="610" y="190" fill="#000000" style="font: bold 22px Cakra, serif;">{{ secondRightUp2 }}</text>

        <circle cx="707" cy="400" r="22" class="matrix-circle"
            style="stroke: rgb(174, 164, 158); fill: rgb(255, 255, 255);"></circle>
            <text x="700" y="407" fill="#000000" style="font: bold 22px Cakra, serif;">{{ secondRight2 }}</text>

        <circle cx="617" cy="617" r="22" class="matrix-circle"
            style="stroke: rgb(174, 164, 158); fill: rgb(255, 255, 255);"></circle>
            <text x="608" y="622" fill="#000000" style="font: bold 22px Cakra, serif;">{{ secondRightDown2 }}</text>

        <circle cx="400" cy="707" r="22" class="matrix-circle"
            style="stroke: rgb(174, 164, 158); fill: rgb(255, 255, 255);"></circle>
            <text x="390" y="712" fill="#000000" style="font: bold 22px Cakra, serif;">{{ secondDown2 }}</text>

        <circle cx="182" cy="617" r="22" class="matrix-circle"
            style="stroke: rgb(174, 164, 158); fill: rgb(255, 255, 255);"></circle>
            <text x="173" y="623" fill="#000000" style="font: bold 22px Cakra, serif;">{{ secondLeftDown2 }}</text>

        <circle cx="264" cy="400" r="22" class="matrix-circle"
            style="stroke: rgb(137, 184, 151); fill: rgb(255, 255, 255);"></circle>
            <text x="260" y="408" fill="#000000" style="font: bold 22px Cakra, serif;">{{ secondMainLeft2 }}</text>

        <circle cx="400" cy="264" r="22" class="matrix-circle"
            style="stroke: rgb(137, 184, 151); fill: rgb(255, 255, 255);"></circle>
            <text x="390" y="270" fill="#000000" style="font: bold 22px Cakra, serif;">{{ secondMainUp2 }}</text>

        <circle cx="496" cy="496" r="22" class="matrix-circle"
            style="stroke: rgb(174, 164, 158); fill: rgb(255, 255, 255);"></circle>
            <text x="486" y="502" fill="#000000" style="font: bold 22px Cakra, serif;">{{ betweenHeartAndDollar2 }}</text>

        <circle cx="576" cy="464" r="22" class="matrix-circle"
            style="stroke: rgb(174, 164, 158); fill: rgb(255, 255, 255);"></circle><text x="546" y="432" fill="#9DBC78"
            style="font: bold 22px Cakra, serif;">$</text>
            <text x="570" y="470" fill="#000000" style="font: bold 22px Cakra, serif;">{{ dollar2 }}</text>


        <circle cx="464" cy="576" r="22" class="matrix-circle"
            style="stroke: rgb(174, 164, 158); fill: rgb(255, 255, 255);"></circle><text x="434" y="544" fill="#EFA1A1"
            style="font: bold 30px Cakra, serif;">♥</text>
            <text x="457" y="580" fill="#000000" style="font: bold 22px Cakra, serif;">{{ heart2 }}</text>



            </svg>
        </div>
    </div>

    <div class="h-comp">
        <h1> Матрица совместимости</h1>
    </div>

    <div class="svg-comp">
        <svg id="compatibilitySVG" viewBox="0 0 800 800" preserveAspectRatio="xMidYMid meet">
            <line id="lineC-1-2" x1="36" y1="400" x2="400" y2="36" class="line-segment"
                    style="stroke-dasharray: 514.774; stroke-dashoffset: 0; stroke: rgb(64, 62, 63); fill: none;">
                </line>

                <line id="lineC-2-3" x1="400" y1="36" x2="764" y2="400" class="line-segment"
                    style="stroke-dasharray: 514.774; stroke-dashoffset: 0; stroke: rgb(64, 62, 63); fill: none;">
                </line>

                <line id="lineC-3-4" x1="764" y1="400" x2="400" y2="764" class="line-segment"
                    style="stroke-dasharray: 514.774; stroke-dashoffset: 0; stroke: rgb(64, 62, 63); fill: none;">
                </line>

                <line id="lineC-4-1" x1="400" y1="764" x2="36" y2="400" class="line-segment"
                    style="stroke-dasharray: 514.774; stroke-dashoffset: 0; stroke: rgb(64, 62, 63); fill: none;">
                </line>

                <line id="lineC-1-5" x1="36" y1="400" x2="400" y2="400" class="line-segment"
                    style="stroke-dasharray: 364; stroke-dashoffset: 0; stroke: rgb(64, 62, 63); fill: none;"></line>

                <line id="lineC-2-5" x1="400" y1="36" x2="400" y2="400" class="line-segment"
                    style="stroke-dasharray: 364; stroke-dashoffset: 0; stroke: rgb(64, 62, 63); fill: none;"></line>

                <line id="lineC-3-5" x1="764" y1="400" x2="400" y2="400" class="line-segment"
                    style="stroke-dasharray: 364; stroke-dashoffset: 0; stroke:rgb(64, 62, 63); fill: none;"></line>

                <line id="lineC-4-5" x1="400" y1="764" x2="400" y2="400" class="line-segment"
                    style="stroke-dasharray: 364; stroke-dashoffset: 0; stroke: rgb(64, 62, 63); fill: none;"></line>

                <line id="lineC-1-6" x1="36" y1="400" x2="142" y2="142" class="line-segment"
                    style="stroke-dasharray: 278.927; stroke-dashoffset: 0; stroke: rgb(64, 62, 63); fill: none;">
                </line>

                <line id="lineC-6-2" x1="142" y1="142" x2="400" y2="36" class="line-segment"
                    style="stroke-dasharray: 278.927; stroke-dashoffset: 0; stroke: rgb(64, 62, 63); fill: none;">
                </line>

                <line id="lineC-2-7" x1="400" y1="36" x2="658" y2="142" class="line-segment"
                    style="stroke-dasharray: 278.927; stroke-dashoffset: 0; stroke: rgb(64, 62, 63); fill: none;">
                </line>

                <line id="lineC-7-3" x1="658" y1="142" x2="764" y2="400" class="line-segment"
                    style="stroke-dasharray: 278.927; stroke-dashoffset: 0; stroke: rgb(64, 62, 63); fill: none;">
                </line>

                <line id="lineC-3-8" x1="764" y1="400" x2="658" y2="658" class="line-segment"
                    style="stroke-dasharray: 278.927; stroke-dashoffset: 0; stroke: rgb(64, 62, 63); fill: none;">
                </line>

                <line id="lineC-8-4" x1="658" y1="658" x2="400" y2="764" class="line-segment"
                    style="stroke-dasharray: 278.927; stroke-dashoffset: 0; stroke: rgb(64, 62, 63); fill: none;">
                </line>

                <line id="lineC-4-9" x1="400" y1="764" x2="142" y2="658" class="line-segment"
                    style="stroke-dasharray: 278.927; stroke-dashoffset: 0; stroke: rgb(64, 62, 63); fill: none;">
                </line>

                <line id="lineC-9-1" x1="142" y1="658" x2="36" y2="400" class="line-segment"
                    style="stroke-dasharray: 278.927; stroke-dashoffset: 0; stroke: rgb(64, 62, 63); fill: none;">
                </line>

                <line id="lineC-6-7" x1="142" y1="142" x2="658" y2="142" class="line-segment"
                    style="stroke-dasharray: 516; stroke-dashoffset: 0; stroke: rgb(64, 62, 63); fill: none;"></line>

                <line id="lineC-7-8" x1="658" y1="142" x2="658" y2="658" class="line-segment"
                    style="stroke-dasharray: 516; stroke-dashoffset: 0; stroke: rgb(64, 62, 63); fill: none;"></line>

                <line id="lineC-8-9" x1="658" y1="658" x2="142" y2="658" class="line-segment"
                    style="stroke-dasharray: 516; stroke-dashoffset: 0; stroke: rgb(64, 62, 63); fill: none;"></line>

                <line id="lineC-6-9" x1="142" y1="142" x2="142" y2="658" class="line-segment"
                    style="stroke-dasharray: 516; stroke-dashoffset: 0; stroke: rgb(64, 62, 63); fill: none;"></line>

                <line id="lineC-6-8" x1="142" y1="142" x2="658" y2="658" class="line-segment"
                    style="stroke-dasharray: 729.734; stroke-dashoffset: 0; stroke: rgb(64, 62, 63); fill: none;">
                </line>

                <line id="lineC-7-9" x1="658" y1="142" x2="142" y2="658" class="line-segment"
                    style="stroke-dasharray: 729.734; stroke-dashoffset: 0; stroke: rgb(64, 62, 63); fill: none;">
                </line>
                <circle cx="36" cy="400" r="29" class="matrix-circle"
                    style="stroke: rgb(174, 143, 190); fill: rgb(255, 255, 255);"></circle>
                <circle cx="400" cy="36" r="29" class="matrix-circle"
                    style="stroke: rgb(174, 143, 190); fill: rgb(255, 255, 255);"></circle>
                <circle cx="764" cy="400" r="29" class="matrix-circle"
                    style="stroke: rgb(199, 90, 90); fill: rgb(255, 255, 255);"></circle>
                <circle cx="400" cy="764" r="29" class="matrix-circle"
                    style="stroke: rgb(199, 90, 90); fill: rgb(255, 255, 255);"></circle>
                <circle cx="400" cy="400" r="29" class="matrix-circle"
                    style="stroke: rgb(191, 153, 161); fill: rgb(255, 255, 255);"></circle>
                <circle cx="142" cy="142" r="29" class="matrix-circle"
                    style="stroke: rgb(174, 164, 158); fill: rgb(255, 255, 255);"></circle>
                <circle cx="658" cy="142" r="29" class="matrix-circle"
                    style="stroke: rgb(174, 164, 158); fill: rgb(255, 255, 255);"></circle>
                <circle cx="658" cy="658" r="29" class="matrix-circle"
                    style="stroke: rgb(174, 164, 158); fill: rgb(255, 255, 255);"></circle>
                <circle cx="142" cy="658" r="29" class="matrix-circle"
                    style="stroke: rgb(174, 164, 158); fill: rgb(255, 255, 255);"></circle>
                <circle cx="142" cy="400" r="22" class="matrix-circle"
                    style="stroke: rgb(163, 176, 224); fill: rgb(255, 255, 255);"></circle>
                <circle cx="217" cy="217" r="22" class="matrix-circle"
                    style="stroke: rgb(174, 164, 158); fill: rgb(255, 255, 255);"></circle>
                <circle cx="400" cy="142" r="22" class="matrix-circle"
                    style="stroke: rgb(163, 176, 224); fill: rgb(255, 255, 255);"></circle>
                <circle cx="583" cy="217" r="22" class="matrix-circle"
                    style="stroke: rgb(174, 164, 158); fill: rgb(255, 255, 255);"></circle>
                <circle cx="658" cy="400" r="22" class="matrix-circle"
                    style="stroke: rgb(242, 181, 125); fill: rgb(255, 255, 255);"></circle>
                <circle cx="583" cy="583" r="22" class="matrix-circle"
                    style="stroke: rgb(174, 164, 158); fill: rgb(255, 255, 255);"></circle>
                <circle cx="400" cy="658" r="22" class="matrix-circle"
                    style="stroke: rgb(242, 181, 125); fill: rgb(255, 255, 255);"></circle>
                <circle cx="217" cy="583" r="22" class="matrix-circle"
                    style="stroke: rgb(174, 164, 158); fill: rgb(255, 255, 255);"></circle>
                <circle cx="92" cy="400" r="22" class="matrix-circle"
                    style="stroke: rgb(90, 112, 199); fill: rgb(255, 255, 255);"></circle>
                <circle cx="182" cy="182" r="22" class="matrix-circle"
                    style="stroke: rgb(174, 164, 158); fill: rgb(255, 255, 255);"></circle>
                <circle cx="400" cy="92" r="22" class="matrix-circle"
                    style="stroke: rgb(90, 112, 199); fill: rgb(255, 255, 255);"></circle>
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
                    style="stroke: rgb(174, 164, 158); fill: rgb(255, 255, 255);"></circle><text x="546" y="432"
                    fill="#9DBC78" style="font: bold 22px Cakra, serif;">$</text>
                <circle cx="464" cy="576" r="22" class="matrix-circle"
                    style="stroke: rgb(174, 164, 158); fill: rgb(255, 255, 255);"></circle><text x="434" y="544"
                    fill="#EFA1A1" style="font: bold 30px Cakra, serif;">♥</text>
        </svg>
    </div>


    <svg  class="svg-2000" viewBox="0 0 1024 300" fill="none" xmlns="http://www.w3.org/2000/svg">
    
    <text x="325" y="50" text-anchor="middle" class="title">Взаимоотношения:</text>
    <path d="M350 140 L460 175" class="line"></path>
    <path d="M350 210 L460 175" class="line"></path>
    <circle cx="350" cy="140" r="29" class="circle"></circle>
    <text x="350" y="140" class="circle-label" id="comp31"></text>
    <circle cx="350" cy="210" r="29" class="circle"></circle>
    <text x="350" y="210" class="circle-label" id="comp32"></text>
    <circle cx="460" cy="175" r="29" class="circle"></circle>
    <text x="460" y="175" class="circle-label" id="comp33"></text>
    <text x="710" y="50" text-anchor="middle" class="title">Партнерство в паре:</text>
    <path d="M690 140 L800 175" class="line"></path>
    <path d="M690 210 L800 175" class="line"></path>
    <circle cx="690" cy="140" r="29" class="circle"></circle>
    <text x="690" y="140" class="circle-label" id="comp34"></text>
    <circle cx="690" cy="210" r="29" class="circle"></circle>
    <text x="690" y="210" class="circle-label" id="comp35"></text>
    <circle cx="800" cy="175" r="29" class="circle"></circle>
    <text x="800" y="175" class="circle-label" id="comp36"></text>
    <text x="400" y="290" text-anchor="end" class="title">Единство:</text>
    <circle cx="460" cy="270" r="29" class="circle"></circle>
    <text x="460" y="270" class="circle-label" id="comp37"></text>
    <text x="740" y="290" text-anchor="end" class="title">Планетарное:</text>
    <circle cx="800" cy="270" r="29" class="circle"></circle>
    <text x="800" y="270" class="circle-label" id="comp38"></text>
  </svg>

</template>

<script setup lang="ts">
const birthday = ref('2006-07-31')
const birthdayTwo = ref('2007-01-03')
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
const sky = ref('')
const earth = ref('')
const skyEarth = ref('')
const manLine = ref('')
const womanLine = ref('')
const manWoman = ref('')
const spiritual = ref('')
const planetary = ref('')

const fateNum2 = ref('')
const dayNum2 = ref('')
const monthNum2 = ref('')
const yearNum2 = ref('')
const mainNum2 = ref('')
const leftUp2 = ref('')
const rightUp2 = ref('')
const rightDown2 = ref('')
const leftDown2 = ref('')
const thirdLeft2 = ref('')
const secondLeft2 = ref('')
const thirdCenter2 = ref('')
const secondCenter2 = ref('')
const thirdRight2 = ref('')
const secondRight2 = ref('')
const thirdDown2 = ref('')
const secondDown2 = ref('')
const secondMainRight2 = ref('')
const thirdLeftUp2 = ref('')
const secondLeftUp2 = ref('')
const thirdRightUp2 = ref('')
const secondRightUp2 = ref('')
const thirdRightDown2 = ref('')
const secondRightDown2 = ref('')
const thirdLeftDown2 = ref('')
const secondLeftDown2 = ref('')
const betweenHeartAndDollar2 = ref('')
const heart2 = ref('')
const dollar2 = ref('')
const secondMainLeft2 = ref('')
const thirdMainRight2 = ref('')
const secondMainUp2 = ref('')
const sky2 = ref('')
const earth2 = ref('')
const skyEarth2 = ref('')
const manLine2 = ref('')
const womanLine2 = ref('')
const manWoman2 = ref('')
const spiritual2 = ref('')
const planetary2 = ref('')

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

      
    let skyNum = (parseInt(monthNum.value) + parseInt( fateNum.value))
    if (skyNum > 22) {
        skyNum = (skyNum).toString().split('').reduce((a, el) => a + (+el), 0)
    }
    sky.value = skyNum.toString()

    let earthNum = (parseInt(dayNum.value) + parseInt( yearNum.value))
    if (earthNum > 22) {
        earthNum = (earthNum).toString().split('').reduce((a, el) => a + (+el), 0)
    }
    earth.value = earthNum.toString()

    let skyEarthNum = (parseInt(sky.value) + parseInt( earth.value))
    if (skyEarthNum > 22) {
        skyEarthNum = (skyEarthNum).toString().split('').reduce((a, el) => a + (+el), 0)
    }
    skyEarth.value = skyEarthNum.toString()

    
    let manLineNum = (parseInt(leftUp.value) + parseInt( rightDown.value))
    if (manLineNum > 22) {
        manLineNum = (manLineNum).toString().split('').reduce((a, el) => a + (+el), 0)
    }
    manLine.value = manLineNum.toString()

        
    let womanLineNum = (parseInt(leftDown.value) + parseInt( rightUp.value))
    if (womanLineNum > 22) {
        womanLineNum = (womanLineNum).toString().split('').reduce((a, el) => a + (+el), 0)
    }
    womanLine.value = womanLineNum.toString()

    let manWomanNum = (parseInt(manLine.value) + parseInt( womanLine.value))
    if (manWomanNum > 22) {
        manWomanNum = (manWomanNum).toString().split('').reduce((a, el) => a + (+el), 0)
    }
    manWoman.value = manWomanNum.toString()

    let spiritualNum = (parseInt(skyEarth.value) + parseInt( manWoman.value))
    if (spiritualNum > 22) {
        spiritualNum = (spiritualNum).toString().split('').reduce((a, el) => a + (+el), 0)
    }
    spiritual.value = spiritualNum.toString()

    let planetaryNum = (parseInt(spiritual.value) + parseInt( manWoman.value))
    if (planetaryNum > 22) {
        planetaryNum = (planetaryNum).toString().split('').reduce((a, el) => a + (+el), 0)
    }
    planetary.value = planetaryNum.toString()




    
    const arr2 = birthdayTwo.value.split('-')
    const day2 = arr[2]
    const month2 = arr[1]
    const year2 = arr[0]

    let fateNumNum2 = (day2 + month2 + year2).split('').reduce((a, el) => a + (+el), 0)
    fateNum2.value = fateNumNum2.toString()
    let dayNumNum2 = (day2).split('').reduce((a, el) => a + (+el), 0)
    // if (![11, 22, 33].includes(dayNumNum)) {
    //     dayNumNum = dayNumNum.toString().split('').reduce((a,el)=> a+(+el),0)
    // }
    dayNum2.value = dayNumNum2.toString()
    
    let monthNumNum2 = (month2).split('').reduce((a, el) => a + (+el), 0)
    monthNum2.value = monthNumNum2.toString()
    
    
    let yearNumNum2 = (year2).split('').reduce((a, el) => a + (+el), 0)
    yearNum2.value = yearNumNum2.toString()
    
    let mainNumNum2 = (parseInt(yearNum2.value) + parseInt(monthNum2.value) + parseInt(dayNum2.value)).toString().split('').reduce((a, el) => a + parseInt(el), 0)
    let main2 = (mainNumNum2 + parseInt(fateNum2.value)).toString().split('').reduce((a, el) => a + parseInt(el), 0);
    mainNum2.value = main2.toString();
    
    let leftUpNum2 = (dayNum2.value + monthNum2.value).toString().split('').reduce((a, el) => a + (+el), 0)
    leftUp2.value = leftUpNum2.toString()
    
    let rightUpNum2 = (monthNum2.value + yearNum2.value).toString().split('').reduce((a, el) => a + (+el), 0)
    rightUp2.value = rightUpNum2.toString()
    
    
    let rightDownNum2 = (parseInt(yearNum2.value) + parseInt(fateNum2.value))
    if (rightDownNum2 > 22) {
        rightDownNum2 = (rightDownNum2).toString().split('').reduce((a, el) => a + (+el), 0)
    }
    rightDown2.value = rightDownNum2.toString()

     
    let leftDownNum2 = (parseInt(dayNum2.value) + parseInt(fateNum2.value))
    if (leftDownNum2 > 22) {
        leftDownNum2 = (leftDownNum2).toString().split('').reduce((a, el) => a + (+el), 0)
    }
    leftDown2.value = leftDownNum2.toString()
    
      
    let thirdLeftNum2 = (parseInt(dayNum2.value) + parseInt(mainNum2.value))
    if (thirdLeftNum2 > 22) {
        thirdLeftNum2 = (thirdLeftNum2).toString().split('').reduce((a, el) => a + (+el), 0)
    }
    thirdLeft2.value = thirdLeftNum2.toString()
    
          
    let secondLeftNum2 = (parseInt(dayNum2.value) + parseInt(thirdLeft2.value))
    if (secondLeftNum2 > 22) {
        secondLeftNum2 = (secondLeftNum2).toString().split('').reduce((a, el) => a + (+el), 0)
    }
    secondLeft2.value = secondLeftNum2.toString()

    
    let thirdCenterNum2 = (parseInt(monthNum2.value) + parseInt(mainNum2.value))
    if (thirdCenterNum2 > 22) {
        thirdCenterNum2 = (thirdCenterNum2).toString().split('').reduce((a, el) => a + (+el), 0)
    }
    thirdCenter2.value = thirdCenterNum2.toString()

        
    let secondCenterNum2 = (parseInt(monthNum2.value) + parseInt(thirdCenter2.value))
    if (secondCenterNum2 > 22) {
        secondCenterNum2 = (secondCenterNum2).toString().split('').reduce((a, el) => a + (+el), 0)
    }
    secondCenter2.value = secondCenterNum2.toString()


    let thirdRightNum2 = (parseInt(yearNum2.value) + parseInt(mainNum2.value))
    if (thirdRightNum2 > 22) {
        thirdRightNum2 = (thirdRightNum2).toString().split('').reduce((a, el) => a + (+el), 0)
    }
    thirdRight2.value = thirdRightNum2.toString()


    let secondRightNum2 = (parseInt(yearNum2.value) + parseInt(thirdRight2.value))
    if (secondRightNum2 > 22) {
        secondRightNum2 = (secondRightNum2).toString().split('').reduce((a, el) => a + (+el), 0)
    }
    secondRight2.value = secondRightNum2.toString()


    let thirdDownNum2 = (parseInt(fateNum2.value) + parseInt(mainNum2.value))
    if (thirdDownNum2 > 22) {
        thirdDownNum2 = (thirdDownNum2).toString().split('').reduce((a, el) => a + (+el), 0)
    }
    thirdDown2.value = thirdDownNum2.toString()


    let secondDownNum2 = (parseInt(fateNum2.value) + parseInt(thirdDown2.value))
    if (secondDownNum2 > 22) {
        secondDownNum2 = (secondDownNum2).toString().split('').reduce((a, el) => a + (+el), 0)
    }
    secondDown2.value = secondDownNum2.toString()

    
    let secondMainRightNum2 = (parseInt(leftDown2.value) + parseInt(leftUp2.value) + parseInt(rightUp2.value) + parseInt(rightDown2.value))
    if (secondMainRightNum2 > 22) {
        secondMainRightNum2 = (secondMainRightNum2).toString().split('').reduce((a, el) => a + (+el), 0)
    }
    secondMainRight2.value = secondMainRightNum2.toString()

       
    let thirdLeftUpNum2 = (parseInt(leftUp2.value) + parseInt(secondMainRight2.value))
    if (thirdLeftUpNum2 > 22) {
        thirdLeftUpNum2 = (thirdLeftUpNum2).toString().split('').reduce((a, el) => a + (+el), 0)
    }
    thirdLeftUp2.value = thirdLeftUpNum2.toString()

         
    let secondLeftUpNum2= (parseInt(leftUp2.value) + parseInt(thirdLeftUp2 .value))
    if (secondLeftUpNum2 > 22) {
        secondLeftUpNum2 = (secondLeftUpNum2).toString().split('').reduce((a, el) => a + (+el), 0)
    }
    secondLeftUp2.value = secondLeftUpNum2.toString()


    let thirdRightUpNum2 = (parseInt(rightUp2.value) + parseInt(secondMainRight2 .value))
    if (thirdRightUpNum2 > 22) {
        thirdRightUpNum2 = (thirdRightUpNum2).toString().split('').reduce((a, el) => a + (+el), 0)
    }
    thirdRightUp2.value = thirdRightUpNum2.toString()

    
    let secondRightUpNum2 = (parseInt(rightUp2.value) + parseInt(thirdRightUp2 .value))
    if (secondRightUpNum2 > 22) {
        secondRightUpNum2 = (secondRightUpNum2).toString().split('').reduce((a, el) => a + (+el), 0)
    }
    secondRightUp2.value = secondRightUpNum2.toString()

        
    let thirdRightDownNum2 = (parseInt(rightDown2.value) + parseInt(secondMainRight2 .value))
    if (thirdRightDownNum2 > 22) {
        thirdRightDownNum2 = (thirdRightDownNum2).toString().split('').reduce((a, el) => a + (+el), 0)
    }
    thirdRightDown2.value = thirdRightDownNum2.toString()


    let secondRightDownNum2 = (parseInt(rightDown2.value) + parseInt(thirdRightDown2 .value))
    if (secondRightDownNum2 > 22) {
        secondRightDownNum2 = (secondRightDownNum2).toString().split('').reduce((a, el) => a + (+el), 0)
    }
    secondRightDown2.value = secondRightDownNum2.toString()


    let thirdLeftDownNum2 = (parseInt(leftDown2.value) + parseInt(secondMainRight2 .value))
    if (thirdLeftDownNum2 > 22) {
        thirdLeftDownNum2 = (thirdLeftDownNum2).toString().split('').reduce((a, el) => a + (+el), 0)
    }
    thirdLeftDown2.value = thirdLeftDownNum2.toString()

        
    let secondLeftDownNum2 = (parseInt(leftDown2.value) + parseInt(thirdLeftDown2 .value))
    if (secondLeftDownNum2 > 22) {
        secondLeftDownNum2 = (secondLeftDownNum2).toString().split('').reduce((a, el) => a + (+el), 0)
    }
    secondLeftDown2.value = secondLeftDownNum2.toString()

            
    let betweenHeartAndDollarNum2 = (parseInt(thirdDown2.value) + parseInt( thirdRight2.value))
    if (betweenHeartAndDollarNum2 > 22) {
        betweenHeartAndDollarNum2 = (betweenHeartAndDollarNum2).toString().split('').reduce((a, el) => a + (+el), 0)
    }
    betweenHeartAndDollar2.value = betweenHeartAndDollarNum2.toString()

    let heartNum2 = (parseInt(betweenHeartAndDollar2.value) + parseInt( thirdDown2.value))
    if (heartNum2 > 22) {
        heartNum2 = (heartNum2).toString().split('').reduce((a, el) => a + (+el), 0)
    }
    heart2.value = heartNum2.toString()

    
    let dollarNum2 = (parseInt(betweenHeartAndDollar2.value) + parseInt( thirdRight2.value))
    if (dollarNum2 > 22) {
        dollarNum2 = (dollarNum2).toString().split('').reduce((a, el) => a + (+el), 0)
    }
    dollar2.value = dollarNum2.toString()

    let secondMainLeftNum2 = (parseInt(thirdLeft2.value) + parseInt( mainNum2.value))
    if (secondMainLeftNum2 > 22) {
        secondMainLeftNum2 = (secondMainLeftNum2).toString().split('').reduce((a, el) => a + (+el), 0)
    }
    secondMainLeft2.value = secondMainLeftNum2.toString()

    let thirdMainRightNum2 = (parseInt(mainNum2.value) + parseInt( secondMainRight2.value))
    if (thirdMainRightNum2 > 22) {
        thirdMainRightNum2 = (thirdMainRightNum2).toString().split('').reduce((a, el) => a + (+el), 0)
    }
    thirdMainRight2.value = thirdMainRightNum2.toString()

    
    let secondMainUpNum2 = (parseInt(mainNum2.value) + parseInt( thirdCenter2.value))
    if (secondMainUpNum2 > 22) {
        secondMainUpNum2 = (secondMainUpNum2).toString().split('').reduce((a, el) => a + (+el), 0)
    }
    secondMainUp2.value = secondMainUpNum2.toString()

      
    let skyNum2 = (parseInt(monthNum2.value) + parseInt( fateNum2.value))
    if (skyNum2 > 22) {
        skyNum2 = (skyNum2).toString().split('').reduce((a, el) => a + (+el), 0)
    }
    sky2.value = skyNum2.toString()

    let earthNum2 = (parseInt(dayNum2.value) + parseInt( yearNum2.value))
    if (earthNum2 > 22) {
        earthNum2 = (earthNum2).toString().split('').reduce((a, el) => a + (+el), 0)
    }
    earth2.value = earthNum2.toString()

    let skyEarthNum2 = (parseInt(sky2.value) + parseInt( earth2.value))
    if (skyEarthNum2 > 22) {
        skyEarthNum2 = (skyEarthNum2).toString().split('').reduce((a, el) => a + (+el), 0)
    }
    skyEarth2.value = skyEarthNum2.toString()

    
    let manLineNum2 = (parseInt(leftUp2.value) + parseInt( rightDown2.value))
    if (manLineNum2 > 22) {
        manLineNum2 = (manLineNum2).toString().split('').reduce((a, el) => a + (+el), 0)
    }
    manLine2.value = manLineNum2.toString()

        
    let womanLineNum2 = (parseInt(leftDown2.value) + parseInt( rightUp2.value))
    if (womanLineNum2> 22) {
        womanLineNum2 = (womanLineNum2).toString().split('').reduce((a, el) => a + (+el), 0)
    }
    womanLine2.value = womanLineNum2.toString()

    let manWomanNum2 = (parseInt(manLine2.value) + parseInt( womanLine2.value))
    if (manWomanNum2 > 22) {
        manWomanNum2 = (manWomanNum2).toString().split('').reduce((a, el) => a + (+el), 0)
    }
    manWoman2.value = manWomanNum2.toString()

    let spiritualNum2= (parseInt(skyEarth2.value) + parseInt( manWoman2.value))
    if (spiritualNum2 > 22) {
        spiritualNum2 = (spiritualNum2).toString().split('').reduce((a, el) => a + (+el), 0)
    }
    spiritual2.value = spiritualNum2.toString()

    let planetaryNum2 = (parseInt(spiritual2.value) + parseInt( manWoman2.value))
    if (planetaryNum2 > 22) {
        planetaryNum2 = (planetaryNum2).toString().split('').reduce((a, el) => a + (+el), 0)
    }
    planetary2.value = planetaryNum2.toString()
}
</script>

<style></style>
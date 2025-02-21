<template>
    <div class="container">

        <form action="" class="form">
            <!-- <label for="birthday" class="form__label">Имя первого парнтера</label> -->
            <input class="input-date" type="date" id="birthday_one" name="birthday" v-model="birthday">
            
            <!-- <label for="birthday">Дата рождения:</label> -->
            <input class="input-date" type="date" id="birthday_two" name="birthday" v-model="birthdayTwo">
        </form>
    </div>
    <div class="div-butt_fate">
        <button class="butt-fate" @click="calculate">Рассчитать</button>
    </div>
        
    <div class="container-partners">
        <div class="parnter1">
            
            <div class="p-one_partner">
                <h1>Матрица первого партнера</h1>
            </div>
            <svg id="partner1SVG" viewBox="0 0 800 800" preserveAspectRatio="xMidYMid meet" >
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
                    <text x="30" y="408" fill="#000000" style="font: bold 22px Cakra, serif;">{{ matrix1.dayNum }}</text>

                <circle cx="400" cy="36" r="29" class="matrix-circle"
                    style="stroke: rgb(174, 143, 190); fill: rgb(255, 255, 255);"></circle>
                    <text x="393" y="42" fill="#000000" style="font: bold 22px Cakra, serif;">{{ matrix1.monthNum }}</text>

                <circle cx="764" cy="400" r="29" class="matrix-circle"
                    style="stroke: rgb(199, 90, 90); fill: rgb(255, 255, 255);"></circle>
                    <text x="760" y="406" fill="#000000" style="font: bold 22px Cakra, serif;">{{ matrix1.yearNum }}</text>

                <circle cx="400" cy="764" r="29" class="matrix-circle"
                    style="stroke: rgb(199, 90, 90); fill: rgb(255, 255, 255);"></circle>
                    <text x="390" y="770" fill="#000000" style="font: bold 22px Cakra, serif;">{{ matrix1.fateNum }}</text>

                <circle cx="400" cy="400" r="29" class="matrix-circle"
                    style="stroke: rgb(191, 153, 161); fill: rgb(255, 255, 255);"></circle>
                    <text x="390" y="406" fill="#000000" style="font: bold 22px Cakra, serif;">{{ matrix1.mainNum }}</text>

                <circle cx="142" cy="142" r="29" class="matrix-circle"
                    style="stroke: rgb(174, 164, 158); fill: rgb(255, 255, 255);"></circle>
                    <text x="133" y="147" fill="#000000" style="font: bold 22px Cakra, serif;">{{ matrix1.leftUp }}</text>

                <circle cx="658" cy="142" r="29" class="matrix-circle"
                    style="stroke: rgb(174, 164, 158); fill: rgb(255, 255, 255);"></circle>
                    <text x="648" y="149" fill="#000000" style="font: bold 22px Cakra, serif;">{{ matrix1.rightUp }}</text>

                    <circle cx="658" cy="658" r="29" class="matrix-circle"
            style="stroke: rgb(174, 164, 158); fill: rgb(255, 255, 255);"></circle>
        <text x="652" y="662" fill="#000000" style="font: bold 22px Cakra, serif;">{{ matrix1.rightDown }}</text>

        <circle cx="142" cy="658" r="29" class="matrix-circle"
            style="stroke: rgb(174, 164, 158); fill: rgb(255, 255, 255);"></circle>
            <text x="130" y="662" fill="#000000" style="font: bold 22px Cakra, serif;">{{ matrix1.leftDown }}</text>

        <circle cx="142" cy="400" r="22" class="matrix-circle"
            style="stroke: rgb(163, 176, 224); fill: rgb(255, 255, 255);"></circle>
        <text x="133" y="405" fill="#000000" style="font: bold 22px Cakra, serif;">{{ matrix1.thirdLeft }}</text>

        <circle cx="217" cy="217" r="22" class="matrix-circle"
            style="stroke: rgb(174, 164, 158); fill: rgb(255, 255, 255);"></circle>
            <text x="205" y="223" fill="#000000" style="font: bold 22px Cakra, serif;">{{ matrix1.thirdLeftUp }}</text>

        <circle cx="400" cy="142" r="22" class="matrix-circle"
            style="stroke: rgb(163, 176, 224); fill: rgb(255, 255, 255);"></circle>
            <text x="391" y="150" fill="#000000" style="font: bold 22px Cakra, serif;">{{ matrix1.thirdCenter }}</text>

        <circle cx="583" cy="217" r="22" class="matrix-circle"
            style="stroke: rgb(174, 164, 158); fill: rgb(255, 255, 255);"></circle>
            <text x="574" y="224" fill="#000000" style="font: bold 22px Cakra, serif;">{{ matrix1.thirdRightUp }}</text>

        <circle cx="658" cy="400" r="22" class="matrix-circle"
            style="stroke: rgb(242, 181, 125); fill: rgb(255, 255, 255);"></circle>
            <text x="648" y="405" fill="#000000" style="font: bold 22px Cakra, serif;">{{ matrix1.thirdRight }}</text>

        <circle cx="450" cy="400" r="20" class="matrix-circle"
            style="stroke: rgb(117, 117, 117); fill: rgb(255, 255, 255);"></circle>
            <text x="445" y="405" fill="#000000" style="font: bold 22px Cakra, serif;">{{ matrix1.secondMainRight }}</text>

        <circle cx="496" cy="400" r="20" class="matrix-circle"
            style="stroke: rgb(117, 117, 117); fill: rgb(255, 255, 255);"></circle>
            <text x="489" y="406" fill="#000000" style="font: bold 22px Cakra, serif;">{{ matrix1.thirdMainRight }}</text>


        <circle cx="583" cy="583" r="22" class="matrix-circle"
            style="stroke: rgb(174, 164, 158); fill: rgb(255, 255, 255);"></circle>
            <text x="574" y="589" fill="#000000" style="font: bold 22px Cakra, serif;">{{ matrix1.thirdRightDown }}</text>

        <circle cx="400" cy="658" r="22" class="matrix-circle"
            style="stroke: rgb(242, 181, 125); fill: rgb(255, 255, 255);"></circle>
            <text x="395" y="663" fill="#000000" style="font: bold 22px Cakra, serif;">{{ matrix1.thirdDown }}</text>

        <circle cx="217" cy="583" r="22" class="matrix-circle"
            style="stroke: rgb(174, 164, 158); fill: rgb(255, 255, 255);"></circle>
            <text x="210" y="588" fill="#000000" style="font: bold 22px Cakra, serif;">{{ matrix1.thirdLeftDown }}</text>

        <circle cx="92" cy="400" r="22" class="matrix-circle" style="stroke: rgb(90, 112, 199); fill: rgb(255, 255, 255);">
        </circle>
        <text x="84" y="405" fill="#000000" style="font: bold 22px Cakra, serif;">{{ matrix1.secondLeft }}</text>

        <circle cx="182" cy="182" r="22" class="matrix-circle"
            style="stroke: rgb(174, 164, 158); fill: rgb(255, 255, 255);"></circle>
            <text x="175" y="189" fill="#000000" style="font: bold 22px Cakra, serif;">{{ matrix1.secondLeftUp }}</text>

        <circle cx="400" cy="92" r="22" class="matrix-circle" style="stroke: rgb(90, 112, 199); fill: rgb(255, 255, 255);">
        </circle>
        <text x="393" y="100" fill="#000000" style="font: bold 22px Cakra, serif;">{{ matrix1.secondCenter }}</text>

        <circle cx="617" cy="182" r="22" class="matrix-circle"
            style="stroke: rgb(174, 164, 158); fill: rgb(255, 255, 255);"></circle>
            <text x="610" y="190" fill="#000000" style="font: bold 22px Cakra, serif;">{{ matrix1.secondRightUp }}</text>

        <circle cx="707" cy="400" r="22" class="matrix-circle"
            style="stroke: rgb(174, 164, 158); fill: rgb(255, 255, 255);"></circle>
            <text x="700" y="407" fill="#000000" style="font: bold 22px Cakra, serif;">{{ matrix1.secondRight }}</text>

        <circle cx="617" cy="617" r="22" class="matrix-circle"
            style="stroke: rgb(174, 164, 158); fill: rgb(255, 255, 255);"></circle>
            <text x="608" y="622" fill="#000000" style="font: bold 22px Cakra, serif;">{{ matrix1.secondRightDown }}</text>

        <circle cx="400" cy="707" r="22" class="matrix-circle"
            style="stroke: rgb(174, 164, 158); fill: rgb(255, 255, 255);"></circle>
            <text x="390" y="712" fill="#000000" style="font: bold 22px Cakra, serif;">{{ matrix1.secondDown }}</text>

        <circle cx="182" cy="617" r="22" class="matrix-circle"
            style="stroke: rgb(174, 164, 158); fill: rgb(255, 255, 255);"></circle>
            <text x="173" y="623" fill="#000000" style="font: bold 22px Cakra, serif;">{{ matrix1.secondLeftDown }}</text>

        <circle cx="264" cy="400" r="22" class="matrix-circle"
            style="stroke: rgb(137, 184, 151); fill: rgb(255, 255, 255);"></circle>
            <text x="260" y="408" fill="#000000" style="font: bold 22px Cakra, serif;">{{ matrix1.secondMainLeft }}</text>

        <circle cx="400" cy="264" r="22" class="matrix-circle"
            style="stroke: rgb(137, 184, 151); fill: rgb(255, 255, 255);"></circle>
            <text x="390" y="270" fill="#000000" style="font: bold 22px Cakra, serif;">{{ matrix1.secondMainUp }}</text>

        <circle cx="496" cy="496" r="22" class="matrix-circle"
            style="stroke: rgb(174, 164, 158); fill: rgb(255, 255, 255);"></circle>
            <text x="486" y="502" fill="#000000" style="font: bold 22px Cakra, serif;">{{ matrix1.betweenHeartAndDollar }}</text>

        <circle cx="576" cy="464" r="22" class="matrix-circle"
            style="stroke: rgb(174, 164, 158); fill: rgb(255, 255, 255);"></circle><text x="546" y="432" fill="#9DBC78"
            style="font: bold 22px Cakra, serif;">$</text>
            <text x="570" y="470" fill="#000000" style="font: bold 22px Cakra, serif;">{{ matrix1.dollar }}</text>


        <circle cx="464" cy="576" r="22" class="matrix-circle"
            style="stroke: rgb(174, 164, 158); fill: rgb(255, 255, 255);"></circle><text x="434" y="544" fill="#EFA1A1"
            style="font: bold 30px Cakra, serif;">♥</text>
            <text x="457" y="580" fill="#000000" style="font: bold 22px Cakra, serif;">{{ matrix1.heart }}</text>


            </svg>
        </div>

        <div class="partner2">
            <div class="p-two_partner">
                <h1>Матрица второго партнера</h1>
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
                    <text x="30" y="408" fill="#000000" style="font: bold 22px Cakra, serif;">{{ matrix2.dayNum }}</text>

                <circle cx="400" cy="36" r="29" class="matrix-circle"
                    style="stroke: rgb(174, 143, 190); fill: rgb(255, 255, 255);"></circle>
                    <text x="393" y="42" fill="#000000" style="font: bold 22px Cakra, serif;">{{ matrix2.monthNum }}</text>

                <circle cx="764" cy="400" r="29" class="matrix-circle"
                    style="stroke: rgb(199, 90, 90); fill: rgb(255, 255, 255);"></circle>
                    <text x="760" y="406" fill="#000000" style="font: bold 22px Cakra, serif;">{{ matrix2.yearNum }}</text>

                <circle cx="400" cy="764" r="29" class="matrix-circle"
                    style="stroke: rgb(199, 90, 90); fill: rgb(255, 255, 255);"></circle>
                    <text x="390" y="770" fill="#000000" style="font: bold 22px Cakra, serif;">{{ matrix2.fateNum }}</text>

                <circle cx="400" cy="400" r="29" class="matrix-circle"
                    style="stroke: rgb(191, 153, 161); fill: rgb(255, 255, 255);"></circle>
                    <text x="396" y="407" fill="#000000" style="font: bold 22px Cakra, serif;">{{ matrix2.mainNum }}</text>

                <circle cx="142" cy="142" r="29" class="matrix-circle"
                    style="stroke: rgb(174, 164, 158); fill: rgb(255, 255, 255);"></circle>
                    <text x="133" y="147" fill="#000000" style="font: bold 22px Cakra, serif;">{{ matrix2.leftUp }}</text>

                <circle cx="658" cy="142" r="29" class="matrix-circle"
                    style="stroke: rgb(174, 164, 158); fill: rgb(255, 255, 255);"></circle>
                    <text x="648" y="149" fill="#000000" style="font: bold 22px Cakra, serif;">{{ matrix2.rightUp}}</text>

                    <circle cx="658" cy="658" r="29" class="matrix-circle"
            style="stroke: rgb(174, 164, 158); fill: rgb(255, 255, 255);"></circle>
        <text x="652" y="662" fill="#000000" style="font: bold 22px Cakra, serif;">{{ matrix2.rightDown }}</text>

        <circle cx="142" cy="658" r="29" class="matrix-circle"
            style="stroke: rgb(174, 164, 158); fill: rgb(255, 255, 255);"></circle>
            <text x="130" y="662" fill="#000000" style="font: bold 22px Cakra, serif;">{{ matrix2.leftDown }}</text>

        <circle cx="142" cy="400" r="22" class="matrix-circle"
            style="stroke: rgb(163, 176, 224); fill: rgb(255, 255, 255);"></circle>
        <text x="133" y="405" fill="#000000" style="font: bold 22px Cakra, serif;">{{ matrix2.thirdLeft }}</text>

        <circle cx="217" cy="217" r="22" class="matrix-circle"
            style="stroke: rgb(174, 164, 158); fill: rgb(255, 255, 255);"></circle>
            <text x="205" y="223" fill="#000000" style="font: bold 22px Cakra, serif;">{{ matrix2.thirdLeftUp }}</text>

        <circle cx="400" cy="142" r="22" class="matrix-circle"
            style="stroke: rgb(163, 176, 224); fill: rgb(255, 255, 255);"></circle>
            <text x="395" y="150" fill="#000000" style="font: bold 22px Cakra, serif;">{{ matrix2.thirdCenter }}</text>

        <circle cx="583" cy="217" r="22" class="matrix-circle"
            style="stroke: rgb(174, 164, 158); fill: rgb(255, 255, 255);"></circle>
            <text x="574" y="224" fill="#000000" style="font: bold 22px Cakra, serif;">{{ matrix2.thirdRightUp }}</text>

        <circle cx="658" cy="400" r="22" class="matrix-circle"
            style="stroke: rgb(242, 181, 125); fill: rgb(255, 255, 255);"></circle>
            <text x="648" y="405" fill="#000000" style="font: bold 22px Cakra, serif;">{{ matrix2.thirdRight }}</text>

        <circle cx="450" cy="400" r="20" class="matrix-circle"
            style="stroke: rgb(117, 117, 117); fill: rgb(255, 255, 255);"></circle>
            <text x="445" y="405" fill="#000000" style="font: bold 22px Cakra, serif;">{{ matrix2.secondMainRight }}</text>

        <circle cx="496" cy="400" r="20" class="matrix-circle"
            style="stroke: rgb(117, 117, 117); fill: rgb(255, 255, 255);"></circle>
            <text x="489" y="406" fill="#000000" style="font: bold 22px Cakra, serif;">{{ matrix2.thirdMainRight }}</text>


        <circle cx="583" cy="583" r="22" class="matrix-circle"
            style="stroke: rgb(174, 164, 158); fill: rgb(255, 255, 255);"></circle>
            <text x="574" y="589" fill="#000000" style="font: bold 22px Cakra, serif;">{{ matrix2.thirdRightDown }}</text>

        <circle cx="400" cy="658" r="22" class="matrix-circle"
            style="stroke: rgb(242, 181, 125); fill: rgb(255, 255, 255);"></circle>
            <text x="390" y="665" fill="#000000" style="font: bold 22px Cakra, serif;">{{ matrix2.thirdDown }}</text>

        <circle cx="217" cy="583" r="22" class="matrix-circle"
            style="stroke: rgb(174, 164, 158); fill: rgb(255, 255, 255);"></circle>
            <text x="210" y="588" fill="#000000" style="font: bold 22px Cakra, serif;">{{ matrix2.thirdLeftDown }}</text>

        <circle cx="92" cy="400" r="22" class="matrix-circle" style="stroke: rgb(90, 112, 199); fill: rgb(255, 255, 255);">
        </circle>
        <text x="80" y="405" fill="#000000" style="font: bold 22px Cakra, serif;">{{ matrix2.secondLeft }}</text>

        <circle cx="182" cy="182" r="22" class="matrix-circle"
            style="stroke: rgb(174, 164, 158); fill: rgb(255, 255, 255);"></circle>
            <text x="173" y="189" fill="#000000" style="font: bold 22px Cakra, serif;">{{ matrix2.secondLeftUp }}</text>

        <circle cx="400" cy="92" r="22" class="matrix-circle" style="stroke: rgb(90, 112, 199); fill: rgb(255, 255, 255);">
        </circle>
        <text x="393" y="100" fill="#000000" style="font: bold 22px Cakra, serif;">{{ matrix2.secondCenter }}</text>

        <circle cx="617" cy="182" r="22" class="matrix-circle"
            style="stroke: rgb(174, 164, 158); fill: rgb(255, 255, 255);"></circle>
            <text x="610" y="190" fill="#000000" style="font: bold 22px Cakra, serif;">{{ matrix2.secondRightUp }}</text>

        <circle cx="707" cy="400" r="22" class="matrix-circle"
            style="stroke: rgb(174, 164, 158); fill: rgb(255, 255, 255);"></circle>
            <text x="700" y="407" fill="#000000" style="font: bold 22px Cakra, serif;">{{ matrix2.secondRight }}</text>

        <circle cx="617" cy="617" r="22" class="matrix-circle"
            style="stroke: rgb(174, 164, 158); fill: rgb(255, 255, 255);"></circle>
            <text x="608" y="622" fill="#000000" style="font: bold 22px Cakra, serif;">{{ matrix2.secondRightDown }}</text>

        <circle cx="400" cy="707" r="22" class="matrix-circle"
            style="stroke: rgb(174, 164, 158); fill: rgb(255, 255, 255);"></circle>
            <text x="395" y="712" fill="#000000" style="font: bold 22px Cakra, serif;">{{ matrix2.secondDown }}</text>

        <circle cx="182" cy="617" r="22" class="matrix-circle"
            style="stroke: rgb(174, 164, 158); fill: rgb(255, 255, 255);"></circle>
            <text x="173" y="623" fill="#000000" style="font: bold 22px Cakra, serif;">{{ matrix2.secondLeftDown }}</text>

        <circle cx="264" cy="400" r="22" class="matrix-circle"
            style="stroke: rgb(137, 184, 151); fill: rgb(255, 255, 255);"></circle>
            <text x="255" y="408" fill="#000000" style="font: bold 22px Cakra, serif;">{{ matrix2.secondMainLeft }}</text>

        <circle cx="400" cy="264" r="22" class="matrix-circle"
            style="stroke: rgb(137, 184, 151); fill: rgb(255, 255, 255);"></circle>
            <text x="390" y="270" fill="#000000" style="font: bold 22px Cakra, serif;">{{ matrix2.secondMainUp }}</text>

        <circle cx="496" cy="496" r="22" class="matrix-circle"
            style="stroke: rgb(174, 164, 158); fill: rgb(255, 255, 255);"></circle>
            <text x="486" y="502" fill="#000000" style="font: bold 22px Cakra, serif;">{{ matrix2.betweenHeartAndDollar}}</text>

        <circle cx="576" cy="464" r="22" class="matrix-circle"
            style="stroke: rgb(174, 164, 158); fill: rgb(255, 255, 255);"></circle><text x="546" y="432" fill="#9DBC78"
            style="font: bold 22px Cakra, serif;">$</text>
            <text x="565" y="470" fill="#000000" style="font: bold 22px Cakra, serif;">{{ matrix2.dollar }}</text>


        <circle cx="464" cy="576" r="22" class="matrix-circle"
            style="stroke: rgb(174, 164, 158); fill: rgb(255, 255, 255);"></circle><text x="434" y="544" fill="#EFA1A1"
            style="font: bold 30px Cakra, serif;">♥</text>
            <text x="457" y="580" fill="#000000" style="font: bold 22px Cakra, serif;">{{ matrix2.heart }}</text>



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
               
                <circle cx="400" cy="142" r="22" class="matrix-circle"
                    style="stroke: rgb(163, 176, 224); fill: rgb(255, 255, 255);"></circle>
               
                <circle cx="658" cy="400" r="22" class="matrix-circle"
                    style="stroke: rgb(242, 181, 125); fill: rgb(255, 255, 255);"></circle>
               
                <circle cx="400" cy="658" r="22" class="matrix-circle"
                    style="stroke: rgb(242, 181, 125); fill: rgb(255, 255, 255);"></circle>
               
                <circle cx="92" cy="400" r="22" class="matrix-circle"
                    style="stroke: rgb(90, 112, 199); fill: rgb(255, 255, 255);"></circle>
               
                <circle cx="400" cy="92" r="22" class="matrix-circle"
                    style="stroke: rgb(90, 112, 199); fill: rgb(255, 255, 255);"></circle>
              
                <circle cx="707" cy="400" r="22" class="matrix-circle"
                    style="stroke: rgb(174, 164, 158); fill: rgb(255, 255, 255);"></circle>
             
                <circle cx="400" cy="707" r="22" class="matrix-circle"
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
import {useMatrix} from '~/store/matrix'
const birthday = ref('2006-07-31')
const birthdayTwo = ref('2007-01-03')

const matrixStore = useMatrix()
const matrix1 = ref({} as any)
const matrix2 = ref({} as any)
// const matrix3 = ref({} as any)

const calculate = () => {
    matrix1.value = matrixStore.calculateMatrix(birthday.value)
    matrix2.value = matrixStore.calculateMatrix(birthdayTwo.value)
    // matrix3.value.fateNum = matrixStore.onlyCheck(matrix1.value.fateNum+matrix2.value.fateNum)
}

</script>

<style></style>
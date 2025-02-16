<template>
    <div class="container">

        <form action="" class="form">
            <!-- <label for="birthday" class="form__label">Имя первого парнтера</label> -->
            <input class="input-date" type="date" id="birthday_one" name="birthday">


            <!-- <label for="birthday">Дата рождения:</label> -->
            <input class="input-date" type="date" id="birthday_two" name="birthday">

        </form>
    </div>
    <div class="div-butt_fate">
        <button class="butt-fate">Рассчитать</button>
    </div>
    <div class="p-one_partner">
        <p>Матрица первого партнера</p>
    </div>
    <div class="p-two_partner">
        <p>Матрица второго партнера</p>
    </div>


    <div class="container-partners">
        <div class="parnter1">

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

        <div class="partner2">
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
</script>

<style></style>
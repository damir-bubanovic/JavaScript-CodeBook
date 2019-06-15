/***
	!! INTER - PLAY - CSS - style.js !!
***/
/*HTML*/
<template>
    <div>
        <div id="sampleDiv">
            ASDFasdgasdgd vdfagfsgasdfvs asdfasdfasdv ASDgasgsdgasddsfaEWr2354235
        </div>
        <button id="chgBkColor">Background Color</button>
        <button id="chgBkImg">Background image</button>
        <button id="chgBorderStyle">Border Style</button>
        <button id="chgBorderWidth">Border Width</button>
        <button id="v">Border Color</button>
    </div>
</template>

<style type="text/css">
    #sampleDiv {
        margin-top: 20px;
        margin-bottom: 20px;
        border: 1px dotted black;
    }
</style>


/*Script*/
document.getElementById('chgBkColor').onclick = function(event) {
    document.getElementById('sampleDiv').style.backgroundColor = 'red';
}

document.getElementById('chgBkImg').onclick = function(event) {
    document.getElementById('sampleDiv').style.backgroundImage = "url('./images/cat.js')";
}

document.getElementById('chgBkColor').onclick = function(event) {
    document.getElementById('sampleDiv').style.backgroundColor = 'red';
}

document.getElementById('chgBorderStyle').onclick = function(event) {
    document.getElementById('sampleDiv').style.borderStyle = 'solid';
}

document.getElementById('chgBorderWidth').onclick = function(event) {
    document.getElementById('sampleDiv').style.borderWidth = 'thick';
}

document.getElementById('chgBorderColor').onclick = function(event) {
    document.getElementById('sampleDiv').style.borderColor = 'blue';
}
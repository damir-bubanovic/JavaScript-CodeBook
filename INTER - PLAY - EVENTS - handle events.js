/***
	!! INTER - EVENTS - event handling.js !!
***/
/*HTML*/
<template>
    <div>
        <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <h1>JavaScript</h1>
                <br>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <form action="" method="POST" id="sampleForm" role="form">
                    <input type="text" id="charInput">

                    <p id="keyData">Key Data Here</p>

                    <input type="submit" value="Submit">
                    <input type="reset" value="Reset">
                </form>
                <img src="/images/cat.jpg" id="logo">
                <button type="button" id="logoButton">Get Logo</button>
                <input type="text" id="mouseInput" size="30"><br />
                Mouse X: <input type="text" id="mouseX"><br />
                Mouse Y: <input type="text" id="mouseY"><br />
                <button id="clearInputs">Clear Inputs</button>
            </div>
        </div>
    </div>
</template>

<style type="text/css">
    .hidden {
        display: none;
    }
    .show {
        display: inline !important;
    }
</style>


/*Script*/
function getChar(event) {
    if(event.which == null) {
        return String.fromCharCode(event.keyCode);
    } else if(event.which != 0 && event.charCode != 0) {
        return String.fromCharCode(event.which);
    } else {
        return null;
    }
}


document.getElementById('charInput').onkeypress =
    function(event) {
        var char = getChar(event || window.event);
        if(!char) return false;
        document.getElementById('keyData').innerHTML = char + ' was clicked';
        return true;
    }


document.getElementById('charInput').onfocus = function(event) {
    document.getElementById('keyData').innerHTML = 'Input Gained Focus';
};


document.getElementById('charInput').onselect = function(event) {
    document.getElementById('keyData').innerHTML = 'Text Selected';
};


document.getElementById('logoButton').onclick = function() {
    document.getElementById('logo').className = 'hidden';
};


document.body.onmousemove = function(e) {
    e = e || window.event;

    var pageX = e.pageX;
    var pageY = e.pageY;

    if(pageX === undefined) {
        pageX = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
        pageY = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
    }
    document.getElementById('mouseX').value = pageX;
    document.getElementById('mouseY').value = pageY;
}



document.getElementById('clearInputs').onclick = function(event) {
    var inputElements = document.getElementsByTagName('input');

    for(var i = 0; i < inputElements.length; i++) {
        if(inputElements[i].type == 'text') {
            inputElements[i].value = '';
        }
    }
};
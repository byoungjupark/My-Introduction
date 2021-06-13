"use strict";
/*Variable Declaration*/
const bodyColor = function(_bodyColor) {
    document.querySelector("body").style.backgroundColor = _bodyColor;
    document.querySelector("header").style.backgroundColor = _bodyColor;
}
const h2Color = function(_h2Color) {
    let h2Tag = document.getElementsByTagName("h2")
    for(let i=0; i<h2Tag.length; i++) {
        h2Tag[i].style.color = _h2Color
    }
}
const pColor = function(_pColor) {
    let pTag = document.getElementsByTagName("p")
    for(let i=0; i<pTag.length; i++) {
        pTag[i].style.color = _pColor
    }
}
const aColor = function(_aColor) {
    let aTag = document.links
    for (let i=0; i<aTag.length; i++) {
        aTag[i].style.color = _aColor
    }
}
const spanColor = function(_spanColor) {
    let spanTag = document.getElementsByTagName("span")
    for(let i=0; i<spanTag.length; i++) {
        spanTag[i].style.color = _spanColor
    }
}
/*Function change color*/
function changeColor(self) {
    if(self.value === "Dark") {
        bodyColor("#292A2D");
        pColor("white");
        aColor("white");
        spanColor("white");
        self.value = "Light";
    } else {
        bodyColor("white");
        pColor("black");
        aColor("black");
        spanColor("#0716CD");
        self.value = "Dark";
    }
}

function changeColor2(self) {
    if(self.value === "Dark") {
        bodyColor("#292A2D");
        pColor("white");
        aColor("white");
        spanColor("white");
        h2Color("white");
        self.value = "Light";
    } else {
        bodyColor("white");
        pColor("black");
        aColor("black");
        spanColor("#0716CD");
        h2Color("black");
        self.value = "Dark";
    }
}





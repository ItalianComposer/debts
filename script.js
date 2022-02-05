let mask = document.querySelector('#mask');
let getVariants = document.querySelector('#getVariants');
let next1 = document.querySelector('#next1');
let back1 = document.querySelector('#back1');
let next2 = document.querySelector('#next2');
let back2 = document.querySelector('#back2');
let next3 = document.querySelector('#next3');
let next4 = document.querySelector('#next4');
let getVars = document.querySelector('#getVars');
let finalScreen = document.querySelector('#finalScreen');
let stepZero = document.querySelector('#stepZero');
let stepOne = document.querySelector('#stepOne');
let stepTwo = document.querySelector('#stepTwo');
let stepFour = document.querySelector('#stepFour')
let stepThree = document.querySelector('#stepThree');
let stepEnd = document.querySelector('#stepEnd');
let getConsultBtn = document.querySelector('#getConsultBtn');
let getConsult = document.querySelector('#getConsult');
let close = document.querySelector('#close');

getConsultBtn.onclick = function () {
  getConsult.style.display = "flex";
  mask.style.display = 'block';
};
close.onclick = function () {
  getConsult.style.display = 'none';
  mask.style.background = '';
};
getVariants.onclick = function () {
  stepOne.style.display = 'flex';
  stepZero.style.display = 'none';
};
next1.onclick = function () {
  stepTwo.style.display = 'flex';
  stepOne.style.display = 'none';
};
back1.onclick = function () {
  stepOne.style.display = 'flex';
  stepTwo.style.display = 'none';
};
next2.onclick = function () {
  stepThree.style.display = 'flex';
  stepTwo.style.display = 'none';
};
back2.onclick = function () {
  stepTwo.style.display = 'flex';
  stepThree.style.display = 'none';
};
next3.onclick = function () {
  stepFour.style.display = 'flex';
  stepThree.style.display = 'none';
};
// BUG: не видит "stepEnd"
next4.onclick = function () {
  stepEnd.style.display = 'flex';
  stepFour.style.display = 'none';
};
getVars.onclick = function () {
  finalScreen.style.display = 'flex';
  stepEnd.style.display = 'none';
};

window.addEventListener("DOMContentLoaded", function() {
function setCursorPosition(pos, elem) {
    elem.focus();
    if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
    else if (elem.createTextRange) {
        var range = elem.createTextRange();
        range.collapse(true);
        range.moveEnd("character", pos);
        range.moveStart("character", pos);
        range.select()
    }
}
function mask(event) {
    var matrix = "+7 (___) ___ ____",
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, "");
    if (def.length >= val.length) val = def;
    this.value = matrix.replace(/./g, function(a) {
        return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
    });
    if (event.type == "blur") {
        if (this.value.length == 2) this.value = ""
    } else setCursorPosition(this.value.length, this)
};
    var input = document.querySelector("#tel");
    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
});

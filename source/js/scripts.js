var hamburgerBtn = document.querySelector(".hamburger-btn");
var pageHeaderNav = document.querySelector(".page-header__nav");

pageHeaderNav.classList.remove("page-header__nav--show");

hamburgerBtn.addEventListener("click", function () {
  pageHeaderNav.classList.toggle("page-header__nav--show");
  hamburgerBtn.classList.toggle("hamburger-btn--close");
});


var diffRange = document.querySelector('.result__diff-range-label--before');
var resultLineWidth = document.querySelector('.result__diff-range-line');
var resultImgBefore = document.querySelector('.result__diff-img--before');
var resultImgAfter = document.querySelector('.result__diff-img--after');
var btnBefore = document.querySelector('.result__diff-range-btn--before');
var btnAfter = document.querySelector('.result__diff-range-btn--after');
var lineGreen = document.querySelector('.line-green');
var resultImgWrapBefore = document.querySelector('.result__diff-img-wrap--before');
var resultImgWrapAfter = document.querySelector('.result__diff-img-wrap--after');

diffRange.addEventListener('mousedown', function(evt){
	evt.preventDefault();
	var rangeWidth = resultLineWidth.clientWidth;

	var startCoords = {
		x: evt.clientX
	}

	var onMouseMove = function(moveEvt){
		moveEvt.preventDefault();

		var shift = {
			x: startCoords.x - moveEvt.clientX
		}
		startCoords = {
			x: moveEvt.clientX
		}

		var diffRangeOffset = diffRange.offsetLeft - shift.x;

		if(diffRangeOffset > rangeWidth || diffRangeOffset < 0){
			diffRangeOffset = diffRange.offsetLeft;
		}

		//Отрисовка изображений
		var resultImgBeforeOffer = diffRangeOffset + 150 + "px";
		var resultImgAfterOffer = diffRangeOffset + 132 + "px";

		resultImgBefore.style = "clip: rect(0px, " + resultImgBeforeOffer  + ", 518px, 0px)";
		resultImgAfter.style = "clip: rect(0px, 572px, 518px, " + resultImgAfterOffer  + ")";

		diffRange.style.left = diffRangeOffset + "px";

	}

	var onMouseUp = function(upEvt){
		upEvt.preventDefault();
		document.removeEventListener('mousemove', onMouseMove);
		document.removeEventListener('mouseup', onMouseUp);
	}
	document.addEventListener('mousemove', onMouseMove);
	document.addEventListener('mouseup', onMouseUp);
});

//Нажатие на кнопки
btnBefore.addEventListener('click', function(evt){
	evt.preventDefault();
	diffRange.style.left = "0px";
	resultImgBefore.style = "clip: rect(0px, 578px, 518px, 0px)";
	resultImgAfter.style = "clip: rect(0px, 572px, 518px, 560px)";

	lineGreen.style = "left: 7%";
	if(resultImgWrapAfter.className !== 'result__diff-img-wrap--active'){
		resultImgWrapBefore.classList.add('result__diff-img-wrap--active');
		resultImgWrapAfter.classList.remove('result__diff-img-wrap--active');
	}
});

btnAfter.addEventListener('click', function(evt){
	evt.preventDefault();
	diffRange.style.left = "420px";
	resultImgBefore.style = "clip: rect(0px, 150px, 518px, 0px)";
	resultImgAfter.style = "clip: rect(0px, 572px, 518px, 132px)";

	lineGreen.style = "left: 47%";
	if(resultImgWrapBefore.className !== 'result__diff-img-wrap--active'){
		resultImgWrapBefore.classList.remove('result__diff-img-wrap--active');
		resultImgWrapAfter.classList.add('result__diff-img-wrap--active');
	}
});
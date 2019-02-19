//========= three frame slider======/

const getSlideEl = () => document.getElementById('slide');
const getSlideElHover1 = () => document.getElementById('slide1');
const getSlideElHover2 = () => document.getElementById('slide2');
const getSlideElHover3 = () => document.getElementById('slide3');

let count = 1;

function showNextSlide() {

  //=========CSS-animation stop===========
  getSlideEl().classList.remove('animation');


  // =====change slide ===========
  if (count === 3) {
    count = 0;
  }

  count++;

  if ((count % 3) === 2) {

    getSlideEl().style.backgroundImage = 'url("./assets/special_2.jpg")';
    getSlideElHover2().classList.remove('slide-hide');
    getSlideElHover2().classList.add('slide');
    getSlideElHover3().classList.add('slide-hide');
    getSlideElHover1().classList.add('slide-hide');
    getSlideElHover3().classList.remove('slide');
    getSlideElHover1().classList.remove('slide');
    getSlideElHover3().classList.remove('slide');
  
  }
  if ((count % 3) === 0) {
    getSlideEl().style.backgroundImage = 'url("./assets/special_3.jpg")';
    getSlideElHover3().classList.remove('slide-hide');
    getSlideElHover3().classList.add('slide');
    getSlideElHover2().classList.add('slide-hide');
    getSlideElHover1().classList.add('slide-hide');
    getSlideElHover2().classList.remove('slide');
    getSlideElHover1().classList.remove('slide');
  }
  if ((count % 3) === 1) {
    getSlideEl().style.backgroundImage = 'url("./assets/special.jpg")';
    getSlideElHover1().classList.remove('slide-hide');
    getSlideElHover1().classList.add('slide');
    getSlideElHover3().classList.add('slide-hide');
    getSlideElHover2().classList.add('slide-hide');
    getSlideElHover3().classList.remove('slide');
    getSlideElHover2().classList.remove('slide');
  }
  //  ========CSS-animation start========

  setTimeout(function () {
    getSlideEl().classList.add('animation');
  }, 15000);
}

function showPrevSlide() {

  //=========CSS-animation stop===========
  getSlideEl().classList.remove('animation');


  // =====change slide ===========  
  if (count === 0) {
    count = 3;
  }
  count--;

  if ((count % 3) === 2) {

    getSlideEl().style.backgroundImage = 'url("./assets/special_2.jpg")';
    getSlideElHover2().classList.remove('slide-hide');
    getSlideElHover2().classList.add('slide');
    getSlideElHover3().classList.add('slide-hide');
    getSlideElHover1().classList.add('slide-hide');
    getSlideElHover1().classList.remove('slide');
    getSlideElHover3().classList.remove('slide');
  }
  if ((count % 3) === 0) {
    getSlideEl().style.backgroundImage = 'url("./assets/special_3.jpg")';
    getSlideElHover3().classList.remove('slide-hide');
    getSlideElHover3().classList.add('slide');
    getSlideElHover2().classList.add('slide-hide');
    getSlideElHover1().classList.add('slide-hide');
    getSlideElHover2().classList.remove('slide');
    getSlideElHover1().classList.remove('slide');
  }

  if ((count % 3) === 1) {
    getSlideEl().style.backgroundImage = 'url("./assets/special.jpg")';
    getSlideElHover1().classList.remove('slide-hide');
    getSlideElHover1().classList.add('slide');
    getSlideElHover3().classList.add('slide-hide');
    getSlideElHover2().classList.add('slide-hide');
    getSlideElHover3().classList.remove('slide');
    getSlideElHover2().classList.remove('slide');
  }

  //  ========CSS-animation start========
  setTimeout(function () {
    getSlideEl().classList.add('animation');
  }, 15000);
} 

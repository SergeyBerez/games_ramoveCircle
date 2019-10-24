let text = '';
let boxs = $('.box');
console.log(boxs.length);
setInterval(function() {
  let boxs = $('.box');
  for (let i = 0; i < boxs.length; i++) {
    if (boxs[i].classList.contains('border')) {
      boxs[i].classList.remove('border');
      boxs[i].textContent = text;
    }
  }
  let random = Math.floor(Math.random() * (boxs.length + 1 - 1));

  if (boxs.length != 0) {
    
    boxs[random].classList.add('border'); //добавить класс может через .[i]
    text = boxs.eq(random).text(); // здесь получить текст не может нужно медоту eq( i) обратиться

    boxs[random].textContent = 'ПОПАДИ';
  }
}, 1000);
// ===================================

document.addEventListener('click', function(e) {
  if (e.target.classList.contains('border')) {
    $(e.target).fadeOut(900);
    $(e.target).attr('data-elem', 'rem');

    setTimeout(() => {
      $('[data-elem]').remove();
    }, 2000);
  }
  if (e.target.classList.contains('overlay')) {
    window.location.reload();
  }

  if ($('.box').length == 2) {
    $('.box').remove();
    createDiv();
  }
});
// ===================================
function createDiv() {
  let divOverlay = document.createElement('div');
  divOverlay.classList.add('overlay');
  let divModal = document.createElement('div');
  divModal.classList.add('modal');
  divModal.textContent = 'YOU WIN';
  document.body.insertAdjacentElement('afterbegin', divModal);
  document.body.insertAdjacentElement('afterbegin', divOverlay);
}
//==========================================
let h3 = document.querySelector('h3');
setInterval(function() {
  h3.classList.toggle('shadow');
}, 500);
// console.log($('.box').css('display'));
// console.log(boxs[1].visible == false);

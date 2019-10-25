let text = '';
let boxs = $('.box');
console.log(boxs.length);

//наша функция запускает радномную раскраску дивов
let startGames = setInterval(function() {
  for (let i = 0; i < boxs.length; i++) {
    if (boxs[i].classList.contains('border')) {
      boxs[i].classList.remove('border');
      boxs[i].textContent = text;
    }
  }
  let random = Math.floor(Math.random() * (boxs.length + 1 - 1));

  if (boxs.length != 0) {
    console.log(boxs[random]);
    boxs[random].classList.add('border'); //добавить класс может через .[i]
    text = $(boxs[random]).text(); // здесь получить текст не может boxs[random] возбращает не обьект jqery а элемент дом поэтому нужно медоту eq( i) иоли обернуть так => $(boxs[random])
    boxs[random].textContent = 'CLICK ME';
  }
}, 1000);
// ===================================
let counter = boxs.length; // получаем  количество дивов при удалении кликнутого дива уменьшаем counter , при условиии коунтера == 0 , заканчиваем игру .
document.addEventListener('click', function(e) {
  if (e.target.classList.contains('border')) {
    $(e.target).fadeOut(900);
    counter--;
    // ======== дополнительный функционал удаление узла  =======
    // $(e.target).attr('data-elem', 'rem');

    // setTimeout(() => {
    //   $('[data-elem]').remove();
    // }, 2000);
  }
  if (e.target.classList.contains('overlay')) {
    window.location.reload();
  }

  if (counter == 0) {
    $('.box').remove();
    createDiv();
    clearInterval(startGames); // очищаем на наш интервал start game
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

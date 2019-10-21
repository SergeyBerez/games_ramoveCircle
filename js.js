window.addEventListener('load', function(e) {
  let boxs = document.querySelectorAll('.box');
  let text = '';
  setInterval(function() {
    for (let i = 0; i < boxs.length; i++) {
      if (boxs[i].classList.contains('border')) {
        boxs[i].classList.remove('border');
        boxs[i].textContent = text;
      }
    }
    let random = Math.floor(Math.random() * (boxs.length + 1 - 1));
    boxs[random].classList.add('border');
    text = boxs[random].innerText;
    boxs[random].textContent = 'ПОПАДИ';
  }, 1000);
  // ===================================

  let counter = 0;
  document.addEventListener('click', function(e) {
    if (e.target.classList.contains('border')) {
      e.target.style.opacity = 0;
      counter++;
      console.log(counter);
    }
    if (e.target.classList.contains('overlay')) {
      window.location.reload();
    }
    if (counter == boxs.length) {
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
});
let h3 = document.querySelector('h3');
setInterval(function() {
  h3.classList.toggle('shadow');
}, 500);

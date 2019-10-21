window.addEventListener('load', function(e) {
  let boxs = document.querySelectorAll('.box');

  setInterval(function() {
    for (let i = 0; i < boxs.length; i++) {
      if (boxs[i].classList.contains('border')) {
        boxs[i].classList.remove('border');
      }
    }
    let random = Math.floor(Math.random() * (boxs.length + 1 - 1));
    boxs[random].classList.add('border');
  }, 700);
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
    } else if (counter == boxs.length) {
     
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

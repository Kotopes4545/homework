(function(){
  const modal = document.querySelector('.modal');
  const btn = document.querySelector('.about__img-button');
  // const body = document.body;
  
  btn.addEventListener('click', openModal);
  modal.addEventListener('click', closeModal);

  function openModal  (e) {
    e.preventDefault()
    document.body.classList.toggle('body--opened-modal');
  };

  function closeModal (e)  {
    e.preventDefault()
    const target = e.target;
    if (target.closest('.modal__close') || target.classList.contains('modal')) {
      document.body.classList.remove('body--opened-modal');
    }
  };
})();

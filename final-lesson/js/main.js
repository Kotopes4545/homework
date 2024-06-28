(function(){

  document.addEventListener('click', burgerInit)
  
  function burgerInit(e){
  
    const burgerIcon = e.target.closest('.burger-icon')
    const burgerNavLink = e.target.closest('.nav__link')
  
    if(!burgerIcon && !burgerNavLink) return

    if(document.documentElement.clientWidth > 900)return
  
    if(!document.body.classList.contains('body--opened-menu')){
    document.body.classList.add('body--opened-menu')
    }else{
      document.body.classList.remove('body--opened-menu')
    }
  }
  // modal
  const modal = document.querySelector('.modal');
  const btn = document.querySelector('.about__img-button');
  
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
  // Tabs
  const tabControls = document.querySelector('.tab-controls')

  tabControls.addEventListener('click', toggleTab)

  function toggleTab(e){
    const tabControl = e.target.closest('.tab-controls--link')

    if(!tabControl) return
    
    e.preventDefault()
    if(tabControl.classList.contains('tab-controls--link--active')) return
    
    const tabContentId = tabControl.getAttribute('href')
    const tabContent = document.querySelector(tabContentId)
    const activeControl = document.querySelector('.tab-controls--link--active')
    const activeContent =  document.querySelector('.tab-content--show')

    if(activeControl){
      activeControl.classList.remove('tab-controls--link--active')
    }
    if(activeContent){
      activeContent.classList.remove('tab-content--show')
    }
    
    tabControl.classList.add('tab-controls--link--active')
    tabContent.classList.add('tab-content--show')

  }
  // Accordeon
  const accordionLists = document.querySelectorAll('.accordion-list')
  
  accordionLists.forEach(el => {
    el.addEventListener('click', (e) => {
      const accordionList = e.currentTarget
      const accordionOpenedItem = accordionList.querySelector('.accordion-list__item--opened')
      const accordionOpenedContent = accordionList.querySelector('.accordion-list__item--opened .accordion-list__content')

      const accordionControl = e.target.closest('.accordion-list__control')
      if(!accordionControl) return
      e.preventDefault()
      const accordionItem = accordionControl.parentElement
      const accordionContent = accordionControl.nextElementSibling
      
      if(accordionOpenedItem && accordionItem != accordionOpenedItem){
        accordionOpenedItem.classList.remove('accordion-list__item--opened')
        accordionOpenedContent.style.maxHeight = null
      }
      accordionItem.classList.toggle('accordion-list__item--opened')
      
      if(accordionItem.classList.contains('accordion-list__item--opened')) {
        accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px'
      } else {
        accordionContent.style.maxHeight = null
      }


    })
  })
  // Sliders
  new Swiper('.gallery__slider', {
    slidesPerView: 1.5,
    spaceBetween: 15,
    pagination: {
      el: '.gallery__pagination',
      type: 'fraction'
    },
  
    navigation: {
      nextEl: '.gallery__next',
      prevEl: '.gallery__prev',
    },
    breakpoints: {
      601:{
        slidesPerView: 3
      },
      801:{
        spaceBetween: 32
      },
      1101: {
        slidesPerView: 4
      }
    }
  });
  new Swiper('.reviews__slider', {

    spaceBetween: 0,
    slidesPerView: 1,
    centeredSlides: true,
  
    navigation: {
      nextEl: '.reviews__next',
      prevEl: '.reviews__prev',
    },

    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
    breakpoints: {
      901: {
        slidesPerView: 1.5,
      },
      1201: {
        slidesPerView: 2.08
      }
    }
  });
// contact
  const telInput = document.querySelectorAll('input[type="tel"')
  const im = new Inputmask('+7 (999) 999 99 99')
  im.mask(telInput)
})()


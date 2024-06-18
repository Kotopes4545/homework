(function(){
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
})()

window.sections = [...document.querySelectorAll('section')];
window.lastScrollTop = window.pageYOffset;

document.body.style.background = window.sections[0].getAttribute('data-bg');

window.addEventListener('scroll', onScroll);

function onScroll() {
  const scrollTop = window.pageYOffset;
  const images = document.querySelectorAll('.anim');
  
  const section = window.sections
    .map(section => {
      const el = section;
      const rect = el.getBoundingClientRect();
      return {el, rect};
    })
    .find(section => section.rect.bottom >= (window.innerHeight * 0.5));
  document.body.style.background = section.el.getAttribute('data-bg');
  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.intersectionRatio > 0) {
            entry.target.style.animation = 'anim1 2s ${entry.target.dataset.delay} forwards ease-out';
            entry.target.style.background = 'entry.target.dataset.bg';
        }
        else{
            entry.target.style.animation= 'none';
        }
    })
})
images.forEach(image => {
  observer.observe(image)
})
}






    const images = document.querySelectorAll('.anim');

    observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.intersectionRatio > 0) {
                entry.target.style.animation = 'anim1 2s ${entry.target.dataset.delay} forwards ease-out';
            }
            else{
                entry.target.style.animation= 'none';
            }
        })
    })


images.forEach(image => {
    observer.observe(image)
})

const section = document.querySelectorAll('section');
observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.intersectionRatio > 0) {
            entry.target.style.background = 'entry.target.dataset.bg';
        }
        else{
            entry.target.style.background= 'none';
        }
    })
})
section.forEach(section => {
    observer.observe(section)
})
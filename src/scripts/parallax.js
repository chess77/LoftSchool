function goParallax(wScroll) {
    let parallaxItemsList = document.getElementsByClassName('paralax__layer');
    Array.from(parallaxItemsList).forEach(layer => {
        let coef = layer.dataset.speed;
        let strafe = wScroll * coef;
        layer.style.transform = `translateY(${-strafe}px)`;
    });
}

window.addEventListener('scroll', function() {
    let wScroll = window.pageYOffset;
    goParallax(wScroll);
});



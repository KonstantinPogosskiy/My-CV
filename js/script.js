'use strict'

window.onload = function() {
    const parallax = document.querySelector('.parallax');

    if (parallax) {
        const content = document.querySelector('.parallax__container');
        const sky = document.querySelector('.images-parallax__sky');
        const mountains1 = document.querySelector('.images-parallax__mountains_1');
        const mountains2 = document.querySelector('.images-parallax__mountains_2');
        const mountains3 = document.querySelector('.images-parallax__mountains_3');
        const forest = document.querySelector('.images-parallax__forest');
        const human = document.querySelector('.images-parallax__human');
        const grass = document.querySelector('.images-parallax__grass');

        const forSky = 200;
        const forMountains1 = 150;
        const forMountains2 = 70;
        const forMountains3 = 45;
        const forForest = 30
        const forHuman = 15;
        const forGrass = 8;

        const speed = 0.04;

        let positionX = 0, positionY = 0;
        let coordXprocent = 0, coordYprocent = 0;

        function setMouseParallaxStyle() {
            const distX = coordXprocent - positionX;
            const distY = coordYprocent - positionY;

            positionX = positionX + (distX * speed);
            positionY = positionY + (distY * speed);

            sky.style.cssText = `transform: translate(${positionX / forSky}%, ${positionY / forSky}%);`;
            mountains1.style.cssText = `transform: translate(${positionX / forMountains1}%, ${positionY / forMountains1}%);`;
            mountains2.style.cssText = `transform: translate(${positionX / forMountains2}%, ${positionY / forMountains2}%);`;
            mountains3.style.cssText = `transform: translate(${positionX / forMountains3}%, ${positionY / forMountains3}%);`;
            forest.style.cssText = `transform: translate(${positionX / forForest}%, ${positionY / forForest}%);`;
            human.style.cssText = `transform: translate(${positionX / forHuman}%, ${positionY / forHuman}%);`;
            grass.style.cssText = `transform: translate(${positionX / forGrass}%, ${positionY / forGrass}%);`;

            requestAnimationFrame(setMouseParallaxStyle);
        }
        setMouseParallaxStyle();

        parallax.addEventListener('mousemove', function (e) {
            const parallaxWidth = parallax.offsetWidth;
            const parallaxHeight = parallax.offsetHeight;

            const coordX = e.pageX - parallaxWidth / 2;
            const coordY = e.pageY - parallaxHeight / 2;

            coordXprocent = coordX / parallaxWidth * 100;
            coordYprocent = coordY / parallaxHeight * 100;
        });

       /* логика параллакс эффекта при скроле
        let thresholdSets = [];

        for (let i =0; i <= 1.0; i += 0.005) {
            thresholdSets.push(i);
        }
        const callback = function (entries, observer) {
            const scrollTopProcent = window.pageYOffset / parallax.offsetHeight * 100;
            setParallaxItemsStyle(scrollTopProcent);
        };
        const observer = new IntersectionObserver(callback, {threshold: thresholdSets});
        observer.observe(document.querySelector('.content'));

        function setParallaxItemsStyle(scrollTopProcent) {
            content.style.cssText = `transform: translate(0%,-${scrollTopProcent / 9}%);`;
            mountains1.parentElement.style.cssText = `transform: translate(0%,-${scrollTopProcent / 16}%);`;
            mountains2.parentElement.style.cssText = `transform: translate(0%,-${scrollTopProcent / 13}%);`;
            mountains3.parentElement.style.cssText = `transform: translate(0%,-${scrollTopProcent / 12}%);`;
            forest.parentElement.style.cssText = `transform: translate(0%,-${scrollTopProcent / 10}%);`;
            human.parentElement.style.cssText = `transform: translate(0%,-${scrollTopProcent / 6}%);`;
            grass.parentElement.style.cssText = `transform: translate(0%,-${scrollTopProcent / 2}%);`;
        }*/
    }
}

const image = document.querySelector('.certificate');

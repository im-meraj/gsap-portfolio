gsap.registerPlugin(ScrollTrigger);
const body = document.getElementsByTagName('header')[0];


const title = document.getElementsByClassName('hero')[0];

const tl2 = gsap.timeline();

tl2.from('.logo-text', {
    duration: 1,
    opacity: 0,
    x: '-100%',
    ease: "power3.inOut"
}).from(['.link'], {
    duration: 1,
    opacity: 0,
    y: '-100%',
    stagger: 0.1,
    ease: "power3.inOut"
}).to('.hero-text', {
    duration: 1,
    opacity: 1,
    x: '-1%',
    ease: "power3.inOut"
}).to('.mascot-img', {
    duration: 1.5,
    y: '240%',
    // ease: "bounce.inOut"
    ease: "power1.inOut"
});

const section1 = gsap.timeline();

section1.from('.section-1-text', {
    scrollTrigger: {
        trigger: '#construction',
        start: 'top center',
        end: 'bottom bottom',
        scrub: 3,
        // pin: true,
        // markers: true,
    },

    x: '-100%',
    opacity: 0,
    ease: "power3.inOut"
});

const section2 = gsap.timeline();

section2.from('.section-2-text', {
    duration: 1.5,
    scrollTrigger: {
        trigger: '.section-2-content',
        start: 'top center',
        end: 'bottom bottom',
        scrub: 3,
    },
    scale: 1.5,
});
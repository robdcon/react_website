import ScrollMagic from 'scrollmagic';
import {gsap, TweenMax} from 'gsap';
const controller = new ScrollMagic.Controller();
const scene = new ScrollMagic.Scene();
controller.addScene(scene);
scene.setTween(testTween);


const options = {
    x:100,
    y:100
}

export const testTween = (el) => {

    TweenMax.to(el, 2, options);
    
}
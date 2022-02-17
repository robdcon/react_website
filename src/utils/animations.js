import { useRef, useEffect } from "react";
import {gsap} from "gsap";
// gsap.registerPlugin(ScrollTrigger);

export const parallaxContainer = (container) => {
   
    const mouse = {x:0, y:0};
    const moveIt = () => {
    console.log('moving');
        gsap.effects.movebg(container, {
            backgroundPositionX: mouse.x,
            backgroundPositionY: mouse.y
        });
    };

    gsap.set(container, {backgroundPositionX: container.innerWidth / 2});
    gsap.set(container, {backgroundPositionY: container.innerHeight / 2});
    gsap.quickSetter(container, 'backgroundPositionX', 'px');
    gsap.quickSetter(container, 'backgroundPositionY', 'px');


    gsap.registerEffect({
        name: 'movebg',
        effect: (targets, config) => {
        return gsap.to(targets, {backgroundPositionX: config.backgroundPositionX, backgroundPositionY: config.backgroundPositionY, ease: config.ease, duration: config.duration, delay: config.delay});
        },
        defaults: { ease: 'power2.ease', duration: 1, delay: 0.05}
    });

    container.onmouseenter = function () {
        console.log('enter');
        gsap.ticker.add(moveIt);
    }
    container.onmouseleave = function () {
        console.log('leave');
        gsap.ticker.remove(moveIt);
    }
    container.onmousemove = (e) => {
        mouse.x = e.clientX / 100;
        mouse.y = e.clientY / 10;
    } 
}
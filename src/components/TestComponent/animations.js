import { gsap } from "gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


const options = {
    x:100,
    y:100,
    duration: 2
}

export const testTween = (el) => {

    gsap.to(el, {
        scrollTrigger: {
            markers: false,
            trigger: el,
            start: "0 center",
            end: "100% 100%",
            toggleActions: "restart none reverse none",
            srcub: 1
        },
        x: "100%",
        y: "100%",
        duration: 2
    })
}   
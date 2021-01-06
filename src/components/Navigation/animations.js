import {gsap, TweenMax, TimelineMax} from "gsap";

export const animateIn = (array) => {
    TweenMax.staggerFromTo([...array], .5, { opacity:0, y:"-100%" }, { opacity:1, y:0 }, .125);
}

export const animateOut = (array, callback, nav) => {
    TweenMax.staggerFromTo([...array], .5, { opacity:1, top:0 }, { opacity:0, top:"-100%" }, .125,  callback, [nav]);
}

export const hideNav = (nav) => {
    TweenMax.fromTo(nav, .5, {top:0}, {top:"-100%"});
}

export const showNav = (nav, callback, array) => {
    TweenMax.fromTo(nav, .5, {top:"-100%"}, {top:0}, callback, [...array]);
} 

export const animateNav = (nav, array) => {
    const t1 = new TimelineMax();
    t1.to(TweenMax.fromTo(nav, .5, {top:"-100%"}, {top:0}))
    t1.to(TweenMax.staggerFromTo(array, .5, { opacity:0, y:"-100%" }, { opacity:1, y:0 }, .125))
    return t1;
}



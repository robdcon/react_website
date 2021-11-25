import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { NavigationWrapper, NavigationListItem } from './Navigation.styles';
import { TweenMax } from "gsap";
import { pages } from '../../utils/nav-config';

const Navigation = ({expanded}) => {
  const navWrapper = useRef();
  const navItems = useRef([]);

  useEffect(() => {
    if(expanded === null) return;
    if(expanded === true) {
      TweenMax.to(navWrapper.current, .5, {top:0});
      TweenMax.staggerFromTo(navItems.current, .5, { opacity:0, y:100 }, { opacity:1, y:0, delay:.25 }, .125);
    } else {
      TweenMax.staggerFromTo(navItems.current, .35, { opacity:1, y:0 }, { opacity:0, y:-100 }, .125);
      TweenMax.to(navWrapper.current, .5, {top:'-100vh', delay:.35});
    }

  }, [expanded])

  return(
    <NavigationWrapper ref={navWrapper} className={`navigation__wrapper navigation--expanded-${expanded}`}>
      {
        pages.map((page, i) => 
        {
          return(
            <NavigationListItem 
              key={page.title} 
              ref={(element) => {navItems.current[i] = element}} 
              className="navigation__list-item"
            >
              <Link className="navigation__link" to={page.path}>{page.title}</Link>
            </NavigationListItem>
          )
        })
      }
    </NavigationWrapper>
  )
};

export default Navigation;

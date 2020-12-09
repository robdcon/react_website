import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { NavigationWrapper, NavigationListItem } from './Navigation.styles';
import {TweenMax, TimelineMax} from "gsap";



const Navigation = (props) => {

  const navWrapper = useRef();
  const navItems = useRef([]);
  useEffect(() => {

     if(props.open === true) {
      TweenMax.to(navWrapper.current, .5, {top:0});
      TweenMax.staggerFromTo(navItems.current, .5, { opacity:0, y:100 }, { opacity:1, y:0, delay:.35 }, .125);
    } else {
      TweenMax.staggerFromTo(navItems.current, .35, { opacity:1, y:0 }, { opacity:0, y:-100 }, .125);
      TweenMax.to(navWrapper.current, .5, {top:"-100%", delay:.5});
    }

  }, [props.open])

  return(
    <NavigationWrapper ref={navWrapper} className="NavigationWrapper">
      {
        props.pages.map((page, i) => 
        {
          return(
            <NavigationListItem key={page.title} ref={(element) => {navItems.current[i] = element}} className="NavigationListItem">
              <Link className="NavigationLink" to={page.path}>{page.title}</Link>
            </NavigationListItem>
          )
        })
      }
    </NavigationWrapper>
  )
};

Navigation.propTypes = {
  // bla: PropTypes.string,
};

Navigation.defaultProps = {
  // bla: 'test',
};

export default Navigation;

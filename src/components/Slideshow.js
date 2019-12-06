import React, { Component } from 'react';
import styled from 'styled-components'
import { Tween, Timeline, SplitWords, SplitLetters, Controls } from 'react-gsap';

const TweenComponent = () => (
    <Tween from={{ x: '100px', rotation: -360 }}>
      <div>This element gets tweened</div>
    </Tween>
  );

  const TimelineComponent = () => (
    <Timeline
      target={
        <div>Target element which will be visible and gets tweened</div>
      }
    >
      <Tween from={{ opacity: 0 }} to={{ opacity: 1 }} />
      <Tween to={{ x: '50px' }} />
    </Timeline>
  );

const StyledSlideshow = styled.section`

    width:100%;
    height:100vh;
    min-height:600px;
    background-color: #eee;
    color: white;
    position: relative;
    text-align: center;
 
    /* Center the content of the sections */
    .inner {
        margin: 0 auto;
        max-width: 85%;
    }

    h1 {
        padding: 20% 0 0 0;
        margin: 0;
        text-align: center;
        font-size: 20px;
    }
    p {
        text-align: center;
        color: transparentize($white, 0.5);
    }

    section#one { background-color:#000000; }
    section#two { background-color: #00000080; }
    section#three { background-color: #00000060; }
    section#four { background-color:  #00000040; }


`


class Slideshow extends Component 
{
    render() 
    {
      return (
            <StyledSlideshow>

            
                <section id="one">
                    <div className="inner">
                        <h1>Slide Title</h1>
                        <p>Slide description text goes here.</p>
                    </div>
                </section>
                <section id="two">…</section>
                <section id="three">…</section>
                <section id="four">…</section>
                
                
            </StyledSlideshow> 
      )
    }
  }
  
  export default Slideshow;


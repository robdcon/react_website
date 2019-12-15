import React from 'react';
import styled from 'styled-components';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline , SplitLetters, SplitText} from 'react-gsap';

const StyledReveal = styled.div`
        overflow: hidden;
        position:relative;
       .reveal 
       {
            width:100%;
            height:${100 / 5}%;
            background-color:#000000;
            transform-origin:left;
            z-index:2;
       }
       #pinContainer
       {
           height:100vh;
       }
       #text, #text2
       {
        display: flex;
        flex-wrap: wrap;
        padding: 3em;
        max-width: 90%;
        min-width: 320px;
        margin: 0 auto;
        justify-content: center;
        align-items: center;
          
       }
       #text2
       {
        display: flex;
        flex-wrap: wrap;
        padding: 3em;
        max-width: 90%;
        min-width: 320px;
        height:100vh;
        margin: 0 auto;
        justify-content: center;
        align-items: center;

       }
      
        .text
        {
            position: relative;
            font-size: 80px;
            font-weight: bold;
            display: inline-block;
          }
       }
       .scrollmagic-pin-spacer
       {
           padding-bottom:100px;
       }
       .reveal-text
       {
           height:100%;
           width:100%;
           position:absolute;
           top:0;
           left:0;
           display:flex;
           justify-content: center;
           align-items: center;
           z-index:0;
           text-align:center;
           h1
           {
               font-size:100px;
               color:#f00;
           }
       }
`



const SectionReveal = (props) =>
{
    return(

        <StyledReveal >
            
                <Controller>
                    <Scene
                  
                    triggerHook='onLeave'
                    duration='100%'
                    pin={true}
                    reverse={true}
                    
                    indicators={{
                       
                        colorStart: "green",
                        colorEnd: "red",
                        colorTrigger: "blue"
                    }}
                   
                    >
                        <Timeline
                        wrapper={<div id="pinContainer" />}
                        > 
                           

                            <Tween
                            staggerFrom={{scale:1}}
                            staggerTo={{scale:0, opacity:0}}
                            stagger={0.15}
                            >
                                <div className="reveal"></div>
                                <div className="reveal"></div>
                                <div className="reveal"></div>
                                <div className="reveal"></div>
                                <div className="reveal"></div>
                            
                            </Tween>

                            <Tween
                                from={{
                                    opacity:0
                                }}
                            ><div className="reveal-text"><h1>Welcome to my Studio!</h1></div>
                            </Tween>
                            
                        </Timeline>

                    </Scene>


                <Scene
                
                triggerHook='onLeave'
                pin={true}
                reverse={true}
                duration={500}
                indicators={{
                   
					colorStart: "purple",
					colorEnd: "yellow",
					colorTrigger: "orange"
                }}
               
                >
                <Timeline
                    wrapper={<div id="text" />}
                    > 
                    <Tween
                    staggerFrom={{

                        x:-1000,
                        y:1000,
                        color:'#0f0'
                    }}
                    staggerTo={{

                        x:0,
                        y:0,
                        color:'#f00'
                    }}
                    stagger={0.15}
                    >

                    <SplitLetters><span className="text">Hello,&nbsp;I'm&nbsp;Rob</span></SplitLetters> 

                    </Tween>
                   
                  
                </Timeline>

                </Scene>

                 <Scene
                    
                    triggerHook='onLeave'   
                    duration='100%'
                    pin={true}
                    reverse={true}
                    indicators={{

                        colorStart: "green",
                        colorEnd: "red",
                        colorTrigger: "blue"
                    }}
                    >

                <Timeline
                    wrapper={<div id="text2" />}
                    > 
                    <Tween
                    staggerFrom={{

                        x:-1000,
                        y:1000,
                        color:'#0f0'
                    }}
                    staggerTo={{

                        x:0,
                        y:0,
                        color:'#f00'
                    }}
                    stagger={0.15}
                    >

                    <SplitLetters><span className="text">I'm&nbsp;a&nbsp;Web&nbsp;Designer,&nbsp;Web&nbsp;Developer,</span></SplitLetters> 
                    <SplitLetters><span className="text">Graphic&nbsp;Designer&nbsp;&amp;&nbsp;general&nbsp;Creative.</span></SplitLetters> 

                    </Tween>
                   
                  
                </Timeline>
               
                </Scene>

            </Controller>
        </StyledReveal>

    )
}
export default SectionReveal
import React, {Component} from 'react'
import styled from 'styled-components'
import Panel from './Panel'
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';

const StyledParallaxSection = styled.section`

    height:100vh;
    width:100%;
    position:relative;
    padding:0;
    margin:0;
    overflow:hidden

`

const StyledParallaxPanel = styled.div`

    height:100%;
    width:100%;
    position:absolute;
    background-image: url(${(props) => props.bgImage});
    background-size:100%;
    background-position: center bottom;
    background-repeat: no-repeat;
    position:absolute;
   
    
   


`


const ParallaxSection = (props) =>
{
   
    return(
    
      

            <StyledParallaxSection>
                    
                <Controller>
                <Scene
                pin={false}
                triggerHook="onLeave"
                duration='100%'
                indicators={true}
                reverse={true}
                >
                  
                        <Tween
                        from={{
                            bottom: '-20px'
                        }}
                        to={{
                            bottom: '0'
                        }}
                        >
                            <StyledParallaxPanel className="parallax-panel"  bgImage={props.background} />
                        </Tween>
                    </Scene>
                    <Scene
                    pin={false}
                    triggerHook="onLeave"
                    duration='100%'
                    indicators={true}
                    reverse={true}
                    >
                        <Tween
                        from={{
                            bottom: '-40px'
                        }}
                        to={{
                            bottom: '0'
                        }}
                        >
                            <StyledParallaxPanel className="parallax-panel"  bgImage={props.midground} />
                        </Tween>
                    </Scene>

                    <Scene
                    pin={false}
                    triggerHook="onLeave"
                    duration='100%'
                    indicators={true}
                    reverse={true}y

                    >
                        <Tween
                         from={{
                            bottom: '-100px'
                        }}
                        to={{
                            bottom: '0'
                        }}
                        >
                            <StyledParallaxPanel className="parallax-panel"  bgImage={props.foreground} />
                        </Tween>
                   
                </Scene>
            </Controller>

            </StyledParallaxSection>

       
        
    )  

}
export default ParallaxSection
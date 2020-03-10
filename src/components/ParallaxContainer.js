import React, {Component} from 'react'
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
import styled from 'styled-components';


const StyledParallaxContainer = styled.div`

    height:100vh;
    overflow:hidden;

    div.styled-parallax-container {
        height:200%;
        position:relative;
        top:-100%;
    }

`;
export default class ParallaxContainer extends Component
{
    render()
    {
        return(
            <Controller>
                <Scene
                    triggerHook="onLeave"
                    duration="200%"
                >
                    <Timeline>
                        <Tween
                         to={{y:"80%",
                         ease: "Linear.easeNone"}}
                        >
                            <StyledParallaxContainer className="styled-parallax-container">
                                {this.props.children}
                            </StyledParallaxContainer>
                          
                        </Tween>
                    </Timeline>
                   
                </Scene>
            </Controller>     
           
        )

    }

}
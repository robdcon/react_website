import React, { Component } from 'react';
import { Tween, Timeline, SplitWords, SplitLetters, Controls } from 'react-gsap';
import { Controller, Scene } from 'react-scrollmagic';
import styled from 'styled-components'

const img02 = "https://irp-cdn.multiscreensite.com/8c7b9935/dms3rep/multi/slide+2.jpg"  
const img03 = "https://irp-cdn.multiscreensite.com/8c7b9935/dms3rep/multi/slide+3.jpg"
const img01 = "https://irp-cdn.multiscreensite.com/8c7b9935/dms3rep/multi/slide+1.jpg"

const images = [img03, img02, img01]

const stripCount = [1,2,3,4,5,6,7,8,9,10]

const StyledStrip = styled.div`

    width:${(props) => props.width}%;
    height:100%;
    background-image: url(${(props) => props.image});
    background-position: ${(props) => props.position}% 0;
    background-color:#ff000050;
    display: inline-block;

`
const StyledScreen = styled.div`

    position:absolute;
    top:0;
    left:0;
    height:100vh;
    width:100%;

`
const Strip = (props) =>
{
    return(

        
        <StyledStrip  className="Strip" width={props.width} position={props.position}  image={props.image}>
        </StyledStrip>
    )
}

const ScreenContainer = (props) =>
{
    return(
        <div className="screen-container">
            {props.children}	
		</div>
    )
}

const Screen = (props) =>
{
    return(
        <div className="screen">
            <StyledScreen>
               
                >
                {
                stripCount.map((key) =>
                { 
                    return <Strip ref={} key={key} width={props.width} image={props.image} position={`${(props.width*key) - (key-1)}`} />
                })
                }
              
            </StyledScreen>
		</div>
    )
}

class PrismaScreen extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            stripWidth:10
        }
    }
    componentDidMount()
    {
       Tween.to('.Strip', {opacity:0.5}, 0.15)
    }
    render()
    {
        return(
            <ScreenContainer>
            {
                images.map((image, i) =>
                {
                    return  <Screen className="Screen" key={i} image={image} width={this.state.stripWidth}></Screen>
                })
            }
            </ScreenContainer>
        )
    }
}
	

	

	// timeline = new TimelineMax()

	// timeline.staggerFromTo($('.board:nth-of-type(3) .screen-container'), .5, {opacity:1, rotationY: 0}, {opacity:0, rotationY: 360, delay:1}, .01, 5, null);
	// timeline.staggerFromTo($('.board:nth-of-type(2) .screen-container'), .5, {opacity:0, rotationY: 0}, {opacity:1, rotationY: 360, delay:1}, .01, 5, null);
	// timeline.staggerFromTo($('.board:nth-of-type(2) .screen-container'), .5, {opacity:1, rotationY: 0}, {opacity:0, rotationY: 360, delay:1}, .01, 10, null);
	// timeline.staggerFromTo($('.board:nth-of-type(1) .screen-container'), .5, {opacity:0, rotationY: 0}, {opacity:1, rotationY: 360, delay:1}, .01, 10, null);

	// timeline.staggerFromTo($('.board:nth-of-type(3) .screen-container'), .5, {opacity:1, rotationY: 0}, {opacity:1, rotationY: 360, delay:1}, .1, 9, null);
	// timeline.staggerFromTo($('.board:nth-of-type(1) .screen-container'), .5, {rotationY: 0}, {opacity:0, rotationY: 360, delay:1}, .1, 9, null);


export default PrismaScreen

import React, { Component } from 'react';
import Header from '../Header'
import image from '../../assets/web-background-dark-med-compression-1200.jpg'
import Slideshow from '../Slideshow'


class Home extends Component {
    render() {
      return (
        <div>
           <Header
            title="Welcome To Our Studio!"
            subtitle="It's Nice To Meet You"
            btnText="Tell Me More" 
            showBtn={true}
            image={image}
           />
           <Slideshow>
             <h1>Hello!</h1>
           </Slideshow>
        </div>
      );
    }
  }
  
  export default Home;
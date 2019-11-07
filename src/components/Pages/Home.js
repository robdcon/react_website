import React, { Component } from 'react';
import Header from '../Header'
import image from '../../assets/web-background-dark-med-compression-1200.jpg'


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
        </div>
      );
    }
  }
  
  export default Home;
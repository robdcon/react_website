import React, { Component } from 'react';
import Header from '../Header'
import image from '../../assets/header-bg.jpg'


class Contact extends Component {
    render() {
      return (
        <div>
           <Header
            title="Get in touch"
            subtitle="Book a free 15min consultation"
            btnText="BOOK NOW" 
            showBtn={true}
            image={image}
           />
        </div>
      );
    }
  }
  
  export default Contact;
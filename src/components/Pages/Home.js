import React, { Component } from 'react';
import Header from '../Header'


class Home extends Component {
    render() {
      return (
        <div>
           <Header
            title="Welcome To Our Studio!"
            subtitle="It's Nice To Meet You"
            btnText="Tell Me More" 
            showBtn={true}
           />
        </div>
      );
    }
  }
  
  export default Home;
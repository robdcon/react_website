import React, { Component } from 'react';
import styled from 'styled-components'
import SingleService from './SingleService'
import {StyledFlexBox} from '../styled/StyledFlexBox'

const services = 
[
  {
    title:"Web Design",
    description: "This is the first description",
    icon: "fa-shopping-cart"
  },
  {
    title:"Graphic Design",
    description: "This is the first description",
    icon: "fa-laptop"
  },
  {
    title:"Web Development",
    description: "This is the first description",
    icon: "fa-lock"
  }
]

const StyledServiceList = styled.div`

  width:100%;
  height:100vh;

`
const StyledServiceContainer = styled.div`

  display:flex;
  justify-content:center;
  width:100%;

`
class ServiceList extends Component 
{
  constructor(props)
  {
    super(props)
    this.serviceList = []
    this.getServices = this.getServices.bind(this)
  }

  getServices()
  {
    return this.serviceList
  }

  render() 
  {
    return (
      
      <React.Fragment>
          {
                    services.map((service, i) =>
                    {
                        return (
                            
                        <div className="service-item" >
                        <div className="StyledSeviceContainer"  key={i}  >
                            <SingleService 
                            title={service.title}
                            icon={service.icon}
                            description={service.description}
                            key={i}
                            />
                        </div>
                        </div>
                        )
                    })
                }
         </React.Fragment>
      
    )
  }
}

export default ServiceList;


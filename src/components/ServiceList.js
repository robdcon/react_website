import React, { Component } from 'react';
import SingleService from './SingleService'

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


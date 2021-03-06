import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class PortfolioItem extends Component 
{
    render() 
    {
      return (
      
        <div className="col-md-4 col-sm-6 portfolio-item">
            <Link className="portfolio-link" data-toggle="modal" to="/portfolioModal1">
            <div className="portfolio-hover">
                <div className="portfolio-hover-content">
                <i className={`fas ${this.props.icon} fa-3x`}></i>
                </div>
            </div>
            <img className="img-fluid" src={this.props.image} alt={this.props.alt}/>
            </Link>
            <div className="portfolio-caption">
            <h4>Threads</h4>
            <p className="text-muted">Illustration</p>
            </div>
        </div>
       
      );
    }
  }

  export const PortfolioItemAlt = (props) =>
  {
    return (
        
      <div className="col-md-4 col-sm-6 portfolio-item">
          <Link className="portfolio-link" data-toggle="modal" to={`/${props.url_lg}`}>
          <div className="portfolio-hover">
              <div className="portfolio-hover-content">
              <i className={`fas ${props.icon} fa-3x`}></i>
              </div>
          </div>
          <img className="img-fluid" src={props.url} alt={props.alt}/>
          </Link>
          <div className="portfolio-caption">
          <h4>{props.title}</h4>
          <p>{props.caption}</p>
           <p className="text-muted">{props.tags[0].toUpperCase()}</p>
          </div>
      </div>
     
    );
  }
  
  export default PortfolioItem;


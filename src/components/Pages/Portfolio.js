import React, { Component } from 'react';
import Header from '../Header'
import PortfolioItem, {PortfolioItemAlt} from '../PortfolioItem'
import image from '../../assets/web-background-planning-at-desk-med-compression-1200.jpg'
import item1 from '../../assets/portfolio/01-thumbnail.jpg'
import item2 from '../../assets/portfolio/02-thumbnail.jpg'
import item3 from '../../assets/portfolio/03-thumbnail.jpg'
import websiteThumb01 from '../../assets/portfolio/website-web-design-thumb-01.jpg'
import websiteThumb02 from '../../assets/portfolio/website-web-design-thumb-02.jpg'
import websiteThumb03 from '../../assets/portfolio/website-web-design-thumb-03.jpg'
import websiteThumb04 from '../../assets/portfolio/website-web-design-thumb-04.jpg'
import portfolio from '../../api/portfolio.js'
import SectionWipe2 from '../SectionWipe2'
import SplitText from '../SplitText'
import ShowcaseSection from '../ShowcaseSection/ShowcaseSection';
import {showcases} from '../../utils/projects.config.js'

const portfolioItems = 
[
  {
    image: item1,
    icon: 'fa-plus'
  },
  {
    image: item2,
    icon: 'fa-plus'
  },
  {
    image: item3,
    icon: 'fa-plus'
  }
]

const websites = 
[
  {
    image: websiteThumb01,
    icon: 'fa-plus'
  },
  {
    image: websiteThumb02,
    icon: 'fa-plus'
  },
  {
    image: websiteThumb03,
    icon: 'fa-plus'
  },
  {
    image: websiteThumb04,
    icon: 'fa-plus'
  }
]



class Portfolio extends Component 
{
    render() 
    {
      return (
        <div>
           <Header
            title="Why hire me?"
            subtitle="Take a look at my previous work"
            btnText="HIRE ME" 
            showBtn={true}
            image={image}
           />

          <div id="sectionWrapper">
          {
            showcases.map((showcase, i) => {
              return  <ShowcaseSection 
                        key={i} 
                        title={showcase.title} 
                        buttonText={showcase.buttonText} 
                        image={showcase.image} />
            })
          } 
          </div>

          <section className="bg-light page-section" id="portfolio">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12 text-center">
                    <h2 className="section-heading text-uppercase">Portfolio</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                  </div>
                </div>
                <div className="row">

                  {
                    websites.map((item, i) =>
                    {
                      return <PortfolioItem
                        key={i}
                        image={item.image}
                        icon={item.icon}
                      />
                    })
                  }
                 
                </div>
              </div>
            </section>

            <section className="bg-light page-section" id="portfolio-02">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12 text-center">
                    <h2 className="section-heading text-uppercase">Portfolio</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                  </div>
                </div>
                <div className="row">

                  {
                    portfolio.images[0].array.map((item, i) =>
                    {
                      return <PortfolioItemAlt
                      key={i}
                      title={item.title}
                      caption={item.caption}
                      url={item.url}
                      url_lg={item.url_lg}
                      alt={item.alt}
                      tags={item.tags}
                      category={item.category}
                      />
                    })
                  }
                 
                </div>
              </div>
            </section>
            <SectionWipe2></SectionWipe2>
            <SplitText></SplitText>
        </div>
      );
    }
  }
  
  export default Portfolio;
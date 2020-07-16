import React from 'react';
import PropTypes from 'prop-types';
import { StyledServiceItem, ServiceIcon, ServiceHeading, ServiceDescription } from "./ServicesSection.styles";

const ServiceItem = (props) => (
    <StyledServiceItem {...props} className={`ServiceItem`}>
        
        <ServiceIcon className="ServiceIcon">
            <div className="fa-stack fa-4x">
                <i className="fas fa-circle fa-stack-2x text-primary"></i>
                <i className={`fas ${props.icon} fa-stack-1x fa-inverse`}></i>
            </div>
        </ServiceIcon>

        <ServiceHeading className="ServiceHeading">
            <h3>{props.title}</h3>
        </ServiceHeading>

        <ServiceDescription className="ServiceDescription">
            <p>{props.caption}</p>
        </ServiceDescription>

    </StyledServiceItem>
);

export default ServiceItem;
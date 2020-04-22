import React from 'react';
import PropTypes from 'prop-types';
import { StyledServiceItem } from "./ServicesSection.styles";

const ServiceItem = (props) => (
    <StyledServiceItem {...props} className="ServiceItem">
        <span className="fa-stack fa-4x">
            <i className="fas fa-circle fa-stack-2x text-primary"></i>
            <i className={`fas ${props.icon} fa-stack-1x fa-inverse`}></i>
        </span>
        <h3 className="service-heading">{props.title}</h3>
        <p className="text-muted">{props.caption}</p>
    </StyledServiceItem>
);

export default ServiceItem;
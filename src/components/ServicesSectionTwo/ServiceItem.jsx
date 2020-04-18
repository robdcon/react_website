import React from 'react';
import PropTypes from 'prop-types';
import { StyledFlexBox, StyledFlexColumn } from "./ServicesSection.styles";

const ServiceItem = (props) => (
    <StyledFlexColumn {...props} className="ServiceItem">
        <span className="fa-stack fa-4x">
            <i className="fas fa-circle fa-stack-2x text-primary"></i>
            <i className={`fas ${props.icon} fa-stack-1x fa-inverse`}></i>
        </span>
        <h4 className="service-heading">{props.title}</h4>
        <p className="text-muted">{props.caption}</p>
    </StyledFlexColumn>
);

export default ServiceItem;
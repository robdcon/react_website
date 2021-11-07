import React from 'react';
import { StyledServiceItem, ServiceIcon, ServiceHeading, ServiceDescription } from "./ServicesSection.styles";

const ServiceItem = (props) => {
    const {title, caption, icon} = props;
    const Icon = icon
    return (
    <StyledServiceItem {...props} className={`ServiceItem`}>
         
        <ServiceIcon className="ServiceIcon">
            <Icon fontSize="large" />
        </ServiceIcon>

        <ServiceHeading className="ServiceHeading">
            <h3>{title}</h3>
        </ServiceHeading>

        <ServiceDescription className="ServiceDescription">
            <p>{caption}</p>
        </ServiceDescription>

    </StyledServiceItem>
)};

export default ServiceItem;
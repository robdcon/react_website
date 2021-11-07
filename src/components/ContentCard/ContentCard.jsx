import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeading, CardContent, CardButton } from './ContentCard.styles';

const ContentCard = (props) => {
  return(
  <Card className="ContentCardWrapper">
    <CardHeading />
    <CardContent />
    <CardButton />
  </Card>
)};

ContentCard.propTypes = {
  // bla: PropTypes.string,
};

ContentCard.defaultProps = {
  // bla: 'test',
};

export default ContentCard;

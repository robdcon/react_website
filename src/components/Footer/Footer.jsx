import React from 'react';
import PropTypes from 'prop-types';
import { StyledFooter, StyledLinkList, StyledFooterRow} from './Footer.styles';

const Footer = (props) => {
  return (
  <StyledFooter className="FooterWrapper">
    <StyledFooterRow justifyContent={"space-between"} className="FooterRow">
      <div><a href="mailto:info@innerspace.digital">info@innerspace.digital</a></div>
      <StyledLinkList>
        <a href="#">Web Design&nbsp;|&nbsp;</a>
        <a href="#">Web Development&nbsp;|&nbsp;</a>
        <a href="#">SEO</a>
      </StyledLinkList>
      <div><a href="tel:+447512345678">+447512345678</a></div>
    </StyledFooterRow>

    <StyledFooterRow justifyContent={"space-between"} className="FooterRow">
      <div><p>Flat 1, Zenith Building, 590 Commercial ROAD, E14 7JR</p></div>
      <div>© 2020 Innerspace Digital LTD</div>
    </StyledFooterRow>

  </StyledFooter>
  )
};

Footer.propTypes = {
  // bla: PropTypes.string,
};

Footer.defaultProps = {
  // bla: 'test',
};

export default Footer;

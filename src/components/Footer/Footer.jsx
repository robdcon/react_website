import React from 'react';
import { StyledFooter, StyledLinkList, StyledFooterRow} from './Footer.styles';

const Footer = (props) => {
  return (
  <StyledFooter className="FooterWrapper">
    <StyledFooterRow justifyContent={"space-between"} className="FooterRow">
      <div className="footer-info"><a href="mailto:info@innerspace.digital">info@innerspace.digital</a></div>
      <StyledLinkList>
        <a href="#">Web Design</a>
        <span>&nbsp;|&nbsp;</span>
        <a href="#">Web Development</a>
        <span>&nbsp;|&nbsp;</span>
        <a href="#">Seo</a>
      </StyledLinkList>
      <div className="footer-info"><a href="tel:+447512345678">+447512345678</a></div>
    </StyledFooterRow>

    <StyledFooterRow justifyContent={"space-between"} className="FooterRow">
      <div className="footer-info"><p>Flat 1, Zenith Building, 590 Commercial ROAD, E14 7JR</p></div>
      <div className="footer-info">© 2020 Innerspace Digital LTD</div>
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

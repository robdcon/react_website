import React, {useState, useEffect, useRef} from 'react';
import { StyledFaq, StyledFaqHeader, StyledFaqContent, StyledFaqSection } from './FaqSection.styles';

const Faq = ({faqHeading, faqContent, collapsed, handleClick, uid}) => {
  const faqHeadingId = faqHeading.trim().replace(/ /g, '-').replace(/\?/g, '').toLowerCase();
  const faqContentId = faqHeadingId + '-content';
  const [ contentHeight, setContentHeight ] = useState(0);
  // const [ collapsed, setCollapsed ] = useState(true);
  const contentBody = useRef(null);

  useEffect(() => {
    if(contentBody) {
      setContentHeight(contentBody.current.clientHeight);
    }
  }, [contentBody]);

  const handleFaqClick = () => {
    handleClick(uid);
  };

  return (
    <StyledFaq className="card">
      <StyledFaqHeader className="faq-header" id={faqHeadingId}>
        <h5 className="mb-0">
          <button className="btn btn-link" onClick={handleFaqClick} data-toggle="collapse" data-target={faqContentId} aria-expanded={collapsed} aria-controls={faqContentId}>
            {faqHeading}
          </button>
        </h5>
      </StyledFaqHeader>
      <StyledFaqContent height={contentHeight} id={faqContentId} className={`collapse collapsed-${collapsed}`} aria-labelledby={faqHeadingId} data-parent="#accordion">
        <div className="faq-content" ref={contentBody}>
          {faqContent}
        </div>
      </StyledFaqContent>
    </StyledFaq>
  )
};

const FaqSection = ({faqs}) => {
  const [activeFaq, setActiveFaq] = useState(0)
  return (
    <StyledFaqSection className="accordion">
      <div className="faq-section_inner">
        {
          faqs.map(({faqHeading, faqContent}, i) => {
            console.log(i)
            return <Faq key={i} uid={i} collapsed={!(i === activeFaq)} faqHeading={faqHeading} faqContent={faqContent} handleClick={setActiveFaq} />
          })
        }
      </div>
    </StyledFaqSection>
  )
};

export default FaqSection;

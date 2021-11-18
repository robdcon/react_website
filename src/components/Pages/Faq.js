import React from 'react';
import FaqSection from '../FaqSection/FaqSection';

const faqs = [
    {
      faqHeading: "Test Heading One",
      faqContent: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
      faqHeading: "Test Heading Two",
      faqContent: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
      faqHeading: "Test Heading Three",
      faqContent: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    }
];
  

const Faq = () => {
    return (
        <FaqSection faqs={faqs} title="FAQ Section" />
    )
}
export default Faq;
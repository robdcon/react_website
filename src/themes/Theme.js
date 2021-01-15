export const invertTheme = ({colors, colorsInvert}) => ({
    colors: colorsInvert,
    colorsInvert: colors 
})

const Theme = {
    colors: {
        primaryColor: '#fed136',
        secondaryColor: '#000000',
        backgroundColor: '#ffffff'
    },
    colorsInvert: {
        primaryColor: '#fed136',
        secondaryColor: '#ffffff',
        backgroundColor: '#000000'
    },
    fontFamily: 'Montserrat, Verdana, sans-serif',
     // Font Sizes
    h1FontSize: "60px",
    h2FontSize: "48px",
    h3FontSize: "36px",
    h4FontSize: "24px",
    h5FontSize: "18px",
    bodyFontSize: "16px",
    // Content
    maxTextWidth: "800px",
    subheadingLineHeight: "1.3",
    primaryFont: "Montserrat, Roboto, sans-serif",
    secondaryFont: "Open Sans, Roboto, sans-serif",
    //   buttonStyles: 
    //     `display: inline-block;
    //     line-height: 35px;
    //     margin: 8px;
    //     padding: 15px 25px;
    //     font-size: 18px;
    //     position: relative;
    //     opacity: .999;
    //     border-radius: 3px;
    //     transition: 0.5s;

    //     background-color: transparent;
    //     border: 2px solid #d0d0d0;
    //     color: #B8B8B8;

    //     &:before, &:after {
    //       content: '';
    //       border-style: solid;
    //       border-color: #ff4900;
    //       position: absolute;
    //       z-index: 999;
    //       border-radius: 3px;
    //       box-sizing: content-box;
    //       transition: 0.5s;
    //     }

    //     &:before {
    //       width: 0;
    //       height: 100%;
    //       border-width: 2px 0 2px 0;
    //       top: -2px;
    //       left: 0;
    //       transition-delay: 0.05s;
    //     }

    //     &:after {
    //       width: 100%;
    //       height: 0;
    //       border-width: 0 2px 0 2px;
    //       top: 0;
    //       left: -2px;
    //     }

    //     &:hover {
    //       color: #ff4900;
    //     }

    //     &:active {
    //       border-color: transparent;
    //     }

    //     &:hover:before {
    //       width: 100%;
    //     }

    //     &:hover:after {
    //       height: 100%;
    //     }
    //     `,
}

export const lightTheme = {
    // Colours
    primaryColor: "#ff4900",
    secondaryColor: "#ff0000",
    headingFont: "#000000",
    bodyFont: "#000000",
    backgroundColor: "#ffffff"

}

export const darkTheme = {
    // Colours
    primaryColor: "#ff4900",
    secondaryColor: "#ff0000",
    headingFont: "#ffffff",
    bodyFont: "#ffffff",
    backgroundColor: "#000000"
}

// export const buttonStyles =`display: inline-block;
//     line-height: 35px;
//     margin: 8px;
//     padding: 15px 25px;
//     font-size: 18px;
//     position: relative;
//     opacity: .999;
//     border-radius: 3px;
//     transition: 0.5s;
    
//     background-color: transparent;
//     border: 2px solid #d0d0d0;
//     color: #B8B8B8;

//     &:before, &:after {
//       content: '';
//       border-style: solid;
//       border-color: #ff4900;
//       position: absolute;
//       z-index: 999;
//       border-radius: 3px;
//       box-sizing: content-box;
//       transition: 0.5s;
//     }

//     &:before {
//       width: 0;
//       height: 100%;
//       border-width: 2px 0 2px 0;
//       top: -2px;
//       left: 0;
//       transition-delay: 0.05s;
//     }

//     &:after {
//       width: 100%;
//       height: 0;
//       border-width: 0 2px 0 2px;
//       top: 0;
//       left: -2px;
//     }

//     &:hover {
//       color: #ff4900;
//     }

//     &:active {
//       border-color: transparent;
//     }

//     &:hover:before {
//       width: 100%;
//     }

//     &:hover:after {
//       height: 100%;
//     }
// `,

export default Theme
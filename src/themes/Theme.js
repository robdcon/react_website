export const invertTheme = ({colors, colorsInvert, global}) => ({
    colors: colorsInvert,
    colorsInvert: colors,
    global

})

const colors = {
    primary: '#ff6500',
    secondary: '#000000',
    lightBackground: '#ffffff',
    darkBackground: '#000000',
    foreground: '#000000',
    lightText: '#ffffff',
    darkText: '#000000'
}

const Theme = {
    colors: {
        primaryColor: colors.primary,
        secondaryColor: colors.secondary,
        backgroundColor: colors.lightBackground
    },
    colorsInvert: {
        primaryColor: colors.primary,
        secondaryColor: colors.lightText,
        backgroundColor: colors.darkBackground
    },
    global: {
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
          buttonStyles: 
            `display: inline-block;
            line-height: 35px;
            margin: 8px;
            padding: 15px 25px;
            font-size: 18px;
            position: relative;
            opacity: .999;
            border-radius: 3px;
            transition: 0.5s;

            background-color: transparent;
            border: 2px solid #dddddd;
            color: ${colors.primary};

            &:before, &:after {
              content: '';
              border-style: solid;
              border-color: ${colors.primary};
              position: absolute;
              z-index: 999;
              border-radius: 3px;
              box-sizing: content-box;
              transition: 0.5s;
            }

            &:before {
              width: 0;
              height: 100%;
              border-width: 2px 0 2px 0;
              top: -2px;
              left: 0;
              transition-delay: 0.05s;
            }

            &:after {
              width: 100%;
              height: 0;
              border-width: 0 2px 0 2px;
              top: 0;
              left: -2px;
            }

            &:hover {
              color: ${colors.primary};
            }

            &:active {
              border-color: transparent;
            }

            &:hover:before {
              width: 100%;
            }

            &:hover:after {
              height: 100%;
            }
            `,
    }
}

export default Theme
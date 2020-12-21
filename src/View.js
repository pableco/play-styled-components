import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from './basicVariables.styles.jsx';
import GlobalStyle from './Global.styles.jsx';

const WebFont = require('webfontloader');

WebFont.load({
    google: {
        families: theme.fontSourceFamilies,
    },
});

const View = ({
    cta,
    description,
    extraInfo,
    imgBg,
    imgBgStyles,
    subTitle,
    title,
}) => (
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        <section className="listItem">
            <figure className="listItem__figure">
                <figcaption className="listItem__figcaption">
                    <h3 className="listItem__title">{title}</h3>
                    <h4 className="listItem__subTitle">{subTitle}</h4>
                </figcaption>
                <div className="listItem__imgFix" style={imgBgStyles}></div>
                <img className="listItem__img" src={imgBg} alt={`${title} image`} />
                <div className="listItem__content">
                    <p className="listItem__description">{description}</p>
                    <button className="listItem__action">{cta}</button>
                </div>
                <span className="listItem__extra">{extraInfo}</span>
            </figure>
        </section>
    </ThemeProvider>
);

export default View;

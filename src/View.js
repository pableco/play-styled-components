import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from './basicVariables.styles.jsx';
import GlobalStyle from './Global.styles.jsx';
import {
    CardFooterStyles,
    DescriptionStyles,
    LinkStyles,
    SubTitleStyles,
    SmallText,
    TitleStyles,
    Thumbnail,
    WrapperStyles,
} from './View.styles.jsx';

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
    extraLink,
    imgBg,
    imgBgStyles,
    subTitle,
    title,
}) => (
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        <WrapperStyles>
            <figure>
                <figcaption>
                    <TitleStyles>{title}</TitleStyles>
                </figcaption>
                <Thumbnail style={imgBgStyles}>
                    <img src={imgBg} alt={`${title} image`} />
                </Thumbnail>
                <SubTitleStyles>{subTitle}</SubTitleStyles>
                <DescriptionStyles>
                    <p>{description}</p>
                    <button className="listItem__action">{cta}</button>
                </DescriptionStyles>
                <CardFooterStyles>
                    <SmallText>{extraInfo}</SmallText>
                    <LinkStyles href='#'>{extraLink}</LinkStyles>
                </CardFooterStyles>
            </figure>
        </WrapperStyles>
    </ThemeProvider>
);

export default View;

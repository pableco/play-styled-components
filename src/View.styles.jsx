import styled, { css } from 'styled-components';

const WrapperStyles = styled.section`
    ${({ theme }) => css`
        border: none;
        box-shadow: ${theme.boxShadow1};
        padding: ${theme.r200} 0;
        width: 40vh;
        padding: ${theme.r200};
        margin: ${theme.r400} auto;
    `}
`;

const TitleStyles = styled.h3`
    ${({ theme }) => css`
        font-size: ${theme.fontXXL};
        padding: ${theme.r050} 0;
    `};
`;

const SubTitleStyles = styled.h4`
    ${({ theme }) => css`
        font-size: ${theme.fontXL};
        padding: ${theme.r100} 0;
    `}
`;

const LinkStyles = styled.a`

`;
const CardFooterStyles = styled.div`
`;

const DescriptionStyles = styled.div`
`;

const SmallText = styled.span`
`;

const Thumbnail = styled.div`
    ${({ theme }) => css`
        background-position: 50% 50%;
        background-repeat: no-repeat;
        background-size: cover;
        height: ${theme.imageThumbSize};
        width: 100%;

        img {
            display: none;
        }
    `}
`;

export {
    CardFooterStyles,
    DescriptionStyles,
    LinkStyles,
    SmallText,
    SubTitleStyles,
    Thumbnail,
    TitleStyles,
    WrapperStyles,
};

const font = {
    fontSourceFamilies: ['Lato:300,400,700', 'Playfair+Display:400,700'],
    fontSetBase: 'Lato',
    fontSizeBase: '62.5%',
    fontStyleBase: 'normal',

    fontXXS: '1rem',
    fontXS: '1.2rem',
    fontS: '1.4rem',
    fontB: '1.6rem',
    fontL: '1.8rem',
    fontXL: '2rem',
    fontXXL: '2.4rem',
    fontXXXL: '3rem',

    fontBold: '700',
    fontRegular: '400',
    fontLight: '300',

    lineHeightXS: '1', // default titles
    lineHeightS: '1.3',
    lineHeightB: '1.5', // default font body
    lineHeightM: '1.75',
    lineHeightL: '2',

    /* default letter spacing for titles */
    letterSpacing: '.05em',
    letterSpacingS: '.1em',
    letterSpacingL: '.125em',
    letterSpacingM: '.2em',

};
// Colors
const colors = {
    neutral000: 'hsla(0, 0%, 100%, 1)', // #fff
    neutral050: 'hsla(0, 0%, 97.4%, 1)', // #f8f8f8
    neutral100: 'hsla(0, 0%, 90%, 1)', // #e6e6e6
    neutral200: 'hsla(0, 0%, 80%, 1)', // #cccccc
    neutral300: 'hsla(0, 0%, 70%, 1)', // #b3b3b3
    neutral400: 'hsla(0, 0%, 60%, 1)', // #999999
    neutral500: 'hsla(0, 0%, 50%, 1)', // #808080
    neutral600: 'hsla(0, 0%, 40%, 1)', // #666666
    neutral700: 'hsla(0, 0%, 30%, 1)', // #4d4d4d
    neutral800: 'hsla(0, 0%, 20%, 1)', // #333333
    neutral900: 'hsla(0, 0%, 10%, 1)', // #1a1a1a
    neutral999: 'hsla(0, 0%, 0%, 1)', // #000

    colorMain: 'hsla(214, 96%, 36%, 1)',
    colorMain025: 'hsla(214, 96%, 98%, 1)',
    colorMain050: 'hsla(214, 96%, 95%, 1)',
    colorMain100: 'hsla(214, 96%, 90%, 1)',
    colorMain300: 'hsla(214, 96%, 70%, 1)',
    colorMain500: 'hsla(214, 96%, 50%, 1)',
    colorMain700: 'hsla(214, 96%, 30%, 1)',
    colorMain900: 'hsla(214, 96%, 10%, 1)',

    colorCustom: 'hsla(0, 0%, 46%, 1)',
    colorCustom100: 'hsla(0, 0%, 90%, 1)',
    colorCustom300: 'hsla(0, 0%, 70%, 1)',
    colorCustom500: 'hsla(0, 0%, 50%, 1)',
    colorCustom700: 'hsla(0, 0%, 30%, 1)',
    colorCustom900: 'hsla(0, 0%, 10%, 1)',

};

const layers = {
    zBottom: '-1',
    zBase: '0',
    zBaseTop: '1',
    zBaseup: '100',
    zMediumdown: '499',
    zMedium: '500',
    zMediumup: '501',
    zSuperior: '1000',
    zTop: '1200',
    zModal: '9999',
};

const opacity = {
    opacity000: '0',
    opacity001: '.01',
    opacity012: '.12',
    opacity016: '.16',
    opacity020: '.2',
    opacity025: '.25',
    opacity030: '.3',
    opacity050: '.5',
    opacity075: '.75',
    opacity100: '1',
};

const boxShadowRhythm = {
    boxShadow010: '.1rem',
    boxShadow020: '.2rem',
    boxShadow030: '.3rem',
    boxShadow060: '.6rem',
    boxShadow100: '1rem',
    boxShadow120: '1.2rem',
    boxShadow140: '1.4rem',
    boxShadow150: '1.5rem',
    boxShadow190: '1.9rem',
    boxShadow200: '2rem',
    boxShadow280: '2.8rem',
    boxShadow380: '3.8rem',
    boxShadowBaseColor: 'hsl(0, 0%, 0%)',
};

const boxShadowOpacity = {
    boxShadowopacity000: `hsla(0, 0%, 0%, ${opacity.opacity000})`,
    boxShadowopacity012: `hsla(0, 0%, 0%, ${opacity.opacity012})`,
    boxShadowopacity016: `hsla(0, 0%, 0%, ${opacity.opacity016})`,
    boxShadowopacity020: `hsla(0, 0%, 0%, ${opacity.opacity020})`,
    boxShadowopacity025: `hsla(0, 0%, 0%, ${opacity.opacity025})`,
    boxShadowopacity030: `hsla(0, 0%, 0%, ${opacity.opacity030})`,
    boxShadowopacity075: `hsla(0, 0%, 0%, ${opacity.opacity075})`,
};

const boxShadow = {
    boxShadow: `0 ${boxShadowRhythm.boxShadow030} ${boxShadowRhythm.boxShadow030}
    ${boxShadowOpacity.boxShadowopacity012}`,

    boxShadow1: `0 0 ${boxShadowRhythm.boxShadow150} 0 ${boxShadowOpacity.boxShadowopacity020}`,

    boxShadowBottom1: `0 ${boxShadowRhythm.boxShadow010} ${boxShadowRhythm.boxShadow030}
    ${boxShadowOpacity.boxShadowopacity012}, 0 ${boxShadowRhythm.boxShadow010}
    ${boxShadowRhythm.boxShadow020} ${boxShadowOpacity.boxShadowopacity025}`,

    boxShadowBottom2: `0 ${boxShadowRhythm.boxShadow030} ${boxShadowRhythm.boxShadow060}
    ${boxShadowOpacity.boxShadowopacity016}, 0 ${boxShadowRhythm.boxShadow030}
    ${boxShadowRhythm.boxShadow060} ${boxShadowOpacity.boxShadowopacity025}`,

    boxShadowBottom3: `0 ${boxShadowRhythm.boxShadow100} ${boxShadowRhythm.boxShadow200}
    ${boxShadowOpacity.boxShadowopacity020}, 0 ${boxShadowRhythm.boxShadow060}
    ${boxShadowRhythm.boxShadow060} ${boxShadowOpacity.boxShadowopacity025}`,

    boxShadowBottom4: `0 ${boxShadowRhythm.boxShadow140} ${boxShadowRhythm.boxShadow280}
    ${boxShadowOpacity.boxShadowopacity025}, 0 ${boxShadowRhythm.boxShadow100}
    ${boxShadowRhythm.boxShadow100} ${boxShadowOpacity.boxShadowopacity020}`,

    boxShadowBottom5: `0 ${boxShadowRhythm.boxShadow190} ${boxShadowRhythm.boxShadow380}
    ${boxShadowOpacity.boxShadowopacity030}, 0 ${boxShadowRhythm.boxShadow150}
    ${boxShadowRhythm.boxShadow120} ${boxShadowOpacity.boxShadowopacity020}`,

    boxShadowTop0: `0 -${boxShadowRhythm.boxShadow030} ${boxShadowRhythm.boxShadow030}
    ${boxShadowOpacity.boxShadowopacity012}`,

    boxShadowTop1: `0 -${boxShadowRhythm.boxShadow010} ${boxShadowRhythm.boxShadow030}
    ${boxShadowOpacity.boxShadowopacity012}, 0 -${boxShadowRhythm.boxShadow010}
    ${boxShadowRhythm.boxShadow020} ${boxShadowOpacity.boxShadowopacity025}`,

    boxShadowTop2: `0 -${boxShadowRhythm.boxShadow030} ${boxShadowRhythm.boxShadow060}
    ${boxShadowOpacity.boxShadowopacity016}, 0 -${boxShadowRhythm.boxShadow030}
    ${boxShadowRhythm.boxShadow060} ${boxShadowOpacity.boxShadowopacity025}`,

    boxShadowTop3: `0 -${boxShadowRhythm.boxShadow100} ${boxShadowRhythm.boxShadow200}
    ${boxShadowOpacity.boxShadowopacity020}, 0 -${boxShadowRhythm.boxShadow060}
    ${boxShadowRhythm.boxShadow060} ${boxShadowOpacity.boxShadowopacity025}`,

    boxShadowTop4: `0 -${boxShadowRhythm.boxShadow140} ${boxShadowRhythm.boxShadow280}
    ${boxShadowOpacity.boxShadowopacity025}, 0 -${boxShadowRhythm.boxShadow100}
    ${boxShadowRhythm.boxShadow100} ${boxShadowOpacity.boxShadowopacity020}`,

    boxShadowTop5: `0 -${boxShadowRhythm.boxShadow190} ${boxShadowRhythm.boxShadow380}
    ${boxShadowOpacity.boxShadowopacity030}, 0 -${boxShadowRhythm.boxShadow150}
    ${boxShadowRhythm.boxShadow120} ${boxShadowOpacity.boxShadowopacity020}`,
};

const rhythm = {
    r010: '.1rem',
    r025: '.25rem',
    r050: '.5rem',
    r075: '.75rem',
    r100: '1rem',
    r150: '1.5rem',
    r200: '2rem',
    r300: '3rem',
    r400: '4rem',
    r600: '6rem',
    r800: '8rem',
    r1000: '10rem',
    r1200: '12rem',
    r1600: '16rem',
    r2000: '20rem',
    r2500: '25rem',
};

const animationTime = {
    animationTimeS: '300ms',
    animationTimeM: '500ms',
    animationTimeL: '700ms',
};

const borders = {
    borderS: '.1rem',
    borderM: '.2rem',
    borderL: '.3rem',
};

const icons = {
    iconsXXS: '1rem',
    iconsXS: '1.4rem',
    iconsS: '1.6rem',
    iconsB: '1.8rem',
    iconsM: '2rem',
    iconsMM: '2.4rem',
    iconsML: '2.8rem',
    iconsL: '3.6rem',
};

const images = {
    imageCardSize: '8rem',
    imageThumbSize: '14rem',
};

const form = {
    formFieldBackgorund: 'transparent',
    formFieldBorderRadius: '0',
    formFieldColor: colors.neutral700,
    formFieldColorFocus: colors.colorMain700,
    formFieldBorder: `.2rem solid ${colors.colorCustom}`,
    formFieldBorderFocus: `.2rem solid ${colors.colorMain}`,
};

const base = {
    round: 'unset',
    roundedCard: '1rem',
    actionSize: '4.4rem',
    /* text shadow default fallback for tex over images */
    textShadow: `0 .1rem .3rem ${boxShadowOpacity.boxShadowOpacity025}`,
    outline: 'none',
    /* Typos */
    fontSetTitle: 'Playfair Display, serif;',
    /* Colors */
    colorBg: colors.neutral000,
    colorText: colors.neutral900,
    colorLink: colors.colorMain,
};

const themeDefault = {
    ...font,
    ...colors,
    ...layers,
    ...opacity,
    ...animationTime,
    ...boxShadow,
    ...rhythm,
    ...borders,
    ...form,
    ...icons,
    ...images,
    ...base,
};

export default themeDefault;

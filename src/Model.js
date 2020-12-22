import React, { Component } from 'react';
import Controller from './Controller';

export default class Model extends Component {

    render() {
        return (
            <Controller {...this.props}/>
        );
    }
}

Model.defaultProps = {
    cta: 'Call now',
    description: `Aenean vitae neque ultricies, egestas eros non, bibendum purus.
    Suspendisse sodales quam non lectus imperdiet dignissim.`,
    imgBg: 'https://source.unsplash.com/random',
    subTitle: 'Suspendisse sodales quam',
    title: 'Aenean vitae neque ultricies',
    extraInfo: 'Quam non lectus imperdiet dignissim',
    extraLink: 'more info',
};

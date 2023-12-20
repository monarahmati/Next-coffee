import PageHeader from '@/components/modules/pageheader/pageheader';
import Story from '@/components/template/About/Story';
import React from 'react';

const About = () => {
    return (
        <>
            <PageHeader route={'About Us'}/>
            <Story/>
        </>
    );
};

export default About;
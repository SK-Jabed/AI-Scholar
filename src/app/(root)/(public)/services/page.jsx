import LearningTool from '@/components/service/LearningTool';
import Productivity from '@/components/service/Productivity';
import Security from '@/components/service/Security';
import ServiceBanner from '@/components/service/ServiceBanner';
import React from 'react';

const Services = () => {
    return (
        <div>
            <ServiceBanner/>
            <LearningTool/>
            <Productivity/>
            <Security/>
        </div>
    );
};

export default Services;
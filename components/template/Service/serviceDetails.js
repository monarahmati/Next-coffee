import ServiceItem from '@/components/modules/serviceItem/serviceItem';
import React from 'react';

const ServiceDetails = ({data}) => {
    return (

        <div className="container-fluid pt-5">
        <div className="container">
            <div className="section-title">
                <h4 className="text-primary text-uppercase" style={{letterSpacing: "5px"}}>Our Services</h4>
                <h1 className="display-4">Fresh & Organic Beans</h1>
            </div>
            <div className="row">
                {
                    data.map((service)=>(
                        <ServiceItem key={service.id} {...service}/>
                    ))
                }

            </div>
        </div>
    </div>
    );
};

export default ServiceDetails;
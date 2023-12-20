import PageHeader from '@/components/modules/pageheader/pageheader';
import React from 'react';
import ServiceDetails from '@/components/template/Service/serviceDetails';

const service = ({data}) => {
    return (
        <>
            <PageHeader route={'Service'}/>
            <ServiceDetails data={data.serviceData}/>
        </>
    );
};

export default service;


export async function getStaticProps (context) {

    const resService = await fetch('http://localhost:4000/serviceData')
    const serviceData = await resService.json()

    return {
        props :{
            data:{
                serviceData : serviceData,
            }
        }
    }
}
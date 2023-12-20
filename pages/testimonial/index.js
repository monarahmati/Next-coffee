import PageHeader from '@/components/modules/pageheader/pageheader';
import Commetns from '@/components/template/testimonial/Commetns';
import React from 'react';

const Testimonial = ({data}) => {
    return (
        <>
        <PageHeader route='Testimonial'/>
        <Commetns data={data.commentData}/>
        </>
    );
};

export default Testimonial;

export async function getStaticProps() {
    
    // fetch commentsData
    const commentResponse = await fetch("http://localhost:4000/comments");
    const commentData = await commentResponse.json();
  
    return {
      props: {
        data: {
          commentData: commentData,
        },
      },
      revalidate: 60 * 60 * 12,
    };
  }
import About from "@/components/template/Index/About";
import Menu from "@/components/template/Index/Menu";
import Offer from "@/components/template/Index/Offer";
import Reservation from "@/components/template/Index/Reservation";
import Service from "@/components/template/Index/Service";
import Slider from "@/components/template/Index/Slider";
import Testimonials from "@/components/template/Index/Testimonials";
import React from "react";

const index = ({ data }) => {
  return (
    <div>
      <Slider />
      <About />
      <Service serviceData={data.serviceData} />
      <Offer />
      <Menu menuData={data.menuData} />
      <Reservation />
      <Testimonials commentData={data.commentData}/>
    </div>
  );
};

export async function getStaticProps() {
  // fetch ServiceData
  const serviceResponse = await fetch("http://localhost:4000/serviceData");
  const serviceData = await serviceResponse.json();

  
  // fetch MenuData
  const menuResponse = await fetch("http://localhost:4000/menu");
  const menuData = await menuResponse.json();
  
  // fetch commentsData
  const commentResponse = await fetch("http://localhost:4000/comments");
  const commentData = await commentResponse.json();

  return {
    props: {
      data: {
        serviceData: serviceData,
        menuData: menuData,
        commentData: commentData,
      },
    },
    revalidate: 60 * 60 * 12,
  };
}

export default index;

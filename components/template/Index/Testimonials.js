import Testimonial from "@/components/modules/Testimonial/Testimonial";
import React from "react";

const Testimonials = ({commentData}) => {
  return (
    <div className="container-fluid py-5">
      <div className="container">
        <div className="section-title">
          <h4
            className="text-primary text-uppercase"
            style={{ letterSpacing: "5px"}}
          >
            Testimonial
          </h4>
          <h1 className="display-4">Our Clients Say</h1>
        </div>
        <div className="owl-carousel testimonial-carousel">
            {
                commentData.slice(0,4).map((comment) => (
                  <Testimonial comment={comment} key={comment.id}/>
                ))
            }

        </div>
      </div>
    </div>
  );
};

export default Testimonials;



          {/* <div className="testimonial-item">
            <div className="d-flex align-items-center mb-3">
              <img className="img-fluid" src="img/testimonial-2.jpg" alt="" />
              <div className="ml-3">
                <h4>Client Name</h4>
                <i>Profession</i>
              </div>
            </div>
            <p className="m-0">
              Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr
              eirmod clita lorem. Dolor tempor ipsum sanct clita
            </p>
          </div>

          <div className="testimonial-item">
            <div className="d-flex align-items-center mb-3">
              <img className="img-fluid" src="img/testimonial-3.jpg" alt="" />
              <div className="ml-3">
                <h4>Client Name</h4>
                <i>Profession</i>
              </div>
            </div>
            <p className="m-0">
              Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr
              eirmod clita lorem. Dolor tempor ipsum sanct clita
            </p>
          </div>

          <div className="testimonial-item">
            <div className="d-flex align-items-center mb-3">
              <img className="img-fluid" src="img/testimonial-4.jpg" alt="" />
              <div className="ml-3">
                <h4>Client Name</h4>
                <i>Profession</i>
              </div>
            </div>
            <p className="m-0">
              Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr
              eirmod clita lorem. Dolor tempor ipsum sanct clita
            </p>
          </div> */}


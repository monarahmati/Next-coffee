import React from "react";

const Testimonial = ({comment}) => {
  return (
    <div className="testimonial-item">
      <div className="d-flex align-items-center mb-3">
        <img className="img-fluid" src={comment.profile} alt="" />
        <div className="ml-3">
          <h4>{comment.username}</h4>
          <i>User</i>
        </div>
      </div>
      <p className="m-0">{comment.body}</p>
    </div>
  );
};

export default Testimonial;

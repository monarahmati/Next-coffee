import Link from "next/link";
import React from "react";

const Card = ({item}) => {
  return (
    <div className="row align-items-center mb-5">
      <div className="col-4 col-sm-3">
        <img
          className="w-100 rounded-circle mb-3 mb-sm-0"
          src={item.img}
          alt=""
        />
        <h5 className="menu-price">${" "}{item.price}</h5>
      </div>
      <div className="col-8 col-sm-9">
        <Link href={`products/${item.id}`}>
         <h4>{item.title}</h4>
        
        </Link>
        <p className="m-0">
            {item.desc}
        </p>
      </div>
    </div>
  );
};

export default Card;

import Card from "@/components/modules/card/card";
import React from "react";

const Result = ({ searchResult }) => {

  const coldItems = searchResult.filter((item) => item.type === "cold").slice(0, 3);
  const hotItems = searchResult.filter((item) => item.type === "hot").slice(0, 3);


  return (
    <div className="container-fluid pt-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h1 className="mb-5">Hot Coffee</h1>
            {hotItems.length > 0 ? (
              hotItems.map((item) => (
                <Card key={item.id} item={item} />
              ))
            ) : (
              <p>Item not found</p>
            )}
          </div>

          <div className="col-lg-6">
            <h1 className="mb-5">Cold Coffee</h1>


            {coldItems.length > 0 ? (
              coldItems.map((item) => (
                <Card key={item.id} item={item} />
              ))
            ) : (
              <p>Item not found</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;




import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";

const ServiceItem = ({ img , icon ,title , desc }) => {
  return (
    <div className="col-lg-6 mb-5">
      <div className="row align-items-center">
        <div className="col-sm-5">
          <img className="img-fluid mb-3 mb-sm-0" src={img} alt="" />
        </div>
        <div className="col-sm-7">
          <h4 style={{ display: "flex", alignItems: "baseline" }}>
            <div
              style={{
                height: "35px",
                borderRadius: "100%",
                width: "40px",
                textAlign: "center",
                background: "#da9f5b",
              }}
            >
              <FontAwesomeIcon
                style={{ fontSize: "1.1rem", margin: "0,auto" }}
                icon={Icons[icon]}
              />
            </div>
            <p style={{ marginLeft: "10px" }}>{title}</p>
          </h4>
          <p className="m-0">{desc}</p>
        </div>
      </div>
    </div>
  )
};

export default ServiceItem;

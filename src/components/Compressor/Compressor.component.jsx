import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CompressorStyle.css";
import ReactSlider from "react-slider";

import Card from "react-bootstrap/Card";
var style = {
  backgroundColor: "#1a1c20",
  margin: "50px",
  padding: "46px 110px 2px 30px",
  marginRight: "50px",
  marginBottom: "2px",
};
let link = {
  paddingRight: "52px",
};
let kb = {
  paddingLeft: "1px",
};
let title = {
  justifyContent: "center",
  alignItems: "center",
};
let download = {
  height: "200px",
  width: "auto",
};
let card = {
  padding: "180px 30px 30px 30px",
  margin: "30px",
};
let img = {
  paddingRight: "48px",
  paddingTop: "40px",
};
const Compressor = (props) => {
  const styles = {
    slider: {
      padding: "0 0 0.5rem 0",
      position: "static",
    },
  };

  return (
    <div>
      {props.outputFileName ? (
        <div>
          <div
            className="col-xl-4 col-lg-4 col-md-12 col-sm-12 mt-3 p-10 ht mt-4 mr-5 justify-content-center align-item-center"
            style={style}>
            {props.outputFileName ? (
              <div style={styles.slider}>
                <ReactSlider
                  className="customSlider"
                  trackClassName="customSlider-track"
                  thumbClassName="customSlider-thumb"
                  min={0}
                  max={100}
                  value={props.quality}
                  onChange={props.handleInputChange}
                />
              </div>):(<></>)}
            <br/>
            {props.outputFileName ? (
              <button type="button" className=" btn btn-dark"onClick={(e) => props.click(e)}style={title}>
                Compress
              </button>):(<></>)}
          </div>

          <div
            className="col-xl-4 col-lg-4 col-md-12 col-sm-12 p-5 m-10 ht mt-4"
            style={card}>
            {props.clicked ? (
              <div style={img}>
                <Card.Img variant="top"src={props.compressedLink} className="card-img-top ht mt-4" style={download}>
                </Card.Img>
                <div id="kb" className="d-flex justify-content-center" style={kb}>
                    {Number((parseInt(props.outputImage.size, 10) / 1024).toFixed(1))}{" "}KB   
                </div>
              </div>):
              (<></>)}
            {props.clicked?(
              <div
                className="  col-xl-4 col-lg-4 col-md-12 mb-5 mt-1 col-sm-12 mr-10 pr-53 d-flex justify-content-center align-item-center"
                style={link}>
                <a href={props.compressedLink}
                  download={props.outputFileName}
                  className="mt-1 mx-5 ml-26 px-25 btn btn-dark ">
                  Download
                </a>
              </div>
            ):(<></>)}
          </div>
        </div>
      ):(
      <></>
      )}
    </div>
  );
};

export default Compressor;

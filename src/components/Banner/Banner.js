import React from 'react';
import image from "../../assets/banner1.jpg";

const Banner = () => {
  return (
    <div className="relative">
        <img className="w-full mt-1" src={image} alt="" />
        <div className="absolute top-40 text-white ml-16">
          <h1 className="text-5xl font-semibold mb-6">First Think , Then Act . </h1>
          <i className="text-sky-500" >
            “Faith is more than getting a theological quiz right. Faith is to
            know, to assent, <br /> to put your trust in, and to cherish what is true.”
            ~ Kevin DeYoung
          </i>
        </div>
      </div>
  );
};

export default Banner;


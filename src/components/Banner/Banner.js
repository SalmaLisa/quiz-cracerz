import React from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import quizAnimation from "../../assets/Animation/quiz.json";
import "./Banner.css";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

const Banner = () => {
  return (
    <div className="banner md:flex justify-between items-center pt-12">
      <div className=" md:ml-24 mx-6 md:mr-0">
        <h1 className="text-5xl font-bold mb-6">First Think , Then Act . </h1>
        <i className="text-blue-500 block">
          “Faith is more than getting a theological quiz right. Faith is to
          know, to assent, <br /> to put your trust in, and to cherish what is
          true.” ~ Kevin DeYoung
        </i>
        <Link to="/blog">
          <button className="pl-5 pr-3 py-2 border-2 border-slate-900 text-blue-800 font-bold mt-5 rounded flex ">
            <p>Learn More</p>
            <ArrowRightIcon className=" h-5 w-6 mt-1 ml-2 text-blue-800" />
          </button>
        </Link>
      </div>
      <div className="animation-image mt-5 md:mt-0">
        <Lottie animationData={quizAnimation} />
      </div>
    </div>
  );
};

export default Banner;

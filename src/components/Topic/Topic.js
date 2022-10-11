import React from "react";
import "./Topic.css";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const Topic = ({ topic }) => {
  const { id, logo, name, total } = topic;
  console.log(topic);
  return (
    <div className="topic shadow-xl shadow-blue-200 rounded ">
      <img className="bg-blue-100  mb-3" src={logo} alt="" />
      <div className="pl-3">
        <h3 className="text-slate-900 font-semibold text-2xl">{name}</h3>
        <p>Total Questions : {total} </p>
        <div>
          <Link to={`/home/${id}`}>
            <button className="py-1 px-4 bg-blue-600 mb-4 mt-3 rounded text-white font-semibold text-xl flex items-center">
              <p>Start</p>
              <ArrowRightIcon className=" h-5 w-5  ml-2 mt-1 " />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Topic;

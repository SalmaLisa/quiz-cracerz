import React from "react";
import img from "../../assets/bg-1.jpg";

const Blog = () => {
  return (
    <div className=" relative">
      <div className="opacity-30">
      <img className="w-full" src={img} alt="" />
      </div>
      <div className="absolute top-20 w-3/5 left-64">
        <h1 className="text-2xl font-bold text-slate-900">1. What is the purpose of react router ?</h1>
        <p>
          <span className="text-blue-800 border-b-4 border-blue-600 font-bold inline-block mb-2 mt-5 w-10" >Ans : </span><br /> React Router is a standard library for routing in
          React. It enables the navigation among views of various components in
          a React Application, allows changing the browser URL, and keeps the UI
          in sync with the URL.
        </p>
        <h1 className="text-2xl font-bold text-slate-900 mt-5">2. How does Context API works ?</h1>
        <p>
          <span className="text-blue-800 border-b-4 border-blue-600 font-bold inline-block mb-2 mt-5 w-10" >Ans : </span><br /> The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on.
        </p>
        <h1 className="text-2xl font-bold text-slate-900 mt-5">3. What is useRef hook ? What is it use for ?</h1>
        <p>
          <span className="text-blue-800 border-b-4 border-blue-600 font-bold inline-block mb-2 mt-5 w-10" >Ans : </span><br /> React Router is a standard library for routing in
          React. It enables the navigation among views of various components in
          a React Application, allows changing the browser URL, and keeps the UI
          in sync with the URL.
        </p>
      </div>
    </div>
  );
};

export default Blog;

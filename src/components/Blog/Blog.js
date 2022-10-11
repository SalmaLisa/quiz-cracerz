import React from "react";
import img from "../../assets/bg-1.jpg";

const Blog = () => {
  return (
    <div className=" relative">
      <div className="opacity-30">
        <img className="w-full" src={img} alt="" />
      </div>
      <div className="absolute top-20 lg:w-3/5 lg:left-64 px-6 md:px-20 lg:px-0">
        <h1 className="text-2xl font-bold text-slate-900">
          1. What is the purpose of react router ?
        </h1>
        <p>
          <span className="text-blue-800 border-b-4 border-blue-600 font-bold inline-block mb-2 mt-5 w-10">
            Ans :
          </span>
          <br /> React Router is a standard library for routing in React. It
          enables the navigation among views of various components in a React
          Application, allows changing the browser URL, and keeps the UI in sync
          with the URL.
        </p>
        <h1 className="text-2xl font-bold text-slate-900 mt-5">
          2. How does Context API works ?
        </h1>
        <p>
          <span className="text-blue-800 border-b-4 border-blue-600 font-bold inline-block mb-2 mt-5 w-10">
            Ans :
          </span>
          <br /> The React Context API is a way for a React app to effectively
          produce global variables that can be passed around. This is the
          alternative to "prop drilling" or moving props from grandparent to
          child to parent, and so on. Context provides a way to share values
          like these between components without having to explicitly pass a prop
          through every level of the tree.
        </p>
        <h1 className="text-2xl font-bold text-slate-900 mt-5">
          3. What is useRef hook ? What is it used for ?
        </h1>
        <p className=" mb-16">
          <span className="text-blue-800 border-b-4 border-blue-600 font-bold inline-block mb-2 mt-5 w-10">
            Ans :{" "}
          </span>
          <br />The useRef Hook allows you to persist
          values between renders. It can be used to store a mutable value that
          does not cause a re-render when updated. It can be used to access a
          DOM element directly.useRef returns a mutable ref object whose
          .current property is initialized to the passed argument ( initialValue
          ). The returned object will persist for the full lifetime of the
          component. Essentially, useRef is like a “box” that can hold a mutable
          value in its .current property.
        </p>
      </div>
    </div>
  );
};

export default Blog;

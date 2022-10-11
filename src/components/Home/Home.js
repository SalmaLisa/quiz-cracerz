import React from "react";
import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Topic from "../Topic/Topic";

const Home = () => {
  const quizTopics = useLoaderData();
  const topics = quizTopics.data;
  console.log(topics);
  return (
    <div>
      <Banner />
      <h1 className="text-center font-bold text-4xl text-slate-900 mt-24 mb-16">
        Select Your Topic
      </h1>
      <div className="px-20 my-10 grid grid-cols-4 gap-10">
        {topics.map((topic) => (
          <Topic topic={topic} key={topic.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;

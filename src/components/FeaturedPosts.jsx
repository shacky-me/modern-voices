import React from "react";
import Images from "./Images";
import { Link } from "react-router";

const FeaturedPosts = () => {
  return (
    <>
      {/* first section */}
      <div className="mt-8 flex flex-col lg:flex-row gap-8"></div>
      {/* second section */}

      {/* Imagery */}
      <Images src="Connect.jpg" className="rounded-3xl object-cover" w="298" />

      {/* extra dets and title */}
      <div className="flex items-center gap-4">
        <h1 className="font-semibold lg:text-lg">01.</h1>
        <Link className="text-blue-600 lg:text-lg">Web Design</Link>
        <span className="text-gray-500">2 days ago</span>
      </div>

      {/* Title */}
      <Link
        to="/test"
        className="text-xl lg:text-3xl font-semibold lg:font-bold"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Link>

      {/* other sections */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4"></div>
    </>
  );
};

export default FeaturedPosts;

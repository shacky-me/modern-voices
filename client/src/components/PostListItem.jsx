import React from "react";
import Images from "./Images";
import { Link } from "react-router";

const PostListItem = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-8 mb-12">
      {/* image */}
      <div className="md:hidden xl:block xl:w-1/3">
        <Images
          src="painting.jpg"
          className="rounded-2xl object-cover"
          w={300}
          h={300}
        />
      </div>
      {/* details */}
      <div className="flex flex-col gap-4">
        <Link to="/test" className="text-4xl font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, ad
          suscipit.
        </Link>

        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <span>Written by</span>
          <Link className="text-blue-800">Shacky</Link>
          <span>on</span>
          <Link className="text-blue-800">Web Design</Link>
          <span>2 days ago</span>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
          similique necessitatibus, obcaecati veritatis corrupti delectus sit
          explicabo quidem quae ipsam sequi quo quibusdam quam enim!
        </p>
        <Link to="/test" className="text-sm underline text-blue-800">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default PostListItem;

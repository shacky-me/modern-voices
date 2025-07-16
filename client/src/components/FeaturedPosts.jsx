import React from "react";
import Images from "./Images";
import { Link } from "react-router";

const FeaturedPosts = () => {
  return (
    <div className="mt-8 flex flex-col lg:flex-row gap-8">
      {/* Main Featured Post (First) */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        {/* Image */}
        <Images
          src="Connect.jpg"
          className="rounded-3xl object-cover h-64 lg:h-96 w-full"
        />
        {/* Added height classes */}
        {/* Details */}
        <div className="flex items-center gap-4">
          <h1 className="font-semibold lg:text-lg text-gray-700">01.</h1>
          {/* Added text color */}
          <Link
            to="/category/web-design"
            className="text-blue-800 lg:text-lg hover:underline"
          >
            Web Design
          </Link>{" "}
          {/* Added hover and actual link */}
          <span className="text-gray-500 text-sm">2 days ago</span>
          {/* Consistent text size */}
        </div>
        {/* Title */}
        <Link
          to="/post/lorem-ipsum-dolor-sit" // Example dynamic link
          className="text-xl lg:text-3xl font-semibold lg:font-bold hover:text-blue-700 transition-colors duration-200" // Added hover effect
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </Link>
      </div>

      {/* Other Featured Posts (Second, Third, Fourth) */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        {/* Increased gap between smaller posts */}
        {/* Second Post */}
        <div className="flex gap-4 items-start">
          {" "}
          {/* Use items-start for consistent top alignment */}
          <Images
            src="David.jpg"
            className="rounded-xl object-cover w-24 h-24 sm:h-32 md:h-40"
          />
          {/* Details and Title */}
          <div className="w-2/3 flex flex-col justify-center">
            {" "}
            {/* Centered content vertically */}
            {/* Details */}
            <div className="flex items-center gap-4 text-sm lg:text-base mb-2">
              {" "}
              {/* Reduced margin-bottom */}
              <h1 className="font-semibold text-gray-700">02.</h1>
              <Link
                to="/category/web-design"
                className="text-blue-800 hover:underline"
              >
                Web Design
              </Link>
              <span className="text-gray-500 text-xs sm:text-sm">
                2 days ago
              </span>{" "}
              {/* Smaller text for date */}
            </div>
            {/* Title */}
            <Link
              to="/post/lorem-ipsum-dolor-sit-amet"
              className="font-medium text-base sm:text-lg hover:text-blue-700 transition-colors duration-200"
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </Link>
          </div>
        </div>
        {/* Third Post */}
        <div className="flex gap-4 items-start">
          <Images
            src="risccsir.jpg"
            className="rounded-xl object-cover w-24 h-24 sm:h-32 md:h-40"
          />
          <div className="w-2/3 flex flex-col justify-center">
            <div className="flex items-center gap-4 text-sm lg:text-base mb-2">
              <h1 className="font-semibold text-gray-700">03.</h1>
              <Link
                to="/category/photography"
                className="text-blue-800 hover:underline"
              >
                Photography
              </Link>
              <span className="text-gray-500 text-xs sm:text-sm">
                5 days ago
              </span>
            </div>
            <Link
              to="/post/third-post-title"
              className="font-medium text-base sm:text-lg hover:text-blue-700 transition-colors duration-200"
            >
              Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore.
            </Link>
          </div>
        </div>
        {/* Fourth Post */}
        <div className="flex gap-4 items-start">
          <Images
            src="colorfulpost.jpg"
            className="rounded-xl object-cover w-24 h-24 sm:h-32 md:h-40"
          />
          <div className="w-2/3 flex flex-col justify-center">
            <div className="flex items-center gap-4 text-sm lg:text-base mb-2">
              <h1 className="font-semibold text-gray-700">04.</h1>
              <Link
                to="/category/development"
                className="text-blue-800 hover:underline"
              >
                Development
              </Link>
              <span className="text-gray-500 text-xs sm:text-sm">
                1 week ago
              </span>
            </div>
            <Link
              to="/post/fourth-post-title"
              className="font-medium text-base sm:text-lg hover:text-blue-700 transition-colors duration-200"
            >
              Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris.
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPosts;

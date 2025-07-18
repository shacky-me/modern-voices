import { Link } from "react-router";
import MainCategories from "../components/MainCategories";
import FeaturedPosts from "../components/FeaturedPosts";
import PostList from "../components/PostList";

const HomePage = () => {
  return (
    <div className="mt-4 flex flex-col gap-4">
      {/* BREADCRUMB */}
      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <span>•</span>
        <span className="text-blue-800">Blogs and Articles</span>
      </div>
      {/* INTRODUCTION */}
      <div className="flex items-center justify-between">
        {/* titles */}
        <div className="">
          <h1 className="text-gray-800 text-2xl md:text-5xl lg:text-6xl font-bold">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </h1>
          <p className="mt-8 text-md md:text-xl">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi
            rerum accusantium.
          </p>
        </div>
        {/* animated button */}
        <Link to="write" className="hidden md:block relative">
          <svg
            viewBox="0 0 400 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto max-w-2xl mx-auto"
          >
            <defs>
              <linearGradient
                id="gradientTop"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#8B5CF6" /> {/* Purple-500 */}
                <stop offset="100%" stopColor="#6366F1" /> {/* Indigo-500 */}
              </linearGradient>
              <linearGradient
                id="gradientBottom"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#4F46E5" /> {/* Indigo-600 */}
                <stop offset="100%" stopColor="#3B82F6" /> {/* Blue-500 */}
              </linearGradient>
              <linearGradient
                id="gradientSpark"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#FDE68A" /> {/* Amber-200 */}
                <stop offset="100%" stopColor="#FBBF24" /> {/* Amber-400 */}
              </linearGradient>
            </defs>

            <path
              d="M0 100 C 50 150, 150 200, 200 170 C 250 140, 350 100, 400 120 V 200 H 0 Z"
              fill="url(#gradientBottom)"
              className="opacity-70 transition-all duration-700 ease-in-out hover:scale-103 transform"
            />

            <path
              d="M0 80 C 50 120, 150 170, 200 150 C 250 130, 350 90, 400 100 V 200 H 0 Z"
              fill="url(#gradientTop)"
              className="opacity-85 transition-all duration-700 ease-in-out hover:scale-103 transform"
            />

            <line
              x1="100"
              y1="80"
              x2="180"
              y2="20"
              stroke="url(#gradientSpark)"
              strokeWidth="3"
              strokeLinecap="round"
              className="origin-center transition-transform duration-1000 ease-in-out hover:rotate-3"
            />
            <line
              x1="150"
              y1="100"
              x2="250"
              y2="40"
              stroke="url(#gradientSpark)"
              strokeWidth="3"
              strokeLinecap="round"
              className="origin-center transition-transform duration-1000 ease-in-out hover:rotate-6"
            />
            <line
              x1="200"
              y1="120"
              x2="300"
              y2="50"
              stroke="url(#gradientSpark)"
              strokeWidth="3"
              strokeLinecap="round"
              className="origin-center transition-transform duration-1000 ease-in-out hover:rotate-9"
            />

            <circle
              cx="180"
              cy="20"
              r="5"
              fill="url(#gradientSpark)"
              className="opacity-70 transition-opacity duration-700 ease-in-out hover:opacity-100"
            />
            <circle
              cx="250"
              cy="40"
              r="5"
              fill="url(#gradientSpark)"
              className="opacity-70 transition-opacity duration-700 ease-in-out hover:opacity-100"
            />
            <circle
              cx="300"
              cy="50"
              r="5"
              fill="url(#gradientSpark)"
              className="opacity-70 transition-opacity duration-700 ease-in-out hover:opacity-100"
            />
          </svg>
          <button className="absolute top-0 left-0 right-0 bottom-0 m-auto w-20 h-20 bg-blue-800 rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="50"
              height="50"
              fill="none"
              stroke="white"
              strokeWidth="2"
            >
              <line x1="6" y1="18" x2="18" y2="6" />
              <polyline points="9 6 18 6 18 15" />
            </svg>
          </button>
        </Link>
      </div>
      {/* CATEGORIES */}
      <MainCategories />
      {/* FEATURED POSTS */}
      <FeaturedPosts />
      {/* POST LIST */}
      <div className="">
        <h1 className="my-8 text-2xl text-gray-600">Recent Posts</h1>
        <PostList />
      </div>
    </div>
  );
};

export default HomePage;

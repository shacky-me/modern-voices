import React from "react";
import Images from "../components/Images";
import { Link } from "react-router";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import PostMenuActions from "../components/PostMenuActions";
import Search from "../components/Search";
import Comments from "../components/Comments";

const SPAPage = () => {
  return (
    <div className="flex flex-col gap-8">
      {/* details */}
      <div className="flex gap-8">
        <div className="lg:w-3/5 flex flex-col gap-8">
          <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            quasi nulla aliquid.
          </h1>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Written by</span>
            <Link className="text-blue-800">Shacky</Link>
            <span>on</span>
            <Link className="text-blue-800">Web Design</Link>
            <span>2 days ago</span>
          </div>
          <p className="text-gray-500 font-medium">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
            placeat dolorem doloribus molestias delectus magni recusandae sit
            obcaecati reprehenderit. Culpa eius accusamus architecto eos
            obcaecati.
          </p>
        </div>

        <div className="hidden lg:block w-2/5">
          <Images
            src="foldingtable.jpg"
            w={600}
            h={400}
            className="rounded-2xl"
          />
        </div>
      </div>
      {/* content info */}
      <div className="flex flex-col md:flex-row gap-12">
        {/* text */}
        <div className="lg:text-lg flex flex-col gap-6 text-justify">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Reprehenderit dignissimos sunt accusamus exercitationem. Corporis,
            delectus similique. Natus, deserunt similique! Ab hic qui, provident
            laboriosam ex nulla optio similique veritatis illum tempore et
            debitis harum! Eius modi molestiae ab blanditiis omnis.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Reprehenderit dignissimos sunt accusamus exercitationem. Corporis,
            delectus similique. Natus, deserunt similique! Ab hic qui, provident
            laboriosam ex nulla optio similique veritatis illum tempore et
            debitis harum! Eius modi molestiae ab blanditiis omnis.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Reprehenderit dignissimos sunt accusamus exercitationem. Corporis,
            delectus similique. Natus, deserunt similique! Ab hic qui, provident
            laboriosam ex nulla optio similique veritatis illum tempore et
            debitis harum! Eius modi molestiae ab blanditiis omnis.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Reprehenderit dignissimos sunt accusamus exercitationem. Corporis,
            delectus similique. Natus, deserunt similique! Ab hic qui, provident
            laboriosam ex nulla optio similique veritatis illum tempore et
            debitis harum! Eius modi molestiae ab blanditiis omnis.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Reprehenderit dignissimos sunt accusamus exercitationem. Corporis,
            delectus similique. Natus, deserunt similique! Ab hic qui, provident
            laboriosam ex nulla optio similique veritatis illum tempore et
            debitis harum! Eius modi molestiae ab blanditiis omnis.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Reprehenderit dignissimos sunt accusamus exercitationem. Corporis,
            delectus similique. Natus, deserunt similique! Ab hic qui, provident
            laboriosam ex nulla optio similique veritatis illum tempore et
            debitis harum! Eius modi molestiae ab blanditiis omnis.
          </p>
        </div>
        {/* menu */}
        <div className="px-4 h-max sticky top-8">
          <h1 className="mb-4 text-sm font-medium">Author</h1>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-8">
              <Images
                src="amanwithdreads.jpg"
                className="w-12 h-12 rounded-full object-cover"
                w="48"
                h="48"
              />
              <Link className="text-blue-800">John Does</Link>
            </div>
            <p className="text-sm text-gray-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam,
              neque.
            </p>
            <div className="flex gap-2">
              <Link>
                <FaSquareInstagram className="text-2xl text-[#cd486b]" />
              </Link>

              <Link>
                <FaFacebook className="text-2xl text-blue-800" />
              </Link>
            </div>
          </div>

          <PostMenuActions />
          <h1 className="mt-8 mb-4 text-sm font-medium">Categories</h1>
          <div className="flex flex-col gap-2 text-sm">
            <Link className="underline">All</Link>
            <Link className="underline" to="/">
              Web Design
            </Link>
            <Link className="underline" to="/">
              Development
            </Link>
            <Link className="underline" to="/">
              Databases
            </Link>
            <Link className="underline" to="/">
              Search Engines
            </Link>
            <Link className="underline" to="/">
              Marketing
            </Link>
          </div>
          <h1 className="mt-8 mb-4 text-sm font-medium">Search</h1>
          <Search />
        </div>
      </div>
      <Comments />
    </div>
  );
};

export default SPAPage;

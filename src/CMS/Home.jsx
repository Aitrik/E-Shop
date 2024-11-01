import React from "react";
import { dummy } from "../dummy";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <main className="bg-white relative overflow-hidden h-full w-full">
        <div className="bg-white flex justify-center items-start relative z-20 overflow-hidden ">
          <div className="container lg:ml-20 px-6 flex justify-start relative py-8 ">
            <div className="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20 text-start">
              <span className="w-20 h-2 bg-white mb-12 mx-auto"></span>
              <h1 className="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none text-gray-800">
                Exclusive
                <span className="text-5xl sm:text-7xl">Deals</span>
              </h1>
              <p className="text-sm sm:text-base text-gray-700 mt-4">
                Dimension of reality that makes change possible and
                understandable. An indefinite and homogeneous environment in
                which natural events and human existence take place.
              </p>
              <div className="flex justify-start mt-8">
                <a
                  href="#"
                  className="uppercase py-2 px-4 rounded-lg bg-yellow-500 border-2 border-transparent text-white text-md mr-4 hover:bg-yellow-600"
                >
                  Get started
                </a>
                <a
                  href="#"
                  className="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-yellow-500 text-yellow-500 hover:bg-gray-100 hover:text-yellow-600 text-md"
                >
                  Read more
                </a>
              </div>
            </div>
            <div className="hidden sm:block sm:w-1/3 lg:w-3/5 relative">
              <img
                src="images/49407305_9240592.jpg"
                className="max-w-xs md:max-w-md m-auto"
              />
            </div>
          </div>
        </div>

        <div className="stats-section py-10 px-5">
          <div className="stats-grid z-20 max-w-5xl rounded-xl bg-yellow-400 mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 items-center justify-between md:px-10 gap-x-10 py-10 px-5 lg:px-10 gap-y-5">
            <div className="col-span-1 md:col-span-3 lg:col-span-1 flex flex-col items-center justify-center gap-y-3">
              <h2 className="text-3xl md:pb-5 md:text-3xl text-orange-500 font-bold">
                Our Stats
              </h2>
            </div>
            <div className="col-span-1 md:col-span-1 lg:col-span-1 flex flex-col items-center justify-center gap-y-3">
              <h2 className="text-3xl lg:text-5xl text-orange-500 font-bold">
                1.2M
              </h2>
              <p className="text-center text-sm md:text-base text-orange-500">
                Members worldwide
              </p>
            </div>
            <div className="col-span-1 md:col-span-1 lg:col-span-1 flex flex-col items-center justify-center gap-y-3">
              <h2 className="text-3xl lg:text-5xl text-orange-500 font-bold">
                95%
              </h2>
              <p className="text-center text-sm md:text-base text-orange-500">
                Customer satisfaction rate
              </p>
            </div>
            <div className="col-span-1 md:col-span-1 lg:col-span-1 flex flex-col items-center justify-center gap-y-3">
              <h2 className="text-3xl lg:text-5xl text-orange-500 font-bold">
                3500+
              </h2>
              <p className="text-center text-sm md:text-base text-orange-500">
                Transactions processed daily
              </p>
            </div>
          </div>
        </div>
      </main>

      <div className="max-w-screen-4xl mx-0 p-5 md:p-16">
        {/* Title */}
        <h2 className="text-3xl font-bold mb-8 text-center">
          Featured Listings
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {dummy.map((item) => (
            <>
              <article className="max-w-sm w-full bg-white rounded-lg shadow-lg overflow-hidden border border-gray-300 ">
                <div>
                  <img
                    className="object-cover h-64 w-full"
                    src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxzbmVha2Vyc3xlbnwwfDB8fHwxNzEyMjIzNDAyfDA&ixlib=rb-4.0.3&q=80&w=1080"
                    alt="Converse sneakers"
                  />
                </div>
                <div className="flex flex-col gap-1 mt-4 px-4">
                  <h2 className="text-lg font-semibold text-gray-800">
                    Converse Sneakers
                  </h2>
                  <span className="font-normal text-gray-600 ">
                    High Top (Lemon Yellow)
                  </span>
                  <span className="font-semibold text-gray-800 ">$60</span>
                </div>

                <div className="mt-4 p-4 border-t border-gray-200 ">
                  <button className="w-full flex justify-between items-center font-bold cursor-pointer hover:underline text-gray-800 ">
                    <span className="text-base">Add to Cart</span>
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </button>
                </div>
              </article>
            </>
          ))}
        </div>

        {/* Centered View More Button */}
        <div className="flex justify-center mt-4">
          <Link to="/shop">
            <button className="bg-yellow-400 p-2 rounded-md font-semibold text-black hover:bg-yellow-500 transition duration-500 ease-in-out">
              View More
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

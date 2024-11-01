import React, { useEffect } from "react";
import { dummy } from "../dummy";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { products } from "../Redux/Slice";

const SkeletonLoader = () => (
  <article className="max-w-sm w-full pb-2 bg-white rounded-lg shadow-lg overflow-hidden border border-gray-300 animate-pulse">
    <div className="h-64 bg-gray-200" /> {/* Placeholder for image */}
    <div className="flex flex-col gap-1 mt-4 px-4">
      <div className="h-6 bg-gray-200 rounded w-3/4" />{" "}
      {/* Placeholder for title */}
      <div className="h-4 bg-gray-200 rounded w-1/2" />{" "}
      {/* Placeholder for description */}
      <div className="h-6 bg-gray-200 rounded w-1/3" />{" "}
      {/* Placeholder for price */}
    </div>
  </article>
);

export default function Home() {
  const { status, productData } = useSelector((state) => state.Sli);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(products());
  }, [dispatch]);

  console.log(productData);
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
        {status === "loading" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[...Array(9)].map((_, index) => (
              <SkeletonLoader key={index} />
            ))}
          </div>
        ) : (
          <>
            {/* Title */}
            <h2 className="text-3xl font-bold mb-8 text-center">
              Featured Electronics
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {productData?.slice(77, 80)?.map((item) => (
                <>
                  <Link to={`/product/${item.id}`}>
                    <article className="max-w-sm w-full pb-2 bg-white rounded-lg shadow-lg overflow-hidden border border-gray-300 ">
                      <div>
                        <img
                          className="object-cover h-64 w-full"
                          src={item.thumbnail}
                          alt="Converse sneakers"
                        />
                      </div>
                      <div className="flex flex-col gap-1 mt-4 px-4">
                        <h2 className="text-lg font-semibold text-gray-800">
                          {item.title}
                        </h2>
                        <span className="font-normal text-gray-600 ">
                          High Top (Lemon Yellow)
                        </span>
                        <span className="font-semibold text-gray-800 ">
                          $60
                        </span>
                      </div>
                      <div className="flex gap-1 py-2 mx-2">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className={`h-5 w-5 ${
                                i < item.rating
                                  ? "text-yellow-500"
                                  : "text-gray-400"
                              }`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.367 4.21a1 1 0 00.95.69h4.424c.969 0 1.371 1.24.588 1.81l-3.58 2.598a1 1 0 00-.364 1.118l1.368 4.21c.3.92-.755 1.688-1.538 1.117l-3.58-2.598a1 1 0 00-1.175 0l-3.58 2.598c-.783.57-1.838-.196-1.538-1.117l1.367-4.21a1 1 0 00-.364-1.118L2.02 9.637c-.783-.57-.38-1.81.588-1.81h4.424a1 1 0 00.95-.69l1.367-4.21z" />
                            </svg>
                          ))}{" "}
                          {item.rating}
                        </div>
                      </div>
                      {/* <div className="mt-4 p-4 border-t border-gray-200 ">
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
                  </div> */}
                    </article>
                  </Link>
                </>
              ))}
            </div>

            <h2 className="text-3xl font-bold mb-8 text-center mt-10">
              Featured Accessories
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {productData?.slice(157, 160)?.map((item) => (
                <>
                  <Link to={`/product/${item.id}`}>
                    <article className="max-w-sm w-full pb-2 bg-white rounded-lg shadow-lg overflow-hidden border border-gray-300 ">
                      <div>
                        <img
                          className="object-cover h-64 w-full"
                          src={item.thumbnail}
                          alt="Converse sneakers"
                        />
                      </div>
                      <div className="flex flex-col gap-1 mt-4 px-4">
                        <h2 className="text-lg font-semibold text-gray-800">
                          {item.title}
                        </h2>
                        <span className="font-normal text-gray-600 ">
                          High Top (Lemon Yellow)
                        </span>
                        <span className="font-semibold text-gray-800 ">
                          $60
                        </span>
                      </div>
                      <div className="flex gap-1 py-2 mx-2">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className={`h-5 w-5 ${
                                i < item.rating
                                  ? "text-yellow-500"
                                  : "text-gray-400"
                              }`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.367 4.21a1 1 0 00.95.69h4.424c.969 0 1.371 1.24.588 1.81l-3.58 2.598a1 1 0 00-.364 1.118l1.368 4.21c.3.92-.755 1.688-1.538 1.117l-3.58-2.598a1 1 0 00-1.175 0l-3.58 2.598c-.783.57-1.838-.196-1.538-1.117l1.367-4.21a1 1 0 00-.364-1.118L2.02 9.637c-.783-.57-.38-1.81.588-1.81h4.424a1 1 0 00.95-.69l1.367-4.21z" />
                            </svg>
                          ))}{" "}
                          {item.rating}
                        </div>
                      </div>
                      {/* <div className="mt-4 p-4 border-t border-gray-200 ">
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
                  </div> */}
                    </article>
                  </Link>
                </>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}

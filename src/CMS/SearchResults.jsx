import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { search } from "../Redux/Slice";

const SkeletonCard = () => (
  <div className="w-72 bg-white shadow-md rounded-xl border border-gray-300 p-4 animate-pulse">
    <div className="h-80 bg-gray-300 rounded-t-xl"></div>
    <div className="px-4 py-2 w-72">
      <div className="h-4 bg-gray-200 rounded mb-2"></div>
      <div className="h-6 bg-gray-200 rounded mb-2"></div>
      <div className="flex items-center">
        <div className="h-4 bg-gray-200 rounded w-1/4 mr-2"></div>
        <div className="h-4 bg-gray-200 rounded w-1/4"></div>
      </div>
    </div>
  </div>
);

export default function SearchResults() {
  const { searchData, status } = useSelector((state) => state.Sli);
  const dispatch = useDispatch();
  const { name } = useParams();

  useEffect(() => {
    dispatch(search(name));
  }, [dispatch, name]);

  return (
    <>
      <div className="text-center p-6">
        <h1 className="text-3xl">
          Search Results Found: "{searchData.length}"
        </h1>
      </div>
      <section
        id="Projects"
        className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
      >
        {status === "loading" ? (
          // Display skeleton loaders while loading
          Array.from({ length: 6 }).map((_, index) => (
            <SkeletonCard key={index} />
          ))
        ) : (
          // Display actual search results
          searchData && searchData.map((item) => (
            <div className="w-72 bg-white shadow-md rounded-xl border border-gray-300 duration-500 hover:scale-105 hover:shadow-xl" key={item.id}>
              <Link to={`/product/${item.id}`}>
                <img
                  src={item.thumbnail}
                  alt="Product"
                  className="h-80 w-72 object-cover rounded-t-xl"
                />
                <div className="px-4 py-2 w-72 bg-yellow-300">
                  <span className="text-gray-400 mr-3 uppercase text-xs">
                    {item.brand}
                  </span>
                  <p className="text-lg font-bold text-black truncate block capitalize">
                    {item.title}
                  </p>
                  <div className="flex items-center">
                    <p className="text-lg font-semibold text-black cursor-auto my-3">
                      $ {item.price}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))
        )}
      </section>
    </>
  );
}

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { categoryProd } from "../Redux/Slice";
import { SkeletonCard } from "./SearchResults";

export default function CategoryProducts() {
  const { CatProdData, status } = useSelector((state) => state.Sli);
  const dispatch = useDispatch();
  const { slug } = useParams();

  useEffect(() => {
    dispatch(categoryProd(slug));
  }, [dispatch, slug]);

  console.log(CatProdData);
  return (
    <>
      <div className="text-center p-6">
        <h1 className="text-3xl">
          Produts Found: "{CatProdData.length}"
        </h1>
      </div>
      <section
        id="Projects"
        className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
      >
        { CatProdData && status === "loading"
          ? // Display skeleton loaders while loading
            Array.from({  length: CatProdData.length > 0 ? CatProdData.length : 6}).map((_, index) => (
              <SkeletonCard key={index} />
            ))
          : // Display actual search results
            CatProdData &&
            CatProdData.map((item) => (
              <div
                className="w-72 bg-white shadow-md rounded-xl border border-gray-300 duration-500 hover:scale-105 hover:shadow-xl"
                key={item.id}
              >
                <Link to={`/product/${item.id}`}>
                  <img
                    src={item.thumbnail}
                    alt="Product"
                    className="h-80 w-72 object-cover rounded-t-xl"
                    loading="lazy"
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
            ))}
      </section>
    </>
  );
}

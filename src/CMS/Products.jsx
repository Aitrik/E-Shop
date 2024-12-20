import React from "react";
import { Link } from "react-router-dom";

export default function Products({ productData, status }) {
//   console.log(productData);
  return (
    <>
      
        
        {status === "loading" ? (
          <>
            <div className="text-center items-center mt-52">
              <div role="status">
                <svg
                  aria-hidden="true"
                  className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-yellow-500"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          </>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-4">
            {productData.map((item) => (
              <Link to={`/product/${item.id}`}>
                <article className="max-w-sm w-full bg-white rounded-lg shadow-lg overflow-hidden border border-gray-300">
                  <div>
                    <img
                      className="object-cover h-64 w-full"
                      src={item.images[0] || "images/No_Image_Available.jpg"}
                      alt={item.title}
                      loading="lazy"
                    />
                  </div>
                  <div className="flex flex-col gap-1 mt-4 px-4 py-2">
                    <h2 className="text-lg font-semibold text-gray-800">
                      {item.title}
                    </h2>
                    <h2 className="text-sm font-medium text-gray-800">
                      {item.brand}
                    </h2>
                    <span className="font-normal text-gray-600">
                      {item.description.slice(0, 40)}...
                    </span>
                    <span className="font-semibold text-gray-800">
                      ${item.price}
                    </span>
                    <div className="flex gap-1 py-2">
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
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}
      
    </>
  );
}

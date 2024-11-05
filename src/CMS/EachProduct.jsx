import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/Slice";

export default function EachProduct() {
  const [data, setData] = useState({});
  const [mainImage, setMainImage] = useState("");
  const { id } = useParams();
  const[quantity,setQuantity]=useState(1)
  const dispatch=useDispatch()

  const handleCart=()=>{
    dispatch(addToCart({product:data,quantity}))
  }

  const handleQuantity = (value) => {
    setQuantity((prev) => Math.max(1, prev + value));
  };
  

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        let res = await axios.get(`https://dummyjson.com/products/${id}`);
        setData(res.data);
        setMainImage(res.data.images[0]);
      } catch (err) {
        console.error("Error fetching product", err);
      }
    };
    fetchProduct();
  }, [id]);

  const changeImage = (src) => {
    setMainImage(src);
  };

  return (
    <>
      <div className="bg-gray-100">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-wrap -mx-4">
            {/* Product Images */}
            <div className="w-full md:w-1/2 px-4 mb-8">
              <img
                src={mainImage || "https://via.placeholder.com/600"}
                alt={data.title}
                className="w-full max-auto h-auto rounded-lg shadow-md mb-4 border border-gray-300 object-cover"
              />

              <div className="flex gap-4 py-4 overflow-auto">
                {data?.images?.map((item, index) => (
                  <img
                    key={index}
                    src={item}
                    alt={`Thumbnail ${index}`}
                    className="w-16 sm:w-20 border border-gray-300 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                    onClick={() => changeImage(item)}
                  />
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div className="w-full md:w-1/2 px-4">
              <h2 className="text-3xl font-bold mb-2">{data.title}</h2>
              <h3 className="text-2xl font-bold mb-2">{data.brand}</h3>
              <p className="text-gray-600 mb-4">Stock: {data.stock}</p>
              <div className="mb-4">
                <span className="text-2xl font-bold mr-2">${data.price}</span>
                {data.discountPercentage && (
                  <span className="text-gray-500 ">
                    {data.discountPercentage}% Discount
                  </span>
                )}
              </div>

              <div className="mb-4">
                <span className="text-gray-700 font-bold mr-2 bg-yellow-500 p-2 rounded-md">
                  {data.warrantyInformation}
                </span>
                {data.shippingInformation && (
                  <span className="text-gray-500 font-bold mr-2 ">
                    {data.shippingInformation}
                  </span>
                )}
              </div>

              {/* Star Rating */}
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className={`w-6 h-6 ${
                      index < Math.round(data.rating)
                        ? "text-yellow-500"
                        : "text-gray-300"
                    }`}
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                      clipRule="evenodd"
                    />
                  </svg>
                ))}
                <span className="ml-2 text-gray-600">
                  {data.rating} ({data.stock} reviews)
                </span>
              </div>

              <p className="text-gray-700 mb-6">{data.description}</p>

              {/* Buy and Wishlist Buttons */}
              <div className="flex space-x-4 mb-6 items-center">
                {/* Counter */}
                <div className="flex items-center bg-gray-200 rounded-md">
                  <button
                    className="px-2 py-1 text-gray-700 hover:bg-gray-300"
                    onClick={()=>handleQuantity(-1)}
                  >
                    -
                  </button>
                  <span className="px-4 bg-gray-300 p-2">{quantity}</span>
                  <button
                    className="px-2 py-1 text-gray-700 hover:bg-gray-300"
                    onClick={()=>handleQuantity(1)}
                  >
                    +
                  </button>
                </div>

                {/* Add to Cart Button */}
                <button className="bg-yellow-500 flex gap-2 items-center text-white px-6 py-2 rounded-md hover:bg-yellow-600 focus:outline-none" onClick={handleCart}>
                  Add to Cart
                </button>
              </div>

              {/* Key Features */}
              {data?.keyFeatures && (
                <div>
                  <h3 className="text-lg font-semibold mb-2">Key Features:</h3>
                  <ul className="list-disc list-inside text-gray-700">
                    {data.keyFeatures.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

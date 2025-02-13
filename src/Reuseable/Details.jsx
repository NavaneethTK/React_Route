import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../component/NavBarComp";

function Details() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  return (
    <>
      <div className="w-full flex flex-col gap-7 pt-[30px]">
        <div className="hidden sm:block">
          <Navbar />
        </div>
        <div className=" mx-auto flex flex-col gap-[20px] items-center">
          <div className="w-[80%] flex justify-center shadow-[0_1px_3px_rgba(0,0,0,.3),_0_1px_2px_rgba(0,0,0,.24)]">
            <img
              src={product.image}
              alt="image"
              className="h-[20%] w-[80%] p-[30px]"
            />
          </div>
          <div className="w-[70%] flex flex-col justify-center gap-6">
            <div className="text-[14px] font-bold">{product.title}</div>
            <div className="border-2 border-[#a98b71] rounded-[10px] max-w-max px-4 py-[5px]">
              {product.category}
            </div>
            <div className="text-[#a98b71] font-bold text-[18px] leading-[25px]">
              Rs:{product.price}
            </div>
            <div className="text-[#a98b71]  font-bold text-[16px] leading-[25px] flex gap-9">
              <div className="inline-flex gap-2">
                Rating:{product?.rating?.rate}
              </div>
              <div className="inline-flex gap-2">
                Count:{product?.rating?.count}
              </div>
            </div>
            <div className="flex flex-col w-full">
              <p className="text-[#a98b71] font-bold text-[16px]">
                Product Description :
              </p>
              <div>{product.description}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Details;

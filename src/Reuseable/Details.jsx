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
      <div className="w-full flex flex-col gap-7">
        <Navbar />
        <div className="w-[80%] mx-auto flex">
          <div className="w-[50%] flex justify-center">
            <img src={product.image} alt="image" className="w-[45%]" />
          </div>
          <div className="w-[50%] flex flex-col justify-center gap-6">
            <div className="text-[27px] font-bold">{product.title}</div>
            <div className="border-2 border-[#a98b71] rounded-[10px]">
              {product.category}
            </div>
            <div>Rs:{product.price}</div>
            <div className="text-[#a98b71] font-bold text-[18px] leading-[25px]">
              Rating:{product?.rating?.rate} Count:{product?.rating?.count}
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

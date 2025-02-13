import React from "react";

function CardComponent({ image, title, price }) {
  return (
    <>
      <div>
        <div className=" w-[200px] xl:w-[200px] font-['inter']  shadow-[0_1px_3px_rgba(0,0,0,.3),_0_1px_2px_rgba(0,0,0,.24)] h-max  ">
          <div className="flex justify-center p-4">
            <img src={image} className="w-[115px] h-[115px]" />
          </div>
          <div className=" whitespace-nowrap p-[5px] bg-[#fefaef]">
            <p className="overflow-hidden text-ellipsis truncate">{title}</p>
          </div>
          <div className="bg-[#f6f1ea]">
            <p className="text-[#999] hover:text-[#000] p-[5px]">{price}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardComponent;

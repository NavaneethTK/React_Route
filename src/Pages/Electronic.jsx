import React from "react";
import { useState, useEffect } from "react";
import Navbar from "../component/NavBarComp";
import CardComponent from "../component/CardComponent";
import { NavLink } from "react-router-dom";

function Electro() {
  const [Element, setElement] = useState();
  useEffect(() => {
    fetch("https://fakestoreapi.com/products").then((res) =>
      res.json().then((data) => setElement(data))
    );
  }, []);
  return (
    <>
      <div>
        <Navbar />
        <div className="flex  flex-wrap gap-2 m-auto justify-center w-[100%]">
          <div className="flex flex-col gap-5 w-[85%]">
            <div className="text-[40px] text-center font-thin ">Electronic</div>
            <div className="text-justify ">
              <p className="text-base">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
            <div className="flex gap-5 justify-center flex-wrap">
              {Element?.map((data) => {
                if (data.category === "electronics") {
                  return (
                    <div key={data.id}>
                      <NavLink to={`/${data.id}`}>
                        <CardComponent
                          title={data.title}
                          image={data.image}
                          price={data.price}
                        />
                      </NavLink>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Electro;

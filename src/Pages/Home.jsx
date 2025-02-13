import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import sofaimg from "../assets/sofaimg.png";
import features from "../assets/featuresimg.png";
import Navbar from "../component/NavBarComp";
import CardComponent from "../component/CardComponent";

function Home() {
  const [Element, setElement] = useState();
  useEffect(() => {
    fetch("https://fakestoreapi.com/products").then((res) =>
      res.json().then((data) => setElement(data))
    );
  }, []);
  return (
    <>
      <div className=" gap-3 md:gap-4 flex flex-col xl:gap-9">
        <div className="hidden sm:block md:w-[768px]">
          <Navbar />
        </div>
        <img className=" w-[320px] " src={sofaimg} alt="sofaimg" />
        <div className="p-[10px] flex flex-col gap-6">
          <div className="flex  flex-wrap gap-2 m-auto w-[1140px]">
            <div className=" gap-3  flex flex-col xl:gap-6">
              <div className="text-[28px]  xl:text-[40px] font-thin text-center">
                Jewellery
              </div>
              <div className="text-[14px] w-[300px]">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book
                </p>
              </div>
              <div className="flex gap-3 xl:gap-5 flex-wrap justify-center w-[300px]">
                {Element &&
                  Element.map((data) => {
                    if (data.category === "jewelery") {
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
          <div className="flex  flex-wrap gap-2 m-auto w-[1140px]">
            <div className="gap-3  flex flex-col xl:gap-6">
              <div className="text-[28px]  xl:text-[40px] font-thin text-center">
                Electronics
              </div>
              <div className="text-[14px] w-[300px]">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book
                </p>
              </div>
              <div className="w-[100%] flex flex-col gap-3">
                <div className=" w-[300px] xl:w-[40%]">
                  <img className="w-[95%]" src={features} alt="features" />
                </div>
                <div className="flex gap-3 xl:gap-5 flex-wrap justify-center w-[300px]">
                  {Element &&
                    Element.map((data) => {
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
          <div className="flex  flex-wrap gap-2 m-auto w-[1140px]">
            <div className="gap-3  flex flex-col xl:gap-6">
              <div className="text-[28px]  xl:text-[40px] font-thin text-center">
                Men's clothing
              </div>
              <div className="text-[14px] w-[300px]">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book
                </p>
              </div>
              <div className="flex gap-3 xl:gap-5 flex-wrap justify-center w-[300px]">
                {Element &&
                  Element.map((data) => {
                    if (data.category === "men's clothing") {
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
          <div className="flex  flex-wrap gap-2 m-auto w-[1140px]">
            <div className="gap-3  flex flex-col xl:gap-6">
              <div className="text-[28px]  xl:text-[40px] font-thin text-center">
                Women's clothing
              </div>
              <div className="text-[14px] w-[300px]">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book
                </p>
              </div>
              <div className="w-[100%] flex flex-col gap-3">
                <div className=" w-[300px] xl:w-[40%]">
                  <img className="w-[95%]" src={features} alt="features" />
                </div>
                <div className="flex gap-3 xl:gap-5 flex-wrap justify-center w-[300px]">
                  {Element &&
                    Element.map((data) => {
                      if (data.category === "women's clothing") {
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
        </div>
      </div>
    </>
  );
}
export default Home;

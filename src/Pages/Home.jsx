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
        <div className="hidden sm:block ">
          <Navbar />
        </div>
        <img className=" w-full " src={sofaimg} alt="sofaimg" />
        <div className="w-[100%] flex flex-col justify-center gap-6 pb-[20px]">
          <div className="w-[85%] flex flex-col self-center gap-[40px]">
            <div className="flex  flex-wrap gap-2 m-auto xl:w-[1140px] justify-center">
              <div className=" gap-3  flex flex-col xl:gap-6">
                <div className="text-[28px] md:text-[34px]  xl:text-[40px] font-thin text-center">
                  Jewellery
                </div>
                <div className="text-[14px] md:text-[16px] w-full">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book
                  </p>
                </div>
                <div className="flex gap-3 xl:gap-5 flex-wrap justify-center w-full">
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
            <div className="flex  flex-wrap gap-2 m-auto xl:w-[1140px]">
              <div className="gap-3  flex flex-col xl:gap-6">
                <div className="text-[28px] md:text-[34px] xl:text-[40px] font-thin text-center">
                  Electronics
                </div>
                <div className="text-[14px] w-full md:text-[16px]">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book
                  </p>
                </div>
                <div className="w-[100%] flex flex-col xl:flex-row xl:gap-5 gap-3">
                  <div className=" w-full xl:w-[40%]">
                    <img
                      className="w-full h-[100%]"
                      src={features}
                      alt="features"
                    />
                  </div>
                  <div className="flex gap-3 xl:gap-7 flex-wrap justify-center w-full xl:w-[60%]">
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
            <div className="flex  flex-wrap gap-2 m-auto xl:w-[1140px]">
              <div className="gap-3  flex flex-col xl:gap-6">
                <div className="text-[28px] md:text-[34px] xl:text-[40px] font-thin text-center">
                  Men's clothing
                </div>
                <div className="text-[14px] w-full md:text-[16px]">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book
                  </p>
                </div>
                <div className="flex gap-3 xl:gap-5 flex-wrap justify-center w-full">
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
            <div className="flex  flex-wrap gap-2 m-auto xl:w-[1140px]">
              <div className="gap-3  flex flex-col xl:gap-6">
                <div className="text-[28px] md:text-[34px] xl:text-[40px] font-thin text-center">
                  Women's clothing
                </div>
                <div className="text-[14px] w-full md:text-[16px]">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book
                  </p>
                </div>
                <div className="w-[100%] flex flex-col xl:flex-row xl:gap-5 gap-3">
                  <div className=" w-full xl:w-[40%]">
                    <img
                      className="w-full h-[100%]"
                      src={features}
                      alt="features"
                    />
                  </div>
                  <div className="flex gap-3 xl:gap-7 flex-wrap justify-center w-full xl:w-[60%]">
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
      </div>
    </>
  );
}
export default Home;

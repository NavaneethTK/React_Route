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
      <div className="flex flex-col gap-9">
        <Navbar />
        <img src={sofaimg} alt="sofaimg" />
        <div className="flex  flex-wrap gap-2 m-auto w-[1140px]">
          <div className="flex flex-col gap-6">
            <div className="text-[40px] font-thin">Jewellery</div>
            <div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book
              </p>
            </div>
            <div className="flex gap-5">
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
          <div className="flex flex-col gap-6">
            <div className="text-[40px] font-thin">Electronics</div>
            <div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book
              </p>
            </div>
            <div className="w-[100%] flex">
              <div className="w-[40%]">
                <img className="w-[95%]" src={features} alt="features" />
              </div>
              <div className="w-[55%] flex flex-wrap gap-3  items-center ">
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
          <div className="flex flex-col gap-6">
            <div className="text-[40px] font-thin">Men's clothing</div>
            <div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book
              </p>
            </div>
            <div className="flex gap-5">
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
          <div className="flex flex-col gap-6">
            <div className="text-[40px] font-thin">Women's clothing</div>
            <div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book
              </p>
            </div>
            <div className="w-[100%] flex">
              <div className="w-[40%]">
                <img className="w-[95%]" src={features} alt="features" />
              </div>
              <div className="w-[55%] flex flex-wrap gap-3  items-center ">
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
    </>
  );
}
export default Home;

"use client";

import React, { useState } from "react";

export default function Home() {
  // const imageUrlDesktop = "/image-web-3-desktop.jpg";
  // const imageUrlMobile = "/image-web-3-mobile.jpg";

  // const imageUrl = window.innerWidth > 1024 ? imageUrlDesktop : imageUrlMobile;

  const [buttonClick, setButtonClick] = useState(false);

  function handleClick() {
    setButtonClick(!buttonClick);
  }

  return (
    <main className=" lg:flex lg:justify-center lg:items-center box-border m-0">
      <div className=" md:max-w-[600px] lg:max-w-[80vw] lg:min-h-[90vh] lg:mt-[50px] w-[90vw] mx-auto my-[30px] max-w-[500px]">
        <header className=" lg:max-w-[1200px] lg:mt-2 lg:mb-[50px] lg:mx-auto relative mb-[30px]">
          <img src="/logo.svg" alt="Page logo" />
          <button
            onClick={handleClick}
            id="open-menu-btn"
            className=" md:hidden lg:hidden bg-transparent border-none hover:cursor-pointer absolute right-0 top-[13px]"
          >
            <img src="/icon-menu.svg" alt="Icon menu" />
          </button>
          {/* div below is a filter when nav is opened */}
          <div
            className={`${
              buttonClick ? "" : "hidden"
            } w-screen min-h-screen fixed z-[5] left-0 top-0 bg-slate-950 opacity-20 `}
          ></div>
          {/*   Nav below is hidden */}
          <nav
            className={`${
              buttonClick ? "" : "hidden"
            } md:inline-block md:absolute md:h-auto md:p-0 md:top-[13px] w-[70vw] max-w-[300px] h-screen fixed z-10 pt-[150px] pl-10 right-0 top-0 bg-white`}
          >
            <button
              onClick={handleClick}
              id="close-menu-btn"
              className="md:hidden bg-transparent border-none hover:cursor-pointer absolute right-5 top-5"
            >
              <img src="/icon-menu-close.svg" alt="Icon menu close" />
            </button>
            <ul className=" md:flex md:absolute md:gap-5 md:right-0 md:top-0 lg:gap-10">
              <li className="list-none mb-[25px] font-sans font-normal text-xl">
                <a
                  className="no-underline text-slate-500 hover:text-red-400"
                  href=""
                >
                  Home
                </a>
              </li>
              <li className="list-none mb-[25px] font-sans font-normal text-xl">
                <a
                  className="no-underline text-slate-500 hover:text-red-400"
                  href=""
                >
                  New
                </a>
              </li>
              <li className="list-none mb-[25px] font-sans font-normal text-xl">
                <a
                  className="no-underline text-slate-500 hover:text-red-400"
                  href=""
                >
                  Popular
                </a>
              </li>
              <li className="list-none mb-[25px] font-sans font-normal text-xl">
                <a
                  className="no-underline text-slate-500 hover:text-red-400"
                  href=""
                >
                  Trending
                </a>
              </li>
              <li className="list-none mb-[25px] font-sans font-normal text-xl">
                <a
                  className="no-underline text-slate-500 hover:text-red-400"
                  href=""
                >
                  Categories
                </a>
              </li>
            </ul>
          </nav>
        </header>

        <section className=" grid gap-[60px] lg:grid-cols-[repeat(3,1fr)] lg:grid-rows-[650px_1fr] lg:gap-[60px_20px] lg:max-w-[1200px] lg:max-h-[750px] lg:mx-auto lg:my-0">
          <div className=" lg:col-[span_2] lg:relative lg:grid lg:grid-cols-[1fr_1fr] lg:grid-rows-[60%_1fr] lg:gap-x-[30px] lg:items-center">
            <img
              src="/image-web-3-mobile.jpg"
              alt="Image web mobile"
              className="w-full lg:h-full lg:object-cover lg:object-top lg:col-[span_2]"
            />
            <h1 className="text-[42px] leading-none mx-0 my-5 pr-5 font-sans font-black lg:text-[55px] lg:row-[span_2] lg:m-0">
              The Bright Future of Web 3.0?
            </h1>
            <div className="">
              <p className="leading-relaxed font-sans font-normal text-xl text-slate-500">
                We drive into the next evolution of the web that claims to put
                the power of the platforms back into the hands of the people.
                But is it really fulfilling its promise?
              </p>
              <button className="mt-5 w-[200px] h-[50px] text-white border-none bg-red-400 text-sm font-sans font-extrabold tracking-[5px] hover:cursor-pointer hover:bg-slate-950">
                READ MORE
              </button>
            </div>
          </div>

          <div className=" px-5 py-[25px] bg-slate-950 lg:overflow-y-scroll">
            <h2 className="font-sans font-extrabold text-3xl text-amber-300 lg:text-[45px] lg:pb-3">
              New
            </h2>
            <div className=" px-0 py-[30px]">
              <h3 className="font-sans font-extrabold text-xl text-white mb-2.5 hover:text-amber-300 hover:cursor-pointer">
                Hydrogen VS Electric Cars
              </h3>
              <p className="font-sans font-normal text-xl text-slate-300 leading-relaxed">
                Will hydrogen-fueled cars ever catch up to EVs?
              </p>
            </div>
            <div className=" px-0 py-[30px] border-t-slate-500 border-b-slate-500 border-t-2 border-solid border-b">
              <h3 className="font-sans font-extrabold text-xl text-white mb-2.5 hover:text-amber-300 hover:cursor-pointer">
                The Downsides of AI Artistry
              </h3>
              <p className="font-sans font-normal text-xl text-slate-300 leading-relaxed">
                What are the possible adverse effects of on-demand AI image
                generation?
              </p>
            </div>
            <div className=" px-0 py-[30px] ">
              <h3 className="font-sans font-extrabold text-xl text-white mb-2.5 hover:text-amber-300 hover:cursor-pointer">
                Is VC Funding Drying Up?
              </h3>
              <p className="font-sans font-normal text-xl text-slate-300 leading-relaxed">
                Private funding by VC firms is down 50% YOY. We take a look at
                what that means.
              </p>
            </div>
          </div>

          <div className=" flex flex-col gap-10 lg:grid lg:grid-cols-[1fr_1fr_1fr] lg:col-span-full lg:gap-x-[30px]">
            <div className=" grid grid-cols-[1fr_2fr] grid-rows-[1fr_1fr_2fr] gap-x-5 items-center">
              <img
                src="/image-retro-pcs.jpg"
                alt="Image retro pcs"
                className="w-full h-full object-cover row-[span_3]"
              />
              <h3 className="font-sans font-extrabold text-[32px] text-slate-300">
                01
              </h3>
              <h4 className="text-slate-950 font-sans font-extrabold text-[16px] hover:text-red-400 hover:cursor-pointer">
                Reviving Retro PCs
              </h4>
              <p className="font-sans font-normal text-xl text-slate-500 leading-relaxed">
                What happens when old PCs are given modern upgrades?
              </p>
            </div>

            <div className=" grid grid-cols-[1fr_2fr] grid-rows-[1fr_1fr_2fr] gap-x-5 items-center">
              <img
                src="/image-top-laptops.jpg"
                alt="Image top laptops"
                className="w-full h-full object-cover row-[span_3]"
              />
              <h3 className="font-sans font-extrabold text-[32px] text-slate-300">
                02
              </h3>
              <h4 className="text-slate-950 font-sans font-extrabold text-[16px] hover:text-red-400 hover:cursor-pointer">
                Top 10 Laptops of 2022
              </h4>
              <p className="font-sans font-normal text-xl text-slate-500 leading-relaxed">
                Our best picks for various needs and budgets.
              </p>
            </div>

            <div className=" grid grid-cols-[1fr_2fr] grid-rows-[1fr_1fr_2fr] gap-x-5 items-center">
              <img
                src="/image-gaming-growth.jpg"
                alt="Image gaming growth"
                className="w-full h-full object-cover row-[span_3]"
              />
              <h3 className="font-sans font-extrabold text-[32px] text-slate-300">
                03
              </h3>
              <h4 className="text-slate-950 font-sans font-extrabold text-[16px] hover:text-red-400 hover:cursor-pointer">
                The Growth of Gaming
              </h4>
              <p className="font-sans font-normal text-xl text-slate-500 leading-relaxed">
                How the pandemic has sparked fresh opportunities.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

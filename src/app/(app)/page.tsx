"use client";

import React, { useState } from "react";
import News from "./_components/news";
import ImageCard from "./_components/imagecard";
import axios from "axios";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_BACKEND_URL;
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.patch["Content-Type"] = "application/json";
axios.defaults.withCredentials = true;

export default function Home() {
  return (
    <main className=" lg:flex lg:justify-center lg:items-center">
      <div className=" md:max-w-[600px] lg:max-w-full lg:min-h-[90vh] w-[90vw] mx-auto my-[30px] max-w-[500px]">
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

          <News
            header="New"
            news={[
              {
                newsHeadLine: "Hydrogen VS Electric Cars",
                newsBody: "Will hydrogen-fueled cars ever catch up to EVs?",
              },
              {
                newsHeadLine: "The Downsides of AI Artistry",
                newsBody:
                  "What are the possible adverse effects of on-demand AI image generation?",
              },
              {
                newsHeadLine: "Is VC Funding Drying Up?",
                newsBody:
                  "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
              },
            ]}
          />

          <div className=" flex flex-col gap-10 lg:grid lg:grid-cols-[1fr_1fr_1fr] lg:col-span-full lg:gap-x-[30px]">
            <ImageCard
              imageUrl="/image-retro-pcs.jpg"
              imageAlt="image-retro-pcs"
              heading="01"
              subheading="Reviving Retro PCs"
              paragraph="What happens when old PCs are given modern upgrades?"
            />
            <ImageCard
              imageUrl="/image-top-laptops.jpg"
              imageAlt="Image top laptops"
              heading="02"
              subheading="Top 10 Laptops of 2022"
              paragraph="Our best picks for various needs and budgets."
            />
            <ImageCard
              imageUrl="/image-gaming-growth.jpg"
              imageAlt="Image gaming growth"
              heading="03"
              subheading="The Growth of Gaming"
              paragraph="How the pandemic has sparked fresh opportunities."
            />
          </div>
        </section>
      </div>
    </main>
  );
}

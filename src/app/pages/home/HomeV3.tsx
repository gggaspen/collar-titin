"use client";

import Iframe from "@/app/components/iframe/Iframe";
import MainData from "@/app/interfaces/main-data.interface";
import React, { useEffect, useState } from "react";
import "./HomeV3.css";

const HomeV3 = () => {
  const data: MainData = {
    title: "GGGASPEN",
    subtitle: "FEEL THE HARD",
    mainIframeConfig: {
      width: "100%",
      height: "20",
      base: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks",
      id: "2005593747",
      color: "ff0000",
      auto_play: false,
      inverse: true,
    },
    tracks: [
      {
        id: "2005593747",
        title: "GGGASPEN",
        iframeConfig: {
          width: "100%",
          height: "20",
          base: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks",
          id: "2005593747",
          color: "ff0000",
          auto_play: false,
          inverse: true,
        },
      },
      // {
      //   id: "1265384740",
      //   title: "GGGASPEN",
      //   iframeConfig: {
      //     width: "100%",
      //     height: "20",
      //     base: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks",
      //     id: "1265384740",
      //     color: "1c0048",
      //     auto_play: false,
      //     inverse: true,
      //   },
      // },
      // {
      //   id: "1124831770",
      //   title: "GGGASPEN",
      //   iframeConfig: {
      //     width: "100%",
      //     height: "20",
      //     base: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks",
      //     id: "1124831770",
      //     color: "1c0048",
      //     auto_play: false,
      //     inverse: true,
      //   },
      // },
    ],
  };

  const { mainIframeConfig, tracks } = data;

  return (
    <div className="h-screen w-screen relative overflow-hidden flex justify-center items-start">
      {/* <!-- Blood drips background --> */}
      <div className="blood-drip"></div>
      <div className="gore-splatter"></div>

      {/* <!-- Main altar container --> */}
      <div className="absolute transform w-11/12 max-w-2xl h-full altarp-8 altar">
        {/* <!-- Bone decorations --> */}
        {/* <div className="bone-decoration"></div> */}

        {/* <!-- Floating pentagram --> */}
        {/* <div className="pentagram"></div> */}

        {/* <!-- Title --> */}
        <div className="absolute left-0 right-0 text-center">
          <h1 className="text-4xl md:text-5xl title mt-40">666V$ꟼ3И</h1>
          {/* <p className="text-sm text-gray-300 subtitle">SOUNDS OF THE DAMNED</p> */}
        </div>

        {/* <!-- SoundCloud player container --> */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full px-8 soundcloud-container">
          <div className="rust-border">
            <Iframe {...mainIframeConfig} color="a0f" />
          </div>
        </div>

        {/* <!-- Bottom spikes --> */}
        <div className="absolute -bottom-8 left-0 right-0 h-8 flex justify-center">
          <div
            className={
              'w-full max-w-md h-full bg-[url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="30" viewBox="0 0 400 30"><polygon points="0,30 10,0 20,30 30,0 40,30 50,0 60,30 70,0 80,30 90,0 100,30 110,0 120,30 130,0 140,30 150,0 160,30 170,0 180,30 190,0 200,30 210,0 220,30 230,0 240,30 250,0 260,30 270,0 280,30 290,0 300,30 310,0 320,30 330,0 340,30 350,0 360,30 370,0 380,30 390,0 400,30" fill="%23330000"/></svg>\')]'
            }
          ></div>
        </div>
      </div>

      {/* <!-- Floating runes --> */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-10 left-10 text-2xl text-purple-900 opacity-50">
          ᛟ
        </div>
        <div className="absolute top-20 right-20 text-3xl text-purple-900 opacity-50">
          ᚺ
        </div>
        <div className="absolute bottom-20 left-20 text-4xl text-purple-900 opacity-50">
          ᛏ
        </div>
        <div className="absolute bottom-10 right-10 text-2xl text-purple-900 opacity-50">
          ᛞ
        </div>
      </div>

      {/* <!-- Smoke effect --> */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-purple-900 rounded-full filter blur-3xl opacity-10 animate-pulse"></div>
        <div
          className="absolute top-1/3 right-1/4 w-40 h-40 bg-purple-900 rounded-full filter blur-3xl opacity-10 animate-pulse"
          style={{ animationDelay: "15s" }}
        ></div>
        <div
          className="absolute bottom-0 left-1/2 w-48 h-48 bg-purple-900 rounded-full filter blur-3xl opacity-10 animate-pulse"
          style={{ animationDelay: "8s" }}
        ></div>
      </div>
    </div>
  );
};

export default HomeV3;

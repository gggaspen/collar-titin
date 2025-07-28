"use client";

import Iframe from "@/app/components/iframe/Iframe";
import MainData from "@/app/interfaces/main-data.interface";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Glitch from "@/app/components/glitch/Glitch";
import Link from "next/link";
import Cover from "@/app/components/cover/cover.component";
import { russo } from "@/app/ui/fonts";
import Background from "@/app/components/background/Background";

const HomeV2 = () => {
  const data: MainData = {
    title: "GGGASPEN",
    subtitle: "FEEL THE HARD",
    mainIframeConfig: {
      width: "100%",
      height: "20",
      base: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks",
      id: "2005593747",
      color: "333333",
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
          color: "1c0048",
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
    <div className="py-60 px-2 relative z-10 flex w-full cursor-pointer items-center overflow-hidden p-[1.5px]">
      <div className="animate-rotate absolute inset-0 h-full w-full bg-[conic-gradient(#ff0000_20deg,transparent_120deg)]"></div>
      <div className="relative z-20 flex w-full bg-black p-4">
        <Iframe {...mainIframeConfig} />
      </div>
    </div>
  );
};

export default HomeV2;

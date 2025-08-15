"use client";

import Iframe from "@/app/components/iframe/Iframe";
import MainData from "@/app/interfaces/main-data.interface";
import Image from "next/image";

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
    <div>
      <video
        src="/video/glitch.mp4"
        autoPlay
        loop
        muted
        className="h-full absolute w-full object-cover z-0"
      ></video>
      <div className="absolute flex justify-center items-center w-full h-full">
        <div className="flex flex-col items-center gap-4 z-10">
          <h1
            style={{
              fontFamily: "'Press Start 2P', cursive",
              fontSize: "2rem",
              transform: "skewX(0deg) skewY(330deg)",
              rotate: "30deg",
            }}
          >
            GGGASPEN
          </h1>
          <Image
            src="/img/cover/vol-1.png"
            alt="GGGASPEN"
            width={1280}
            height={0}
            className="mx-auto mb-4"
          />
          <div className="bg-red-500 bg-opacity-30 p-3 rounded-lg shadow-lg">
            <Iframe {...mainIframeConfig} color="f00" height="20" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeV3;

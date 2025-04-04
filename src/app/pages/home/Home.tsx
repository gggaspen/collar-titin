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

const Home = () => {
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

  const [windowHeight, setWindowHeight] = useState("0");
  const [windowWidth, setWindowWidth] = useState("0");

  useEffect(() => {
    setWindowHeight(window.innerHeight + "px");
    setWindowWidth(window.innerWidth + "px");
  }, []);

  return (
    <>
      {/* HEADER */}

      <header className="w-full py-4 md:px-40 px-4 bg-black flex items-center z-30 fixed top-0">
        <Iframe {...mainIframeConfig} />
      </header>

      {/* BACKGROUND */}

      {Number(windowWidth.replace("px", "")) < 850 ? <Background /> : null}

      {/* MAIN */}

      <main className="bg-black h-screen w-screen md:pt-10 pt-4">
        {/* HEADER IFRAME */}

        <div
          className="flex items-center flex-col justify-center justify-between"
          style={{
            height: `${window.innerHeight / 1.5}px`,
            width: windowWidth,
          }}
        >
          {/* COVER IMG */}

          <section className="">
            <div className="relative overflow-hidden flex mt-20">
              <Cover
                src="/img/cover/vol-1.png"
                size="md"
                shape="round-square"
                classList={[""]}
              />
            </div>
            {/* <span
              className={`${russo.className} bg-black w-fit text-center z-10 mt-40 relative`}
            >
              FEEL THE HARD
            </span> */}
          </section>

          {/* LINKS */}

          <section className="">
            <Link
              className="z-20"
              // className="p-2 rounded-full h-10 w-10 flex items-center justify-center border border-gray-500"
              href={"https://soundcloud.com/gggaspen"}
            >
              <Image
                src="https://i.postimg.cc/SQrpTQwq/soundcloud.png"
                alt="instagram"
                width="40"
                height="20"
              />
            </Link>
          </section>

          {/* MAIN TITLE */}

          <section className="">
            <Glitch text="GGGASPEN" />
          </section>
        </div>

        {/* IFRAME LIST */}

        <div className="md:px-40 px-4 py-4 relative bg-black z-0">
          <hr className="bg-white my-2 opacity-30" />
          {tracks.map((track) => (
            <div className="py-4" key={track.id}>
              <Iframe {...track.iframeConfig} />
            </div>
          ))}
          <hr className="bg-white my-4 opacity-30" />
        </div>

        {/* SPORTIFY PLAYLIST */}

        {/* <section className="md:px-40 px-4 relative flex items-center justify-center py-4 bg-black">
          <iframe
            style={{ borderRadius: "12px" }}
            src="https://open.spotify.com/embed/playlist/4kBcZPSgXcAmO9O4ZKorMt?utm_source=generator&theme=0"
            width="100%"
            height="352"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </section> */}

        {/* SOCIAL */}

        <section className="md:px-40 px-4 py-40 relative flex items-center justify-center bg-black flex-col">
          <Link href={"https://instagram.com/gggaspen"} className="gap-2">
            <Image
              src="https://i.postimg.cc/0NM8hg7n/ig.png"
              alt="instagram"
              width="20"
              height="0"
            />
          </Link>

          <p className="mt-20 font-serif">G • G • G</p>
        </section>

        {/* <div
          style={{
            width: "100%",
            height: "auto",
            paddingBottom: "100%",
            position: "relative",
            background: "black",
          }}
          className="md:px-90 flex justify-center"
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              zIndex: 1,
              boxShadow: "inset 0px 0px 50px 20px #000000",
            }}
          ></div>
          <iframe
            src="https://giphy.com/embed/26ueZdaY7ylDHIkgw"
            width="100%"
            height="100%"
            style={{
              opacity: 0.3,
              position: "absolute",
            }}
            frameBorder="0"
            className="giphy-embed"
            allowFullScreen
          ></iframe>
        </div> */}
      </main>
    </>
  );
};

export default Home;

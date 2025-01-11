"use client";

import Iframe from "@/app/components/iframe/Iframe";
import MainData from "@/app/interfaces/main-data.interface";
import React, { useEffect, useState } from "react";
import Image from "next/image";
// import CharGrid from "@/app/components/char-grid/CharGrid";
import Glitch from "@/app/components/glitch/Glitch";
import Link from "next/link";
import Cover from "@/app/components/cover/cover.component";
import { russo } from "@/app/ui/fonts";

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
      {
        id: "1265384740",
        title: "GGGASPEN",
        iframeConfig: {
          width: "100%",
          height: "20",
          base: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks",
          id: "1265384740",
          color: "1c0048",
          auto_play: false,
          inverse: true,
        },
      },
      {
        id: "1124831770",
        title: "GGGASPEN",
        iframeConfig: {
          width: "100%",
          height: "20",
          base: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks",
          id: "1124831770",
          color: "1c0048",
          auto_play: false,
          inverse: true,
        },
      },
    ],
  };

  const { mainIframeConfig, title, subtitle, tracks } = data;

  const [windowHeight, setWindowHeight] = useState("0");
  const [windowWidth, setWindowWidth] = useState("0");

  useEffect(() => {
    setWindowHeight(window.innerHeight + "px");
    setWindowWidth(window.innerWidth + "px");
  }, []);

  return (
    <>
      <main className="bg-black h-screen w-screen md:pt-10 pt-4">
        {/* BACKGROUND */}

        <Image
          src="/img/background/diamons-1.png"
          alt="instagram"
          width="800"
          height="0"
          className="absolute"
          style={{
            top: 0,
            left: 0,
            width: "100%",
            height: windowHeight,
            objectFit: "cover",
            position: "fixed",
            // opacity: 0.3,
            transform: `rotate(${
              +windowWidth.slice(2) < 800 ? "45deg" : "180deg"
            })`,
            // filter: "blur(6px)",
          }}
        />

        {/* HEADER IFRAME */}

        <header className="w-full h-14 md:px-40 px-4 bg-black flex items-center z-20 fixed top-0">
          <Iframe {...mainIframeConfig} />
        </header>

        {/* COVER IMG */}

        <section className="mt-16 md:mt-14 md:px-40 px-4 flex flex-col justify-center items-center text-center relative">
          <div className="relative overflow-hidden flex justify-center">
            <Cover
              src="/img/cover/vol-1.png"
              size="md"
              shape="square"
              classList={[""]}
            />
          </div>
          <span
            className={`${russo.className} mt-4 z-10 bg-black w-fit text-center px-2`}
          >
            FEEL THE HARD
          </span>
        </section>

        {/* LINKS */}

        <section className="md:px-40 px-4 relative flex items-center justify-center my-4 mb-10 z-10">
          <Link href={"https://soundcloud.com/gggaspen"}>
            <Image
              src="https://i.postimg.cc/SQrpTQwq/soundcloud.png"
              alt="instagram"
              width="40"
              height="20"
            />
          </Link>
        </section>

        {/* MAIN TITLE */}

        <Glitch text="GGGASPEN" />

        {/* IFRAME LIST */}

        <div className="md:px-40 px-4 py-4 relative bg-black mt-20 z-0">
          <hr className="bg-white my-2 opacity-30" />
          {tracks.map((track) => (
            <div className="py-4" key={track.id}>
              <Iframe {...track.iframeConfig} />
            </div>
          ))}
          <hr className="bg-white my-4 opacity-30" />
        </div>

        {/* SPORTIFY PLAYLIST */}

        <section className="md:px-40 px-4 relative flex items-center justify-center py-4">
          <iframe
            style={{ borderRadius: "12px" }}
            src="https://open.spotify.com/embed/playlist/4kBcZPSgXcAmO9O4ZKorMt?utm_source=generator&theme=0"
            width="100%"
            height="352"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </section>

        {/* SOCIAL */}

        <section className="md:px-40 px-4 py-40 relative flex items-center justify-center bg-black">
          <Link href={"https://instagram.com/gggaspen"} className="gap-2">
            <Image
              src="https://i.postimg.cc/0NM8hg7n/ig.png"
              alt="instagram"
              width="20"
              height="0"
            />
          </Link>
        </section>
      </main>
    </>
  );
};

export default Home;

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
    title: "gggaspen",
    subtitle: "-",
    iframeConfig: {
      width: "100%",
      height: "20",
      base: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks",
      id: "2005593747",
      color: "333333",
      auto_play: false,
      hide_related: false,
      show_comments: false,
      show_user: false,
      show_reposts: false,
      show_teaser: false,
      visual: false,
      inverse: true,
    },
  };

  const { iframeConfig } = data;

  const [windowHeight, setWindowHeight] = useState("0");

  useEffect(() => {
    setWindowHeight(window.innerHeight + "px");
  }, []);

  return (
    <>
      <main
        className="bg-black h-screen w-screen md:pt-10 pt-4"
        style={{
          backgroundImage: `url("/img/nft (4).jpg")`,
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          height: windowHeight,
        }}
      >
        <header className="h-10 md:px-40 px-4 relative bg-black flex items-center">
          <Iframe {...iframeConfig} />
        </header>

        <section className="h-1/2 md:h-1/2 md:px-40 px-4 flex flex-col justify-center align-center text-center">
          <div className="relative overflow-hidden flex justify-center">
            <Cover
              src="/img/vol-1.png"
              size="md"
              shape="circle"
              classList={["mt-4"]}
            />
          </div>
          <span className={`${russo.className} mt-4`}>FEEL THE HARD</span>
        </section>

        {/* <CharGrid /> */}
        <Glitch />

        <section className="md:px-40 px-4 relative flex items-center justify-center py-4 pb-8">
          <Link href={"https://soundcloud.com/gggaspen"}>
            <Image
              src="https://i.postimg.cc/SQrpTQwq/soundcloud.png"
              alt="instagram"
              width="40"
              height="20"
            />
          </Link>
        </section>

        <header className="h-14 md:px-40 px-4 relative bg-red-900 flex items-center">
          <Iframe {...iframeConfig} />
        </header>

        <section className="md:px-40 px-4 relative flex items-center my-4 justify-center py-4">
          <Link href={"https://instagram.com/gggaspen"} className="gap-2">
            <Image
              src="https://i.postimg.cc/0NM8hg7n/ig.png"
              alt="instagram"
              width="20"
              height="0"
            />
          </Link>
          {/* <Link href={"https://instagram.com/gggaspen"}>
            <Image
              src="https://i.postimg.cc/fLQhFVzW/spotify.png"
              alt="instagram"
              width="20"
              height="20"
            />
          </Link> */}
        </section>
      </main>
    </>
  );
};

export default Home;

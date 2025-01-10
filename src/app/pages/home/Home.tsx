import Iframe from "@/app/components/iframe/Iframe";
import MainData from "@/app/interfaces/main-data.interface";
import React from "react";
import Image from "next/image";
import CharGrid from "@/app/components/char-grid/CharGrid";

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

  return (
    <>
      <main className="bg-black h-screen w-screen md:pt-10 pt-4">
        <header className="h-10 md:px-40 px-4 relative">
          <Iframe {...iframeConfig} />
        </header>

        <section className="h-1/2 md:h-5/6 md:px-40 px-4 flex justify-center align-center">
          <div className="relative overflow-hidden flex">
            <Image
              width="500"
              height="100"
              src="/img/hard-groove-vol1.jpeg"
              alt="cover"
              style={{ width: "100%" }}
              objectFit="cover"
              objectPosition="center"
            />
          </div>
        </section>

        <CharGrid />
      </main>
    </>
  );
};

export default Home;

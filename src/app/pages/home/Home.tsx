import Iframe from "@/app/components/iframe/Iframe";
import MainData from "@/app/interfaces/main-data.interface";
import React from "react";

const Home = () => {
  const data: MainData = {
    title: "gggaspen",
    subtitle: "-",
    iframeConfig: {
      width: "100%",
      height: "20",
      base: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks",
      id: "2005593747",
      color: "0000ff",
      auto_play: true,
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
        <header className="h-60 md:px-40 px-4 relative">
          <Iframe {...iframeConfig} />
        </header>
      </main>
    </>
  );
};

export default Home;

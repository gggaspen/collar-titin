"use client";

import Image from "next/image";
import React, { CSSProperties, useEffect, useState } from "react";
import "./Background.css";

const Background = () => {
  const [windowHeight, setWindowHeight] = useState("0");
  const [windowWidth, setWindowWidth] = useState("0");
  const src = "/img/background/DSC_0039.png";

  useEffect(() => {
    setWindowHeight(window.innerHeight + "px");
    setWindowWidth(window.innerWidth + "px");
  }, []);

  const imgList = [{ src }, { src }, { src }];
  const style: CSSProperties = {
    width: "100%",
    height: windowHeight,
    objectFit: "cover",
  };

  return (
    <>
      <div className="absolute">
        <div className="fixed">
          <div className="glitch">
            <Image
              src="/img/background/DSC_0039.png"
              alt=""
              width={"1000"}
              height={"0"}
              style={{
                // filter: `blur(20px)`,
                ...style,
              }}
            />
            <div className="glitch__layers">
              {imgList.map((img, index) => (
                <Image
                  key={index}
                  src={img.src}
                  alt={"Glitched background"}
                  className="glitch__layer"
                  width={"1000"}
                  height={"0"}
                  style={style}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Background;

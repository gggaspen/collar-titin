"use client";

import Image from "next/image";
import React, { CSSProperties, useEffect, useState } from "react";
import "./Background.css";

const Background = () => {
  const [windowHeight, setWindowHeight] = useState("0");
  const [windowWidth, setWindowWidth] = useState("0");
  // const src = "/img/background/DSC_0039.png";
  const src =
    "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ2w5NnZubjA1MDZ1emcydWVld25qZXAxcDhsc3BqanFscW1kbnhzNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7bu1gpwdD8X987qE/giphy.gif";

  useEffect(() => {
    setWindowHeight(window.innerHeight + "px");
    setWindowWidth(window.innerWidth + "px");
  }, []);

  const imgList = [{ src }, { src }, { src }];
  const styles: CSSProperties = {
    width: "100%",
    height: windowHeight,
    objectFit: "cover",
  };
  const gradient: CSSProperties = {
    position: "absolute",
    width: "100%",
    height: windowHeight,
    background: "rgba(0, 0, 0, .5)",
  };

  const gradient2: CSSProperties = {
    position: "absolute",
    width: "100%",
    height: windowHeight,
    background: "rgba(0, 20, 50, .5)",
    zIndex: 2,
  };

  return (
    <div>
      <div className="absolute">
        <div className="fixed">
          <div className="glitch">
            <div style={gradient2}></div>
            <div style={gradient}></div>
            <Image
              src={imgList[0].src}
              alt={"Background"}
              width={600}
              height={"0"}
              style={{
                ...styles,
              }}
            />
            <div className="glitch__layers">
              {imgList.map((img, index) => (
                <Image
                  key={index}
                  src={img.src}
                  alt={"Glitched background"}
                  className="glitch__layer"
                  width={600}
                  height={"0"}
                  style={styles}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Background;

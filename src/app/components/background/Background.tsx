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
  const styles: CSSProperties = {
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
              src={imgList[0].src}
              alt={"Background"}
              width={600}
              height={"0"}
              style={{
                // filter: `blur(20px)`,
                // opacity: 0.8,
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
    </>
  );
};

export default Background;

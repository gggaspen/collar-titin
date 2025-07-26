import CoverConfig from "@/app/interfaces/cover-config.interface";
import "./cover.css";
import Image from "next/image";
import { useEffect, useState } from "react";

const Cover = ({ src, size, shape, classList }: CoverConfig) => {
  const [windowHeight, setWindowHeight] = useState<number>(0);
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    setWindowHeight(window.innerHeight);
    setWindowWidth(window.innerWidth);
  }, []);

  return (
    <div
      className={`${classList.join(" ")}`}
      style={{ width: windowWidth / 1.5 }}
    >
      <Image
        className={`image ${shape}`}
        src={src}
        alt="cover"
        width={+windowWidth}
        height={+windowWidth}
      />
    </div>
  );
};

export default Cover;

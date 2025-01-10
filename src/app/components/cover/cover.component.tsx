import CoverConfig from "@/app/interfaces/cover-config.interface";
import "./cover.css";
import Image from "next/image";

const Cover = ({ src, size, shape, classList }: CoverConfig) => {
  return (
    <>
      <div
        className={`${size} ${classList.join(" ")}`}
        style={{ width: "300px", height: "300px" }}
      >
        <Image
          className={`image ${shape}`}
          src={src}
          alt="cover"
          width={"800"}
          height={"800"}
        />
      </div>
    </>
  );
};

export default Cover;

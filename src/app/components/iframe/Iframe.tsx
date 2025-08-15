import React from "react";
import IframeConfig from "./_def";

const Iframe = ({
  width,
  height,
  base,
  id,
  color,
  auto_play,
  show_user,
  inverse,
  title,
}: IframeConfig) => {
  const src = `${base}/${id}&color=%23${color}&inverse=${inverse}&auto_play=${auto_play}&show_user=${show_user}`;

  return (
    <iframe
      width={width ?? "100%"}
      height={height ?? "100%"}
      allow="autoplay"
      src={src}
      title={title}
    ></iframe>
  );
};

export default Iframe;

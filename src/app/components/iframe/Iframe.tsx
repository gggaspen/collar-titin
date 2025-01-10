import React from "react";
import IframeConfig from "./_def";

const Home = ({
  width,
  height,
  base,
  id,
  color,
  auto_play,
  hide_related,
  show_comments,
  show_user,
  show_reposts,
  show_teaser,
  visual,
  inverse,
}: IframeConfig) => {
  const src = `${base}/${id}&color=%23${color}&inverse=${inverse}&auto_play=${auto_play}&show_user=${show_user}`;

  return (
    <>
      <iframe
        width={width ? width : "100%"}
        height={height ? height : "100%"}
        allow="autoplay"
        src={src}
      ></iframe>
    </>
  );
};

export default Home;

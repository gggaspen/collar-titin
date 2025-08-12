"use client";

import Home from "./pages/home/Home";
import React, { useEffect } from "react";
import { postCounter } from "./services/counter.service";
import HomeV2 from "./pages/home/HomeV2";
import HomeV3 from "./pages/home/HomeV3";

function Page() {
  useEffect(() => {
    // postCounter();
  }, []);

  // return <Home />;
  // return <HomeV2 />;
  return <HomeV3 />;
}

export default Page;

"use client";

import Home from "./pages/home/Home";
import React, { useEffect } from "react";
import { postCounter } from "./services/counter.service";

function Page() {
  useEffect(() => {
    // postCounter();
  }, []);

  return (
    <>
      <Home />
    </>
  );
}

export default Page;

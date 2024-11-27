"use client";

import { useEffect, useState } from "react";

const GetIpComponent = () => {
  const [ip, setIp] = useState<string | null>(null);

  useEffect(() => {
    const fetchIp = async () => {
      const response = await fetch("http://ip-api.com/json/");
      const data = await response.json();
      console.log(data);
    };

    fetchIp();
  }, []);

  return <>{/* <div>Tu IP es: {ip}</div> */}</>;
};

export default GetIpComponent;

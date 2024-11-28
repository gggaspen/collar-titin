"use client";

import { useEffect } from "react";

const GetIpComponent = () => {
  useEffect(() => {
    const fetchAndSaveIp = async () => {
      try {
        const response = await fetch("http://localhost:8080/save-friend", {
          method: "POST",
        });
        console.log(response);
        if (!response.ok) {
          console.error("Error en la solicitud", response.status);
        }
      } catch (error) {
        console.error("Error en la solicitud", error);
      }
    };

    fetchAndSaveIp();
  }, []);

  return <>{/* <div>Tu IP es: {ip}</div> */}</>;
};

export default GetIpComponent;

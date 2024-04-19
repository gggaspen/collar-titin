import type { MetaFunction } from "@remix-run/node";
import Home from "~/views/Home";

export const meta: MetaFunction = () => {
  return [
    { title: "Neo Catriel Lara" },
    {
      name: "El collar de Titín",
      content: "El collar de Titín"
    },
  ];
};

export default function Index() {
  return <Home/ >;
}

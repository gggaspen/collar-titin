import {
  Acme,
  Roboto,
  Poppins,
  Russo_One,
  Kanit,
  Lexend_Deca,
  Press_Start_2P,
} from "next/font/google";

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

export const acme = Acme({
  subsets: ["latin"],
  weight: "400",
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const russo = Russo_One({
  subsets: ["latin"],
  weight: "400",
});

export const kanit = Kanit({
  subsets: ["latin"],
  weight: "600",
});

export const lexendDeca = Lexend_Deca({
  subsets: ["latin"],
  weight: "500",
});

export const press_Start_2P = Press_Start_2P({
  subsets: ["latin"],
  weight: "400",
});

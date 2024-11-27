import Link from "next/link";
import WhatsAppBtn from "./components/WhatsAppBtn";
import GeoLocation from "./components/GeoLocation";
import Image from "next/image";
import GetIpComponent from "./components/GetIPAdress";

export default function Home() {
  return (
    <>
      <GetIpComponent />
      <main className="flex min-h-screen flex-col items-center overflow-y-hidden">
        <div className="flex min-h-screen flex-col items-center justify-between py-24">
          <section className="title text-center bg-black p-1">
            <h1 className="text-4xl color-primary ">Titín</h1>
            <h2 className="">Neo Catriel aka. Titín</h2>
          </section>

          <div className="">
            <section className="flex items-center">
              <label className="bg-black p-3" htmlFor="WhatsAppBtn">
                Contactalo a mi humano acá:
              </label>
              <WhatsAppBtn></WhatsAppBtn>
            </section>

            <section className="flex items-center">
              <label className="bg-black p-3" htmlFor="GeoLocation">
                Mi casa:
              </label>
              <GeoLocation></GeoLocation>
            </section>
          </div>
        </div>
        <div
          style={{
            width: "100dvw",
            height: "100dvh",
            position: "absolute",
            zIndex: -1,
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              backgroundImage:
                "linear-gradient(to top, #000, transparent, transparent)",
            }}
          ></div>
          <Image
            src="/20230112_181757.jpg"
            alt="Titín"
            width={4000}
            height={300}
            priority
            style={{
              objectFit: "cover",
            }}
          />
        </div>
      </main>
    </>
  );
}

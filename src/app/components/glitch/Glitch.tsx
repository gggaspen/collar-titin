import { press_Start_2P } from "@/app/ui/fonts";
import "./Glitch.css";

const Glitch = ({ text }: Readonly<{ text: string }>) => {
  return (
    <>
      <div className="md:px-40 px-4 flex justify-center align-center">
        <div
          className={`glitch ${press_Start_2P.className} text-2xl md:text-4xl px-2 bg-black`}
          data-text={text}
        >
          {text}
        </div>
      </div>
    </>
  );
};

export default Glitch;

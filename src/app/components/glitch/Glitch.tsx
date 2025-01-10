import { press_Start_2P } from "@/app/ui/fonts";
import "./Glitch.css";

const Glitch = () => {
  return (
    <>
      <div className="md:px-40 px-4 flex justify-center align-center my-20">
        <div
          className={`glitch ${press_Start_2P.className} text-2xl md:text-4xl`}
          data-text="GGGASPEN"
        >
          GGGASPEN
        </div>
      </div>
    </>
  );
};

export default Glitch;

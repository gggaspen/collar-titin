import { press_Start_2P } from "@/app/ui/fonts";
import "./Glitch.css";

const Glitch = () => {
  return (
    <>
      <div className="h-1/2 md:h-5/6 md:px-40 px-4 flex justify-center align-center">
        <div
          //   className="glitch"
          className={`glitch ${press_Start_2P.className}`}
          data-text="GGGASPEN"
        >
          GGGASPEN
        </div>
        <div className="glow">GGGASPEN</div>
      </div>
    </>
  );
};

export default Glitch;

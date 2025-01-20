import { press_Start_2P } from "@/app/ui/fonts";
// import "./Glitch.css";
import "./Glitch.scss";
import styles from "./glitch-effect.module.scss";

const stacks = 3;

const Glitch = ({ text }: Readonly<{ text: string }>) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.stack} style={{ ["--stacks"]: stacks } as any}>
          {Array.from({ length: stacks }).map((_, index) => (
            <span
              className={`${press_Start_2P.className}`}
              key={index}
              style={
                {
                  ["--index"]: index,
                  fontStyle: "italic",
                } as any
              }
            >
              {text}
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default Glitch;

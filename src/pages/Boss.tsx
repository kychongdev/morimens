import { Image } from "@mantine/core";
import boss1 from "../assets/1.png";
import { BossButton } from "@/components/BossButton";
import { useState } from "react";
import { BossInfo } from "./BossInfo";

export const Boss = () => {
  const [boss, setBoss] = useState("");
  return (
    <>
      {boss == "" ? (
        <div className="flex flex-wrap gap-2 md:gap-5">
          <BossButton onClick={() => setBoss("test")}>
            <Image src={boss1} alt={"boss"} />
          </BossButton>
          <BossButton onClick={() => console.log("success")}>
            <Image src={boss1} alt={"boss"} />
          </BossButton>
          <BossButton onClick={() => console.log("success")}>
            <Image src={boss1} alt={"boss"} />
          </BossButton>
          <BossButton onClick={() => console.log("success")}>
            <Image src={boss1} alt={"boss"} />
          </BossButton>
          <BossButton onClick={() => console.log("success")}>
            <Image src={boss1} alt={"boss"} />
          </BossButton>
        </div>
      ) : null}
      {boss == "test" ? <BossInfo /> : null}
    </>
  );
};

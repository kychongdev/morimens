import { Button, Image } from "@mantine/core";
import { BossButton } from "@/components/BossButton";
import { useState } from "react";
import { bossData } from "@/data/boss";
import { BossInfo } from "./BossInfo";
import { IconArrowBackUp } from "@tabler/icons-react";
import { v4 as uuidv4 } from "uuid";

export const Boss = () => {
  const [boss, setBoss] = useState("");

  return (
    <>
      {boss == ""
        ? bossData.map((item) => {
            return (
              <div key={uuidv4()} className="flex flex-wrap gap-2 md:gap-5">
                <BossButton onClick={() => setBoss(item.id.toString())}>
                  <Image src={item.img} alt={item.name} />
                </BossButton>
              </div>
            );
          })
        : null}
      {boss !== "" ? (
        <>
          <Button color="yellow" onClick={() => setBoss("")}>
            <IconArrowBackUp />
          </Button>
          <BossInfo bossId={boss} />
        </>
      ) : null}
    </>
  );
};

import { Button, Image } from "@mantine/core";
import { SquareButton } from "@/components/SquareButton";
import { useState } from "react";
import { bossData } from "@/data/boss";
import { BossInfo } from "./BossInfo";
import { IconArrowBackUp } from "@tabler/icons-react";
import { v4 as uuidv4 } from "uuid";

export const Boss = () => {
  const [boss, setBoss] = useState("");

  return (
    <>
      <div className="flex flex-wrap gap-2 md:gap-5">
        {boss == ""
          ? bossData.map((item) => {
              return (
                <SquareButton
                  key={uuidv4()}
                  onClick={() => setBoss(item.id.toString())}
                >
                  <Image src={item.img} alt={item.name} />
                </SquareButton>
              );
            })
          : null}
      </div>
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

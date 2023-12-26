import { data } from "@/data/deepsea";
import { useState } from "react";

export const CharacterPage = () => {
  const [char, setChar] = useState("");
  const charInfo = data[parseInt(char)];
  return <>{charInfo.name}</>;
};

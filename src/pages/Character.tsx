import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { data } from "@/data/deepsea";
import { useState } from "react";

export const CharacterPage = () => {
  const [char, setChar] = useState("");
  const charInfo = data[parseInt(char)];
  return (
    <>
      <Select value={char} onValueChange={(value) => setChar(value)}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="請選擇深海角色" />
        </SelectTrigger>
        <SelectContent>
          {data.map((item, index) => {
            return (
              <SelectItem key={index} value={item.id.toString()}>
                {item.name}
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>

      {char && char !== "" ? (
        <>
          <Card>
            <CardHeader>
              <CardTitle>{charInfo.name}</CardTitle>
              <CardDescription>{charInfo.charType}</CardDescription>
            </CardHeader>
            <CardContent>
              <img src={charInfo.image} alt={charInfo.name} className="w-120" />
            </CardContent>
          </Card>
          <Tabs defaultValue="skill" className="w-400 text-left">
            <TabsList>
              <TabsTrigger value="skill">技能</TabsTrigger>
              <TabsTrigger value="breakthrough">啟靈</TabsTrigger>
            </TabsList>
            <TabsContent value="skill" className="text-left whitespace-pre-line">
              不巧威儀
            </TabsContent>
            <TabsContent value="breakthrough" className="text-left whitespace-pre-line">
              {charInfo.breakthrough}
            </TabsContent>
          </Tabs>
        </>
      ) : null}
    </>
  );
};

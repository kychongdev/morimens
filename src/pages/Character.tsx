import { data } from "@/data/deepsea";
import { useState } from "react";
import {
  Select,
  Text,
  Image,
  Tabs,
  List,
  ThemeIcon,
  Slider,
  Title,
  rem,
} from "@mantine/core";
import {
  IconSword,
  IconAlertTriangle,
  IconShield,
  IconSwords,
} from "@tabler/icons-react";

export const DeepSeaCharacter = () => {
  const [char, setChar] = useState<string | null>();
  const [level, setLevel] = useState(1);
  const charInfo = char ? data[parseInt(char)] : null;
  return (
    <>
      <Select
        className="pt-3"
        placeholder="選擇角色"
        data={data.map((item) => {
          return { label: item.name, value: item.id.toString() };
        })}
        onChange={(value) => setChar(value)}
      />
      {char && charInfo ? (
        <>
          <Image className="p-10" src={charInfo.image} alt="tulu" />
          <Tabs variant="outline" defaultValue="a">
            <Tabs.List className="mb-2">
              <Tabs.Tab value="a">狀態</Tabs.Tab>
              <Tabs.Tab value="b">技能</Tabs.Tab>
              <Tabs.Tab value="c">啟靈</Tabs.Tab>
              <Tabs.Tab value="d">命論</Tabs.Tab>
              <Tabs.Tab value="e">檔案</Tabs.Tab>
              <Tabs.Tab value="f">機制</Tabs.Tab>
            </Tabs.List>
            <Tabs.Panel value="a" className="p-2">
              <Title c="yellow.6" order={6}>
                等級
              </Title>
              <Slider
                className="my-3"
                color="yellow"
                min={1}
                max={60}
                value={level}
                onChange={setLevel}
              />
              <Text size="sm" c="yellow.6">
                體質： 102
              </Text>
              <Text size="sm" c="yellow.6">
                攻擊： 102
              </Text>
              <Text size="sm" c="yellow.6">
                防禦： 102
              </Text>
            </Tabs.Panel>
            <Tabs.Panel className="p-2" value="b">
              <List spacing="xs">
                <List.Item
                  icon={
                    <ThemeIcon variant="default" size={24} radius="xl">
                      <IconSword
                        className="items-start"
                        style={{ width: rem(16), height: rem(16) }}
                      />
                    </ThemeIcon>
                  }
                >
                  <Text size="sm" c="yellow.6">
                    <b>{charInfo.skill1}</b>
                  </Text>
                </List.Item>
                <Text size="sm">{charInfo.skill1Info}</Text>
                <List.Item
                  icon={
                    <ThemeIcon variant="default" size={24} radius="xl">
                      <IconShield style={{ width: rem(16), height: rem(16) }} />
                    </ThemeIcon>
                  }
                >
                  <Text size="sm" c="yellow.6">
                    <b>{charInfo.skill2}</b>
                  </Text>
                </List.Item>
                <Text size="sm">{charInfo.skill2Info}</Text>
                <List.Item
                  icon={
                    <ThemeIcon variant="default" size={24} radius="xl">
                      <IconAlertTriangle
                        style={{ width: rem(16), height: rem(16) }}
                      />
                    </ThemeIcon>
                  }
                >
                  <Text size="sm" c="yellow.6">
                    <b>{charInfo.skill3}</b>
                  </Text>
                </List.Item>
                <Text size="sm">{charInfo.skill3Info}</Text>
                <List.Item
                  icon={
                    <ThemeIcon variant="default" size={24} radius="xl">
                      <IconSwords style={{ width: rem(16), height: rem(16) }} />
                    </ThemeIcon>
                  }
                >
                  <Text size="sm" c="yellow.6">
                    <b>{charInfo.skill4}</b>
                  </Text>
                </List.Item>
                <Text size="sm">{charInfo.skill4Info}</Text>
                <List.Item
                  icon={
                    <ThemeIcon variant="default" size={24} radius="xl">
                      <IconSwords style={{ width: rem(16), height: rem(16) }} />
                    </ThemeIcon>
                  }
                >
                  <Text size="sm" c="yellow.6">
                    <b>{charInfo.skill5}</b>
                  </Text>
                </List.Item>
              </List>
              <Text size="sm">{charInfo.skill5Info}</Text>
            </Tabs.Panel>
            <Tabs.Panel value="c">啟靈</Tabs.Panel>
            <Tabs.Panel value="d">專屬命輪</Tabs.Panel>
            <Tabs.Panel value="e">檔案</Tabs.Panel>
            <Tabs.Panel value="e">機制</Tabs.Panel>
          </Tabs>
        </>
      ) : null}
    </>
  );
};

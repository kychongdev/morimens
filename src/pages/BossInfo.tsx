import {
  Text,
  Paper,
  Image,
  Accordion,
  rem,
  List,
  ThemeIcon,
  Title,
  Divider,
} from "@mantine/core";
import {
  // IconAlertTriangle,
  IconQuestionMark,
  // IconShield,
  IconSword,
  // IconSwords,
} from "@tabler/icons-react";
import test from "../assets/boss/1.png";
import { bossData } from "@/data/boss";

interface BossInfoProps {
  bossId: string;
}

export const BossInfo = ({ bossId }: BossInfoProps) => {
  let data = bossData[parseInt(bossId)];
  return (
    <>
      <Title className="text-center" c={"yellow.6"} order={2}>
        {data.name}
      </Title>
      <Image src={test} />
      <Paper className="my-5" shadow="xs" radius="xl" withBorder p="xl">
        <Text>{data.story}</Text>
      </Paper>
      <div className="px-3">
        <List spacing="xs">
          {data.skill.map((item) => {
            return (
              <>
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
                    <b>{item.name}</b>
                  </Text>
                </List.Item>
                <Text size="sm">{item.info}</Text>
                {item.passive !== undefined
                  ? item.passive.map((item2) => {
                      return (
                        <Text size="sm" c="blue.6">
                          <b>{item2.info}</b>
                        </Text>
                      );
                    })
                  : null}
              </>
            );
          })}
        </List>
      </div>
      <Accordion className="mt-5" variant="contained">
        {data.question.map((item) => {
          return (
            <Accordion.Item value={item.value.toString()}>
              <Accordion.Control
                icon={
                  <IconQuestionMark
                    style={{
                      color: "var(--mantine-color-red-6)",
                      width: rem(20),
                      height: rem(20),
                    }}
                  />
                }
              >
                {item.title}
              </Accordion.Control>
              <Accordion.Panel>{item.info}</Accordion.Panel>
            </Accordion.Item>
          );
        })}
      </Accordion>
    </>
  );
};

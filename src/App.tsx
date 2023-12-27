import "./App.css";
import {
  useMantineColorScheme,
  Switch,
  useMantineTheme,
  rem,
  UnstyledButton,
  Divider,
  Title,
} from "@mantine/core";
import { IconSun, IconMoonStars } from "@tabler/icons-react";
import { DeepSeaCharacter } from "./pages/Deepsea";
import { useState } from "react";
import { YellowButton } from "./components/YellowButton";
import { Boss } from "./pages/Boss";

function App() {
  const theme = useMantineTheme();
  const { colorScheme, setColorScheme } = useMantineColorScheme();
  const [page, setPage] = useState("");

  const sunIcon = (
    <IconSun
      style={{ width: rem(16), height: rem(16) }}
      stroke={2.5}
      color={theme.colors.yellow[4]}
    />
  );

  const moonIcon = (
    <IconMoonStars
      style={{ width: rem(16), height: rem(16) }}
      stroke={2.5}
      color={theme.colors.blue[6]}
    />
  );

  return (
    <div className="px-3 pt-2 lg:container lg:mx-auto">
      <div className="flex justify-between mb-2 ">
        <UnstyledButton
          className="self-center"
          size="xl"
          onClick={() => setPage("")}
        >
          <div className="text-2xl font-bold">忘卻前夜</div>
        </UnstyledButton>
        <Switch
          defaultChecked={colorScheme == "dark"}
          className="self-center"
          size="lg"
          color="dark.4"
          onLabel={sunIcon}
          offLabel={moonIcon}
          onChange={(event) => {
            if (event.currentTarget.checked) {
              setColorScheme("dark");
            } else {
              setColorScheme("light");
            }
          }}
        />
      </div>
      {page == "" ? (
        <div className="">
          <Title c="yellow.6" order={4}>
            界域
          </Title>
          <div className="flex flex-wrap mt-3 gap-3">
            <YellowButton name="混沌" onClick={() => setPage("chaos")} />
            <YellowButton name="深海" onClick={() => setPage("deepsea")} />
            <YellowButton name="血肉" onClick={() => setPage("flesh")} />
            <YellowButton name="超維" onClick={() => setPage("transcendent")} />
          </div>
          <Divider my="lg" />
          <Title c="yellow.6" order={4}>
            戰鬥
          </Title>
          <div className="flex flex-wrap mt-3 gap-3">
            <YellowButton name="王怪" onClick={() => setPage("boss")} />
            <YellowButton name="造物" onClick={() => setPage("relic")} />
          </div>
        </div>
      ) : null}
      {page == "deepsea" ? <DeepSeaCharacter /> : null}
      {page == "boss" ? <Boss /> : null}
    </div>
  );
}

export default App;

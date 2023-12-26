import "./App.css";
import {
  useMantineColorScheme,
  Switch,
  useMantineTheme,
  rem,
  Text,
  Button,
  UnstyledButton,
} from "@mantine/core";
import { IconSun, IconMoonStars } from "@tabler/icons-react";
import { DeepSeaCharacter } from "./pages/Character";
import { useState } from "react";

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
      <div className="flex justify-between ">
        <UnstyledButton
          className="self-center"
          size="lg"
          onClick={() => setPage("")}
        >
          <strong>忘卻之夜</strong>
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
        <div className="flex flex-wrap mt-3">
          <Button
            variant="filled"
            color="yellow.4"
            onClick={() => setPage("deepsea")}
          >
            深海
          </Button>
        </div>
      ) : null}
      {page == "deepsea" ? <DeepSeaCharacter /> : null}
    </div>
  );
}

export default App;

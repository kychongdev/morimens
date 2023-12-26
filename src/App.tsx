import "./App.css";
import { useDisclosure } from "@mantine/hooks";
import { Burger, useMantineColorScheme } from "@mantine/core";
import { Switch, useMantineTheme, rem, Text } from "@mantine/core";
import { IconSun, IconMoonStars } from "@tabler/icons-react";

function App() {
  const [opened, { toggle }] = useDisclosure();
  const theme = useMantineTheme();
  const { colorScheme, setColorScheme } = useMantineColorScheme();

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
    <div className="flex justify-between px-3 lg:container lg:mx-auto">
      <Burger
        opened={opened}
        onClick={toggle}
        aria-label="Toggle navigation"
        size="lg"
      />
      <Text className="self-center" size="lg">
        <strong>忘卻之夜</strong>
      </Text>
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
  );
}

export default App;

import { Button } from "@mantine/core";

interface ButtonProps {
  name: string;
  onClick: () => void;
}

export const YellowButton = ({ name, onClick }: ButtonProps) => {
  return (
    <Button variant="filled" color="yellow.6" onClick={onClick}>
      {name}
    </Button>
  );
};

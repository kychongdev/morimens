import { UnstyledButton } from "@mantine/core";

interface BossButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

export const BossButton = ({ children, onClick }: BossButtonProps) => {
  return (
    <UnstyledButton
      className="max-w-[80px] md:max-w-[120px] xl:max-w-[200px]"
      onClick={onClick}
    >
      {children}
    </UnstyledButton>
  );
};

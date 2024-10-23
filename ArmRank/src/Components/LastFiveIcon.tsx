import { LastFiveBox, ResultIcon, colors } from "../styles";

export const LastFiveIcon = (props: { lastFive: string }) => {
  const lastFive = props.lastFive.split("").reverse();
  const setColor = (char: string) =>
    char === "1" ? colors.neonGreen : colors.red;
  const icons = [];

  for (let i = 0; i < 5; i++) {
    icons.push(
      <ResultIcon
        key={i}
        color={
          lastFive[i] == null ? colors.gray : setColor(lastFive[i])
        }
      />
    );
  }

  return <LastFiveBox>{icons}</LastFiveBox>;
};

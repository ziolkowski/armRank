import { IAthleteProps } from "../helper";
import {
  CardBox,
  NameText,
  PointBox,
  StyledColumn,
  StyledRow,
  WeightBox,
} from "../styles";
import { LastFiveIcon } from "./LastFiveIcon";

export const AthleteCard = (props: IAthleteProps) => {
  return (
    <CardBox>
      <StyledColumn>
        <StyledRow>
          <NameText>{props.name}</NameText>
          <LastFiveIcon lastFive={props.lastFiveResults} />
        </StyledRow>
        <StyledRow>
          <WeightBox>{props.lastWeightKg} kg</WeightBox>
          <PointBox>{props.points}</PointBox>
        </StyledRow>
      </StyledColumn>
    </CardBox>
  );
};

import { useEffect, useState } from "react";
import {
  Content,
  Header,
  HeaderText,
  Logo,
  RankBox,
  RankText,
  StyledColumn,
  VerticalBox,
  VerticalText,
  Wrapper,
} from "./styles";
import { Data, getNameById } from "./Data";
import { AthleteExt } from "./helper";
import { AthleteCard } from "./Components/AthleteCard";
import batLogo from "./assets/bat_logo_gold.png";
import { getAthletes, getMatchesFromFile } from "./algo";
import React from "react";

const Rank = () => {
  const [leftData, setLeftData] = useState<AthleteExt[]>([]);
  const [rightData, setRightData] = useState<AthleteExt[]>([]);
  const [count, setCount] = useState(10);

  useEffect(() => {
    processData(Data);
  }, []);

  const processData = (data: string) => {
    const matches = getMatchesFromFile(data);
    const leftAthletes = getAthletes(matches.left);
    const rightAthletes = getAthletes(matches.right);
    const leftAthletesSorted = sortByPoints(leftAthletes);
    const rightAthletesSorted = sortByPoints(rightAthletes);
    setLeftData(leftAthletesSorted);
    setRightData(rightAthletesSorted);
  };

  const sortByPoints = (athletes: AthleteExt[]): AthleteExt[] => {
    return athletes.sort((x, y) => y.points - x.points);
  };

  const renderAthletes = (data: AthleteExt[], count?: number) => {
    let athletes = [];
    for (let i = 0; i < (count ?? data.length); i++) {
      if (i === data.length) break;
      athletes.push(
        <AthleteCard
          key={i}
          name={getNameById(data[i].id)}
          lastWeightKg={data[i].lastWeightKg}
          points={data[i].points}
          lastFiveResults={data[i].lastFiveResults!}
        />
      );
    }

    return athletes;
  };

  const renderRanks = (count: number) => {
    let ranks = [];
    for (let i = 0; i < count; i++) {
      ranks.push(
        <React.Fragment key={i}>
          <RankBox key={i}>
            <RankText>RANK {i + 1}</RankText>
          </RankBox>
        </React.Fragment>
      );
    }

    return ranks;
  };

  const changeCount = () => {
    const max = Math.max(leftData.length, rightData.length);
    setCount(count === 10 ? max : 10);
  }

  return (
    <>
      <Wrapper>
        <Header>
          <Logo type="image" src={batLogo} onClick={changeCount}/>
          <HeaderText>P4P Ranking</HeaderText>
        </Header>
        <Content>
          <VerticalBox>
            <VerticalText>RIGHT ARM</VerticalText>
          </VerticalBox>
          <StyledColumn>{renderAthletes(rightData, count)}</StyledColumn>
          <StyledColumn>{renderRanks(count )}</StyledColumn>
          <StyledColumn>{renderAthletes(leftData, count)}</StyledColumn>
          <VerticalBox>
            <VerticalText>LEFT ARM</VerticalText>
          </VerticalBox>
        </Content>
      </Wrapper>
    </>
  );
};

export default Rank;

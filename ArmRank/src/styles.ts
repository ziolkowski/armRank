import styled from "styled-components";

export const colors = {
  darkGray: "#191919",
  midGold: "#cca64b",
  neonGreen: "#A4FFAF",
  gray: "#817D92",
  red: "#F64A4A",

  orange: "#FB7C58",
  yellow: "#F8CD65",
  almostWhite: "#E6E5EA",
  veryDarkGray: "#18171F",
};

export const Wrapper = styled.div`
  width: 1366px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.darkGray};
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.input`
  margin: 0;
  height: 200px;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
`;

export const StyledRow = styled.div`
  width: 100%;
  min-height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: normal;
`;

export const CardBox = styled.div`
  width: 400px;
  height: 80px;
  border: 1px solid ${colors.almostWhite};
  margin-bottom: 12px;
  border-radius: 10px;
`;

export const VerticalBox = styled.div`
  height: 900px;
  display: flex;
  align-items: center;
`;

export const VerticalText = styled.p`
  writing-mode: vertical-lr;
  text-orientation: upright;
  margin: 0 50px;
  font-size: 28px;
  color: ${colors.midGold};
  font-family: 'batFont';
  letter-spacing: 16px;
`;

export const NameText = styled.p`
  margin: 0;
  font-size: 22px;
  color: ${colors.midGold};
  font-family: 'batFontLite';
`;

export const RankText = styled.p`
  margin: 0;
  font-size: 24px;
  color: ${colors.almostWhite};
  font-family: 'batFont';
  letter-spacing: 6px;
`;

export const WeightBox = styled.p`
  margin: 0;
  font-size: 20px;
  color: ${colors.midGold};
  font-family: 'batFontLite';
`;

export const PointBox = styled.p`
  margin: 0;
  font-size: 28px;
  font-weight: 700;
  color: ${colors.almostWhite};
  font-family: 'batFontLite';
  letter-spacing: 6px;
`;

export const RankBox = styled.div`
  display: flex;
  width: 200px;
  height: 82px;
  margin-bottom: 12px;
  justify-content: center;
  align-items: center;
`;

export const LastFiveBox = styled.div`
  display: flex;
  width: 45px;
  justify-content: space-between;
  align-items: center;
`;

export const ResultIcon = styled.div<{$color: string}>`
  width: 5px;
  height: 20px;
  background-color: ${props => props.color}
`;

import {
  Athlete,
  AthleteExt,
  Match,
  MatchExt,
  MatchesFromFile,
} from "./helper";

export const getMatchesFromFile = (data: string): MatchesFromFile => {
  let rows = data.split("\n");
  rows.shift();
  rows.pop();
  const rowTable = rows.map((x) => x.split(","));
  const left = rowTable
    .filter((x) => x[0] === "L")
    .map((x) => convertArrayToMatch(x));
  const right = rowTable
    .filter((x) => x[0] === "R")
    .map((x) => convertArrayToMatch(x));
  const result: MatchesFromFile = {
    left: left,
    right: right,
  };

  return result;
};

const convertArrayToMatch = (row: string[]) => {
  return {
    hand: row[0],
    firstAthleteId: Number(row[1]),
    firstAthleteWeightKg: Number(row[2]),
    secondAthleteId: Number(row[3]),
    secondAthleteWeightKg: Number(row[4]),
    winner: Number(row[5]),
  } as Match;
};

export const getAthletes = (
  matches: Match[],
  weightAdjusted: boolean = true
): AthleteExt[] => {
  let athletes: AthleteExt[] = [];
  matches.forEach((m) => {
    const match = getMatchWithCurrentPoints(athletes, m);
    let winner: Athlete;
    let looser: Athlete;
    if (match.winner === 1) {
      winner = {
        id: match.firstAthleteId,
        lastWeightKg: match.firstAthleteWeightKg,
        points: match.firstPoints,
      };
      looser = {
        id: match.secondAthleteId,
        lastWeightKg: match.secondAthleteWeightKg,
        points: match.secondPoints,
      };
    } else {
      winner = {
        id: match.secondAthleteId,
        lastWeightKg: match.secondAthleteWeightKg,
        points: match.secondPoints,
      };
      looser = {
        id: match.firstAthleteId,
        lastWeightKg: match.secondAthleteWeightKg,
        points: match.firstPoints,
      };
    }
    const substract = winner.points - looser.points;
    const diffParam = substract / -20;
    const howMuchToLimit = Math.min(2000 - winner.points, looser.points);
    const limitParam = 1 + Math.ceil((2000 - howMuchToLimit) / 600);
    const noWeightDiff = Math.round(Number((100 + diffParam) / limitParam));
    if (!weightAdjusted) {
      winner.points = calculateWithLimit(winner.points, noWeightDiff);
      looser.points = calculateWithLimit(looser.points, -noWeightDiff);
    } else {
      const weightMultiplier = getWeightAdjustedMultiplier(
        winner.lastWeightKg,
        looser.lastWeightKg
      );
      const withWeightDiff = Math.round(noWeightDiff * weightMultiplier);
      winner.points = calculateWithLimit(winner.points, withWeightDiff);
      looser.points = calculateWithLimit(looser.points, -withWeightDiff);
    }

    const winnerIndex = athletes.findIndex((a) => a.id === winner.id);
    const looserIndex = athletes.findIndex((a) => a.id === looser.id);
    if (winnerIndex === -1) {
      const winnerExt = {
        ...winner,
        lastFiveResults: "1",
      } as AthleteExt;
      athletes.push(winnerExt);
    } else {
      athletes[winnerIndex]!.points = winner.points;
      athletes[winnerIndex]!.lastWeightKg = winner.lastWeightKg;
      athletes[winnerIndex]!.lastFiveResults = (athletes[winnerIndex]!.lastFiveResults + "1").substring(0, 5);
    }
    if (looserIndex === -1) {
        const looserExt = {
            ...looser,
            lastFiveResults: "0",
          } as AthleteExt;
          athletes.push(looserExt);
    } else {
      athletes[looserIndex]!.points = looser.points;
      athletes[looserIndex]!.lastWeightKg = looser.lastWeightKg;
      athletes[looserIndex]!.lastFiveResults = (athletes[looserIndex]!.lastFiveResults + "0").substring(0, 5);
    }
  });

  return athletes;
};

const getMatchWithCurrentPoints = (data: Athlete[], match: Match): MatchExt => {
  const firstAthlete = data.find((a) => a.id === match.firstAthleteId);
  const secondAthlete = data.find((a) => a.id === match.secondAthleteId);

  return {
    ...match,
    firstPoints: firstAthlete?.points ?? 1000,
    secondPoints: secondAthlete?.points ?? 1000,
  } as MatchExt;
};

const calculateWithLimit = (x: number, y: number): number => {
  const result = x + y;
  if (y >= 0) {
    return result > 1999 ? 1999 : result;
  }

  return result < 1 ? 1 : result;
};

const getWeightAdjustedMultiplier = (
  winnerWeight: number,
  looserWeight: number
): number => {
  const substract = winnerWeight - looserWeight;
  const diffParam = substract / 50;
  let lowerWeight = Math.min(winnerWeight, looserWeight);
  if (lowerWeight < 50) {
    lowerWeight = 50;
  }

  let weightImportance = (150 - lowerWeight) / 100;
  if (weightImportance < 0.2) {
    weightImportance = 0.2;
  }

  const adjustedDiffParam = 1 - diffParam < 0 ? 0 : 1 - diffParam;
  const multiplier = 1 + weightImportance * (adjustedDiffParam - 1);

  return multiplier;
};

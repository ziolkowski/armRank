export type Match = {
    hand: string;
    firstAthleteId: number;
    firstAthleteWeightKg: number;
    secondAthleteId: number;
    secondAthleteWeightKg: number;
    winner: number;
}

export type MatchExt = Match & {
    firstPoints: number;
    secondPoints: number;
}

export type Athlete = {
    id: number;
    name?: string;
    lastWeightKg: number;
    points: number;
}

export type AthleteExt = Athlete & {
    winsTotal: number;
    lossesTotal: number;
    lastFiveResults: string;
}

export type MatchesFromFile = {
    left: Match[];
    right: Match[];
}

export type RankItem = {
    name: string;
    points: number;
    position: number;
}

export interface IAthleteProps {
    name: string;
    lastWeightKg: number;
    points: number;
    lastFiveResults: string;
    winsTotal?: number;
    lossesTotal?: number;
}
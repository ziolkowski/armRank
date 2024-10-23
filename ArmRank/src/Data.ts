export const Data = `
L,1,86,2,67,1,
R,3,78,4,98,1,
R,1,86,5,84,1,
R,6,81,7,104,1,
R,8,82,9,85,2,
L,10,96,11,101,2,
R,12,79,13,71,1,
R,14,113,11,101,1,
R,15,85,16,95,2,
L,17,59,18,66,2,2
R,19,95,2,68,2,
R,20,87,4,103,2,
L,12,88,21,84,1,
L,4,103,8,84,1,
R,1,86,22,79,1,
R,23,66,8,84,1,
L,14,114,10,95,1,
L,24,97,15,81,2,
L,12,88,22,79,1,
R,24,97,10,95,1,
R,14,114,15,81,2,
`;

export const getNameById = (id: number): string => {
    switch (id) {
        case 1: return "Brajan Szulak"
        case 2: return "Hubert Bolesta"
        case 3: return "Eduard Pilipchuk"
        case 4: return "Eryk Czeszel"
        case 5: return "Konrad Bartoszewicz"
        case 6: return "Misha Grozdei"
        case 7: return "Jan Lachowicz"
        case 8: return "Vova Kmit"
        case 9: return "Janek Ziolkowski"
        case 10: return "Rafal Michalczuk"
        case 11: return "Kristian 'KriDenn' Dennard"
        case 12: return "Michal Milewski"
        case 13: return "Bartosz Marciszewski"
        case 14: return "Dawid Kaczynski"
        case 15: return "Adem Vurucu"
        case 16: return "Marek Monachowicz"
        case 17: return "Jakub Olszewski"
        case 18: return "Igor Jakonczuk"
        case 19: return "Kuba Murdzek"
        case 20: return "Patryk Jankowski"
        case 21: return "Jakub 'Droniu' Drag"
        case 22: return "Patryk Dzierka"
        case 23: return "Pawel Kalbarczyk"
        case 24: return "Oliwier Rosinski"
        default: return "NO ID"
    }
}
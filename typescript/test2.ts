//interface ***
interface Game {
    title: string,
    price: number,
    desc?: string,
    category: string,
    platform: string,
}

let heroGame_A: Game = {
    title: "게임1",
    price: 10000,
    desc: "게임1",
    category: "액션",
    platform: "모바일"
};

let heroGame_B: Game = {
    title: "게임2",
    price: 20000,
    category: "RPG",
    platform: "PC"
}

console.log(heroGame_A, heroGame_B)

export type Project = {
  title: string;
  tags: string[];
  website: string;
  github: string;
  thumbnail: string;
};

export const projects = [
  {
    title: "Pokédex",
    tags: ["react", "graphql", "storybook"],
    website: "https://pokedex.made-by-kim.com/",
    github: "https://github.com/kim-fransson/pokedex/tree/main",
    thumbnail: "/projects/pokedex.png",
  },
  {
    title: "Rock Paper Scissors",
    tags: ["react", "scss"],
    website: "https://rock-paper-scissors.made-by-kim.com/",
    github: "https://github.com/kim-fransson/rock-paper-scissors",
    thumbnail: "/projects/rockPaperScissors.png",
  },
  {
    title: "Tic Tac Toe",
    tags: ["react", "tailwindcss"],
    website: "https://tic-tac-toe.made-by-kim.com/",
    github: "https://github.com/kim-fransson/tic-tac-toe-v2",
    thumbnail: "/projects/tictactoe.png",
  },
  {
    title: "Connect Four",
    tags: ["react", "css", "storybook"],
    website: "https://connect-four.made-by-kim.com/",
    github: "https://github.com/kim-fransson/connect-four",
    thumbnail: "/projects/connectFour.png",
  },
  {
    title: "FindMovies",
    tags: ["react", "tailwindcss", "storybook"],
    website: "https://findmovies.made-by-kim.com/",
    github: "https://github.com/kim-fransson/findmovies",
    thumbnail: "/projects/findMovies.png",
  },
  {
    title: "GifTok",
    tags: ["react", "tailwindcss", "storybook"],
    website: "https://giftok.made-by-kim.com/",
    github: "https://github.com/kim-fransson/giftok",
    thumbnail: "/projects/giftok.png",
  },
  {
    title: "The Planets",
    tags: ["nextjs", "css"],
    website: "https://the-planets.made-by-kim.com/",
    github: "https://github.com/kim-fransson/the-planets",
    thumbnail: "/projects/thePlanets.png",
  },
  {
    title: "Countdown",
    tags: ["react", "css"],
    website: "https://countdown.made-by-kim.com/",
    github: "https://github.com/kim-fransson/launch-countdown-timer",
    thumbnail: "/projects/countdown.png",
  },
];

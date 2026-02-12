export const GameCategory = {
  ALL: 'All',
  ACTION: 'Action',
  PUZZLE: 'Puzzle',
  ARCADE: 'Arcade',
  STRATEGY: 'Strategy',
  RACING: 'Racing'
};

// This file acts as our "games.json" storage
export const GAMES_DATA = [
  {
    id: "2048-classic",
    title: "2048",
    description: "Join the numbers and get to the 2048 tile! A classic puzzle game that tests your logic and strategy.",
    thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/2048_logo.svg/1200px-2048_logo.svg.png",
    url: "https://play2048.co/",
    category: GameCategory.PUZZLE,
    rating: 4.8
  },
  {
    id: "hextris",
    title: "Hextris",
    description: "An addictive puzzle game inspired by Tetris. Rotate the hexagon to match colors and clear lines.",
    thumbnail: "https://raw.githubusercontent.com/Hextris/hextris/gh-pages/images/icons/apple-touch-icon-120x120.png",
    url: "https://hextris.io/",
    category: GameCategory.PUZZLE,
    rating: 4.5
  },
  {
    id: "geo-dash",
    title: "Geometry Dash Scratch",
    description: "Jump and fly your way through danger in this rhythm-based action platformer.",
    thumbnail: "https://cdn2.scratch.mit.edu/get_image/project/105500895_480x360.png",
    url: "https://scratch.mit.edu/projects/105500895/embed",
    category: GameCategory.ACTION,
    rating: 4.7
  },
  {
    id: "paper-io",
    title: "Paper.io 2",
    description: "Conquer as much territory as possible and beat the competition. A smooth drawing experience!",
    thumbnail: "https://play-lh.googleusercontent.com/1-hPxD25N6yW9Y8_O5r6rKk8Z8h_1j4-1_8_1_8_1_8_1_8.png",
    url: "https://paper-io.com/", 
    category: GameCategory.STRATEGY,
    rating: 4.6
  },
  {
    id: "minecraft-classic",
    title: "Minecraft Classic",
    description: "Play the classic version of Minecraft directly in your browser. Build, destroy, and explore.",
    thumbnail: "https://image.api.playstation.com/vulcan/img/rnd/202010/2123/ABCD1234.png", // Placeholder generic
    url: "https://classic.minecraft.net/",
    category: GameCategory.ARCADE,
    rating: 4.9
  },
  {
    id: "slope",
    title: "Slope",
    description: "Drive a ball in the 3D running game in slope Game. Easy to controls, high speed, and addictive gameplay.",
    thumbnail: "https://img.poki.com/cdn-cgi/image/quality=78,width=600,height=600,fit=cover,f=auto/b5bd34054bc849159d949d50021d2369.png",
    url: "https://kbhgames.com/game/slope",
    category: GameCategory.RACING,
    rating: 4.4
  },
  {
    id: "tiny-fishing",
    title: "Tiny Fishing",
    description: "Cast your line and catch as many fish as you can. Upgrade your gear to reach deeper depths.",
    thumbnail: "https://img.gamedistribution.com/48a80820d82142cb91b97b6e8284698b-512x512.jpeg",
    url: "https://html5.gamedistribution.com/48a80820d82142cb91b97b6e8284698b/",
    category: GameCategory.ARCADE,
    rating: 4.3
  },
  {
    id: "stack",
    title: "Stack Tower",
    description: "Stack the blocks as high as you can! Test your reflexes in this simple yet challenging game.",
    thumbnail: "https://picsum.photos/400/400?random=1",
    url: "https://html5games.com/Game/Stack_Tower/357643b1-7009-4503-a3b0-279092490b6a", 
    category: GameCategory.ARCADE,
    rating: 4.2
  }
];

export const fetchGames = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(GAMES_DATA);
    }, 500); 
  });
};

export const fetchGameById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const game = GAMES_DATA.find(g => g.id === id);
      resolve(game);
    }, 300);
  });
};
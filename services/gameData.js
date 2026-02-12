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
    id: "bloxd-io",
    title: "Bloxd.io",
    description: "Bloxd.io is an IO adventure game with Minecraft-style visuals and multiple game modes, including parkour challenges, creative sandbox building, and combat-based gameplay.",
    thumbnail: "https://images.crazygames.com/bloxdhop-io/20210211150422/bloxdhop-io-cover?auto=format,compress&q=75&cs=strip",
    url: "https://games.crazygames.com/en_US/bloxdhop-io/index.html?v=1.350",
    category: GameCategory.ACTION,
    rating: 4.9,
    sandbox: "allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-presentation allow-scripts allow-same-origin allow-downloads allow-popups allow-popups-to-escape-sandbox",
    permissions: "autoplay; payment; fullscreen; microphone; focus-without-user-activation *; screen-wake-lock; gamepad; clipboard-read; clipboard-write; accelerometer; gyroscope;"
  },
  {
    id: "night-city-racing",
    title: "Night City Racing",
    description: "Gear up for heart-pounding races and wild challenges! Race incredible supercars, pull off epic stunts, and play solo or against a friend.",
    thumbnail: "https://images.crazygames.com/night-city-racing/20230112144747/night-city-racing-cover?auto=format,compress&q=75&cs=strip",
    url: "https://games.crazygames.com/en_US/night-city-racing/index.html?v=1.350",
    category: GameCategory.RACING,
    rating: 4.7,
    sandbox: "allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-presentation allow-scripts allow-same-origin allow-downloads allow-popups allow-popups-to-escape-sandbox",
    permissions: "autoplay; payment; fullscreen; microphone; focus-without-user-activation *; screen-wake-lock; gamepad; clipboard-read; clipboard-write; accelerometer; gyroscope;"
  },
  {
    id: "spiderdoll",
    title: "SpiderDoll",
    description: "Swing through the city like a superhero! Wrap bad guys in webs, escape OctoPuppet, and save Mary in this physics-based action game.",
    thumbnail: "https://images.crazygames.com/spiderdoll/20210319150422/spiderdoll-cover?auto=format,compress&q=75&cs=strip",
    url: "https://games.crazygames.com/en_US/spiderdoll/index.html?v=1.350",
    category: GameCategory.ACTION,
    rating: 4.6,
    sandbox: "allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-presentation allow-scripts allow-same-origin allow-downloads allow-popups allow-popups-to-escape-sandbox",
    permissions: "autoplay; payment; fullscreen; microphone; focus-without-user-activation *; screen-wake-lock; gamepad; clipboard-read; clipboard-write; accelerometer; gyroscope;"
  },
  {
    id: "jet-rush",
    title: "Jet Rush",
    description: "Pilot a high-tech jet plane through challenging courses. Avoid obstacles, collect coins, and upgrade your jet in this fast-paced arcade game.",
    thumbnail: "https://images.crazygames.com/jet-rush/20211116160844/jet-rush-cover?auto=format,compress&q=75&cs=strip",
    url: "https://games.crazygames.com/en_US/jet-rush/index.html?isNewUser=false&v=1.350",
    category: GameCategory.ARCADE,
    rating: 4.5,
    sandbox: "allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-presentation allow-scripts allow-same-origin allow-downloads allow-popups allow-popups-to-escape-sandbox",
    permissions: "autoplay; payment; fullscreen; microphone; focus-without-user-activation *; screen-wake-lock; gamepad; clipboard-read; clipboard-write; accelerometer; gyroscope;"
  },
  {
    id: "traffic-rider",
    title: "Traffic Rider",
    description: "An exhilarating first-person motorbike endless racing game. Weave through traffic, upgrade your bike, and conquer career missions.",
    thumbnail: "https://images.crazygames.com/traffic-rider-vvq/20240404100414/traffic-rider-vvq-cover?auto=format,compress&q=75&cs=strip",
    url: "https://games.crazygames.com/en_US/traffic-rider-vvq/index.html?isNewUser=false&v=1.350",
    category: GameCategory.RACING,
    rating: 4.8,
    sandbox: "allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-presentation allow-scripts allow-same-origin allow-downloads allow-popups allow-popups-to-escape-sandbox",
    permissions: "autoplay; payment; fullscreen; microphone; focus-without-user-activation *; screen-wake-lock; gamepad; clipboard-read; clipboard-write; accelerometer; gyroscope;"
  },
  {
    id: "sonic-1-wasm",
    title: "Sonic the Hedgehog",
    description: "The classic 1991 platformer. Race at lightning speeds as Sonic the Hedgehog to save the animals from Dr. Robotnik in this web port.",
    thumbnail: "https://upload.wikimedia.org/wikipedia/en/3/30/Sonic_the_Hedgehog_1_Genesis_box_art.jpg",
    url: "https://revolution641.github.io/Sonic-1-WASM/",
    category: GameCategory.ARCADE,
    rating: 4.9,
    sandbox: "allow-scripts allow-popups allow-forms allow-same-origin allow-popups-to-escape-sandbox allow-downloads allow-storage-access-by-user-activation",
    permissions: "autoplay; fullscreen; gamepad; accelerometer; gyroscope; clipboard-write"
  },
  {
    id: "stickman-gta",
    title: "Stickman GTA City",
    description: "Roam the streets in this open-world stickman action game. Drive cars, complete missions, and cause chaos in the city.",
    thumbnail: "https://img.gamedistribution.com/0c66316d90f2452da6959b58328b9d99-512x512.jpeg",
    url: "https://dnrweqffuwjtx.cloudfront.net/games/2024/unity3/stickman-gta-city/pre.html",
    category: GameCategory.ACTION,
    rating: 4.3,
    sandbox: "allow-scripts allow-popups allow-forms allow-same-origin allow-popups-to-escape-sandbox allow-downloads allow-storage-access-by-user-activation",
    permissions: "autoplay; fullscreen; gamepad; accelerometer; gyroscope; clipboard-write"
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
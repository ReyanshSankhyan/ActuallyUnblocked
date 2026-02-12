export interface Game {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  url: string; // The iframe source URL
  category: GameCategory;
  rating: number;
}

export enum GameCategory {
  ALL = 'All',
  ACTION = 'Action',
  PUZZLE = 'Puzzle',
  ARCADE = 'Arcade',
  STRATEGY = 'Strategy',
  RACING = 'Racing'
}
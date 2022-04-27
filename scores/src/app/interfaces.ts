import { environment } from '../environments/environment';

type UserRoles = 'member' | 'guest';
type UID = string;
export type Colors = 'red' | 'green' | 'blue' | 'black' | 'yellow';
export type GameType = keyof typeof environment.games;

export interface IUser {
  _id?: UID;
  name: string;
  password: string;
  role?: UserRoles;
  createdAt?: string;
  updatedAt?: string;
}


export interface IGamer {
  _id?: UID;
  owner?: UID;
  name: string;
  uniqueName?: string;
  raiting?: any;
  color: Colors;
  createdAt?: string;
  updatedAt?: string;
}

export type IGamerTotal = IGamer & { totalScore: number };

export interface IGame {
  _id?: UID;
  type: GameType;
  owner?: UID;
  rounds: {
    _id?: UID;
    players: {
      _id?: UID;
      score: number;
    }[];
  }[];
  createdAt?: string;
  updatedAt?: string;
}

export type ClientGame  = Pick<IGame, '_id' | 'type'>;

export interface Round {
  _id: UID;
  roundMembers: UID[]; // RoundMember
  clientGame?: ClientGame;
  icon?: string;
}


export interface RoundMember {
  _id: UID;
  player: UID; // Player
  scoresLine: number[];
}

export interface RoundCfg {
  _id: string;
  icon: string;
  initialScoresLine: number[];
}

export type Persist = {
  gameType: string | null;
  games: {
    [key in GameType]: IGamer[];
  } | null;
};



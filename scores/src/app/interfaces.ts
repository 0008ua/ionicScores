export interface IUser {
  _id?: string;
  name: string;
  password: string;
  role?: 'member' | 'guest';
  // gamers?: Pick<IGamer, '_id'>;
  // games?: Pick<IGame, '_id'>;
  createdAt?: string;
  updatedAt?: string;
}

export type Colors = 'red' | 'green' | 'blue' | 'black' | 'yellow';

export interface IGamer {
  _id?: string;
  owner?: string; //Pick<IUser, '_id'>;
  name: string;
  uniqueName?: string;
  color: Colors;
  createdAt?: string;
  updatedAt?: string;
}

// export interface IGame {
//   _id?: string;
//   type: string;
//   owner: string; //Pick<IUser, '_id'>;
//   rounds: {
//     _id?: string;
//     roundName: string;
//     scores: {
//       _id?: string;
//       gamer_id: string;
//       gamerName: string;
//       gamerColor: string;
//       score: number;
//     }[];
//   }[];
//   createdAt?: string;
//   updatedAt?: string;
//   finaly?: {
//     _id?: string;
//     gamer_id: string; // Pick<IGamer, '_id'>;
//     score: number;
//   };
// }

export interface IGame {
  _id?: string;
  type: string;
  owner?: string; //Pick<IUser, '_id'>;
  rounds: {
    _id?: string;
    players: {
      _id?: string;
      score: number
    }[];
  }[];
  createdAt?: string;
  updatedAt?: string;
 
}

export interface ClientGame {
  _id: string;
  type: string;
}

export interface Round {
  _id: string;
  players: {
    _id: string;
    scoresLine: number[];
  }[];
  clientGame?: ClientGame;
  icon?: string;
}

export interface RoundCfg {
  _id: string;
  icon: string;
  initialScoresLine: number[];
}




// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  appVersion: require('../../package.json').version + '-dev',
  host: '',
  // host: 'https://10.0.2.2:8084/',
  production: false,
  games: {
    uno: {
      maxPlayersQty: 10,
      mштPlayersQty: 2,
      playersColors: ['black'],
      rounds: [
        {
          _id: 'start',
          icon: 'log-out-outline',
          initialScoresLine: [],
        },
        {
          _id: 'unoRound',
          icon: 'trail-sign-outline',
          initialScoresLine: [],
        },
      ]
    },
    train: {
      maxPlayersQty: 5,
      mштPlayersQty: 2,
      playersColors: ['red', 'green', 'blue', 'black', 'yellow'],
      routeScores: [5, 6, 7, 8, 9, 10, 11, 12, 13, 20, 21],
      cars: [
        { qty: 1, score: 1 },
        { qty: 2, score: 2 },
        { qty: 3, score: 4 },
        { qty: 4, score: 7 },
        { qty: 6, score: 15 },
        { qty: 8, score: 21 },
      ],
      stats: [
        {
          _id: 'getRaitingByWins',
          icon: 'trophy-outline',
          name: 'byWins',
        },
        {
          _id: 'getRaitingByWinsToGames',
          icon: 'podium-outline',
          name: 'byWinsToGames',
        }
      ],
      rounds: [
        {
          _id: 'start',
          icon: 'log-out-outline',
          initialScoresLine: [],
        },
        {
          _id: 'routes',
          icon: 'trail-sign-outline',
          initialScoresLine: [],
        },
        {
          _id: 'length',
          icon: 'code-working-outline',
          initialScoresLine: [],
        },
        {
          _id: 'stations',
          icon: 'prism-outline',
          initialScoresLine: [4, 4, 4],
        },
        {
          _id: 'cars',
          icon: 'train-outline',
          initialScoresLine: [],
        },

      ]
    }
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

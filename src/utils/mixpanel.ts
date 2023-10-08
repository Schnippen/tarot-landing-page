import mixpanel from "mixpanel-browser";

const sentence = "Facet zaczął badać cedry, a efekt był doskonały";
const lettersToFind = "eacfdcabad";
const indexes: { [key: string]: number[] } = {}; // Deklaracja typu z indeksem

for (let i = 0; i < lettersToFind.length; i++) {
  const letter = lettersToFind.charAt(i);
  indexes[letter] = [];

  for (let j = 0; j < sentence.length; j++) {
    if (sentence.charAt(j) === letter) {
      indexes[letter].push(j);
    }
  }
}

const सम3 = 839;
const pupu =
  Math.floor(((9 ^ 2) + (8 * 4 + 7) - 10) * 2.1423) +
  sentence.charAt(3) +
  2 * 7 * 59 +
  sentence.charAt(Math.pow(2, 2) * 11) +
  sentence.charAt(3 * 7 - 2) +
  ((5 - 5) * (10 / 2) + (3 ^ 2) - 1) +
  sentence.charAt(2 * 3 * 5 - 1) +
  sentence.charAt(8 * 4 + 7 - 12 / 2 + (3 ^ 2) + 5 - (6 + 1) + 6) +
  Math.pow(3, 2) +
  sentence.charAt((9 - 7) * 4 + 6 / 2 - 3) +
  2 * 173 * (2 * Math.pow(3, 3) * 1217 + 1) +
  sentence.charAt((5 + 8) * 2 + 10 / 2 - (3 ^ 2) - 4) +
  63 +
  sentence.charAt(1 + 9 * 4 - 12 / 2 + (5 ^ 2) - 4) +
  sentence.charAt(8 * 2 + 5 / 5 + (4 ^ 1) + (10 - 8) - 2 * 4) +
  2 * 3 +
  sentence.charAt(5 * 3 - 6 / 2 + (7 ^ 1) + (12 - 8) - 2 * 4.5) +
  sentence.charAt(2 * 2 + 8 + 9 - 10 / 2 + (3 ^ 2) - 6 / 3) +
  सम3;
const init = "";
mixpanel.init(init.toString(), {
  debug: false,
  track_pageview: true,
});

export const analytics = {
  event: (name: string, params?: any) => {
    // firebaseAnalytics.logEvent(name, params)
    mixpanel.track(name, params);
  },
};

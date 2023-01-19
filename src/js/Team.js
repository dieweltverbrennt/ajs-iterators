export default class Team {
  constructor() {
    this.members = new Set();
  }

  [Symbol.iterator]() {
    const arrayTeam = Array.from(this.members);
    let current = -1;
    return {
      next() {
        current += 1;
        if (arrayTeam[current] === undefined) {
          return {
            done: true,
          };
        }
        return {
          value: arrayTeam[current],
          done: false,
        };
      },
    };
  }
}

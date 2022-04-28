/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {

  await knex('user_schedule').insert([
    { id: 1, userId: '1', date: "", time: "", events: "study session", tasks: "study Algorithms", docs: "https://en.wikipedia.org/wiki/Algorithm", comments: "yoooooooo" },
    { id: 2, userId: '1', date: "", time: "", events: "study session", tasks: "study Japanese", docs: "https://jisho.org", comments: "yoooooooo" },
    { id: 3, userId: '1', date: "", time: "", events: "study session", tasks: "study Javascript", docs: "https://developer.mozilla.org/en-US/", comments: "yoooooooo" }
  ]);
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {

  await knex('user_schedule').insert([
    { id: 1, userId: '1', date: "2022-04-29", time: "", events: "study session", tasks: "study Algorithms", docs: "https://en.wikipedia.org/wiki/Algorithm", comments: "yoooooooo" },
    { id: 2, userId: '1', date: "2022-04-30", time: "", events: "study session", tasks: "study Japanese", docs: "https://jisho.org", comments: "yoooooooo" },
    { id: 3, userId: '1', date: "2022-05-01", time: "", events: "study session", tasks: "study JavaScript", docs: "https://developer.mozilla.org/en-US/", comments: "yoooooooo" }
  ]);
};

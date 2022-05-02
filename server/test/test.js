process.env.NODE_ENV = "test";
const chai = require("chai");
const { expect, assert } = require("chai");
//const should = chai.should();
const chaiHttp = require("chai-http");
const knex = require("../db/knex");
const fixtures = require("./fixtures");

chai.use(chaiHttp);

describe("API Routes", function () {});

describe("User Table", () => {
  describe("setup", () => {
    it("should connect to database", () => {
      knex.raw("select 1 as result").catch(() => {
        assert.fail("unable to connect to database");
      });
    });

    it("has run the initial migration", () => {
      knex("user")
        .select()
        .catch(() => assert.fail("user table is not found."));
    });
  });
});
describe("User Schedule Table", () => {
  describe("setup", () => {
    it("should connect to database", () => {
      knex.raw("select 1 as result").catch(() => {
        assert.fail("unable to connect to database");
      });
    });

    it("has run the initial migration for user schedule table", () => {
      knex("user_schedule")
        .select()
        .catch(() => assert.fail("user schedule table is not found."));
    });
  });
});
describe("Docs Table", () => {
  describe("setup", () => {
    it("should connect to database", () => {
      knex.raw("select 1 as result").catch(() => {
        assert.fail("unable to connect to database");
      });
    });

    it("has run the initial migration for docs", () => {
      knex("docs")
        .select()
        .catch(() => assert.fail("docs table is not found."));
    });
  });
});
describe("Tasks Table", () => {
  describe("setup", () => {
    it("should connect to database", () => {
      knex.raw("select 1 as result").catch(() => {
        assert.fail("unable to connect to database");
      });
    });

    it("has run the initial migration for tasks table", () => {
      knex("tasks")
        .select()
        .catch(() => assert.fail("tasks table is not found."));
    });
  });
});
describe("Events Table", () => {
  describe("setup", () => {
    it("should connect to database", () => {
      knex.raw("select 1 as result").catch(() => {
        assert.fail("unable to connect to database");
      });
    });

    it("has run the initial migration for events table", () => {
      knex("events")
        .select()
        .catch(() => assert.fail("events table is not found."));
    });
  });
});

describe("user", () => {
  let userFixture;

  before(async () => {
    userFixture = fixtures.getUser();
    await knex("user")
      .insert({})
      .returning("id")
      .then((result) => {
        console.log("inserted test user");
      })
      .catch(console.error);
  });

  after(async () => {
    await knex("user")
      .where("id", userFixture.id)
      .returning("id")
      .del()
      .then((result) => {
        console.log("removed test user");
      })
      .catch(console.error);
  });

  describe("setup", () => {
    it("should connect to database", () => {
      knex.raw("select 1 as result").catch(() => {
        assert.fail("unable to connect to database");
      });
    });

    it("has run the initial migration", () => {
      knex("users")
        .select()
        .catch(() => assert.fail("user table is not found."));
    });
  });

  describe("getAll", () => {
    it("should return an array of users", async () => {
      const users = await userModel.getAll();
      expect(users).to.be.an.instanceof(Array);
      expect(users).to.exist();
    });

    it("should have a default limit of 100", async () => {
      const users = await userModel.getAll();
      expect(users.length).to.be.below(101);
    });

    it("should accept a limit argument", async () => {
      const users = await userModel.getAll(3);
      expect(users.length).to.eq(3);
    });
  });

  describe("getById", () => {
    context("when user exists", () => {
      it("should get users by id", async () => {
        const user = await userModel.getById(userFixture.id);
        expect(user).to.exist;
        expect(user.id).to.eq(userFixture.id);
      });
    });

    context("when user doesn't exist", () => {
      it("should return undefined", async () => {
        const user = await userModel.getById(45000);
        expect(user).to.be.undefined;
      });
    });
  });
  describe("create", () => {
    const newId = 9999;

    after(async () => {
      await knex.from("user").where("id", newId).del().catch(console.error);

      console.log("Deleted test user");
    });

    context("with valid properties", () => {
      it("should be able to create a new user", async () => {
        const newUser = {
          id: newId,
          email: "potato@dogemail.com",
          username: "potayooooo",
          first_name: "Potato",
          last_name: "Poop",
          password: "yooo123456",
        };

        const id = await userModel.create(newUser);
        const user = await knex("user").select().where("id", newId).first();
        expect(user).to.exist;
        expect(user.id).to.eq(newId);
      });
    });
  });
  describe("update", () => {
    context("with valid parameters", () => {
      after(async () => {
        await knex("user")
          .update({
            first_name: null,
          })
          .where("id", userFixture.id)
          .returning("id")
          .then((result) => {
            console.log("updated test user");
          })
          .catch(console.error);
      });

      it("should return the id", async () => {
        const id = await userModel.update(userFixture.id, {
          first_name: "Kyle",
        });
        expect(id).to.eq(userFixture.id);
      });

      it("should update the user", async () => {
        const user = await userModel.getById(userFixture.id);
        expect(user.firstName).to.eq("Bill");
      });
    });

    context("when invalid parameters", () => {
      it("shouldn't update the user", async () => {
        assert.throws(() => {
          userModel.update(userFixture.id, {
            first_food: "Pizza",
          });
        }, "Invalid field: favorite_food");
      });
    });
  });
});

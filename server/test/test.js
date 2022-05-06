// work in progress

const chai = require("chai");
const { expect, assert } = require("chai");
const chaiHttp = require("chai-http");
const knex = require("../db/knex");

chai.use(chaiHttp);
process.env.NODE_ENV = "test";

const userModel = require("../users/users.model");
const scheduleModel = require("../schedules/schedules.model");
const docModel = require("../docs/docs.model");
const taskModel = require("../tasks/tasks.model");
const eventModel = require("../events/events.model");

describe("User Table", () => {
  describe("setup", () => {
    it("should connect to database", () => {
      knex.raw("select 1 as result").catch(() => {
        assert.fail("unable to connect to database");
      });
    });

    it("has run the initial migration", () => {
      knex("user").select().catch(() => assert.fail("user table is not found."));
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
			knex("user_schedule").select().catch(() => assert.fail("user schedule table is not found."));
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
        }
,)
    })
});
describe("Tasks Table", () => {
	describe("setup", () => {
		it("should connect to database", () => {
			knex.raw("select 1 as result").catch(() => {
				assert.fail("unable to connect to database");
			});
		});

		it("has run the initial migration for tasks table", () => {
			knex("tasks").select().catch(() => assert.fail("tasks table is not found."));
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
			knex("events").select().catch(() => assert.fail("events table is not found."));
		});
	});
});

describe("user", () => {
	before(async () => {
		const testUser = {
			username: "test",
			first_name: "test",
			last_name: "test",
			email: "test",
			password: "test"
		};
		await knex("user")
			.insert(testUser)
			.returning("id")
			.then((result) => {})
			.catch(console.error);
	});

	after(async () => {
		await knex("user")
			.del()
			.where("username", "test")
			.returning("id")
			.then((result) => {})
			.catch(console.error);
	});

	describe("setup", () => {
		it("should connect to database", () => {
			knex.raw("select 1 as result").catch(() => {
				assert.fail("unable to connect to database");
			});
		});

		it("has run the initial migration", () => {
			knex("users").select().catch(() => assert.fail("user table is not found."));
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
		const existingId = 1;

		context("when user exists", () => {
			it("should get users by id", async () => {
				const user = await userModel.getById(existingId);
				expect(user).to.exist();
				expect(user.id).to.eq(existingId);
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
		const testUser = {
			username: "test",
			first_name: "test",
			last_name: "test",
			email: "test",
			password: "test"
		};

		after(async () => {
			await knex
				.from("user")
				.del()
				.where("username", "test")
				.catch(console.error);
		});

		context("with valid properties", () => {
			it("should be able to create a new user", async () => {
				await userModel.create(testUser);
				const user = await knex("user")
											.select()
											.where("username", "test")
											.first();
				expect(user).to.exist();
			});
		});
	});

	describe("update", () => {
		context("with valid parameters", () => {
			const testUser = {
				id: 99,
				username: "test",
				first_name: "test",
				last_name: "test",
				email: "test",
				password: "test"
			};

			before(async () => {
				await knex("user")
					.insert(testUser)
					.then((result) => {})
					.catch(console.error);
			});

			after(async () => {
				await knex("user")
					.from("user")
					.del()
					.where("username", "test")
					.catch(console.error);
			});

			it("should return the id", async () => {
				const id = await userModel.update(testUser.id, { first_name: "TEST" });
				expect(id).to.eq(testUser.id);
			});

			it("should update the user", async () => {
				const user = await userModel.getById(testUser.id);
				expect(user.firstName).to.eq("TEST");
			});
		});

		context("when invalid parameters", () => {
			it("shouldn't update the user", async () => {
				assert.throws(() => {
					userModel.update(testUser.id, { first_food: "Pizza" });
				}, "Invalid field: favorite_food");
			});
		});
	})
});

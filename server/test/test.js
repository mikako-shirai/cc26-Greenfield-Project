process.env.NODE_ENV = 'test';
const chai = require('chai');
const { expect, assert } = require('chai');
//const should = chai.should();
const chaiHttp = require('chai-http');
const knex = require("../db/knex");

chai.use(chaiHttp);

describe('API Routes', function () {

});

// const usersModel = require("../server/users/users.model");
//const USER_TABLE = usersModel.USER_TABLE;
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
        }
,)
    })
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
        }
,)
    })
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
            knex("tasks")
                .select()
                .catch(() => assert.fail("tasks table is not found."));
        }
,)
    })
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
        }
,)
    })
});
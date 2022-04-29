process.env.NODE_ENV = 'test';
const chai = require('chai');
const {expect, assert} = require('chai');
//const should = chai.should();
const chaiHttp = require('chai-http');
const knex = require("../db/knex");




chai.use(chaiHttp);

describe('API Routes', function() {

});

// const usersModel = require("../server/users/users.model");
//const USER_TABLE = usersModel.USER_TABLE;
describe("USER", () => {
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
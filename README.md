# cc26-Greenfield-Project
Morpho - web application that helps you organize your day


Set Up: 
npm i - install dependencies


postgres - 
CREATE TABLE cocoonmorpho;

npm install knex --save  //finished
npm install pg --save
knex migrate:make migration_create_user_table 
knex migrate:make migration_create_user_schedule
npx knex migrate:latest
npx knex seed:make 00_delete
npx knex seed:make 01_user 
npx knex seed:make 02_calendar
npx knex seed:make 03_user_schedule 

TODOLATER : table for docs, connect to schedule and user 
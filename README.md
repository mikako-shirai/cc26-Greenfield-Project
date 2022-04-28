# cc26-Greenfield-Project
Morpho - web application that helps you organize your day


Set Up: 
npm i - install dependencies


postgres - 
CREATE TABLE cocoonmorpho;

npm install knex --save  //finished
npm install pg --save
npx knex migrate:make migration_create_user_table 
npx knex migrate:make migration_create_events_table
npx knex migrate:make migration_create_tasks_table
npx knex migrate:make migration_create_docs_table
npx knex migrate:make migration_create_user_schedule
npx knex migrate:latest
npx knex seed:make 00_delete
npx knex seed:make 01_user 
npx knex seed:make 02_user_schedule 
npx knex seed:make 03_events //new
npx knex seed:make 04_tasks //new
npx knex seed:make 05_docs //new
npx knex migrate:rollback 
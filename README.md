# cc26-Greenfield-Project
Morpho - web application that helps you organize your day


Set Up: 
npm i - install dependencies


postgres CREATE TABLE something here
npm install knex --save  //finished
knex migrate:make migration_create_table //later double check
npx knex migrate:latest
npx knex seed:make 01_users //make seed stuff rename later
npx knex seed:make 02_posts
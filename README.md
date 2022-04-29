# cc26-Greenfield-Project

Morpho is a web application designed to help you organize your day. 
It includes a calendar that can add events, tasks, and documents. 

Set Up: 
Run `npm i` / `npm install` to  install dependencies. 
All back-end files are under the server folder. 
All front-end files are under the client folder. 

In a separate terminal, start postgres psql

Inside postgres run the following command to create a database:
`CREATE DATABASE cocoonmorpho;`

In your other terminal, please run the following to migrate and seed the database:

`npm run migrate-latest`
`npm run seed-data`

To check tests please run npm test or npm run test in your terminal. 

Enjoy your experience using Morpho!

Current Issues to Fix:
Buttons create duplicates to the right.
Front-end unable to pass data to the back-end.
Create more tests.


Future features to implement in the future: 
Log-in/Sign-up page.
Get reminder for today's task.
Organize schedule by work or school. 
A feature to write comments or notes.
Search for past events/tasks/documents.
Organize community events/schedules.
Communication feature to connect to other classmates or coworkers.
Check in for class/work place - status for communication feature (This feature is meant to show whether someone will be attending online or in person).
Be able to share/save documents.
Reminders based on weather or options for sustainability(Ex. bring an umbrella, bring eco-bag/waterbottle, etc.)
Log in as student/teacher/worker etc. 
Import schedules from other apps. 


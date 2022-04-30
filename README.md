# cc26 Greenfield Project
  
**Morpho** is a web application designed to help you organize your day.  
It includes a calendar that can add events, tasks, and documents.  
  

## Set Up  
1  
Run `npm i` or `npm install` in the terminal to  install dependencies.  
All *back-end* files are under the `./server` folder.  
All *front-end* files are under the `./src` folder.  
  
2  
In a *separate terminal*, start postgres psql  
`$ psql -U postgres`  
  
Inside postgres, run the following command to create a database:  
`$ CREATE DATABASE cocoonmorpho;`  
  
3  
In your *other terminal*, please run the following to migrate and seed the database:  
`$ npm run migrate-latest`  
`$ npm run seed-data`  
  
4  
To check tests, please run `npm test` or `npm run test` in your terminal.  
  
Enjoy your experience using **Morpho**!  
  
  
## Issues  
Current Issues to Fix:  
- [x] ~~Buttons create duplicates to the right.~~  
- [ ] ~~Front-end unable to pass data to the back-end.~~  Working on localhost, but not working on Heroku.
- [ ] Create more tests.  
  
  
## Backlog
Future features to implement in the future:  
- [ ] Log-in/Sign-up page.  
- [ ] Get reminder for today's task.  
- [ ] Organize schedule by work or school.  
- [ ] A feature to write comments or notes.  
- [ ] Search for past events/tasks/documents.  
- [ ] Organize community events/schedules.  
- [ ] Communication feature to connect to other classmates or coworkers.  
- [ ] Check in for class/work place - status for communication feature (This feature is meant to show whether someone will be attending online or in person).  
- [ ] Be able to share/save documents.  
- [ ] Reminders based on weather or options for sustainability(Ex. bring an umbrella, bring eco-bag/waterbottle, etc.)  
- [ ] Log in as student/teacher/worker etc.  
- [ ] Import schedules from other apps.  
  

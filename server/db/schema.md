# Schema Design

## User Table 
id
username 
first_name
last_name
email
password 

## Schedule Table 
id [pk]
userId [ref: user.id]     //from User Table
docId [ref: docs.id]      //from Doc Table
taskId [ref: tasks.id]    //from Task Table 
eventId [ref: events.id]  //from Event Table 
date_time

## Event Table 
id [pk]
event_name
description
date_time

## Task Table 
id [pk]
task_name
task_info
date_time

## Doc Table
id [pk]
doc
date_time

### adv feature future tables
separate table for event types 
event table reference event types
task types?

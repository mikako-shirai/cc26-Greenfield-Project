

User Table 
id //user id 
username 
first_name
last_name
email
password 

Schedule Table 
id 
userId //from User Table
date_time
eventId //from Event Table 
taskId //from Task Table 
docId //from Doc Table 

Event Table 
id 
event_name
description
date_time

Task Table 
id 
task_name
task_info
date_time

Doc Table
id
doc
date_time

adv feature future tables
separate table for event types 
event table reference event types
task types? 
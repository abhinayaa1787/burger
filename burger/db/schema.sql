
Drop database if exists burgers_db;
Create database burgers_db;
use  burgers_db;
Create table burger(
id  integer auto_increment,
burger_name varchar(50) not null,
devoured boolean not null,
primary key(id)
)










create Database mydata;

use mydata;

create table emptable(

userid int primary key auto_increment,
userName varchar(20) unique,
userAge int(20),
userNumber varchar(20)
);
create database product;
use product;

create table Goverment(

Stafid int primary key auto_increment,
Stafname varchar(20),
Stafwork varchar(20),
salary varchar (20)
);

insert into Goverment (Stafname,Stafwork,salary) value ("tamil","DGP",2000000),("Vicky","ADGP",1000000),("tamil","DGP",2000000)
,("Thangam","IPS",1500000),("Bharathi","IAS",150000),("kaviya","Asp",2000000),("reva","Al",2000000),("jo","Rc",2000000),("sam","SP",120000);

update Goverment set Stafwork="Bharathiakviya" where Stafid=6;
update Goverment set Stafwork="IAS" where Stafid=6;
update Goverment set Stafname="Bharathi Kaviya" where Stafid=6;

delete from Goverment where Stafid=1;

truncate table Goverment;
insert into Goverment (Stafname,Stafwork,salary) value ("tamil","DGP",2000000),("Vicky","ADGP",1000000),("tamil","DGP",2000000)
,("Thangam","IPS",1500000),("Bharathi","IAS",150000),("kaviya","Asp",2000000),("reva","Al",2000000),("jo","Rc",2000000),("sam","SP",120000);

rename table Goverment to Staffs;


create table Memberinfo(

Memberid int primary key auto_increment,
MemberName varchar(20),
MemberPosition varchar(20),
reviwe varchar (20)
);


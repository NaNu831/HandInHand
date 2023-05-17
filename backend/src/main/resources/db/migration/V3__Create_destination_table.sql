create table DESTINATION (
    ID INT PRIMARY KEY,
    NAME varchar(100) not null,
    ADDRESS_ID INT,
    foreign key (ADDRESS_ID) references address(ID)
);
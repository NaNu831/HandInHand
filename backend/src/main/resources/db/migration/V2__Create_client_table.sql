create table CLIENT (
    ID varchar(100) PRIMARY KEY,
    GENDER varchar(20) not null,
    NAME varchar(100) not null,
    PHONE_NUMBER varchar(100) not null,
    ADDRESS_ID INT,
    foreign key (ADDRESS_ID) references address(ID)
);
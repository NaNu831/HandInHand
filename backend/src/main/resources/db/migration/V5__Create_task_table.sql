create table TASK (
    ID INT PRIMARY KEY,
    TASK_SEQUENCE INT not null,
    TASK_YEAR INT not null,
    DESTINATION_DATE TIMESTAMP not null,
    STATE varchar(100) not null,
    CLIENT_ID INT,
    foreign key (CLIENT_ID) references client(ID),
    DESTINATION_ID INT,
    foreign key (DESTINATION_ID) references destination(ID),
    DRIVER_ID INT,
    foreign key (DRIVER_ID) references driver(ID)
);
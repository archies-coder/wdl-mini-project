create table if not exists users(
            id serial,
            email VARCHAR(255),
            password VARCHAR(255),
            PRIMARY KEY(id)
        );

CREATE TABLE IF NOT EXISTS doct (
        dno SERIAL,
        dname varchar(30) NOT NULL,
        dspec varchar(30) NOT NULL,
        dshow varchar(1) NOT NULL DEFAULT 'Y',
        PRIMARY KEY (dno)
    );

CREATE TABLE IF NOT EXISTS patient (
        pno SERIAL,
        pname varchar(30) NOT NULL,
        paddr varchar(30) NOT NULL,
        psex varchar(1) NOT NULL,
        pshow varchar(1) NOT NULL DEFAULT 'Y',
        PRIMARY KEY (pno)
    );

CREATE TABLE IF NOT EXISTS appt (
        ano SERIAL,
        adoctor INTEGER NOT NULL,
        apatient INTEGER NOT NULL,
        atime varchar(11) NOT NULL,
        ashow varchar(1) NOT NULL DEFAULT 'Y',
        adate date NOT NULL,
        PRIMARY KEY (ano)
    );
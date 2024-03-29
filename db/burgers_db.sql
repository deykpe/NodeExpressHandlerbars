CREATE DATABASE IF NOT EXISTS burgers_db;
USE burgers_db;

-- If the table already exists, remove it before trying to create the table again
DROP TABLE IF EXISTS burgers;

-- Create the burgers table
CREATE TABLE burgers (
    id int NOT NULL AUTO_INCREMENT,
    burger_name varchar(255) NOT NULL,
    devoured BOOL DEFAULT false,
    PRIMARY KEY (id)
);

INSERT INTO burgers (burger_name, devoured) VALUES ('Cheese Burger', FALSE);
INSERT INTO burgers (burger_name, devoured) VALUES ('Hamburger', FALSE);
INSERT INTO burgers (burger_name, devoured) VALUES ('Pizza Burger', FALSE);
INSERT INTO burgers (burger_name, devoured) VALUES ('Monster Burgerr', FALSE);
INSERT INTO burgers (burger_name, devoured) VALUES ('red Burger', FALSE);
INSERT INTO burgers (burger_name, devoured) VALUES ('blue Burger', FALSE);
INSERT INTO burgers (burger_name, devoured) VALUES ('black Burger', FALSE);
INSERT INTO burgers (burger_name, devoured) VALUES ('yellow Burger', FALSE);
INSERT INTO burgers (burger_name, devoured) VALUES ('purple Burger', FALSE);
INSERT INTO burgers (burger_name, devoured) VALUES ('white Burger', FALSE);

select * from burgers;

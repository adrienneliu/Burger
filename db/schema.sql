//CREATE DATABASE nbj2ogohnge4360w;
USE nbj2ogohnge4360w;

CREATE TABLE burgers(
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR (200) NOT NULL,
    devoured BOOLEAN DEFAULT FALSE,
    PRIMARY KEY (id)
);


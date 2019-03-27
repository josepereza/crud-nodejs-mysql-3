-- Creando la base de datos
CREATE DATABASE IF NOT EXISTS crudnodejsmysql;

-- Utilizando la bse de datos

USE crudnodejsmysql;

-- Creacion de tablas


CREATE TABLE IF NOT EXISTS customer (
	id INT(2) NOT NULL AUTO_INCREMENT,
	name VARCHAR(50) NOT NULL,
	address VARCHAR(100) NOT NULL,
	phone VARCHAR(15),
	PRIMARY KEY (id));

-- Mostrando las tablas

SHOW TABLES;

-- Para describir tabla especifica

describe customer;

--Eliminar tabla

DROP TABLE IF EXISTS equipo;

-- Insertar

INSERT INTO customer set

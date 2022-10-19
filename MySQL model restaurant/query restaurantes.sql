-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema restaurantes
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `restaurantes` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ;
USE `restaurantes` ;

-- -----------------------------------------------------
-- Table `restaurantes`.`locales`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `restaurantes`.`locales` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(60) NOT NULL,
  `direccion` MEDIUMTEXT NOT NULL,
  `telefono` CHAR(13) NOT NULL,
  `nombre_responsable` VARCHAR(60) NOT NULL,
  `estado` TINYINT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `direccion_UNIQUE` (`direccion` ASC) VISIBLE,
  UNIQUE INDEX `telefono_UNIQUE` (`telefono` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci;

-- -----------------------------------------------------
-- Insertar datos en tabla LOCALES
-- -----------------------------------------------------

Insert into restaurantes.locales (nombre,direccion,telefono,nombre_responsable,estado) values 
('Hamburguesas Pepe', 'Calle de la hamburguesa, 17,23412,Madrid','362548975','Jaime Blue',0),
('Pizzas Pepe', 'Calle de la pizza, 57,28290,Rozas','123459877','Elena Amarillo',1),
('Kebaps Pepe', 'Calle del kebap, 32,23417,Alicante','365966332','Berto Negro',0),
('Cocina Casera Pepe', 'Calle de la cocina, 2,23419,Madrid','916302565','Jorge Verde',1),
('Cervecería Pepe', 'Calle de la cervecería, 1,23418,Madrid','666332256','Maria Rosa',1),
('El mar Pepe', 'Calle del mar, 5,23414,Galicia','+34689754898','Juan Azul',1);


-- -----------------------------------------------------
-- Table `restaurantes`.`clientes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `restaurantes`.`clientes` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(60) NOT NULL,
  `telefono` VARCHAR(12) NULL,
  `email` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci;

-- -----------------------------------------------------
-- Insertar datos en la tabla clientes
-- -----------------------------------------------------

Insert into restaurantes.clientes (nombre,telefono,email) values 
('cliente1', 123456789,'cliente1@restaurante.com'),
('cliente2', 234567890,'cliente2@restaurante.com'),
('cliente3', 362458791,'cliente3@restaurante.com'),
('cliente4', 563215987,'cliente4@restaurante.com'),
('cliente5', 536245789,'cliente5@restaurante.com'),
('cliente6', 123658974,'cliente6@restaurante.com'),
('cliente7', 345678952,'cliente7@restaurante.com'),
('cliente8', 345678958,'cliente8@restaurante.com');



-- -----------------------------------------------------
-- Table `restaurantes`.`mesas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `restaurantes`.`mesas` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `numero_mesa` INT NOT NULL,
  `numero_comensales` INT NOT NULL,
  `estado_mesa` TINYINT NOT NULL,
  `locales_id` INT NULL,
  `clientes_id` INT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_mesas_locales1_idx` (`locales_id` ASC) VISIBLE,
  INDEX `fk_mesas_clientes1_idx` (`clientes_id` ASC) VISIBLE,
  CONSTRAINT `fk_mesas_locales1`
    FOREIGN KEY (`locales_id`)
    REFERENCES `restaurantes`.`locales` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_mesas_clientes1`
    FOREIGN KEY (`clientes_id`)
    REFERENCES `restaurantes`.`clientes` (`id`)
    ON DELETE SET NULL
    ON UPDATE SET NULL)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci;

-- -----------------------------------------------------
-- Insertar datos en la tabla clientes
-- -----------------------------------------------------

Insert into restaurantes.mesas (numero_mesa,numero_comensales,estado_mesa,locales_id,clientes_id) values
#local 1 --> 8 mesas
(1,4,1,1,1),(2,4,0,1,null),(3,4,1,1,2),(4,5,1,1,4),(5,3,0,1,null),(6,2,0,1,null),(7,8,0,1,null),(8,4,1,1,7), #4 mesas ocupadas
#local 2 --> 6 mesas
(1,4,0,2,null),(2,4,1,2,2),(3,4,0,2,null),(4,5,0,2,null),(5,3,0,2,null),(6,2,0,2,null),(7,8,0,2,null),(8,4,0,2,null), #1 mesa ocupada
#local 3 --> 8 mesas
(1,4,0,3,null),(2,4,0,3,null),(3,4,0,3,null),(4,5,0,3,null),(5,3,0,3,null),(6,2,0,3,null),(7,8,0,3,null),(8,4,0,3,null), #no hay reservas
#local 4 --> 7 mesas
(1,4,1,4,5),(2,4,0,4,null),(3,4,0,4,null),(4,5,0,4,null),(5,3,0,4,null),(6,2,0,4,null),(7,8,0,4,null),(8,4,0,4,null),
#local 5 --> 6 mesas
(1,4,1,5,2),(2,4,1,5,3),(3,4,1,5,5),(4,5,1,5,4),(5,3,1,5,1),(6,2,1,5,6),(7,8,1,5,7),(8,4,1,5,8), #restaurante completo
#local 6 --> 8 mesas
(1,4,1,6,3),(2,4,1,6,1),(3,4,0,6,null),(4,5,1,6,6),(5,3,0,6,null),(6,2,1,6,8),(7,8,1,6,7),(8,4,0,6,null); #5 mesas ocupadas


-- -----------------------------------------------------
-- Table `restaurantes`.`favoritos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `restaurantes`.`favoritos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `clientes_id` INT NULL,
  `locales_id` INT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_clientes_has_locales_locales1_idx` (`locales_id` ASC) VISIBLE,
  INDEX `fk_clientes_has_locales_clientes1_idx` (`clientes_id` ASC) VISIBLE,
  CONSTRAINT `fk_clientes_has_locales_clientes1`
    FOREIGN KEY (`clientes_id`)
    REFERENCES `restaurantes`.`clientes` (`id`)
    ON DELETE RESTRICT
    ON UPDATE RESTRICT,
  CONSTRAINT `fk_clientes_has_locales_locales1`
    FOREIGN KEY (`locales_id`)
    REFERENCES `restaurantes`.`locales` (`id`)
    ON DELETE RESTRICT
    ON UPDATE RESTRICT)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci;

-- -----------------------------------------------------
-- Insertar datos en la tabla favoritos
-- -----------------------------------------------------

INSERT INTO restaurantes.favoritos (clientes_id,locales_id) values 
(1,6),(1,4),(1,3),
(3,4),(3,2),(3,5),
(5,1),(5,2),(5,5),(5,6);


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;












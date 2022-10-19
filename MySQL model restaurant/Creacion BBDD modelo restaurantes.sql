-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema restaurantes
-- -----------------------------------------------------

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
  `nombre` VARCHAR(60) NULL,
  `direccion` VARCHAR(150) NULL,
  `telefono` CHAR(13) NOT NULL,
  `nombre_responsable` VARCHAR(60) NOT NULL,
  `estado` TINYINT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci;


-- -----------------------------------------------------
-- Table `restaurantes`.`mesas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `restaurantes`.`mesas` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `numero_mesa` INT NOT NULL,
  `numero_comensales` INT NOT NULL,
  `estado` TINYINT NOT NULL,
  `locales_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_mesas_locales1_idx` (`locales_id` ASC),
  CONSTRAINT `fk_mesas_locales1`
    FOREIGN KEY (`locales_id`)
    REFERENCES `restaurantes`.`locales` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci;


-- -----------------------------------------------------
-- Table `restaurantes`.`cliente`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `restaurantes`.`cliente` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(60) NOT NULL,
  `telefono` VARCHAR(12) NULL,
  `email` VARCHAR(50) NOT NULL,
  `reserva` TINYINT NOT NULL,
  `mesas_id` INT NOT NULL,
  PRIMARY KEY (`id`, `mesas_id`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC),
  INDEX `fk_cliente_mesas1_idx` (`mesas_id` ASC),
  CONSTRAINT `fk_cliente_mesas1`
    FOREIGN KEY (`mesas_id`)
    REFERENCES `restaurantes`.`mesas` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci;


-- -----------------------------------------------------
-- Table `restaurantes`.`favoritos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `restaurantes`.`favoritos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `cliente_id` INT NOT NULL,
  `locales_id` INT NOT NULL,
  INDEX `fk_cliente_has_locales_locales1_idx` (`locales_id` ASC),
  INDEX `fk_cliente_has_locales_cliente1_idx` (`cliente_id` ASC),
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_cliente_has_locales_cliente1`
    FOREIGN KEY (`cliente_id`)
    REFERENCES `restaurantes`.`cliente` (`id`)
    ON DELETE RESTRICT
    ON UPDATE RESTRICT,
  CONSTRAINT `fk_cliente_has_locales_locales1`
    FOREIGN KEY (`locales_id`)
    REFERENCES `restaurantes`.`locales` (`id`)
    ON DELETE RESTRICT
    ON UPDATE RESTRICT)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

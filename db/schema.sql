CREATE DATABASE `burgersdb`;

USE `burgersdb`;

CREATE TABLE `burgersdb`.`burgers` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `burger_name` VARCHAR(255) NOT NULL,
  `devoured` TINYINT(1) DEFAULT 0,
  `date` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`));
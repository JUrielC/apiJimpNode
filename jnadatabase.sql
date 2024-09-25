-- MySQL Script generated by MySQL Workbench
-- Tue Sep 24 18:15:22 2024
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema jnadatabase
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema jnadatabase
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `jnadatabase` DEFAULT CHARACTER SET utf8 ;
USE `jnadatabase` ;

-- -----------------------------------------------------
-- Table `jnadatabase`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `jnadatabase`.`users` (
  `id_user` INT NOT NULL AUTO_INCREMENT,
  `user_name` VARCHAR(20) NOT NULL,
  `password` VARCHAR(60) NOT NULL,
  PRIMARY KEY (`id_user`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `jnadatabase`.`images`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `jnadatabase`.`images` (
  `id_image` INT NOT NULL AUTO_INCREMENT,
  `nombre_image` VARCHAR(30) NOT NULL,
  `url_image` VARCHAR(260) NOT NULL,
  `users_id_user` INT NOT NULL,
  PRIMARY KEY (`id_image`),
  INDEX `fk_images_users_idx` (`users_id_user` ASC) VISIBLE,
  CONSTRAINT `fk_images_users`
    FOREIGN KEY (`users_id_user`)
    REFERENCES `jnadatabase`.`users` (`id_user`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


INSERT INTO `jnadatabase`.`users` (`user_name`, `password`) VALUES
('user0', '$2b$10$OMSFaTUWkohTk0FOkzqMkuub2I9aT8mif4Px8FyMai.rJ7Wb/z/hK'),
('user1', '$2b$10$YBg/YRujhqdAFSeyThvQCOBVJ.KzeyXlXBueyPPZFDmBAJ8QgpM02');


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

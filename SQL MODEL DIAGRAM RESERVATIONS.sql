-- MySQL Script generated by MySQL Workbench
-- Tue Aug 20 16:11:59 2019
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema HotelReservation
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `HotelReservation` ;

-- -----------------------------------------------------
-- Schema HotelReservation
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `HotelReservation` ;
USE `HotelReservation` ;

-- -----------------------------------------------------
-- Table `HotelReservation`.`amenity`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `HotelReservation`.`amenity` ;

CREATE TABLE IF NOT EXISTS `HotelReservation`.`amenity` (
  `amenityId` INT(10) UNSIGNED NOT NULL,
  `amenity_name` VARCHAR(45) NULL DEFAULT NULL,
  `cost` INT NULL,
  PRIMARY KEY (`amenityId`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `HotelReservation`.`customer`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `HotelReservation`.`customer` ;

CREATE TABLE IF NOT EXISTS `HotelReservation`.`customer` (
  `customerId` INT(10) UNSIGNED NOT NULL,
  `firstname` VARCHAR(45) NOT NULL,
  `lastname` VARCHAR(45) NOT NULL,
  `email` VARCHAR(60) NULL DEFAULT NULL,
  `username` VARCHAR(45) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `role` VARCHAR(255) NULL DEFAULT NULL,
  `type` VARCHAR(65) NULL,
  PRIMARY KEY (`customerId`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `HotelReservation`.`employee`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `HotelReservation`.`employee` ;

CREATE TABLE IF NOT EXISTS `HotelReservation`.`employee` (
  `employeeId` INT(10) UNSIGNED NOT NULL,
  `firstname` VARCHAR(45) NOT NULL,
  `lastname` VARCHAR(45) NOT NULL,
  `position` VARCHAR(45) NOT NULL,
  `emp_hotelId` INT(10) UNSIGNED NOT NULL,
  `end_shift` VARCHAR(255) NULL DEFAULT NULL,
  `start_shift` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`employeeId`, `emp_hotelId`),
  INDEX `fk_emp_hotelId` (`emp_hotelId` ASC) VISIBLE,
  CONSTRAINT `fk_emp_hotelId`
    FOREIGN KEY (`emp_hotelId`)
    REFERENCES `HotelReservation`.`hotel` (`hotelId`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `HotelReservation`.`hibernate_sequence`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `HotelReservation`.`hibernate_sequence` ;

CREATE TABLE IF NOT EXISTS `HotelReservation`.`hibernate_sequence` (
  `next_val` BIGINT(20) NULL DEFAULT NULL)
ENGINE = MyISAM
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `HotelReservation`.`hotel`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `HotelReservation`.`hotel` ;

CREATE TABLE IF NOT EXISTS `HotelReservation`.`hotel` (
  `hotelId` INT(10) UNSIGNED NOT NULL,
  `hotel_name` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`hotelId`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `HotelReservation`.`quantity`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `HotelReservation`.`quantity` ;

CREATE TABLE IF NOT EXISTS `HotelReservation`.`quantity` (
  `id` INT NOT NULL,
  `amount` INT(11) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `HotelReservation`.`reservation_amenities`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `HotelReservation`.`reservation_amenities` ;

CREATE TABLE IF NOT EXISTS `HotelReservation`.`reservation_amenities` (
  `amenity` INT(10) UNSIGNED NOT NULL,
  `reservation` INT(10) UNSIGNED NOT NULL,
  PRIMARY KEY (`amenity`, `reservation`),
  INDEX `fk_amenity_has_roomreservation_roomreservation1_idx` (`reservation` ASC) VISIBLE,
  INDEX `fk_amenity_has_roomreservation_amenity1_idx` (`amenity` ASC) VISIBLE,
  CONSTRAINT `fk_amenity_has_roomreservation_amenity1`
    FOREIGN KEY (`amenity`)
    REFERENCES `HotelReservation`.`amenity` (`amenityId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_amenity_has_roomreservation_roomreservation1`
    FOREIGN KEY (`reservation`)
    REFERENCES `HotelReservation`.`roomreservation` (`room_reservationId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `HotelReservation`.`room`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `HotelReservation`.`room` ;

CREATE TABLE IF NOT EXISTS `HotelReservation`.`room` (
  `roomId` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `room_number` VARCHAR(55) NULL DEFAULT NULL,
  `room_hotelId` INT(10) UNSIGNED NOT NULL,
  `room_roomtypeId` INT(10) NOT NULL,
  `available` TINYINT NULL,
  `cancel` TINYINT(1) NULL DEFAULT 1,
  PRIMARY KEY (`roomId`),
  INDEX `fk_room_room_typeid_idx` (`room_roomtypeId` ASC) VISIBLE,
  INDEX `fk_room_hotelid` (`room_hotelId` ASC) VISIBLE,
  CONSTRAINT `fk_room_hotelid`
    FOREIGN KEY (`room_hotelId`)
    REFERENCES `HotelReservation`.`hotel` (`hotelId`),
  CONSTRAINT `fk_room_roomtypeid`
    FOREIGN KEY (`room_roomtypeId`)
    REFERENCES `HotelReservation`.`roomtype` (`room_typeId`))
ENGINE = InnoDB
AUTO_INCREMENT = 16
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `HotelReservation`.`roomrating`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `HotelReservation`.`roomrating` ;

CREATE TABLE IF NOT EXISTS `HotelReservation`.`roomrating` (
  `roomratingId` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `rating` INT(10) UNSIGNED NOT NULL,
  `roomrating_roomId` INT(10) UNSIGNED NOT NULL,
  `roomrating_customerId` INT(10) UNSIGNED NOT NULL,
  `comments` VARCHAR(255) NULL,
  PRIMARY KEY (`roomratingId`),
  UNIQUE INDEX `fk_roomrating_customerId` (`rating` ASC, `roomrating_roomId` ASC, `roomrating_customerId` ASC) VISIBLE,
  INDEX `fk_roomrating_roomId` (`roomrating_roomId` ASC) VISIBLE,
  INDEX `fk_roomrating_customerId_idx` (`roomrating_customerId` ASC) VISIBLE,
  CONSTRAINT `fk_roomrating_customerId`
    FOREIGN KEY (`roomrating_customerId`)
    REFERENCES `HotelReservation`.`customer` (`customerId`),
  CONSTRAINT `fk_roomrating_roomId`
    FOREIGN KEY (`roomrating_roomId`)
    REFERENCES `HotelReservation`.`room` (`roomId`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `HotelReservation`.`roomreservation`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `HotelReservation`.`roomreservation` ;

CREATE TABLE IF NOT EXISTS `HotelReservation`.`roomreservation` (
  `room_reservationId` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `reservation_roomId` INT(10) UNSIGNED NOT NULL,
  `checkin` DATE NOT NULL,
  `checkout` DATE NOT NULL,
  `total` DECIMAL(12,2) NULL DEFAULT NULL,
  `reservation_customerId` INT(10) UNSIGNED NOT NULL,
  `reservation_details` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`room_reservationId`),
  INDEX `fk_reservation_customerId` (`reservation_customerId` ASC) VISIBLE,
  INDEX `fk_reservation_roomId` (`reservation_roomId` ASC) VISIBLE,
  CONSTRAINT `fk_reservation_customerId`
    FOREIGN KEY (`reservation_customerId`)
    REFERENCES `HotelReservation`.`customer` (`customerId`),
  CONSTRAINT `fk_reservation_roomId`
    FOREIGN KEY (`reservation_roomId`)
    REFERENCES `HotelReservation`.`room` (`roomId`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `HotelReservation`.`roomtype`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `HotelReservation`.`roomtype` ;

CREATE TABLE IF NOT EXISTS `HotelReservation`.`roomtype` (
  `room_typeId` INT(11) NOT NULL,
  `price` INT(11) NOT NULL,
  `room_type` ENUM('Single Room', 'Double Room', 'Family Room', 'Suite') NOT NULL,
  `quantity_id` INT NOT NULL,
  PRIMARY KEY (`room_typeId`),
  INDEX `room_typeid` (`room_typeId` ASC) VISIBLE,
  INDEX `fk_roomtype_quantity1_idx` (`quantity_id` ASC) VISIBLE,
  CONSTRAINT `fk_roomtype_quantity1`
    FOREIGN KEY (`quantity_id`)
    REFERENCES `HotelReservation`.`quantity` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

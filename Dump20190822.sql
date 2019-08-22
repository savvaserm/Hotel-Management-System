-- MySQL dump 10.13  Distrib 8.0.16, for Win64 (x86_64)
--
-- Host: localhost    Database: hotelreservation
-- ------------------------------------------------------
-- Server version	8.0.16

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `amenity`
--

DROP TABLE IF EXISTS `amenity`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `amenity` (
  `amenityId` int(10) unsigned NOT NULL,
  `amenity_name` varchar(45) DEFAULT NULL,
  `cost` int(11) DEFAULT NULL,
  `amenity_reservations` int(10) unsigned DEFAULT NULL,
  PRIMARY KEY (`amenityId`),
  KEY `fk_reservations_idx` (`amenity_reservations`),
  CONSTRAINT `fk_reservations` FOREIGN KEY (`amenity_reservations`) REFERENCES `roomreservation` (`room_reservationId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `amenity`
--

LOCK TABLES `amenity` WRITE;
/*!40000 ALTER TABLE `amenity` DISABLE KEYS */;
INSERT INTO `amenity` VALUES (1,'Gym',5,NULL),(2,'Pool',5,NULL),(3,'Spa-Sauna',10,NULL),(4,'Minibar',5,NULL),(5,'Breakfast',10,NULL);
/*!40000 ALTER TABLE `amenity` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customer`
--

DROP TABLE IF EXISTS `customer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `customer` (
  `customerId` int(10) unsigned NOT NULL,
  `firstname` varchar(45) DEFAULT NULL,
  `lastname` varchar(45) DEFAULT NULL,
  `email` varchar(60) DEFAULT NULL,
  `username` varchar(45) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL,
  `type` varchar(65) DEFAULT NULL,
  PRIMARY KEY (`customerId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer`
--

LOCK TABLES `customer` WRITE;
/*!40000 ALTER TABLE `customer` DISABLE KEYS */;
INSERT INTO `customer` VALUES (4,'Savvas','Ermidis','savvas@domain.com','savvas','$2a$10$EMl9mE78tzQA2Bp6UDN6QOeReM5BdHkzfZvRzlDLe2DRUs0YScJny','USER','REGULAR'),(5,'Lionel','Messi','leo@domain.com','messi','$2a$10$h0QpnJyQu9FQKR1.WJyU8eUgX347fTCDWNKZXpebsbfq43ol95RWi','USER','NEW'),(6,'Savvas','Rmds','ermidis@domain.com','ermidis','$2a$10$4YjCoxNyPFyYnLmW8U6Ucuq4jD6FEsgc9DZZXq4TF0DvzzkZKhN4m','USER','REGULAR'),(261,'Savvas','Savvidis','savvidis@domain.com','savvidis','$2a$10$RRRROl6m0zfYHz1spEbByOdTfkc1JlUvbCowF7owZPJrCynoVH5Nm','USER','NEW');
/*!40000 ALTER TABLE `customer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `employee`
--

DROP TABLE IF EXISTS `employee`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `employee` (
  `employeeId` int(10) unsigned NOT NULL,
  `firstname` varchar(45) NOT NULL,
  `lastname` varchar(45) NOT NULL,
  `position` varchar(45) NOT NULL,
  `emp_hotelId` int(10) unsigned NOT NULL,
  `end_shift` varchar(255) DEFAULT NULL,
  `start_shift` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`employeeId`,`emp_hotelId`),
  KEY `fk_emp_hotelId` (`emp_hotelId`),
  CONSTRAINT `fk_emp_hotelId` FOREIGN KEY (`emp_hotelId`) REFERENCES `hotel` (`hotelId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employee`
--

LOCK TABLES `employee` WRITE;
/*!40000 ALTER TABLE `employee` DISABLE KEYS */;
INSERT INTO `employee` VALUES (1,'Employee1','Employee1','Reception',1,'16:00:00','08:00:00'),(2,'Employee2','Employee2','Chef',1,'16:00:00','08:00:00'),(3,'Employee3','Employee3','Security',1,'16:00:00','08:00:00'),(4,'Employee4','Employee4','Waiter',1,'16:00:00','08:00:00'),(5,'Employee5','Employee5','Reception',1,'08:00:00','16:00:00'),(6,'Employee6','Employee6','Waiter',1,'16:00:00','08:00:00'),(7,'Employee7','Employee7','Cook',1,'16:00:00','08:00:00');
/*!40000 ALTER TABLE `employee` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hibernate_sequence`
--

DROP TABLE IF EXISTS `hibernate_sequence`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `hibernate_sequence` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hibernate_sequence`
--

LOCK TABLES `hibernate_sequence` WRITE;
/*!40000 ALTER TABLE `hibernate_sequence` DISABLE KEYS */;
INSERT INTO `hibernate_sequence` VALUES (315),(315);
/*!40000 ALTER TABLE `hibernate_sequence` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hotel`
--

DROP TABLE IF EXISTS `hotel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `hotel` (
  `hotelId` int(10) unsigned NOT NULL,
  `hotel_name` varchar(255) NOT NULL,
  PRIMARY KEY (`hotelId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hotel`
--

LOCK TABLES `hotel` WRITE;
/*!40000 ALTER TABLE `hotel` DISABLE KEYS */;
INSERT INTO `hotel` VALUES (1,'Hotel 1');
/*!40000 ALTER TABLE `hotel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `quantity`
--

DROP TABLE IF EXISTS `quantity`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `quantity` (
  `id` int(11) NOT NULL,
  `amount` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `quantity`
--

LOCK TABLES `quantity` WRITE;
/*!40000 ALTER TABLE `quantity` DISABLE KEYS */;
INSERT INTO `quantity` VALUES (1,8),(2,2),(3,5),(4,1);
/*!40000 ALTER TABLE `quantity` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reservation_amenities`
--

DROP TABLE IF EXISTS `reservation_amenities`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `reservation_amenities` (
  `amenity` int(10) unsigned NOT NULL,
  `reservation` int(10) unsigned NOT NULL,
  PRIMARY KEY (`amenity`,`reservation`),
  KEY `fk_reservation_idx` (`reservation`),
  CONSTRAINT `fk_amenity` FOREIGN KEY (`amenity`) REFERENCES `amenity` (`amenityId`),
  CONSTRAINT `fk_reservation` FOREIGN KEY (`reservation`) REFERENCES `roomreservation` (`room_reservationId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reservation_amenities`
--

LOCK TABLES `reservation_amenities` WRITE;
/*!40000 ALTER TABLE `reservation_amenities` DISABLE KEYS */;
/*!40000 ALTER TABLE `reservation_amenities` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `room`
--

DROP TABLE IF EXISTS `room`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `room` (
  `roomId` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `room_number` varchar(55) DEFAULT NULL,
  `room_hotelId` int(10) unsigned DEFAULT NULL,
  `room_roomtypeId` int(10) DEFAULT NULL,
  `available` tinyint(1) DEFAULT '1',
  `cancel` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`roomId`),
  KEY `fk_room_room_typeid_idx` (`room_roomtypeId`),
  KEY `fk_room_hotelid` (`room_hotelId`),
  CONSTRAINT `fk_room_hotelid` FOREIGN KEY (`room_hotelId`) REFERENCES `hotel` (`hotelId`),
  CONSTRAINT `fk_room_roomtypeid` FOREIGN KEY (`room_roomtypeId`) REFERENCES `roomtype` (`room_typeId`)
) ENGINE=InnoDB AUTO_INCREMENT=69 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `room`
--

LOCK TABLES `room` WRITE;
/*!40000 ALTER TABLE `room` DISABLE KEYS */;
INSERT INTO `room` VALUES (1,'Room 100',1,1,1,1),(2,'Room 101',1,1,1,0),(3,'Room 102',1,2,0,1),(4,'Room 103',1,3,1,0),(5,'Room 104',1,3,1,1),(6,'Room 200',1,1,1,1),(7,'Room 201',1,1,1,1),(8,'Room 202',1,2,1,0),(9,'Room 203',1,3,1,0),(10,'Room 204',1,3,1,0),(11,'Room 300',1,1,1,1),(12,'Room 301',1,1,1,1),(13,'Room 302',1,3,1,0),(14,'Room 303',1,4,0,1),(15,'Room 304',1,4,1,0),(16,'Room 305',1,3,1,1),(17,'Room 306',1,2,1,1),(18,'Room 307',1,1,1,0),(19,'Room 308',1,2,1,0),(20,'Room 309',1,1,1,1);
/*!40000 ALTER TABLE `room` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roomrating`
--

DROP TABLE IF EXISTS `roomrating`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `roomrating` (
  `roomratingId` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `rating` int(10) unsigned NOT NULL,
  `comments` varchar(255) DEFAULT NULL,
  `roomrating_roomId` int(10) unsigned DEFAULT NULL,
  `roomrating_customerId` int(10) unsigned DEFAULT NULL,
  PRIMARY KEY (`roomratingId`),
  KEY `fk_roomrating_customerId_idx` (`roomrating_customerId`),
  KEY `fk_room_idx` (`roomrating_roomId`),
  CONSTRAINT `fk_customer` FOREIGN KEY (`roomrating_customerId`) REFERENCES `customer` (`customerId`),
  CONSTRAINT `fk_room` FOREIGN KEY (`roomrating_roomId`) REFERENCES `room` (`roomId`)
) ENGINE=InnoDB AUTO_INCREMENT=303 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roomrating`
--

LOCK TABLES `roomrating` WRITE;
/*!40000 ALTER TABLE `roomrating` DISABLE KEYS */;
INSERT INTO `roomrating` VALUES (295,3,'Good',1,4),(297,5,'Perfect',14,4),(299,2,'Not so good',3,5),(302,4,'very good',1,5);
/*!40000 ALTER TABLE `roomrating` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roomreservation`
--

DROP TABLE IF EXISTS `roomreservation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `roomreservation` (
  `room_reservationId` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `reservation_roomId` int(10) unsigned NOT NULL,
  `checkin` date DEFAULT NULL,
  `checkout` date DEFAULT NULL,
  `total` decimal(12,2) DEFAULT NULL,
  `reservation_customerId` int(10) unsigned NOT NULL,
  `reservation_details` varchar(255) DEFAULT NULL,
  `reservation_amenityId` int(10) unsigned DEFAULT NULL,
  PRIMARY KEY (`room_reservationId`),
  KEY `fk_reservation_customerId` (`reservation_customerId`),
  KEY `fk_reservation_roomId` (`reservation_roomId`),
  KEY `fk_amenities_idx` (`reservation_amenityId`),
  CONSTRAINT `fk_amenities` FOREIGN KEY (`reservation_amenityId`) REFERENCES `amenity` (`amenityId`),
  CONSTRAINT `fk_reservation_customerId` FOREIGN KEY (`reservation_customerId`) REFERENCES `customer` (`customerId`),
  CONSTRAINT `fk_reservation_roomId` FOREIGN KEY (`reservation_roomId`) REFERENCES `room` (`roomId`)
) ENGINE=InnoDB AUTO_INCREMENT=315 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roomreservation`
--

LOCK TABLES `roomreservation` WRITE;
/*!40000 ALTER TABLE `roomreservation` DISABLE KEYS */;
INSERT INTO `roomreservation` VALUES (289,2,'2019-11-11','2019-11-11',56.00,4,'Your ID is: 4',NULL),(290,14,'2019-10-10','2019-10-26',3845.00,4,'Your ID is: 4\nHotel: Hotel 1, room id and room number: [ 14, Room 303 ] , customer: Ermidis, checkin: 2019-10-10, reserved for 16 nights, total price: 3845.0 $, \nRefund if cancelled: true',NULL),(291,3,'2019-10-10','2019-10-26',1836.00,5,'Your ID is: 5\nHotel: Hotel 1, room id and room number: [ 3, Room 102 ], customer: Messi, checkin: 2019-10-10, reserved for 16 nights, total price: 1836.0 $, \nRefund if cancelled: true',NULL),(294,3,'2019-10-27','2019-10-27',128.00,6,'Your ID is: 6\nHotel: Hotel 1, room id and room number: [ 3, Room 102 ], customer: Rmds, checkin: 2019-10-27, reserved for 0 nights, total price: 128.0 $, \nRefund if cancelled: true',NULL);
/*!40000 ALTER TABLE `roomreservation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roomtype`
--

DROP TABLE IF EXISTS `roomtype`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `roomtype` (
  `room_typeId` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `room_type` varchar(255) NOT NULL,
  `quantityId` int(11) DEFAULT NULL,
  PRIMARY KEY (`room_typeId`),
  KEY `room_typeid` (`room_typeId`),
  KEY `fk_quantity_idx` (`quantityId`),
  CONSTRAINT `fk_quantity` FOREIGN KEY (`quantityId`) REFERENCES `quantity` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roomtype`
--

LOCK TABLES `roomtype` WRITE;
/*!40000 ALTER TABLE `roomtype` DISABLE KEYS */;
INSERT INTO `roomtype` VALUES (1,60,'Single Room',1),(2,120,'Double Room',2),(3,180,'Family Room',3),(4,300,'Suite',4);
/*!40000 ALTER TABLE `roomtype` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-08-22 16:06:01

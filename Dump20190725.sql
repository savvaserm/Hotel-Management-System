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
  PRIMARY KEY (`amenityId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `amenity`
--

LOCK TABLES `amenity` WRITE;
/*!40000 ALTER TABLE `amenity` DISABLE KEYS */;
INSERT INTO `amenity` VALUES (1,'Gym',5),(2,'Pool',5),(3,'Spa-Sauna',10),(4,'Minibar',5),(5,'Breakfast',10);
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
INSERT INTO `customer` VALUES (4,'Savvas','Ermidis','savvas@domain.com','savvas','$2a$10$EMl9mE78tzQA2Bp6UDN6QOeReM5BdHkzfZvRzlDLe2DRUs0YScJny','USER','NEW'),(5,'Lionel','Messi','leo@domain.com','messi','$2a$10$h0QpnJyQu9FQKR1.WJyU8eUgX347fTCDWNKZXpebsbfq43ol95RWi','USER','NEW'),(6,'Savvas','Rmds','ermidis@domain.com','ermidis','$2a$10$4YjCoxNyPFyYnLmW8U6Ucuq4jD6FEsgc9DZZXq4TF0DvzzkZKhN4m','USER','REGULAR');
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
INSERT INTO `employee` VALUES (1,'Employee1','Employee1','Reception',1,'16:00:00','08:00:00'),(2,'Employee2','Employee2','Chef',1,'16:00:00','08:00:00'),(3,'Employee3','Employee3','Security',1,'16:00:00','08:00:00'),(4,'Employee4','Employee4','Waiter',1,'16:00:00','08:00:00');
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
INSERT INTO `hibernate_sequence` VALUES (121),(121);
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
INSERT INTO `room` VALUES (1,'Room 100',1,1,0),(2,'Room 101',1,1,1),(3,'Room 102',1,2,1),(4,'Room 103',1,3,0),(5,'Room 104',1,3,1),(6,'Room 200',1,1,0),(7,'Room 201',1,1,0),(8,'Room 202',1,2,1),(9,'Room 203',1,3,1),(10,'Room 204',1,3,0),(11,'Room 300',1,1,0),(12,'Room 301',1,1,1),(13,'Room 302',1,3,0),(14,'Room 303',1,4,1),(15,'Room 304',1,4,1);
/*!40000 ALTER TABLE `room` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roomamenity`
--

DROP TABLE IF EXISTS `roomamenity`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `roomamenity` (
  `roomamenity_roomId` int(10) unsigned NOT NULL,
  `roomamenity_amenityId` int(10) unsigned NOT NULL,
  PRIMARY KEY (`roomamenity_roomId`,`roomamenity_amenityId`),
  KEY `fk_Amenity_AmenityID` (`roomamenity_amenityId`),
  CONSTRAINT `fk_Amenity_AmenityID` FOREIGN KEY (`roomamenity_amenityId`) REFERENCES `amenity` (`amenityId`),
  CONSTRAINT `fk_amenity_roomId` FOREIGN KEY (`roomamenity_roomId`) REFERENCES `room` (`roomId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roomamenity`
--

LOCK TABLES `roomamenity` WRITE;
/*!40000 ALTER TABLE `roomamenity` DISABLE KEYS */;
/*!40000 ALTER TABLE `roomamenity` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roomrating`
--

DROP TABLE IF EXISTS `roomrating`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `roomrating` (
  `roomratingId` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `rating` decimal(12,2) unsigned NOT NULL,
  `start_date` date NOT NULL,
  `end_date` date DEFAULT NULL,
  `roomrating_roomId` int(10) unsigned NOT NULL,
  `roomrating_customerId` int(10) unsigned NOT NULL,
  PRIMARY KEY (`roomratingId`),
  UNIQUE KEY `fk_roomrating_customerId` (`rating`,`roomrating_roomId`,`roomrating_customerId`),
  KEY `fk_roomrating_roomId` (`roomrating_roomId`),
  KEY `fk_roomrating_customerId_idx` (`roomrating_customerId`),
  CONSTRAINT `fk_roomrating_customerId` FOREIGN KEY (`roomrating_customerId`) REFERENCES `customer` (`customerId`),
  CONSTRAINT `fk_roomrating_roomId` FOREIGN KEY (`roomrating_roomId`) REFERENCES `room` (`roomId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roomrating`
--

LOCK TABLES `roomrating` WRITE;
/*!40000 ALTER TABLE `roomrating` DISABLE KEYS */;
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
  PRIMARY KEY (`room_reservationId`),
  KEY `fk_reservation_customerId` (`reservation_customerId`),
  KEY `fk_reservation_roomId` (`reservation_roomId`),
  CONSTRAINT `fk_reservation_customerId` FOREIGN KEY (`reservation_customerId`) REFERENCES `customer` (`customerId`),
  CONSTRAINT `fk_reservation_roomId` FOREIGN KEY (`reservation_roomId`) REFERENCES `room` (`roomId`)
) ENGINE=InnoDB AUTO_INCREMENT=121 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roomreservation`
--

LOCK TABLES `roomreservation` WRITE;
/*!40000 ALTER TABLE `roomreservation` DISABLE KEYS */;
INSERT INTO `roomreservation` VALUES (92,7,'2019-10-15','2019-10-15',NULL,6,NULL),(95,10,'2019-10-15','2019-10-15',NULL,6,NULL),(97,11,'2019-10-15','2019-10-17',153.00,6,NULL),(98,1,'2019-10-10','2019-10-11',120.00,4,NULL),(101,4,'2019-10-10','2019-10-11',180.00,5,NULL),(107,13,'2019-10-23','2019-10-23',153.00,6,NULL),(120,6,'2019-10-26','2019-10-26',54.00,4,NULL);
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
  PRIMARY KEY (`room_typeId`),
  KEY `room_typeid` (`room_typeId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roomtype`
--

LOCK TABLES `roomtype` WRITE;
/*!40000 ALTER TABLE `roomtype` DISABLE KEYS */;
INSERT INTO `roomtype` VALUES (1,60,'Single Room'),(2,120,'Double Room'),(3,180,'Family Room'),(4,300,'Suite');
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

-- Dump completed on 2019-07-25 14:57:48

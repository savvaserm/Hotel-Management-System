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
  PRIMARY KEY (`amenityId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `amenity`
--

LOCK TABLES `amenity` WRITE;
/*!40000 ALTER TABLE `amenity` DISABLE KEYS */;
INSERT INTO `amenity` VALUES (1,'Gym'),(2,'Pool'),(3,'Spa-Sauna'),(4,'Minibar'),(5,'Room service');
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
  `firstname` varchar(45) NOT NULL,
  `lastname` varchar(45) NOT NULL,
  `email` varchar(60) DEFAULT NULL,
  `username` varchar(45) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(255) DEFAULT NULL,
  `RoomRating_RoomRatingID` int(10) unsigned DEFAULT NULL,
  PRIMARY KEY (`customerId`),
  KEY `fk_Customer_RoomRating` (`RoomRating_RoomRatingID`),
  CONSTRAINT `fk_Customer_RoomRating` FOREIGN KEY (`RoomRating_RoomRatingID`) REFERENCES `roomrating` (`RoomRatingID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer`
--

LOCK TABLES `customer` WRITE;
/*!40000 ALTER TABLE `customer` DISABLE KEYS */;
INSERT INTO `customer` VALUES (4,'Savvas','Ermidis','savvas@domain.com','savvas','$2a$10$EMl9mE78tzQA2Bp6UDN6QOeReM5BdHkzfZvRzlDLe2DRUs0YScJny','USER',NULL),(5,'Lionel','Messi','leo@domain.com','messi','$2a$10$h0QpnJyQu9FQKR1.WJyU8eUgX347fTCDWNKZXpebsbfq43ol95RWi','USER',NULL);
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
  KEY `fk_Hotel_HotelID1` (`emp_hotelId`),
  CONSTRAINT `fk_Hotel_HotelID1` FOREIGN KEY (`emp_hotelId`) REFERENCES `hotel` (`hotelId`)
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
INSERT INTO `hibernate_sequence` VALUES (6),(6);
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
  `room_number` int(11) DEFAULT NULL,
  `room_hotelid` int(10) unsigned NOT NULL,
  `room_room_typeid` int(10) NOT NULL,
  `room_type` int(11) DEFAULT NULL,
  PRIMARY KEY (`roomId`),
  KEY `fk_room_room_typeid_idx` (`room_room_typeid`),
  KEY `fk_room_hotelid` (`room_hotelid`),
  CONSTRAINT `fk_room_hotelid` FOREIGN KEY (`room_hotelid`) REFERENCES `hotel` (`hotelId`),
  CONSTRAINT `fk_room_room_typeid` FOREIGN KEY (`room_room_typeid`) REFERENCES `roomtype` (`room_typeid`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `room`
--

LOCK TABLES `room` WRITE;
/*!40000 ALTER TABLE `room` DISABLE KEYS */;
INSERT INTO `room` VALUES (1,100,1,1,NULL),(2,101,1,1,NULL),(3,102,1,2,NULL),(4,103,1,3,NULL),(5,104,1,3,NULL),(6,200,1,1,NULL),(7,201,1,1,NULL),(8,202,1,2,NULL),(9,203,1,3,NULL),(10,204,1,3,NULL),(11,300,1,1,NULL),(12,301,1,1,NULL),(13,302,1,3,NULL),(14,303,1,4,NULL),(15,304,1,4,NULL);
/*!40000 ALTER TABLE `room` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roomamenity`
--

DROP TABLE IF EXISTS `roomamenity`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `roomamenity` (
  `Room_RoomID` int(10) unsigned NOT NULL,
  `Amenity_AmenityID` int(10) unsigned NOT NULL,
  PRIMARY KEY (`Room_RoomID`,`Amenity_AmenityID`),
  KEY `fk_Amenity_AmenityID` (`Amenity_AmenityID`),
  CONSTRAINT `fk_Amenity_AmenityID` FOREIGN KEY (`Amenity_AmenityID`) REFERENCES `amenity` (`amenityId`),
  CONSTRAINT `fk_Room_RoomID1` FOREIGN KEY (`Room_RoomID`) REFERENCES `room` (`roomId`)
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
  `RoomRatingID` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `Rate` decimal(12,2) unsigned NOT NULL,
  `StartDate` date NOT NULL,
  `EndDate` date DEFAULT NULL,
  `Room_RoomID` int(10) unsigned NOT NULL,
  PRIMARY KEY (`RoomRatingID`),
  KEY `fk_Room_RoomID2` (`Room_RoomID`),
  CONSTRAINT `fk_Room_RoomID2` FOREIGN KEY (`Room_RoomID`) REFERENCES `room` (`roomId`)
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
  `RoomReservationID` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `Room_RoomID` int(10) unsigned NOT NULL,
  `StartDate` date NOT NULL,
  `EndDate` date NOT NULL,
  `Total` decimal(12,2) DEFAULT NULL,
  `Customer_CustomerID` int(10) unsigned NOT NULL,
  `ReservationDetails` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`RoomReservationID`),
  KEY `fk_Room_RoomID` (`Room_RoomID`),
  KEY `fk_Customer_CustomerID` (`Customer_CustomerID`),
  CONSTRAINT `fk_Room_RoomID` FOREIGN KEY (`Room_RoomID`) REFERENCES `room` (`roomId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roomreservation`
--

LOCK TABLES `roomreservation` WRITE;
/*!40000 ALTER TABLE `roomreservation` DISABLE KEYS */;
/*!40000 ALTER TABLE `roomreservation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roomtype`
--

DROP TABLE IF EXISTS `roomtype`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `roomtype` (
  `room_typeid` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `room_type` enum('Single Room','Double Room','Family Room','Suite') NOT NULL,
  PRIMARY KEY (`room_typeid`),
  KEY `room_typeid` (`room_typeid`)
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

-- Dump completed on 2019-07-09 15:05:45

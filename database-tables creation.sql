drop database if exists HotelReservation;

create database HotelReservation;

use HotelReservation;

create table Hotel (
HotelID mediumint(10) unsigned not null auto_increment,
primary key (HotelID)
);

create table Employee (
EmployeeID bigint(20) unsigned not null auto_increment,
FirstName varchar(45) not null,
LastName varchar(45) not null,
primary key (EmployeeID)
);

create table HotelEmployee (
Hotel_HotelID mediumint(10) unsigned not null,
Employee_EmployeeID bigint(20) unsigned not null,
primary key (Hotel_HotelID, Employee_EmployeeID),
foreign key (Hotel_HotelID)
references Hotel (HotelID),
foreign key (Employee_EmployeeID)
references Employee (EmployeeID)
);

create table RoomType (
RoomTypeID smallint(10) unsigned not null auto_increment,
RoomType varchar(20) not null,
primary key (RoomTypeID)
);

create table RoomRate (
RoomRateID bigint(20) unsigned not null auto_increment,
Rate decimal(12,2) unsigned not null,
StartDate date not null,
EndDate date,
RoomType_RoomTypeID smallint(10) unsigned not null,
primary key (RoomRateID),
foreign key (RoomType_RoomTypeID)
references RoomType (RoomTypeID)
);

create table Room (
RoomID int(10) unsigned not null auto_increment,
RoomNumber smallint(10) unsigned not null,
RoomType_RoomTypeID smallint(10) unsigned not null,
Hotel_HotelID mediumint(10) unsigned not null,
primary key (RoomID),
foreign key (RoomType_RoomTypeID)
references RoomType (RoomTypeID),
foreign key (Hotel_HotelID)
references Hotel (HotelID)
);

create table Amenity (
AmenityID smallint(10) unsigned not null auto_increment,
AmenityName varchar(45),
primary key (AmenityID)
);

create table RoomAmenity (
Room_RoomID int(10) unsigned not null,
Amenity_AmenityID smallint(10) unsigned not null,
AmenityQuantity tinyint(5) unsigned not null,
primary key (Room_RoomID, Amenity_AmenityID),
foreign key (Room_RoomID)
references Room (RoomID),
foreign key (Amenity_AmenityID)
references Amenity (AmenityID)
);

create table AmenityRate (
AmenityRateID bigint(20) unsigned not null auto_increment,
Rate decimal(12,2) unsigned not null,
StartDate date not null,
EndDate date,
Amenity_AmenityID smallint(10) unsigned not null,
primary key (AmenityRateID),
foreign key (Amenity_AmenityID)
references Amenity (AmenityID)
);

create table Customer (
CustomerID bigint(20) unsigned not null auto_increment,
FirstName varchar(45) not null,
LastName varchar(45) not null,
Employee_EmployeeID bigint(20) unsigned,
primary key (CustomerID),
foreign key (Employee_EmployeeID)
references Employee (EmployeeID)
);

create table Reservation (
ReservationID bigint(20) unsigned not null auto_increment,
Customer_CustomerID bigint(20) unsigned not null,
Total decimal(12,2) unsigned,
primary key (ReservationID),
foreign key (Customer_CustomerID)
references Customer (CustomerID)
);

create table RoomReservation (
RoomReservationID bigint(20) unsigned not null auto_increment,
Room_RoomID int(10) unsigned not null,
Reservation_ReservationID bigint(20) unsigned not null,
StartDate date not null,
EndDate date,
primary key (RoomReservationID),
foreign key (Room_RoomID)
references Room (RoomID),
foreign key (Reservation_ReservationID)
references Reservation (ReservationID)
);

create table RoomReservationGuest (
Guest_GuestID bigint(20) unsigned not null,
RoomReservation_RoomReservationID bigint(20) unsigned not null,
primary key (Guest_GuestID, RoomReservation_RoomReservationID),
foreign key (Guest_GuestID)
references Guest (GuestID),
foreign key (RoomReservation_RoomReservationID)
references RoomReservation (RoomReservationID)
);

create table ReservationDetail (
ReservationDetailID bigint(20) unsigned not null auto_increment,
Reservation_ReservationID bigint(20) unsigned not null,
RoomReservation_RoomReservationID bigint(20) unsigned not null,
RoomReservationAddOn_RoomReservationAddOnID bigint(20) unsigned,
Description varchar(45),
Rate decimal(12,2) unsigned not null,
primary key (ReservationDetailID),
foreign key (Reservation_ReservationID)
references Reservation (ReservationID),
foreign key (RoomReservation_RoomReservationID)
references RoomReservation (RoomReservationID),
foreign key (RoomReservationAddOn_RoomReservationAddOnID)
references RoomReservationAddOn (RoomReservationAddOnID)
);

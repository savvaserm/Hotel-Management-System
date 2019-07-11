package com.app.util;

public class NoAvailableRoomsException extends Exception{
    public NoAvailableRoomsException(){
        super("No available rooms!");
    }
}

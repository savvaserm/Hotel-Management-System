package com.app.util;

public class NoAvailableRoomsException extends RuntimeException{
    public NoAvailableRoomsException(final String message){
        super(message);
    }
}

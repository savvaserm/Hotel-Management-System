package com.app.util;

public class CheckinBeforeCurrentDateException extends RuntimeException{
    public CheckinBeforeCurrentDateException() {
        super("Checkin cannot be before current date!");
    }
}

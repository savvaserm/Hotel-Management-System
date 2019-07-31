package com.app.util;

public class CheckinAfterCheckoutException extends RuntimeException{
    public CheckinAfterCheckoutException() {
        super("Checkin date must be before checkout date");
    }
}

package com.app.util;

public class UserAlreadyExistsException extends RuntimeException {

    public UserAlreadyExistsException(final String message){
        super(message);
    }
}

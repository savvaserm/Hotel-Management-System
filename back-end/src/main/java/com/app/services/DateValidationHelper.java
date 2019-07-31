package com.app.services;

import com.app.util.CheckinAfterCheckoutException;
import com.app.util.CheckinBeforeCurrentDateException;

import java.time.LocalDate;

public class DateValidationHelper {
    public static void dateValidation(LocalDate checkin, LocalDate checkout) {
        if (checkin.isAfter(checkout)) {
            throw new CheckinAfterCheckoutException();
        }
    }

    public static void currentDateValidation(LocalDate localDate, LocalDate checkin) {
        if (checkin.isBefore(localDate)) {
            throw new CheckinBeforeCurrentDateException();
        }
    }
}

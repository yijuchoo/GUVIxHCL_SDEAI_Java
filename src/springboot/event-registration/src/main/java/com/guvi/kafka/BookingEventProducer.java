package com.guvi.kafka;

import com.guvi.model.Booking;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Component;

import java.time.Instant;

/*
* eventId, bookingId, userId
* Key - eventId
* Value - BookingEvent
*/

@Component
public class BookingEventProducer {
    private final KafkaTemplate<String, BookingEvent> kafkaTemplate;

    // Constructor
    public BookingEventProducer(KafkaTemplate<String, BookingEvent> kafkaTemplate) {
        this.kafkaTemplate = kafkaTemplate;
    }

    // publish the booking confirmation
    /*
    * Purpose: publish the booking confirmation
    * Publish BOOKING_CONFIRMED events
    */

    public void publishBookingConfirmation(Booking booking) {
         BookingEvent payload = new BookingEvent(
                 BookingEventType.BOOKING_CONFIRMED.name(),
                 booking.getEventId(),
                 booking.getId(),
                 booking.getUserId(),
                 booking.getNumberOfSeats(),
                 Instant.now()
         );

    }
}

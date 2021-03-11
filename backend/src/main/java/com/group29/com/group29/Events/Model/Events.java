package com.group29.com.group29.Events.Model;

import com.fasterxml.jackson.annotation.JsonProperty;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;

import java.util.Date;
import java.time.LocalTime;
import javax.persistence.GenerationType;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import org.hibernate.annotations.GenericGenerator;

@Entity
@Table(name = "events")
public class Events {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long eventID;

    @NotBlank
    private Long userID;
    
    @NotBlank
    @Size(max = 50)
    private String Organisation;
    
    @NotBlank
    @Size(max = 70)
    private String Location;

    @NotBlank
    private String Details;

    @NotBlank
    @Size(max = 10)
    // Date Format DD/MM/YYYY (incld. slashes)
    private String Date;
    
    @NotBlank
    @Size(max = 8)
    // XX:XX am or pm 
    private String Time;
    
    @NotBlank
    private String EventImage;

    public Events() {
    }

    public Events(Long eventID, Long userID, String Organisation, String Location, String Details, String Date, String Time, String EventImage) {
        this.eventID = eventID;
        this.userID = userID;
        this.Organisation = Organisation;
        this.Location = Location;
        this.Details = Details;
        this.Date = Date;
        this.Time = Time;
        this.EventImage = EventImage;
    }
    
    public Long getEventID() {
        return eventID;
    }

    public void setEventID(Long eventID) {
        this.eventID = eventID;
    }

    public Long getUserID() {
        return userID;
    }

    public void setUserID(Long userID) {
        this.userID = userID;
    }

    public String getOrganisation() {
        return Organisation;
    }

    public void setOrganisation(String Organisation) {
        this.Organisation = Organisation;
    }

    public String getLocation() {
        return Location;
    }

    public void setLocation(String Location) {
        this.Location = Location;
    }

    public String getDetails() {
        return Details;
    }

    public void setDetails(String Details) {
        this.Details = Details;
    }

    public String getDate() {
        return Date;
    }

    public void setDate(String Date) {
        this.Date = Date;
    }

    public String getTime() {
        return Time;
    }

    public void setTime(String Time) {
        this.Time = Time;
    }

    public String getEventImage() {
        return EventImage;
    }

    public void setEventImage(String EventImage) {
        this.EventImage = EventImage;
    }

}
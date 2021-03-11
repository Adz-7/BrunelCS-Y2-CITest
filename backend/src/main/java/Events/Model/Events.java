package Events.Model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;

import java.util.Date;
import java.time.LocalTime;
import javax.persistence.GenerationType;

import org.hibernate.annotations.GenericGenerator;

@Entity
@Table(name = "events")
public class Events {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long eventID;

    private Long userID;
    
    private String Organisation;
    
    private String Location;

    private String Details;

    private Date Date;
    
    private LocalTime Time;
    
    private String EventImage;

    public Events() {
    }

    public Events(Long eventID, Long userID, String Organisation, String Location, String Details, Date Date, LocalTime Time, String EventImage) {
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

    public Date getDate() {
        return Date;
    }

    public void setDate(Date Date) {
        this.Date = Date;
    }

    public LocalTime getTime() {
        return Time;
    }

    public void setTime(LocalTime Time) {
        this.Time = Time;
    }

    public String getEventImage() {
        return EventImage;
    }

    public void setEventImage(String EventImage) {
        this.EventImage = EventImage;
    }

}
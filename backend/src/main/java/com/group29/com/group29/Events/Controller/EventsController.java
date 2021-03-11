/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.group29.com.group29.Events.Controller;

import com.group29.com.group29.Events.Model.Events;
import com.group29.com.group29.Events.Repo.Repo;

import com.group29.com.group29.Events.Resource.NotFound;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import javax.validation.Valid;
import java.util.List;


/**
 *
 * @author 44730
 */

@RestController
public class EventsController {
    @Autowired
    Repo eventsRepository;

    // Get All Events
    @GetMapping("/api/events")
    public List<Events> getAllEvents() {
        return eventsRepository.findAll();
    }

    // Create a new Event
    @PostMapping("/api/events")
    public Events createEvent(@Valid @RequestBody Events body) {
    	return eventsRepository.save(body);
    }

    // Get a Single Event
    @GetMapping("/api/events/{id}")
    public Events getEventById(@PathVariable(value = "id") Long textId) {
        return eventsRepository.findById(textId)
                .orElseThrow(() -> new NotFound("Event", "id", textId));
    }
    
    // Delete a Event
    @DeleteMapping("/api/events/{id}")
    public ResponseEntity<?> deleteEvent(@PathVariable(value = "id") Long textId) {
        Events text = eventsRepository.findById(textId)
                .orElseThrow(() -> new NotFound("Event", "id", textId));

        eventsRepository.delete(text);

        return ResponseEntity.ok().build();
    }

}

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.group29.com.group29.Events.Repo;

import com.group29.com.group29.Events.Model.Events;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


/**
 *
 * @author 44730
 */

@Repository
public interface Repo extends JpaRepository<Events,Long> {
    
}

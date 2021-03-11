import React from 'react'
import EventsCard from './EventsCard'

function EventsCardSct() {
    return (
        <div className="eventcardSct">
            <EventsCard
            title = 'Why Volunteer?'
            imageUrl= 'https://images.unsplash.com/photo-1593113630400-ea4288922497?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
            body = 'Become a volunteer and be the change you want to see in the world. Volunteering is crucial for our communities. It allows you to connect to your communitiy. Click learn more to why volunteering is important.'
            button = "Learn More"
            />
            <EventsCard
             title = 'Donations'
             imageUrl= 'https://images.pexels.com/photos/1125850/pexels-photo-1125850.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
             body = '“Giving is not just about making a donation. It is about making a difference.” Kathy Calvin. Our mission is to make a difference by helping the poor children get the education they deserve. Click donate to make a change to a childs life.  '
             button = "Learn More"
            />
            <EventsCard
             title = 'Statistics'
             imageUrl= 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
             body = "Every child has the right to education. Millions of children are not learning because of poverty, discrimination and many more. Click learn more to find out more about how many children are unable to receive the education they deserve. "
             button = "Learn More"
            />
        </div>
    )
}

export default EventsCardSct
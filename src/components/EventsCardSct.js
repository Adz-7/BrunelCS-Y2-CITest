import React from 'react'
import EventsCard from './EventsCard'

function EventsCardSct() {
    return (
        <div className="eventcardSct">
            <EventsCard
            title = 'Swim Serpentine'
            imageUrl= 'https://images.unsplash.com/photo-1593113630400-ea4288922497?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
            body = 'Swim Serpentine is a one-day open water swimming festival staged in the heart of London. Thousands of swimmers will participate in events that include. The One-Mile Swim takes place on the same course as the London 2021 Marathon Swimming Olympic event, with one full lap around the Serpentine making up the one-mile swim. All your needs are catered for with heated changing rooms, dunk zone, pontoon start and finish, full water safety crew, hot tubs and exhibition area.'
            button = "Learn More"
            modaltext = "Location: London Date: Time:"
            />
            <EventsCard
             title = 'London to Brighton Cycle'
             imageUrl= 'https://images.pexels.com/photos/1125850/pexels-photo-1125850.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
             body = '“Cycle 55 miles starting from Clapham Common in South London, to the seaside city of Brighton. This ride will take you through some stunning countryside all the way down to the South coast. The registration cost of £55 per person includes a fully supported ride and a fantastic lunch at the half way point and a medal at the finish on the sea front in Brighton! Get in quick because the spaces in the race are filling up very fast.  '
             button = "Learn More"
             modaltext = "Location: Clapham Common Date: Time:"
            />
            <EventsCard
             title = 'Three Peaks Challenge'
             imageUrl= 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
             body = "The Yorkshire Three Peaks Challenge is a 12 hour trek that takes on the peaks of Pen-y-ghent, Whernside and Ingleborough. These peaks form part of the Pennine range, and encircle the head of the valley of the River Ribble, in the Yorkshire Dales National Park. The route is 24 miles (38.6km), and includes 1585m of ascent. Bookings are welcome for individuals and groups of any size. Groups are usually about ten people, each with a mountain leader to guide and navigate as required."
             button = "Learn More"
             modaltext = "Location: Yorkshire Date: Time:"
            />
        </div>
    )
}

export default EventsCardSct
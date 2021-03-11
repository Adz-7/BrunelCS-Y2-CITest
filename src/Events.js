import React from 'react'; 
import  "./components/Nav"
import  "./components/Footer"
import "./styles/App.css"
import  './components/LandingPage';
import  "./styles/MainSearch.css"
import EventsCard from "./components/EventsCard"
import EventsCardSct from "./components/EventsCardSct"

export default class Events extends React.Component { 
  constructor(props) {
    super(props)

    this.state = {
        organisatoin: "",
        location: "",
        fee: "",
        startdate: "",


    }
    this.handleSubmit=this.handleSubmit.bind(this)
}

firsthandler = (event) => {
    this.setState({
        organisation: event.target.value
    })
}
lasthandler = (event) => {
    this.setState({
        location: event.target.value
    })
}
passwordhandler = (event) => {
    this.setState({
        fee: event.target.value
    })
}

genderhandler = (event) => {
    this.setState({
        startdate: event.target.value
    })
}

handleSubmit = (event) => {
    alert(`${this.state.organisation} ${this.state.location}  Registered Successfully !!!!`)
    console.log(this.state);
    this.setState({
        organisation: "",
        location: "",
        fee: '',
        startdate: "",
    })
 event.preventDefault()
    
}
      render() {
        return (
          <events>
            <div>
            <img src="img/event9img.jpg" alt="Eventimg" className="hero-2" />
            </div>
            <div className="box">
            <h1 className="titleDescription">
                Get Involved!
            </h1>
            <div className="text4">
                   <p className="text5" >Every day, our dedicated staff are on the ground providing life-saving support and long-term solutions for vulnerable communities. We need committed help to continue this work!</p>
                   <p className="text6"> At the moment, for obvious reasons, all of our events have moved online. But don't worry, we still have lots of things going on that you can get involved with. Check out our events below.</p>
       </div>
       </div> 
       <div className="cardSection">
            <EventsCard
            title = 'Swim Serpentine'
            imageUrl= 'https://images.unsplash.com/photo-1593113630400-ea4288922497?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
            body = 'Swim Serpentine is a one-day open water swimming festival staged in the heart of London. Thousands of swimmers will participate in events that include. The One-Mile Swim takes place on the same course as the London 2012 Marathon Swimming Olympic event, with one full lap around the Serpentine making up the one-mile swim. All your needs are catered for with heated changing rooms, dunk zone, pontoon start and finish, full water safety crew, hot tubs and exhibition area.'
            button = "Learn More"
            modaltext = "Some Text"
            />
            <EventsCard
             title = 'London to Brighton Cycle'
             imageUrl= 'https://images.pexels.com/photos/1125850/pexels-photo-1125850.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
             body = '“Cycle 55 miles starting from Clapham Common in South London, to the seaside city of Brighton. This ride will take you through some stunning countryside all the way down to the South coast. The registration cost of £55 per person includes a fully supported ride and a fantastic lunch at the half way point and a medal at the finish on the sea front in Brighton! Get in quick because the spaces in the race are filling up very fast.  '
             button = "Learn More"
             modaltext = "Some Text"
            />
            <EventsCard
             title = 'Three Peaks Challenge'
             imageUrl= 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
             body = "The Yorkshire Three Peaks Challenge is a 12 hour trek that takes on the peaks of Pen-y-ghent, Whernside and Ingleborough. These peaks form part of the Pennine range, and encircle the head of the valley of the River Ribble, in the Yorkshire Dales National Park. The route is 24 miles (38.6km), and includes 1585m (5200ft) of ascent.Each year, there are several Yorkshire Three Peaks Challenge events which are open to all. Bookings are welcome for individuals and groups of any size and can be made through the Three Peaks website. Groups are usually about ten people, each with a mountain leader to guide and navigate as required. This event is booked and organised through The Three Peaks website."
             button = "Learn More"
             modaltext = "Some Text"
            />
        </div>
        <div>

<form onSubmit={this.handleSubmit}>
    <h1>Event Registration</h1>
    <label>Organisation :</label> <input type="text" value={this.state.organisation} onChange={this.firsthandler} placeholder="Organisation..." /><br />
    <label>Location :</label> <input type="text" value={this.state.location} onChange={this.lasthandler} placeholder="Location..." /><br />
    <label>Fee :</label> <input type="fee" value={this.state.fee} onChange={this.passwordhandler} placeholder="Fee..." /><br />
    <label>Start Date :</label><select onChange={this.genderhandler} defaultValue="Start Date">
        <option defaultValue>Select StartDate</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
    </select><br />
    <input type="submit" value="Submit" />
</form>

</div>
    )
          </events>
        );
      }
    }
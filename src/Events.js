import React,{useState} from 'react'; 
import  "./components/Nav"
import  "./components/Footer"
import "./styles/App.css"
import  './components/LandingPage';
import  "./styles/MainSearch.css"
import EventsCard from "./components/EventsCard"
import EventsCardSct from "./components/EventsCardSct"
import Calendar from 'react-calendar';

export default class Events extends React.Component { 

  constructor(props) {
    super(props)

    this.state = {
        organisation: "",
        location: "",
        details: "",
        date: "",
        time: "",

        // Card 1 states
        card1title: 'Swim Serpentine',
        card1imageurl: 'https://images.unsplash.com/photo-1593113630400-ea4288922497?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        card1body:  "Swim Serpentine is a one-day open water swimming festival staged in the heart of London. Thousands of swimmers will participate in events that include. The One-Mile Swim takes place on the same course as the London 2021 Marathon Swimming Olympic event, with one full lap around the Serpentine making up the one-mile swim. All your needs are catered for with heated changing rooms, dunk zone, pontoon start and finish, full water safety crew, hot tubs and exhibition area.",
        card1location: "Location",
        card1date: "03/02/2021",
        card1time: "16:01",
        // Card 2 states
        card2title: 'London to Brighton Cycle',
        card2imageurl: 'https://images.pexels.com/photos/1125850/pexels-photo-1125850.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        card2body:  '“Cycle 55 miles starting from Clapham Common in South London, to the seaside city of Brighton. This ride will take you through some stunning countryside all the way down to the South coast. The registration cost of £55 per person includes a fully supported ride and a fantastic lunch at the half way point and a medal at the finish on the sea front in Brighton! Get in quick because the spaces in the race are filling up very fast.  ',
        card2location: "Location",
        card2date: "03/02/2021",
        card2time: "16:01",

        // Card 3 states
        card3title: "Three Peaks Challenge",
        card3imageurl: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        card3body:  "The Yorkshire Three Peaks Challenge is a 12 hour trek that takes on the peaks of Pen-y-ghent, Whernside and Ingleborough. These peaks form part of the Pennine range, and encircle the head of the valley of the River Ribble, in the Yorkshire Dales National Park. The route is 24 miles (38.6km), and includes 1585m of ascent. Bookings are welcome for individuals and groups of any size. Groups are usually about ten people, each with a mountain leader to guide and navigate as required.",
        card3location: "Location",
        card3date: "03/02/2021",
        card3time: "16:01",
    }
    

    this.handleSubmit=this.handleSubmit.bind(this)
}

organisationhandler = (event) => {
    this.setState({
        organisation: event.target.value
    })
}
locationhandler = (event) => {
    this.setState({
        location: event.target.value
    })
}
feehandler = (event) => {
    this.setState({
        details: event.target.value
    })
}

datehandler = (event) => {
    this.setState({
        date: event.target.value
    })
}

timehandler = (event) => {
  this.setState({
      time: event.target.value
  })
}

handleSubmit = (event) => {
    alert(`${this.state.organisation} ${this.state.location}  Event Created Successfully !`)
    console.log(this.state);
    this.setState({
        organisation: "",
        location: "",
        details: '',
        date: "",
        time: "",
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
                title = {this.state.card1title}
                imageUrl= {this.state.card1imageurl}
                body = {this.state.card1body}
                button = "Learn More"
                location = {this.state.card1location}
                date = {this.state.card1date}
                time = {this.state.card1time}
            />
            <EventsCard
                title = {this.state.card2title}
                imageUrl= {this.state.card2imageurl}
                body = {this.state.card2body}
                button = "Learn More"
                location = {this.state.card2location}
                date = {this.state.card2date}
                time = {this.state.card2time}
            />
            <EventsCard
                title = {this.state.card3title}
                imageUrl= {this.state.card3imageurl}
                body = {this.state.card3body}
                button = "Learn More"
                location = {this.state.card3location}
                date = {this.state.card3date}
                time = {this.state.card3time}
            />
        </div>
        <div>

        <div className="box1">
<form onSubmit={this.handleSubmit}>
    <h1 className="titleDescription2">
        Event Registration
        </h1>
    <label>Organisation :</label> <input type="text" value={this.state.organisation} onChange={this.organisationthandler} placeholder="Organisation..." /><br />
    <label>Location :</label> <input type="text" value={this.state.location} onChange={this.locationhandler} placeholder="Location..." /><br />
    <label>Details :</label> <input type="details" value={this.state.fee} onChange={this.detailshandler} placeholder="Details..." /><br />
    <label>Date :</label> <input type="date" value={this.state.Date} onChange={this.Datehandler} placeholder="Date" /><br />
    <label>Time :</label> <input type="time" value={this.state.Time} onChange={this.Datehandler} placeholder="Time" /><br />      
<br />
    
    <input type="submit" value="Submit" />
</form>

</div>
</div>
    
          </events>
        );
      }
    }
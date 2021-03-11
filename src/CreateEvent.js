import React from 'react'; 
import  "./components/Nav"
import  "./components/Footer"
import "./styles/App.css"
import  './components/LandingPage';
import  "./styles/MainSearch.css"


export default class CreateEvent extends React.Component {
    state = {
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: ""
        
      };
    
      change = e => {
        this.props.onChange({ [e.target.name]: e.target.value });
        this.setState({
          [e.target.name]: e.target.value
        });
      };
    
      onSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state);
    };
    
      render() {
        return (
          <createvent>
            <div >
            <img src="img/event.png" alt="Eventimg" className="hero-2" />
            </div>
            <input className="Looking for"
              name="lookingfor" 
              placeholder="Looking for"
              value={this.state.lookingfor}
              onChange={e => this.change(e)}
            />
            <br />
            <input
              name="location"
              placeholder="Location"
              value={this.state.Location}
              onChange={e => this.change(e)}
            />
            <br />
            <input
              name="date"
              placeholder="Date"
              value={this.state.Date}
              onChange={e => this.change(e)}
            />
            <br />
            <input
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={e => this.change(e)}
            />
            <br />
            <input
              name="password"
              type="password"
              placeholder="Password"
              value={this.state.password}
              onChange={e => this.change(e)}
            />
              <br />
        <button onClick={e => this.onSubmit(e)}>Submit</button>
        {this.state.value}
        
          </createvent>
        );
      }
    }
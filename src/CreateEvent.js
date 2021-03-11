import React from 'react'; 
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import "./styles/App.css"
import LandingPage from './components/LandingPage';

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
            <input
              name="firstName"
              placeholder="First name"
              value={this.state.firstName}
              onChange={e => this.change(e)}
            />
            <br />
            <input
              name="lastName"
              placeholder="Last name"
              value={this.state.lastName}
              onChange={e => this.change(e)}
            />
            <br />
            <input
              name="username"
              placeholder="Username"
              value={this.state.username}
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
          </createvent>
        );
      }
    }
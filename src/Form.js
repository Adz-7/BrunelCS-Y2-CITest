import React from 'react'; 
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import "./styles/App.css"
import LandingPage from './components/LandingPage';

export default class Form extends React.Component {
    state = {
        Organisation: '',
        lastName: '',
        username: '',
        Location: '',
        password: '',
    };

    change = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onsubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state);
    };

    render() {
        return (
            <form className="form">
                <input 
                name="firstName"
                placeholder='First name' 
                value={this.state.firstName} 
                onChange={e => this.change(e)}
                />
                <br />
                <input 
                name="lastName"
                placeholder='Last name' 
                value={this.state.lastName} 
                onChange={e => this.change(e)}
                />
                <br />
                <input 
                name="username"
                type="password"
                placeholder='Username' 
                value={this.state.username} 
                onChange={e => this.change(e)}
                />
                <br />
                <input 
                name="email"
                placeholder='Email' 
                value={this.state.email} 
                onChange={e => this.change(e)}
                />
                <br />
                <input 
                name="firstName"
                placeholder='Password' 
                value={this.state.password} 
                onChange={e => this.change(e)}
                />
                <br />
                <button onClick={e => this.onsubmit(e)}></button>
            </form>
        );
    }
}


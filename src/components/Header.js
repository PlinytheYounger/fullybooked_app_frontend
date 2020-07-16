import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../css/main.css';

class Header extends Component {
    state = {
        user: [],
    }
    
    componentDidMount() {
        this.getUser();
    }
    
    getUser = () => {
        fetch('http://localhost:3000/users')
            .then(response => response.json())
            .then(json => this.setState({user: json}))
            .catch(error => console.log(error))
    }
    render() {
        
        return(
            <header>
                <div className="title">
                    <h1>Fully BOOKED.</h1>
                    <h3>Welcome, {this.state.user[1] && this.state.user[1].name}!</h3>
                    <nav>
                        <Link to="/" style={{ textDecoration: 'none'}}>
                            Home
                        </Link>
                        <Link to="/user/1" style={{ textDecoration: 'none'}}>
                            Profile
                        </Link>
                    </nav>
                </div>

                <div className="login-div">

                    <form>
                        <label htmlFor="email">Email: </label>
                        <input type="email" />
                        <label htmlFor="password">Password: </label>
                        <input type="password" />
                    </form>
                </div>
            </header>
        )
    }
}

export default Header;
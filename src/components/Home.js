import React, { Component } from 'react';
import '../css/main.css';
import {Link} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

class Home extends Component {
    state = {
        user: [],
        bookclubs: [],
        formInputs: {
            name: '',
            genre: ''
        }
    }
    
    componentDidMount() {
        this.getUser();
        this.getBookClubs();
    }
    
    getUser = () => {
        fetch('http://localhost:3000/users')
            .then(response => response.json())
            .then(json => this.setState({user: json}))
            .catch(error => console.log(error))
    }
    
    getBookClubs = () => {
        fetch('http://localhost:3000/bookclubs')
        .then(response => response.json())
        .then(json => this.setState({bookclubs: json}))
        .catch(error => console.log(error))
    }
    
    handleChange = (event) => {
        const updateInput = Object.assign(this.state.formInputs, {[event.target.id]: event.target.value})
        this.setState(updateInput)
    }
    
    handleSubmit = (event) => {
        event.preventDefault()
        fetch('http://localhost:3000/bookclubs', {
            body: JSON.stringify(this.state.formInputs),
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        })
        .then(createdBookclub => {
            return createdBookclub.json()
        })
        .then(jsonedBookclub => {
            this.setState({
                formInputs: {
                    name: '',
                    genre: ''
                },
                bookclubs: [jsonedBookclub, ...this.state.user[1].bookclubs]
            })
        })
    }

    render() {
        return(
            <div>
                <Header />
                <div className="mainHomeDiv">
                    <form className="bookclubName" onSubmit={this.handleSubmit}>
                        <h2>Create a Bookclub!</h2>
                        <label htmlFor="name">Name: </label>
                            <input type="text" id="name" value={this.state.formInputs.name} onChange={this.handleChange}/>
                        <label htmlFor="genre">Genre: </label>
                            <input type="text" id="genre" value={this.state.formInputs.genre} onChange={this.handleChange}/>
                        <input type="submit" />
                    </form>

                    <div className="userBookclubs">
                    <h2>Available Bookclubs</h2>
                    {this.state.bookclubs && this.state.bookclubs.map((bookclub, index) => {
                        return <ul>
                            <li>
                                <Link to={`/bookclub/${index}`}><h3 className="clubName">{bookclub.name}</h3></Link>
                            </li>
                            <li>
                                <h4>{bookclub.genre}</h4>
                            </li>
                        </ul>
                    })}
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Home;
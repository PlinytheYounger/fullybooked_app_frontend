import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import '../css/main.css';

class Bookclub extends Component {
    state = {
        user: [],
        bookclubs: [],
    }

    componentDidMount() {
        this.getBookClub();
    }

    getBookClub = () => {
        fetch(`http://localhost:3000/bookclubs`)
        .then(response => response.json())
        .then(json => this.setState({bookclubs: json}))
        .catch(error => console.log(error))
    }

    deleteBookclub = (id, index) => {
        console.log(id, index)
        fetch(`http://localhost:3000/bookclubs/${id}`, {
            method: 'DELETE'
            })
            .then(response => response)
            .then(data => {
                console.log(data)
                this.setState({
                    bookclubs: [
                        ...this.state.bookclubs.slice(0, index),
                        ...this.state.bookclubs.slice(index + 1)
                    ]
                })
            })
            .catch(err => console.log(err)) 
    }

    render() {
        let index = this.props.match.params.id;
        let bookclub = this.state.bookclubs[index];
        if (bookclub) {
            return(
                <div>
                    <Header />
    
                    <div className="bookclubContainer">
                        <div className="bookclubTitle">
                            <h1>{bookclub && bookclub.name}</h1>
                        </div>
    
                        <div className="bookclubBody">
                            <div className="bookclubUsersEvents">
                                <h2>Members</h2>
                                <ul>
                                {bookclub && bookclub.users.map(user => {
                                    return <li>{user.name}</li>
                                })}
                                </ul>
                                <h2>Upcoming Events</h2>
                                <ul>
                                    <li>
                                        July 11, 2020: Book Discussion - The Three Body Problem by Cixin Liu
                                    </li>
                                </ul>
                            </div>
    
                            <div className="bookclubPosts">
                                <h2>Posts</h2>
                                <ul>
                                    <li>Vote for our next read! Poll below - inputs due by Thursday!</li>
                                    <li>Please join us for our next book discussion! Location: Virtual. Date: Saturday, July 11</li>
                                </ul>
                            </div>
                        </div>
    
                        <div className="deleteButton">
                            <button onClick={() => this.deleteBookclub(bookclub.id, index)}>Delete Bookclub</button>
                        </div>
                    </div>
                    <Footer />
                </div>
            )
        }
        else {
            return(<div>
                <Header />
                <div>
                    <h2>This Bookclub no longer exists!</h2>
                </div>
                <Footer />
            </div>)
        }
    }
        }

export default Bookclub;
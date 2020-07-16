import React, { Component } from 'react';
import '../css/main.css';
import Header from './Header';
import Footer from './Footer';

class Profile extends Component {
    render() {
        return(
            <div>
                <Header />
                {/* <div className="profile-container">
                    <h2>Your Bookclubs</h2>
                        {this.props.user.bookclubs && this.props.user.bookclubs.map((bookclub, index) => {
                            return <ul>
                                <li>
                                    <h3 className="clubName">{bookclub.name}</h3>
                                </li>
                                <li>
                                    <h4>{bookclub.genre}</h4>
                                </li>
                            </ul>
                        })}
                </div> */}
                <Footer />
            </div>
        )
    }
}

export default Profile;
import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Footer extends Component {
    render() {
        return(
            <footer>
                <nav>
                    <ul>
                        <li>Github</li>
                        <li>Portfolio</li>
                        <li>Created by: Whitney Smith</li>
                        <li>Linkedin</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </footer>
        )
    }
}

export default Footer;
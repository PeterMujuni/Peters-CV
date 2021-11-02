import React from 'react';
import './Navbar.css';

class Navbar extends React.Component {
    render() {
        return(            
            <nav>
                <div className="logo">
                    <img src={this.props.portfolioLogo} alt="logo" />
                </div>
                
                <ul>
                    <li><img src={this.props.linkedin} alt="Linkedin" /></li>
                    <li><img src={this.props.github} alt="Github" /></li>
                </ul>
            </nav>           
        )
    }
}

export default Navbar;
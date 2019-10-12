import React from 'react';
import { fab } from '@fortawesome/free-brands-svg-icons';
import PropTypes from 'prop-types'

const Navbar = ({icon, title}) =>{
        return (
            <div>
                   <h1>
                       <i className=  {icon} /> {title}</h1>
            </div>
        );
}

Navbar.defaultProps = {
    title: 'Github Finder',
    icon: 'fab fa-github'
};

Navbar.propTypes = {
    title:PropTypes.string.isRequired,
    icon:PropTypes.string.isRequired
};

export default Navbar;

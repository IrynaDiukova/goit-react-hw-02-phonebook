import React from 'react';
import PropTypes from 'prop-types'

const ContactList = ({ contacts }) => {
    return (
      <ul>
        {contacts.map(({name}) => (
            <li name={name}>
                
            </li>
        ))}
       </ul>
    )
    
};

ContactList.propTypes = {
    contacts:PropTypes.arrayOf(PropTypes.exact({
        name: PropTypes.string.isRequired,
    })),
};

export default ContactList;